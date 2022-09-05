import { FC } from "react";
import { ConnectButton as RainbowConnectButton } from "@rainbow-me/rainbowkit";
import { Props as ButtonProps } from "@components/Button";
import Inner, { States } from "./Inner";

interface Props extends Partial<ButtonProps> {
  states?: States;
}

const ConnectButton: FC<Props> = ({ states, ...rest }) => (
  <RainbowConnectButton.Custom>
    {(innerProps) => (
      <Inner {...innerProps} states={states} allButtons={rest} />
    )}
  </RainbowConnectButton.Custom>
);

export default ConnectButton;
