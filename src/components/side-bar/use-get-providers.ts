import axios from "axios";
import { useEffect, useState } from "react";
import { getEnvironmentVariable } from "../../helpers/environment";
import { operations } from "../../api/generated/apisguru"

export function useGetProviders() {
  const [isLoading, setIsLoading] = useState(true);
  const [providers, setProviders] = useState<string[] | undefined>(undefined);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.request<operations["getProviders"]["responses"]["200"]["content"]["application/json"]>({
          method: 'get',
          url: `${getEnvironmentVariable('REACT_APP_APIS_GURU_BASE_URL')}/providers.json`,
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
