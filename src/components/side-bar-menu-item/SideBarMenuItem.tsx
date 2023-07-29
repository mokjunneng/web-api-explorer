import { ReactElement, useState } from "react";
import ExpandArrowDownIcon from '../../icons/ExpandArrowDown.svg';
import ExpandArrowUpIcon from '../../icons/ExpandArrowUp.svg';
import './SideBarMenuItem.css';
import { useGetProviderDetails } from "./use-get-provider-details";

interface SideBarMenuItemProps {
  providerName: string
}

export function SideBarMenuItem({ providerName }: SideBarMenuItemProps): ReactElement {
  const [expanded, setExpanded] = useState(false);
  const { isLoading, providerDetails } = useGetProviderDetails(providerName);

  return (
    expanded ? 
      <div className="menuItem expanded" onClick={() => setExpanded(!expanded)}>
        <div className="expandedHeader">
          <span>{providerName}</span>
          <span className="expandIconContainer"><img src={ExpandArrowUpIcon} alt='ExpandArrowUp'/></span>
        </div>
        {!isLoading && <span className="providerTitle"><img className="providerLogo" src={providerDetails?.info["x-logo"].url}/>{providerDetails?.info.title}</span>}
      </div> :
      <div className="menuItem" onClick={() => setExpanded(!expanded)}>
        <span>{providerName}</span>
        <span className="expandIconContainer"><img src={ExpandArrowDownIcon} alt='ExpandArrowDown'/></span>
      </div>
  )
}
