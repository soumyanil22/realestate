import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex, Button, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "70px",
        border: "1px solid #E2E8F0",
      }}
    >
      <Flex alignItems="center" gap="20px" marginLeft="30px">
        <FontAwesomeIcon icon="fa-solid fa-house" />
        <Text size="4xl" fontWeight="bold">
          Estatery
        </Text>
        <Button variant={"ghost"} colorScheme="brand" color="brand.100">
          Rent
        </Button>
        <Button variant={"ghost"} colorScheme="brand" color="brand.100">
          Buy
        </Button>
        <Button variant={"ghost"} colorScheme="brand" color="brand.100">
          Sell
        </Button>
        <Button variant={"ghost"} colorScheme="brand" color="brand.100">
          Manage Property
        </Button>
        <Button variant={"ghost"} colorScheme="brand" color="brand.100">
          Resources
        </Button>
      </Flex>
      <Flex alignItems="center" gap="15px" marginRight="30px">
        <Button
          variant="outline"
          colorScheme="brand"
          _hover={{ color: "white", backgroundColor: "brand.500" }}
        >
          Login
        </Button>
        <Button
          variant="outline"
          colorScheme="brand"
          _hover={{ color: "white", backgroundColor: "brand.500" }}
        >
          Sign up
        </Button>
      </Flex>
    </div>
  );
};

export default Navbar;
