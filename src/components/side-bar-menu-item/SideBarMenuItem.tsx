import { ReactElement } from "react";
import ExpandArrowDownIcon from '../../icons/ExpandArrowDown.svg';
import './SideBarMenuItem.css';

interface SideBarMenuItemProps {
  providerName: string
}

export function SideBarMenuItem({ providerName }: SideBarMenuItemProps): ReactElement {
  // TODO: Fetch provider details
  return (<div className="menuItem">
    <span>{providerName}</span>
    <span className="expandIconContainer"><img src={ExpandArrowDownIcon} alt='ExpandArrowDown'/></span>
  </div>)
}
