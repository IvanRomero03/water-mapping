import React, { useEffect } from "react";
import "./App.css";
import useRef, { useState } from "react";
import { Tabs, Checkbox, Divider, Header, Image } from "@mantine/core";
import {
  Heading,
  Text,
  Container,
  Flex,
  Box,
  VStack,
  HStack,
} from "@chakra-ui/react";
import AzureLayer from "./components/AzureLayer";
import Quality from "./components/Quality";
import Desplazable from "./components/Desplazable";

function App() {
  return (
    <>
      <Flex
        w="100%"
        opacity={1}
        background="white"
        m="2%"
        justify={"space-between"}
      >
        <Image src="./wo fondo.png" width={160} height={80} />
        <Heading mr="5%">Borregos Operating System (BOS)</Heading>
      </Flex>
      <Flex w="100%" justify={"center"} align={"center"}>
        <VStack m="2%">
          <Heading size="3xl">Water flux shortage</Heading>
        </VStack>
      </Flex>
      <AzureLayer />
      <Flex w="100%" justify={"center"} align={"center"}>
        <VStack m="2%">
          <Heading size="3xl">Water quality meditions</Heading>
        </VStack>
      </Flex>
      <Quality />
      <Flex w="100%" justify={"center"} align={"center"}>
        <VStack m="2%">
          <Heading>Our Proporsal</Heading>
        </VStack>
      </Flex>
      <HStack w="100%" spacing={0} mt="2%" align={"flex-start"}>
        <Box w="33%" background="green" borderRadius={"md"}>
          <Desplazable
            title="Antecedentes"
            descripcion="Durante el año del 2022 el estado de Nuevo León se vio en una situación en la cual el agua proporcionada por el gobierno
            para los regiomontanos era de muy baja calidad hasta un punto de ser dañina para la salud y en algunos casos no era proporcionada. 
            "
          />
        </Box>
        <Box w="34%" background="blue">
          <Desplazable
            title="Sensores"
            descripcion="El prósito de este proyecto es ayudar a las comunidades que se vean en situaciones similares, tener un recurso al cuál acudir
            tanto para la calidad del agua como el flujo de la misma"
          />
        </Box>
        <Box w="33%" background="teal">
          <Desplazable
            title="Inteligencia Artificial"
            descripcion="Se utilizó un modelo de inteligencia artificial para predecir la precipitacion de la zona y determinar la potabilidad del agua"
          />
        </Box>
      </HStack>
      <Flex w="100%" justify={"center"} align={"center"}>
        <VStack m="2%" spacing={8}>
          <Heading>Prototipo</Heading>
          <Image src="./foto2.jpeg" alt={"Modelo"} height={360} />
          <Divider />
          <Text>
            El prototipo se realizó con un microcontrolador NodeMCU, un sensor
            de flujo de agua y un sensor de partículas por millón en el agua.
          </Text>
          <Divider />
          <Image
            src="./foto1.jpeg"
            alt={"pcb"}
            width={360}
            height={360}
            fit="contain"
          />
          <Divider />
          <Text>
            El diseño está hecho para una fácil instalación y un bajo costo.
          </Text>
        </VStack>
      </Flex>
    </>
  );
}

export default App;
