import { FC, HTMLAttributes } from "react";
import { ConnectButton as RainbowConnectButton } from "@rainbow-me/rainbowkit";
import Inner from "./Inner";

const ConnectButton: FC<HTMLAttributes<HTMLDivElement>> = (props) => (
  <RainbowConnectButton.Custom>
    {(innerProps) => <div {...props}>{<Inner {...innerProps} />}</div>}
  </RainbowConnectButton.Custom>
);

export default ConnectButton;
