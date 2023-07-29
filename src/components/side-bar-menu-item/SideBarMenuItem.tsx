import { ReactElement, useState } from "react";
import ExpandArrowDownIcon from '../../icons/ExpandArrowDown.svg';
import ExpandArrowUpIcon from '../../icons/ExpandArrowUp.svg';
import { ProviderDetails } from "../../models/service-provider-details";
import { ServiceProviderDetails } from "../service-provider-details/ServiceProviderDetails";
import './SideBarMenuItem.css';
import { useGetProviderDetails } from "./use-get-provider-details";

interface SideBarMenuItemProps {
  providerName: string;
  onClickProvider: (providerDetails: ProviderDetails | undefined) => void;
}

export function SideBarMenuItem({ providerName, onClickProvider }: SideBarMenuItemProps): ReactElement {
  const [expanded, setExpanded] = useState(false);
  const { isLoading, providerDetails } = useGetProviderDetails(providerName);

  const onClickServiceProvider = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation();
    onClickProvider(providerDetails);
  }

  return (
    <>
      {expanded ? 
        <div className="menuItem expanded" onClick={() => setExpanded(!expanded)}>
          <div className="expandedHeader">
            <span>{providerName}</span>
            <span className="expandIconContainer"><img src={ExpandArrowUpIcon} alt='ExpandArrowUp'/></span>
          </div>
          {!isLoading && <div className="providerTitle" onClick={onClickServiceProvider}><img className="providerLogo" src={providerDetails?.info["x-logo"].url}/>{providerDetails?.info.title}</div>}
        </div> :
        <div className="menuItem" onClick={() => setExpanded(!expanded)}>
          <span>{providerName}</span>
          <span className="expandIconContainer"><img src={ExpandArrowDownIcon} alt='ExpandArrowDown'/></span>
        </div>}
    </>
  )
}
