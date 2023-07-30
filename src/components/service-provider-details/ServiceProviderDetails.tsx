import { ReactElement } from 'react';
import { ServiceProviderAPIVersionDetails } from '../../models/service-provider-details';
import './ServiceProviderDetails.css';

interface ServiceProviderApiDetailsProps {
  providerApiDetails: ServiceProviderAPIVersionDetails;
  onClickExploreMore: () => void;
}

export function ServiceProviderApiDetails({
  providerApiDetails,
  onClickExploreMore,
}: ServiceProviderApiDetailsProps): ReactElement {
  return (
    <div className="main">
      <div className="contentWrapper">
        <div className="headerTitle">
          <img className="headerLogo" src={providerApiDetails?.info['x-logo']?.url} />
          {providerApiDetails?.info.title}
        </div>
        <div className="contentBlock">
          <div className="contentTitle">Description</div>
          <div className="contentDescription">{providerApiDetails?.info?.description}</div>
        </div>
        <div className="contentBlock">
          <div className="contentTitle">Swagger</div>
          <div className="contentDescription">{providerApiDetails.swaggerUrl}</div>
        </div>
        <div className="contentBlock">
          <div className="contentTitle">Contact</div>
          <table>
            <tbody>
              <tr>
                <td>
                  <span className="contentDescription">Email</span>
                </td>
                <td>
                  <span className="contentDescription">{providerApiDetails?.info?.contact?.email}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="contentDescription">Name</span>
                </td>
                <td>
                  <span className="contentDescription">{providerApiDetails?.info?.contact?.name}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="contentDescription">Url</span>
                </td>
                <td>
                  <span className="contentDescription">{providerApiDetails?.info?.contact?.url}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="backButton" onClick={onClickExploreMore}>
          Explore more APIs
        </div>
      </div>
    </div>
  );
}
