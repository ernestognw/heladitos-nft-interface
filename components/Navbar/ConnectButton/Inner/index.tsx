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
  [key: string]: any;
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
      <Button onClick={openConnectModal} color="mint">
        Connect wallet
      </Button>
    );
  } else if (chain.unsupported) {
    content = (
      <Button onClick={openChainModal} color="orange-red">
        Wrong network
      </Button>
    );
  } else {
    content = (
      <div className="gap-3 flex">
        <Button
          onClick={openChainModal}
          className="flex items-center"
          color="mango"
          size="sm"
        >
          {chain.hasIcon && (
            <div
              style={{
                background: chain.iconBackground,
              }}
              className="overflow-hidden md:mr-2 h-4 w-4 rounded-[99999px]"
            >
              {chain.iconUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  alt={chain.name ?? "Chain icon"}
                  src={chain.iconUrl}
                  className="h-4 w-4"
                />
              )}
            </div>
          )}
          <span className="hidden md:block">{chain.name}</span>
        </Button>
        <Button
          onClick={openAccountModal}
          color="sky-blue"
          size="sm"
          className="flex"
        >
          {account.displayName}
          {account.displayBalance ? ` ${account.displayBalance}` : ""}
        </Button>
      </div>
    );
  }

  return <div {...(!mounted && hiddenProps)}>{content}</div>;
};

export default Inner;
