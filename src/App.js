
import "./cssGlobal/styles.css";
import PseudoBody from "./components/General/PseudoBody";
import HeaderContainer from "./components/Header/HeaderContainer";
import SectionRegisterForm from "./components/Section/Register/SectionRegisterForm";
import SectionLoginForm from "./components/Section/Register/SectionLoginForm";
import SectionProductPanel from "./components/Section/Products/SectionProductPanel";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  

  
  return (
    <PseudoBody>
      <HeaderContainer></HeaderContainer>
      <Routes>
        <Route path="/" Component={SectionProductPanel}></Route>
        <Route path="/home" Component={SectionProductPanel}></Route>
        <Route path="/registrarse" Component={SectionRegisterForm}></Route>
        <Route path="/ingresar" Component={SectionLoginForm}></Route>
      </Routes>
    </PseudoBody>
  );
}

export default App;
