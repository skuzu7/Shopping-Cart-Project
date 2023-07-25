import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'
import axios from 'axios'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { CartProvider, useCart } from '@/context/CartContext'
import Cart from '../Cart'

interface Product {
  id: string
  name: string
  price: string
  images: string[]
  default_price: {
    unit_amount: number
    currency: string
    id: string
  }
  description: string
}

interface ProductProps {
  product: Product
}

export default function Product({ product }: ProductProps) {
  const { addItem, cartItems } = useCart()

  const handleBuyNow = async () => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.default_price.unit_amount / 100,
      image: product.images[0],
      priceId: product.default_price.id,
    }

    addItem(item)
  }

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <div>
        <ProductContainer>
          <ImageContainer>
            <Image
              src={product.images[0]}
              alt={product.name}
              width={520}
              height={480}
            />
          </ImageContainer>
          <ProductDetails>
            <h1>{product.name}</h1>
            <span>
              {product.default_price.unit_amount / 100}{' '}
              {product.default_price.currency}
            </span>
            <p>{product.description}</p>

            <button onClick={handleBuyNow}>comprar agora</button>
          </ProductDetails>
        </ProductContainer>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  try {
    const response = await axios.get(
      `https://api.stripe.com/v1/products/${params.id}?expand[]=default_price`,
      {
        headers: {
          Authorization:
            'Bearer sk_test_51NJJgKI84MzHZgpn4Qf3eGgXJqlIiXAvdbFPtsM8ovJ5ySTwnobgDXp5tsaL1W9lVhZJjZolBtrdak8PDTWfnLI300fpPkDRWU',
        },
      },
    )

    const product = response.data

    return {
      props: {
        product,
      },
    }
  } catch (error) {
    console.error('Error fetching product:', error)
    return {
      props: {
        product: null,
      },
    }
  }
}

export async function getStaticPaths() {
  try {
    const response = await axios.get('https://api.stripe.com/v1/products', {
      headers: {
        Authorization:
          'Bearer sk_test_51NJJgKI84MzHZgpn4Qf3eGgXJqlIiXAvdbFPtsM8ovJ5ySTwnobgDXp5tsaL1W9lVhZJjZolBtrdak8PDTWfnLI300fpPkDRWU',
      },
    })

    const products = response.data.data

    const paths = products.map((product: Product) => ({
      params: { id: product.id },
    }))

    return {
      paths,
      fallback: false,
    }
  } catch (error) {
    console.error('Error fetching products:', error)
    return {
      paths: [],
      fallback: false,
    }
  }
}
