import React from "react";
import { MantineProvider, Text } from "@mantine/core";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <Text>Welcome to Demo!</Text>
        </MantineProvider>
      </header>
    </div>
  );
}

export default App;
