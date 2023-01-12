import pinata from "@config/api/clients/ipfs";
import { handleRequest, Methods } from "@config/api/utils";
import { PinataMetadata } from "@pinata/sdk";
import type { NextApiRequest, NextApiResponse } from "next";
import { Readable } from "stream";
import IPFSHash from "ipfs-only-hash";
import capitalize from "capitalize";
import { CID } from "multiformats";
import { getCompletedTraits, getSvgFromQuery, getValidTraits } from "../render";
import { ApiError } from "@config/api/types";

interface IPFSFileResponse {
  hash: string;
  hexDigest: string;
}
export interface PinResponse {
  image: IPFSFileResponse;
  metadata: IPFSFileResponse;
}

interface ReadableWithIPFSPath extends Readable {
  /**
   * IPFS uploads need path in order to locate file.
   * If not set, it'll throw an invalid request error
   */
  path: string;
}

const toHexDigest = (source: string) =>
  Buffer.from(CID.parse(source).multihash.digest).toString("hex");

type Response = PinResponse | ApiError;

const handlePost = async (
  req: NextApiRequest,
  res: NextApiResponse<Response>
) => {
  const { body } = req;

  const mergedSvg = getSvgFromQuery(body);
  const imageStream = Readable.from(
    Buffer.from(mergedSvg)
  ) as ReadableWithIPFSPath;
  const imageHash = await IPFSHash.of(Buffer.from(mergedSvg));
  imageStream.path = imageHash;
  const traits = getCompletedTraits(getValidTraits(body));

  const pinataMetadata = {
    name: imageHash,
    keyvalues: traits,
  };

  const { IpfsHash: imageIpfsHash } = await pinata.pinFileToIPFS(imageStream, {
    /**
     * Explicit conversion to metadata is needed since there's no match between
     * the Pinata SDK types and the actual needed values
     * Remove when https://github.com/PinataCloud/Pinata-SDK/pull/116 is merged
     */
    pinataMetadata: pinataMetadata as unknown as PinataMetadata,
  });

  const metadata = {
    name: "Heladito",
    description:
      "A self-customized political ice cream accidentally dipped into the J-Chemical: An element capable of waking up people's intersectional awareness.",
    image: `ipfs://${imageIpfsHash}`,
    attributes: Object.entries(traits).map(([traitType, value]) => ({
      trait_type: capitalize.words(traitType.replace(/-/g, " ")),
      value: value,
    })),
  };

  const { IpfsHash: metadataIpfsHash } = await pinata.pinJSONToIPFS(metadata, {
    pinataMetadata: {
      name: `${imageHash} Metadata`,
    },
  });

  // Defensive assertion to check everything is correct with the hash calculation
  if (imageIpfsHash !== imageHash)
    throw new Error(`Invalid IPFS hash generation`);

  return res.status(200).json({
    image: {
      hash: imageIpfsHash,
      hexDigest: toHexDigest(imageIpfsHash),
    },
    metadata: {
      hash: metadataIpfsHash,
      hexDigest: toHexDigest(metadataIpfsHash),
    },
  });
};

const methods: Methods<Response> = {
  POST: handlePost,
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Response>) =>
  handleRequest(req, res, methods);

export default handler;
