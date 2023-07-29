import { ReactElement, useState } from "react";
import { SideBar } from "../../components/side-bar/SideBar";
import './Home.css';

export function Home(): ReactElement {
  const [sideBarActive, setSideBarActive] = useState(false);

  return (
    <>
      <div className="background">
        <div className="exploreButton" onClick={ () => setSideBarActive(true) }>Explore web APIs</div>
      </div>
      {sideBarActive && <SideBar onClickBackground={() => setSideBarActive(false)} />}
    </>
  )
}
