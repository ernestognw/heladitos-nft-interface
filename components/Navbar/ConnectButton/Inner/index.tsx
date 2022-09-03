import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import Button from "@components/Button";

interface Props {
  account?: {
    address: string;
    balanceDecimals?: number;
    balanceFormatted?: string;
    balanceSymbol?: string;
    displayBalance?: string;
    displayName: string;
    ensAvatar?: string;
    ensName?: string;
    hasPendingTransactions: boolean;
  };
  chain?: {
    hasIcon: boolean;
    iconUrl?: string;
    iconBackground?: string;
    id: number;
    name?: string;
    unsupported?: boolean;
  };
  mounted: boolean;
  openAccountModal: () => void;
  openChainModal: () => void;
  openConnectModal: () => void;
  accountModalOpen: boolean;
  chainModalOpen: boolean;
  connectModalOpen: boolean;
}

const hiddenProps: DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> = {
  "aria-hidden": true,
  style: {
    opacity: 0,
    pointerEvents: "none",
    userSelect: "none",
  },
};

const Inner: FC<Props> = ({
  account,
  chain,
  mounted,
  openAccountModal,
  openChainModal,
  openConnectModal,
}) => {
  let content;

  if (!mounted || !account || !chain) {
    content = (
      <Button onClick={openConnectModal} color="mint" size="sm">
        Connect wallet
      </Button>
    );
  } else if (chain.unsupported) {
    content = (
      <Button onClick={openChainModal} color="mango" size="sm">
        Wrong network
      </Button>
    );
  } else {
    content = (
      <Button
        onClick={openAccountModal}
        color="mint"
        size="sm"
        className="flex"
      >
        {account.displayBalance ?? ""}
        {` ${account.displayName}`}
      </Button>
    );
  }

  return <div {...(!mounted && hiddenProps)}>{content}</div>;
};

export default Inner;
