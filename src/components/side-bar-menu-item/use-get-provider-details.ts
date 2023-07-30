import axios from 'axios';
import { useEffect, useState } from 'react';
import { getEnvironmentVariable } from '../../helpers/environment';
import { ServiceProviderDetails } from '../../models/service-provider-details';

export function useGetProviderDetails(providerName: string) {
  const [isLoading, setIsLoading] = useState(true);
  const [providerDetails, setProviderDetails] = useState<ServiceProviderDetails | undefined>(undefined);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.request<ServiceProviderDetails>({
          method: 'get',
          url: `${getEnvironmentVariable('REACT_APP_APIS_GURU_BASE_URL')}/${providerName}.json`,
        });

        setProviderDetails(response.data);
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
  };
}
