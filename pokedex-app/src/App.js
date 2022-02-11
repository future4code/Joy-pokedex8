import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { GlobalState } from "./global/GlobalState";
import { Rota } from "./route/Rota"
function App() {
  return (
    <GlobalState>
      <ChakraProvider>
        <Rota />
      </ChakraProvider>
    </GlobalState>
  );
}

export default App;
