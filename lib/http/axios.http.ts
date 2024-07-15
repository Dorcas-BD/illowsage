import axios, { AxiosResponse } from "axios";
import { HttpType } from "../enums/http.enum";
import { API_URL, API_KEY } from "../utils/env.util";

type TAxiosParams = {
  url: string;
  method: HttpType;
  apiKey?: string;
  baseUrl?: string;
  data?: object;
};

const Client = async ({
  method,
  url,
  baseUrl,
  data,
  apiKey = API_KEY,
}: TAxiosParams) => {
  try {
    const res: AxiosResponse = await axios({
      method,
      url,
      baseURL: baseUrl || API_URL,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      data: data && JSON.stringify(data),
    });

    if (res.status === 200 || res.status === 201) {
      return res.data;
    }
  } catch (error) {
    throw error;
  }
};

export default Client;
