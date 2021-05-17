import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import Hero from '../components/Hero';
import RichText from '../components/RichText';
import ImageWithText from '../components/ImageWithText';
import { Box, Grid, Text, Image } from '@chakra-ui/react';

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  const img = products.map(i => {
    return i.images[0].src;
  });

  if (!products) return <div>Loading...</div>;

  return (
    <Box>
      <Hero />
      <RichText
        heading="Natural Pain Relief"
        text="Studies prove CBD could lower pain to arthritis, inflammatory, and even neuropathic pain like headaches."
      />
      <Grid
        templateColumns={['repeat(1,1fr)', 'repeat(3,1fr)']}
        py="4rem"
        backgroundColor="#F2F2F2">
        {products.map(product => (
          <Link to={`/products/${product.handle}`} key={product.id}>
            <Box
              _hover={{ opacity: '75%' }}
              textAlign="center"
              position="relative">
              <Text>
                <Image src={product.images[0].src} />
              </Text>
              <Text fontWeight="bold">{product.title}</Text>
              <Text>{product.variants[0].price}</Text>
            </Box>
          </Link>
        ))}
      </Grid>
      <RichText
        heading="Featured Products"
        text="XTEND5 blends are specifically designed to support the relief of some of life’s most common and problematic symptoms."
      />

      <ImageWithText
        handle="cbd-gummies"
        color="#ffffff"
        bgColor="#0cba9d"
        image={img[1]}
        heading="Gummies"
        text="CBD gummies with the highest-quality hemp extracts to bring you all the benefits of CBD in a tasty, convenient snack. As part of a daily routine, you may find that CBD can improve the quality of your life in multiple ways."
      />

      <ImageWithText
        reverse
        handle="cbd-topical"
        color="#ffffff"
        bgColor="#FA7E5C"
        image={img[2]}
        heading="Pain Relieving Roll-on"
        text="Topical lidocaine made with the same industry leading standards as every cbdMD product to provide you with the highest quality blend of premium hemp extracts and the proven pain relieving power of lidocaine. Relieve delivers the topical CBD benefits that are part of your daily routine and support for muscle and joint comfort with topical lidocaine."
      />

      <ImageWithText
        handle="cbd-oil-tincture"
        color="#ffffff"
        bgColor="#8D79A8"
        image={img[0]}
        heading="Tinctures"
        text="The Superior Broad Spectrum CBD formula provides the potential benefits of carefully crafted hemp extracts so you can be sure you’re getting the best daily support possible."
      />
    </Box>
  );
};

export default Home;
