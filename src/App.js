
import "./cssGlobal/styles.css";
import PseudoBody from "./components/General/PseudoBody";
import HeaderContainer from "./components/Header/HeaderContainer";
import SectionRegisterForm from "./components/Section/Register/SectionRegisterForm";
import SectionLoginForm from "./components/Section/Register/SectionLoginForm";
import SectionProductPanel from "./components/Section/Products/SectionProductPanel";

import React from "react";

import { Route, Routes } from "react-router-dom";
function App() {
  

  
  return (
    <PseudoBody>
      <HeaderContainer></HeaderContainer>
      <Routes>
        <Route path="/" Component={SectionProductPanel} />
        <Route path="/TPO_UTN_MOD2_U3" Component={SectionProductPanel} />
        <Route path="/home" Component={SectionProductPanel}></Route>
        <Route path="/registrarse" Component={SectionRegisterForm}></Route>
        <Route path="/ingresar" Component={SectionLoginForm}></Route>
      </Routes>
    </PseudoBody>
  );
}

export default App;
