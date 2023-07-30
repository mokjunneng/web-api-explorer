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
  // NOTE: There may be multiple service details objects, fetch the first one only for display
  const firstProviderApiDetails = providerDetails ? Object.values(providerDetails.apis)[0] : undefined;

  const onClickServiceProvider = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation();
    onClickProvider(firstProviderApiDetails);
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
          {!isLoading && firstProviderApiDetails && (
            <div className="providerTitle" onClick={onClickServiceProvider}>
              <img className="providerLogo" src={firstProviderApiDetails?.info['x-logo']?.url} />
              {firstProviderApiDetails?.info.title}
            </div>
          )}
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
