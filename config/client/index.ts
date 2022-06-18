import axios from "axios";
import useSWR from "swr";
import { PublicConfiguration } from "swr/dist/types";

const useGet = <T>(
  key: any,
  config?:
    | Partial<
        PublicConfiguration<
          any,
          any,
          | ((...args: unknown[]) => any)
          | ((...args: unknown[]) => any)
          | ((args_0: unknown) => any)
          | ((args_0: any) => any)
        >
      >
    | undefined
) =>
  useSWR<T>(key, (url: string) => axios.get(url).then((res) => res.data), config);

export { useGet };
