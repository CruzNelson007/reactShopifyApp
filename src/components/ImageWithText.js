import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Text, Image, Heading, Flex } from '@chakra-ui/react';

const ImageWithText = ({
  reverse,
  image,
  heading,
  text,
  bgColor,
  color,
  bgBnt,
  handle
}) => {
  const reverseSection = reverse ? 'row-reverse' : 'row';

  return (
    <Box>
      <Flex
        flexDir={['column', reverseSection]}
        w="100%"
        backgroundColor="#F2F2F2">
        <Image src={image} objectFit="cover" w={['100%', '50%']} />
        <Flex
          color={color}
          backgroundColor={bgColor}
          w={['100%', '50%']}
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          p="rem">
          <Heading>{heading && heading}</Heading>
          <Text p="1rem" textAlign="center">
            {text && text}
          </Text>
          <Link to={`/products/${handle}`} style={{ textDecoration: 'none' }}>
            <Button
              _hover={{ opacity: '70%' }}
              filter="drop-shadow(0px 0px 10px rgba(0,0,0,.3))"
              w="10rem"
              backgroundColor={!bgBnt ? '#FFEB4D' : bgBnt}
              color="black"
              borderRadius="0">
              Shop Now
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ImageWithText;
