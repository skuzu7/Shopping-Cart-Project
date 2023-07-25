import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import {
  HomeContainer,
  LinkWithoutUnderline,
  Product,
} from '@/styles/pages/home'
import Image from 'next/image'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

interface Product {
  id: string
  name: string
  images: string[]
  default_price: {
    unit_amount: number
    currency: string
  }
}

interface HomeProps {
  products: Product[]
}

export default function Home({ products }: HomeProps) {
  function formatPrice(price: number): string {
    const formattedPrice = (price / 100).toFixed(2)
    return `R$ ${formattedPrice}`
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
            <LinkWithoutUnderline href={`/product/${product.id}`}>
              <Product>
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={520}
                  height={480}
                />
                <footer>
                  <span>{product.name}</span>
                  <strong>
                    {formatPrice(product.default_price.unit_amount)}{' '}
                  </strong>
                </footer>
              </Product>
            </LinkWithoutUnderline>
          </SwiperSlide>
        ))}
      </Swiper>
    </HomeContainer>
  )
}

export async function getServerSideProps(): Promise<{ props: HomeProps }> {
  try {
    const response = await axios.get('https://api.stripe.com/v1/products', {
      headers: {
        Authorization:
          'Bearer sk_test_51NJJgKI84MzHZgpn4Qf3eGgXJqlIiXAvdbFPtsM8ovJ5ySTwnobgDXp5tsaL1W9lVhZJjZolBtrdak8PDTWfnLI300fpPkDRWU',
      },
    })

    const products: Product[] = await Promise.all(
      response.data.data.map(async (product: any) => {
        const priceResponse = await axios.get(
          `https://api.stripe.com/v1/prices/${product.default_price}`,
          {
            headers: {
              Authorization:
                'Bearer sk_test_51NJJgKI84MzHZgpn4Qf3eGgXJqlIiXAvdbFPtsM8ovJ5ySTwnobgDXp5tsaL1W9lVhZJjZolBtrdak8PDTWfnLI300fpPkDRWU',
            },
          },
        )
        const priceData = priceResponse.data
        return {
          ...product,
          default_price: priceData,
        }
      }),
    )

    return { props: { products } }
  } catch (error) {
    console.error('Error fetching products:', error)
    return { props: { products: [] } }
  }
}
