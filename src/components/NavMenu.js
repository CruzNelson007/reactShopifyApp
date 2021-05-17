import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import { GiHemp } from 'react-icons/gi';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Icon,
  VStack
} from '@chakra-ui/react';

const NavMenu = () => {
  const { isMenuOpen, closeMenu } = useContext(ShopContext);

  return (
    <Drawer isOpen={isMenuOpen} onClose={closeMenu} placement="left" size="sm">
      <DrawerOverlay>
        <DrawerContent textAlign="center">
          <DrawerCloseButton />
          <DrawerHeader>
            <Icon href="/" as={GiHemp} w={39} h={39} cursor="pointer" />
          </DrawerHeader>
          <DrawerBody>
            <VStack>
              <Link to="/">Home</Link>
              <Link to="/">Store</Link>
              <Link to="/">Locations</Link>
            </VStack>
          </DrawerBody>
          <DrawerFooter
            display="flex"
            alignItems="center"
            justifyContent="center">
            <Text>&copy; Copyright www.nutmeghemp.com</Text>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default NavMenu;
