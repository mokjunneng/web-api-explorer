import { ReactElement } from "react";
import { useGetProviders } from "./use-get-providers";
import './SideBar.css';
import { SideBarMenuItem } from "../side-bar-menu-item/SideBarMenuItem";
import { ProviderDetails } from "../../models/service-provider-details";

interface SideBarProps {
  onClickBackground: () => void;
  onClickProvider: (providerDetails: ProviderDetails | undefined) => void;
}

export function SideBar({ onClickBackground, onClickProvider }: SideBarProps): ReactElement {
  const { isLoading, providers } = useGetProviders();

  return (
    <div className="menuBackground" onClick={onClickBackground}>
      <div className="menu" onClick={(e) => e.stopPropagation()}>
        <div className="menuHeader"><span>Select Provider</span></div>
        <div className="menuItems">
          {!isLoading &&
            providers.map((provider) => {
              return <SideBarMenuItem key={provider} providerName={provider} onClickProvider={onClickProvider} />
            })
          }
        </div>
      </div>
    </div>
  )
}
