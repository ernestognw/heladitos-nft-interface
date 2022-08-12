import { FC, HTMLAttributes } from "react";
import Button from "@components/Button";

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Text: FC<Props> = ({ className, ...props }: Props) => {
  return (
    <div className={`p-10 ${className}`} {...props}>
      <h3 className="text-3xl font-bold mb-6">
        Transparency = Fair distribution
      </h3>
      <p className="mt-1">
        <span className="font-bold">Release date:</span> 1/07/2022
      </p>
      <p className="mt-1">
        <span className="font-bold">Total Supply:</span> 10,000
      </p>
      <p className="mt-1">
        <span className="font-bold">Limit per wallet:</span> 10 heladitos
      </p>
      <p className="mt-1">
        <span className="font-bold">Vault:</span> 4 for the team, 10 for
        giveaways
      </p>
      <p className="mt-1">
        <span className="font-bold">Price:</span> 0.03 ETH + (Gas * GasPrice)
      </p>
      <p className="mt-1">
        <span className="font-bold">Traits:</span> 200+
      </p>
      <p className="mt-1">
        <span className="font-bold">Technology:</span> ERC-721 Token Standard on
        the Ethereum Blockchain + IPFS upload on demand
      </p>
      <p className="mt-1">
        <span className="font-bold">Token URI:</span> Decentralized, uin256
        equivalent to an IPFS hash
      </p>
      <p className="mt-1">
        <span className="font-bold">Verified Smart Contract:</span> 0x23...123
      </p>
      <Button color="mango" className="mt-6">
        View in Etherscan
      </Button>
    </div>
  );
};

export default Text;
