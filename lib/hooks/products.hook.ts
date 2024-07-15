import { useQuery, UseQueryResult } from "@tanstack/react-query";
import Client from "../http/axios.http";
import { TProductResponse } from "../types/product.type";
import { API_KEY } from "../utils/env.util";

const getProducts = async () => {
  return await Client({
    method: "GET",
    url: "/products",
    apiKey: API_KEY,
  });
};

export const useFetchProducts = (): UseQueryResult<
  TProductResponse[],
  Error
> => {
  return useQuery<TProductResponse[], Error>({
    queryKey: ["products"],
    queryFn: getProducts,
    retry: 1,
  });
};
