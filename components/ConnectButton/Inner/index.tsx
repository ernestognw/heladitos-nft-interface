/* eslint-disable react/no-children-prop */
import { ButtonHTMLAttributes, FC } from "react";
import Button from "@components/Button";
import { ConnectButtonRendererProps } from "@rainbow-me/rainbowkit/dist/components/ConnectButton/ConnectButtonRenderer";
import { Props as ButtonProps } from "@components/Button";

const hiddenProps: ButtonHTMLAttributes<HTMLButtonElement> = {
  "aria-hidden": true,
  style: {
    opacity: 0,
    pointerEvents: "none",
    userSelect: "none",
  },
};

export type States = {
  /**
   * Properties for the button when is not connected
   */
  connect?: Partial<ButtonProps>;
  /**
   * Properties for the button when is connected but not pointing to the correct network
   */
  wrongNetwork?: Partial<ButtonProps>;
  /**
   * Properties for the button when is connected and pointing to the correct network
   */
  connected?: Partial<ButtonProps>;
};

type Props = Parameters<ConnectButtonRendererProps["children"]>[0] & {
  allButtons: Partial<ButtonProps>;
  states?: States;
};

const Inner: FC<Props> = ({
  account,
  chain,
  mounted,
  openAccountModal,
  openChainModal,
  openConnectModal,
  states,
  allButtons,
}) => {
  let content;

  if (!mounted || !account || !chain) {
    content = (
      <Button
        {...(!mounted ? hiddenProps : {})}
        onClick={openConnectModal}
        color="mint"
        size="sm"
        children="Connect wallet"
        {...allButtons}
        {...states?.connect}
      />
    );
  } else if (chain.unsupported) {
    content = (
      <Button
        {...(!mounted ? hiddenProps : {})}
        onClick={openChainModal}
        color="mango"
        size="sm"
        children="Wrong network"
        {...allButtons}
        {...states?.wrongNetwork}
      />
    );
  } else {
    content = (
      <Button
        {...(!mounted ? hiddenProps : {})}
        onClick={openAccountModal}
        color="mint"
        size="sm"
        className="flex"
        children={`${account.displayBalance ?? ""} ${account.displayName}`}
        {...allButtons}
        {...states?.connected}
      />
    );
  }

  return content;
};

export default Inner;
