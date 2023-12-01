import {Fragment } from "react"
import HeaderRow from "./HeaderRow";
import CatergoryListSelect from "./CategoryListSelect";
import HeaderNav from "./HeaderNav";
export default function HeaderContainer ({children}){
    return (
      <Fragment>
        <header className="headerContainer">
          <HeaderRow styles={["headerRow-Top"]}>
            <div className="leftPanel">
              <a href=" #">
                <div className="item">
                  <img
                    alt="Logo"
                    src="images/amazon.png"
                    className="headerLogo"
                  ></img>
                </div>
              </a>
              <a href=" #">
                <div className="item">
                  <div className="deliveryLeft">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div className="deliveryRight">
                    <p>Envios a </p>
                    <p>Argentina</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="centerPanel">
              <div className="navSearch">
                <div className="searchFilterConteiner">
                  <select className="searchFilterSelect">
                      <CatergoryListSelect></CatergoryListSelect>
                  </select>
                </div>
                <div className="searchBoxContainer">
                  <input className="searchBox" type="box" placeholder="Ingrese algun producto a buscar"></input>
                </div>
                <div className="searchButton"></div>
              </div>
            </div>
            <div className="RightPanel">
            </div>
          </HeaderRow>
          <HeaderRow styles={["headerRow-Middle"]}>
            <HeaderNav></HeaderNav>
          </HeaderRow>
        </header>
      </Fragment>
    );
}









