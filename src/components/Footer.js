import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Grid,
  Text,
  Image,
  VStack,
  Icon,
  Heading
} from '@chakra-ui/react';
import { GiHemp } from 'react-icons/gi';

const Footer = () => {
  return (
    <Box backgroundColor="#06111C">
      <Grid
        templateColumns={['repeat(1,1fr)', 'repeat(3,1fr)']}
        color="#BEC7C7"
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        py="2rem">
        <VStack>
          <Link to="/">CBD Oil Tincture</Link>
          <Link to="/">CBD Gummies</Link>
          <Link to="/">CBD Topical</Link>
        </VStack>
        <Link to="/">
          <Heading>nutmeghemp.com</Heading>
        </Link>
        <VStack>
          <Link to="/">Home</Link>
          <Link to="/">Store</Link>
          <Link to="/">Locations</Link>
        </VStack>
      </Grid>
      <Box>
        <Text
          textAlign="center"
          color="white"
          w="100%"
          borderTop="1px solid white"
          p="1rem">
          &copy; Copyright www.nutmeghemp.com
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
