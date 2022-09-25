import React, { useEffect } from "react";
import "./App.css";
import useRef, { useState } from "react";
import { Tabs, Text, Box, Checkbox, Divider, Container } from "@mantine/core";
import AzureLayer from "./components/AzureLayer";

function App() {
  const [checked, setChecked] = useState<string | string[]>("escob");
  return (
    <>
      <Container>
        <Box>
          <AzureLayer />
        </Box>
      </Container>
      <AzureLayer />
    </>
  );
}

export default App;
