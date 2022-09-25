import React, { useState } from "react";
import { Button, Header, Code, Box, Text } from "@mantine/core";
import { Heading } from "@chakra-ui/react";
const Desplazable = ({ title, descripcion }: any) => {
  const [toggleDesplazable, setToggleDesplazable] = useState(false);

  const handleDesplazable = () => {
    setToggleDesplazable(!toggleDesplazable);
  };
  return (
    <Box mt="2%">
      <Heading
        color="white"
        onClick={handleDesplazable}
        style={{ cursor: "pointer" }}
      >
        {title}
      </Heading>
      {toggleDesplazable && (
        <Box mt="1%" color="white">
          <Text color="white">{descripcion}</Text>
        </Box>
      )}
    </Box>
  );
};
export default Desplazable;
