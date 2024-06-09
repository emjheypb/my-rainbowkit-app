import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  let body = (
    <>
      <Link href="/" mr={2}>
        Home
      </Link>

      <Link href="/demo" mr={2}>
        Demo
      </Link>
    </>
  );

  return (
    <Flex bg={"tan"} p={4}>
      <Box ml={"auto"}>{body}</Box>
    </Flex>
  );
};

export default Navbar;
