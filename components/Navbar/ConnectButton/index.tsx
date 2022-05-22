import { FC } from "react";
import { ConnectButton as RainbowConnectButton } from "@rainbow-me/rainbowkit";
import Inner from "./Inner";

interface Props {
  [key: string]: any;
}

const ConnectButton: FC<Props> = (props) => (
  <RainbowConnectButton.Custom>
    {(innerProps) => <div {...props}>{<Inner {...innerProps} />}</div>}
  </RainbowConnectButton.Custom>
);

export default ConnectButton;
