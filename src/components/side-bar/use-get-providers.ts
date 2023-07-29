import axios from "axios";
import { useEffect, useState } from "react";

interface GetProvidersResponse {
  data: string[];
}

export function useGetProviders() {
  const [isLoading, setIsLoading] = useState(true);
  const [providers, setProviders] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.request<GetProvidersResponse>({
          method: 'get',
          // TODO: Move this to environment variable
          url: 'https://api.apis.guru/v2/providers.json',
        });

        setProviders(response.data.data);
      } catch (error) {
        console.error((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    isLoading,
    providers,
  }
}
