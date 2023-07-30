import { ReactElement, useState } from 'react';
import ExpandArrowDownIcon from '../../icons/ExpandArrowDown.svg';
import ExpandArrowUpIcon from '../../icons/ExpandArrowUp.svg';
import { ServiceProviderAPIVersionDetails } from '../../models/service-provider-details';
import './SideBarMenuItem.css';
import { useGetProviderDetails } from './use-get-provider-details';

interface SideBarMenuItemProps {
  providerName: string;
  onClickProvider: (providerApiDetails: ServiceProviderAPIVersionDetails | undefined) => void;
}

export function SideBarMenuItem({ providerName, onClickProvider }: SideBarMenuItemProps): ReactElement {
  const [expanded, setExpanded] = useState(false);
  const { isLoading, providerDetails } = useGetProviderDetails(providerName);

  const onClickServiceProvider = (providerApiDetails: ServiceProviderAPIVersionDetails) => {
    onClickProvider(providerApiDetails);
  };

  return (
    <>
      {expanded ? (
        <div className="menuItem expanded" onClick={() => setExpanded(!expanded)}>
          <div className="expandedHeader">
            <span>{providerName}</span>
            <span className="expandIconContainer">
              <img src={ExpandArrowUpIcon} alt="ExpandArrowUp" />
            </span>
          </div>
          {!isLoading &&
            providerDetails &&
            Object.values(providerDetails.apis).map((apiDetails, index) => {
              return (
                <div
                  key={index}
                  className="providerTitle"
                  onClick={(e) => {
                    e.stopPropagation();
                    onClickServiceProvider(apiDetails);
                  }}
                >
                  <img className="providerLogo" src={apiDetails?.info['x-logo']?.url} />
                  {apiDetails?.info.title}
                </div>
              );
            })}
        </div>
      ) : (
        <div className="menuItem" onClick={() => setExpanded(!expanded)}>
          <span>{providerName}</span>
          <span className="expandIconContainer">
            <img src={ExpandArrowDownIcon} alt="ExpandArrowDown" />
          </span>
        </div>
      )}
    </>
  );
}
