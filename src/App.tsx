import React from "react";
import {ThemeProvider} from "styled-components";

import Colors  from "./styles/colors";
import GlobalStyles from "./styles/global";

import Routes from "./routes";

function App() {
  return (
    <ThemeProvider theme={Colors}>
        <Routes/>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
