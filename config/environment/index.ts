const infura = {
  apiKey: process.env.NEXT_PUBLIC_INFURA_API_KEY,
};

const pinata = {
  apiKey: process.env.PINATA_API_KEY as string,
  apiSecret: process.env.PINATA_API_SECRET as string,
};

const env = {
  production: process.env.NODE_ENV === "production",
  development: process.env.NODE_ENV === "development",
  test: process.env.NODE_ENV === "test",
};

const heladitos = {
  contract: process.env.NEXT_PUBLIC_HELADITOS_CONTRACT,
};

export { infura, pinata, env, heladitos };
