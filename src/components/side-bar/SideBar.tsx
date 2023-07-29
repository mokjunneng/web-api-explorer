import { ReactElement } from "react";
import './SideBar.css';

interface SideBarProps {
  onClickBackground: () => void;
}

export function SideBar({ onClickBackground }: SideBarProps): ReactElement {
  // TODO: Get list of providers

  return (
    <div className="menuBackground" onClick={onClickBackground}>
      <div className="menu" onClick={(e) => e.stopPropagation()}>
        <div className="menuHeader"><span>Select Provider</span></div>
        {/* Render side bar items - list of providers*/}
      </div>
    </div>
  )
}
