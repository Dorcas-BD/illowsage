"use server";

import { API_KEY, APP_ID, ORGANIZATION_ID } from "@/lib/utils/env.util";
import axios from "axios";

const getProducts = async () => {
  try {
    const res = await axios.get(
      `https://api.timbu.cloud/products?organization_id=${ORGANIZATION_ID}&Appid=${APP_ID}&Apikey=${API_KEY}`
    );
    return {
      products: res.data.items,
      message: "product retrieved successfully",
    };
  } catch (e: any) {
    return {
      message: e?.response?.data.message,
      status: e?.response?.status,
    };
  }
};

export default getProducts;
