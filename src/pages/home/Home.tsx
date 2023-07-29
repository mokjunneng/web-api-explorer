import { ReactElement, useState } from "react";
import { ServiceProviderDetails } from "../../components/service-provider-details/ServiceProviderDetails";
import { SideBar } from "../../components/side-bar/SideBar";
import { ProviderDetails } from "../../models/service-provider-details";
import './Home.css';

export function Home(): ReactElement {
  const [sideBarActive, setSideBarActive] = useState(false);
  const [activeProviderDetails, setActiveProviderDetails] = useState<ProviderDetails | undefined>(undefined);
  const [displayServiceDetails, setDisplayServiceDetails] = useState(false);

  const onClickProvider = (providerDetails: ProviderDetails | undefined) => {
    setSideBarActive(false);
    setActiveProviderDetails(providerDetails);
    setDisplayServiceDetails(true);
  }

  const onClickExploreMore = () => {
    setSideBarActive(true);
    setActiveProviderDetails(undefined);
    setDisplayServiceDetails(false);
  }

  return (
    <>
      <div className="background">
        <div className="exploreButton" onClick={ () => setSideBarActive(true) }>Explore web APIs</div>
      </div>
      {sideBarActive && <SideBar onClickBackground={() => setSideBarActive(false) } onClickProvider={onClickProvider} />}
      {displayServiceDetails && activeProviderDetails && <ServiceProviderDetails providerDetails={activeProviderDetails} onClickExploreMore={onClickExploreMore}/>}
    </>
  )
}
