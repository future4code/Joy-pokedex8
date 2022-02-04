import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { HeaderPage } from "./components/HeaderPage";
import { Rota } from "./route/Rota"
function App() {
  // const botao = {
  //   name: 
  // }
  return (
    <ChakraProvider>
      {/* <ContextButton.Provider> */}
        <HeaderPage />
        <Rota />
      {/* </ContextButton.Provider> */}
    </ChakraProvider>
  );
}

export default App;
