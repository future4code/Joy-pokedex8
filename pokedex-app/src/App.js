import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { HeaderPage } from "./components/HeaderPage";
import { Rota } from "./route/Rota"
function App() {
  return (
    <ChakraProvider>
      <HeaderPage />
      <Rota />
    </ChakraProvider>
  );
}

export default App;
