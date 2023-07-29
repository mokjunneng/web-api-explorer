import { ReactElement } from "react";
import { ProviderDetails } from "../../models/service-provider-details";
import './ServiceProviderDetails.css';

interface ServiceProviderDetailsProps {
  providerDetails: ProviderDetails;
  onClickExploreMore: () => void;
}

export function ServiceProviderDetails({ providerDetails, onClickExploreMore }: ServiceProviderDetailsProps): ReactElement {
  console.log(providerDetails)
  return (
    <div className="main">
      <div className="contentWrapper">
        <div className="headerTitle"><img className="headerLogo" src={providerDetails?.info["x-logo"].url} />{providerDetails?.info?.title}</div>
        <div className="contentBlock">
          <div className="contentTitle">Description</div>
          <div className="contentDescription">{providerDetails?.info?.description}</div>
        </div>
        <div className="contentBlock">
          <div className="contentTitle">Swagger</div>
          <div className="contentDescription">{providerDetails?.swaggerUrl}</div>
        </div>
        <div className="contentBlock">
          <div className="contentTitle">Contact</div>
          <table>
            <tbody>
              <tr>
                <td><span className="contentDescription">Email</span></td>
                <td><span className="contentDescription">{providerDetails?.info?.contact?.email}</span></td>
              </tr>
              <tr>
                <td><span className="contentDescription">Name</span></td>
                <td><span className="contentDescription">{providerDetails?.info?.contact?.name}</span></td>
              </tr>
              <tr>
                <td><span className="contentDescription">Url</span></td>
                <td><span className="contentDescription">{providerDetails?.info?.contact?.url}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="backButton" onClick={onClickExploreMore}>Explore more APIs</div>
      </div>
    </div>
  )
}
