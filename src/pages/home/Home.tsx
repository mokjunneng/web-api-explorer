import { ReactElement, useState } from 'react';
import { ServiceProviderApiDetails } from '../../components/service-provider-details/ServiceProviderDetails';
import { SideBar } from '../../components/side-bar/SideBar';
import { ServiceProviderAPIVersionDetails } from '../../models/service-provider-details';
import './Home.css';

export function Home(): ReactElement {
  const [sideBarActive, setSideBarActive] = useState(false);
  const [activeProviderApiDetails, setActiveProviderApiDetails] = useState<
    ServiceProviderAPIVersionDetails | undefined
  >(undefined);
  const [displayProviderApiDetails, setDisplayProviderApiDetails] = useState(false);

  const onClickProvider = (providerApiDetails: ServiceProviderAPIVersionDetails | undefined) => {
    setSideBarActive(false);
    setActiveProviderApiDetails(providerApiDetails);
    setDisplayProviderApiDetails(true);
  };

  const onClickExploreMore = () => {
    setSideBarActive(true);
    setActiveProviderApiDetails(undefined);
    setDisplayProviderApiDetails(false);
  };

  return (
    <>
      <div className="background">
        <div className="exploreButton" onClick={() => setSideBarActive(true)}>
          Explore web APIs
        </div>
      </div>
      {sideBarActive && (
        <SideBar onClickBackground={() => setSideBarActive(false)} onClickProvider={onClickProvider} />
      )}
      {displayProviderApiDetails && activeProviderApiDetails && (
        <ServiceProviderApiDetails
          providerApiDetails={activeProviderApiDetails}
          onClickExploreMore={onClickExploreMore}
        />
      )}
    </>
  );
}
