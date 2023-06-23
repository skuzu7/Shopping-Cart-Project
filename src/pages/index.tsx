import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { HomeContainer, Product } from '@/styles/pages/home';
import Image from 'next/image';
import axios from 'axios';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Home({ products }) {

  function formatPrice(price) {
    const formattedPrice = (price / 100).toFixed(2); // Divide o preço por 100 para converter centavos em reais e limita em duas casas decimais
    return `R$ ${formattedPrice}`; // Adiciona o símbolo da moeda
  }

  
  return (
    <HomeContainer>
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Product>
              <Image src={product.images[0]} alt={product.name} width={520} height={480} />
              <footer>
                <span>{product.name}</span>
                <strong>{formatPrice(product.default_price.unit_amount)} </strong>
              </footer>
            </Product>
          </SwiperSlide>
        ))}
      </Swiper>
    </HomeContainer>
  );
}

export const getServerSideProps = async () => {
  try {
    const response = await axios.get('https://api.stripe.com/v1/products', {
      headers: {
        Authorization: 'Bearer sk_test_51NJJgKI84MzHZgpn4Qf3eGgXJqlIiXAvdbFPtsM8ovJ5ySTwnobgDXp5tsaL1W9lVhZJjZolBtrdak8PDTWfnLI300fpPkDRWU',
      },
    });

    const products = await Promise.all(response.data.data.map(async (product) => {
      const priceResponse = await axios.get(`https://api.stripe.com/v1/prices/${product.default_price}`, {
        headers: {
          Authorization: 'Bearer sk_test_51NJJgKI84MzHZgpn4Qf3eGgXJqlIiXAvdbFPtsM8ovJ5ySTwnobgDXp5tsaL1W9lVhZJjZolBtrdak8PDTWfnLI300fpPkDRWU',
        },
      });
      const priceData = priceResponse.data;
      return {
        ...product,
        default_price: priceData,
      };
    }));

    console.log(products); // Display the data in the console

    return { props: { products } };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { props: { products: [] } };
  }
};
