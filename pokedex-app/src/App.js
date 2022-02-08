import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { HeaderPage } from "./components/HeaderPage";
import { GlobalState } from "./global/GlobalState";
import { Rota } from "./route/Rota"
function App() {
  return (
    <GlobalState>
      <ChakraProvider>
        <HeaderPage />
        <Rota />
      </ChakraProvider>
    </GlobalState>
  );
}

export default App;
