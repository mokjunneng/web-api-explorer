import axios from "axios";
import { useEffect, useState } from "react";

export interface GetProviderDetailsResponse {
  apis: { [key: string]: ProviderDetail };
}

export interface ProviderDetail {
  added: string;
  info: ProviderDetailInfo;
  updated: string;
  swaggerUrl: string;
  swaggerYamlUrl: string;
  openapiVer: string;
  link: string;
}

export interface ProviderDetailInfo {
  contact: {
    email: string;
    name: string;
    url: string;
    "x-twitter": string;
  };
  description: string;
  title: string;
  version: string;
  "x-apisguru-categories": string[];
  "x-logo": {
    url: string;
  };
  "x-origin": XOrigin[];
  "x-providerName": string;
  "x-serviceName": string;
  "x-unofficialSpec": boolean;
}

export interface XOrigin {
  format: string;
  url: string;
  version: string;
}

export function useGetProviderDetails(providerName: string) {
  const [isLoading, setIsLoading] = useState(true);
  const [providerDetails, setProviderDetails] = useState<ProviderDetail | undefined>(undefined);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.request<GetProviderDetailsResponse>({
          method: 'get',
          // TODO: Move this to environment variable
          url: `https://api.apis.guru/v2/${providerName}.json`,
        });

        // Based on the response JSON format, there's only one key-value pair
        setProviderDetails(Object.values(response.data.apis)[0]);
      } catch (error) {
        console.error((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    isLoading,
    providerDetails,
  }
}
