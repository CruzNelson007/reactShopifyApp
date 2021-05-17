import React from 'react';
import { Box, Heading, Text, Center } from '@chakra-ui/react';

const RichText = ({ heading, text, bgColor, fontColor }) => {
  return (
    <Box p="1rem" backgroundColor={bgColor} color={fontColor}>
      <Center display="flex" flexDir="column" textAlign="center" py="2rem">
        <Heading pb=".5rem">{heading && heading}</Heading>
        <Text>{text && text}</Text>
      </Center>
    </Box>
  );
};

export default RichText;
