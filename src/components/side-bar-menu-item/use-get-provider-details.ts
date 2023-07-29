import axios from "axios";
import { useEffect, useState } from "react";
import { ProviderDetails } from "../../models/service-provider-details";

export interface GetProviderDetailsResponse {
  apis: { [key: string]: ProviderDetails };
}

export function useGetProviderDetails(providerName: string) {
  const [isLoading, setIsLoading] = useState(true);
  const [providerDetails, setProviderDetails] = useState<ProviderDetails | undefined>(undefined);

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
