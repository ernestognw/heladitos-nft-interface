import { FC, useState } from "react";
import Display from "@views/create/components/Display";
import { SelectedTraits } from "@config/types";
import TraitRow from "./TraitRow";
import axios from "axios";
import Button from "@components/Button";
import { endpoints } from "@config/routes";
import ConnectButton from "@components/ConnectButton";
import { PinResponse } from "@pages/api/pin";
import { useContractWrite, usePrepareContractWrite, useAccount } from "wagmi";
import HeladitosABI from "@config/abis/Heladitos.json";
import { heladitos } from "@config/environment";
import { BigNumber } from "ethers";

interface Props {
  selectedTraits: SelectedTraits;
  onGoBack: <T>() => T | void;
  [key: string]: any;
}

const Confirm: FC<Props> = ({ selectedTraits, onGoBack }) => {
  const { address } = useAccount();

  const { config } = usePrepareContractWrite({
    addressOrName: heladitos.contract ?? "",
    contractInterface: HeladitosABI,
    functionName: "mint",
    args: [address, 0], // Token id should be overrode on the write() function. But is needed here :/
  });
  const { isLoading, write } = useContractWrite(config);
  const [uploading, setUploading] = useState(false);

  const uploadToIpfs = async () => {
    setUploading(true);
    const { data } = await axios.post<PinResponse>(endpoints.pin, {
      ...selectedTraits,
    });
    setUploading(false);
    await write?.({
      recklesslySetUnpreparedArgs: [
        address,
        BigNumber.from(`0x${data.metadata.hexDigest}`),
      ],
    });
  };

  const buttonMessage = () => {
    if (uploading) return "Uploading metadata...";
    if (isLoading) return "Waiting to sign transaction...";
    return "Mint now";
  };

  return (
    <>
      <div className="fixed inset-0 bg-gray-400 cursor-pointer" />
      <div className="inset-0">
        <div className="items-center justify-center flex pt-32 pb-16">
          <div className="bg-white p-8 ticket flex-col w-[400px] drop-shadow-md">
            <Button color="white" size="xs" className="mb-4" onClick={onGoBack}>
              Back to edit
            </Button>
            <Display
              selectedTraits={selectedTraits}
              size={200}
              className="shadow-none"
            />
            <h1 className="text-3xl font-bold mt-6">Summary</h1>
            {Object.entries(selectedTraits).map(([trait, value]) => (
              <TraitRow key={`${trait}-${value}`} trait={trait} value={value} />
            ))}
            <hr />
            <ConnectButton
              states={{
                connected: {
                  onClick: uploadToIpfs,
                  children: buttonMessage(),
                },
                connect: {
                  children: "Connect wallet to mint",
                },
                wrongNetwork: {
                  children: "Change to correct network",
                },
              }}
              className="w-full mt-4"
              color="mint"
              size="lg"
              disabled={uploading || isLoading}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirm;
