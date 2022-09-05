const infura = {
  apiKey: process.env.NEXT_PUBLIC_INFURA_API_KEY,
};

const pinata = {
  apiKey: process.env.PINATA_API_KEY as string,
  apiSecret: process.env.PINATA_API_SECRET as string,
};

export { infura, pinata };
