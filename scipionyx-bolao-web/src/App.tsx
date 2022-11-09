import React from "react";
import "./App.css";
import Container from "./container/Container";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <div className="App">
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Container />
      </MantineProvider>
    </div>
  );
}

export default App;
