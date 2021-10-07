import React from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Picture from "./components/Picture";

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function App() {

  return (
    <AppContainer>
      <Header />
      <Picture />
    </AppContainer>
  );
}

export default App;
