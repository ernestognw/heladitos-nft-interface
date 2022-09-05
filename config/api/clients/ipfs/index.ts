import pinataSDK from "@pinata/sdk";
import { pinata as pinataKeys } from "@config/environment";

const pinata = pinataSDK(pinataKeys.apiKey, pinataKeys.apiSecret);

export default pinata;
