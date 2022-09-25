import React, { useEffect } from "react";
import "./App.css";
import useRef, { useState } from "react";
import { Tabs, Checkbox, Divider, Header } from "@mantine/core";
import { Heading, Text, Container, Flex, Box, VStack } from "@chakra-ui/react";
import AzureLayer from "./components/AzureLayer";
import Quality from "./components/Quality";

function App() {
  return (
    <>
      <Flex w="100%" opacity={1} background="white" m="2%">
        <Heading>Water Mapping</Heading>
      </Flex>
      <Flex w="100%" justify={"center"} align={"center"}>
        <VStack m="2%">
          <Heading>Water flux shortage</Heading>
          <Text>In Monterrey.......</Text>
        </VStack>
      </Flex>
      <AzureLayer />
      <Flex w="100%" justify={"center"} align={"center"}>
        <VStack m="2%">
          <Heading>Water quality meditions</Heading>
          <Text>In Mexico.......</Text>
        </VStack>
      </Flex>
      <Quality />
      <Flex w="100%" justify={"center"} align={"center"}>
        <VStack m="2%">
          <Heading>Our Proporsal</Heading>
        </VStack>
      </Flex>
    </>
  );
}

export default App;
