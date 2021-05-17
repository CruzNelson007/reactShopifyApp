import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import { Flex, Icon, Box, Badge } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MdMenu, MdShoppingCart } from 'react-icons/md';
import { GiHemp } from 'react-icons/gi';

const Navbar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext);

  return (
    <Flex
      width="100%"
      position="fixed"
      zIndex="1"
      backgroundColor="#06111C"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      p="1rem">
      <Icon
        fill="#BEC7C7"
        as={MdMenu}
        w={30}
        h={30}
        cursor="pointer"
        onClick={() => openMenu()}
      />

      <Link to="/">
        <Icon fill="#BEC7C7" as={GiHemp} w={39} h={39} cursor="pointer" />
      </Link>
      <Box>
        <Icon
          fill="#BEC7C7"
          as={MdShoppingCart}
          w={30}
          h={30}
          cursor="pointer"
          onClick={() => openCart()}
        />
        <Badge backgroundColor="#FFEB4D" ml="1" borderRadius="100%">
          {checkout.lineItems?.length}
        </Badge>
      </Box>
    </Flex>
  );
};

export default Navbar;
