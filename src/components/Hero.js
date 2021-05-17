import React from 'react';
import { Box, Button, Text, Center, Heading } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box
      h="100vh"
      style={{
        backgroundImage: `url("https://i.postimg.cc/8CjWzt58/photo-1605039982749-c2fe1dd2a588-ixid-Mnwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hx8-ixlib-rb-1-2.jpg")`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <Heading
        style={{
          color: 'white',
          marginTop: '-70px',
          letterSpacing: '0.2rem',
          filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,.9))'
        }}
        as="h1"
        size="4xl">
        NUTMEG HEMP
      </Heading>
    </Box>
  );
};

export default Hero;
