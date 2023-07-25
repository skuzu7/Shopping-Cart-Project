import { ImageContainer, SuccessContainer } from '@/styles/pages/success'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Image from 'next/image' // Importe o componente Image corretamente

interface SuccessProps {
  name: string
  productName: string
  image: string
}
export default function Success({ name, productName, image }: SuccessProps) {
  return (
    <SuccessContainer>
      <h1>Compra efetuada</h1>
      <ImageContainer>
        <Image src={image} alt={productName} width={120} height={110} />
      </ImageContainer>
      <p>
        Uhu, <strong>{name}</strong>, seu <strong>{productName}</strong> já está
        a caminho da sua casa.
      </p>
      <Link href={'/'}>Voltar ao catálogo</Link>
    </SuccessContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = query.session_id
  try {
    const response = await axios.get(
      `https://api.stripe.com/v1/checkout/sessions/${sessionId}?expand[]=line_items`,
      {
        headers: {
          Authorization:
            'Bearer sk_test_51NJJgKI84MzHZgpn4Qf3eGgXJqlIiXAvdbFPtsM8ovJ5ySTwnobgDXp5tsaL1W9lVhZJjZolBtrdak8PDTWfnLI300fpPkDRWU',
        },
      },
    )

    const session = response.data

    const lineItems = session.line_items

    const name = session.customer_details.name
    const productName = lineItems.data[0].description

    const productId = lineItems.data[0].price.product

    const productResponse = await axios.get(
      `https://api.stripe.com/v1/products/${productId}`,
      {
        headers: {
          Authorization:
            'Bearer sk_test_51NJJgKI84MzHZgpn4Qf3eGgXJqlIiXAvdbFPtsM8ovJ5ySTwnobgDXp5tsaL1W9lVhZJjZolBtrdak8PDTWfnLI300fpPkDRWU',
        },
      },
    )
    const productData = productResponse.data
    const image = productData.images[0]
    console.log(image, 'image')

    return {
      props: {
        name,
        productName,
        image,
      },
    }
  } catch (error) {
    console.error('Error fetching session data:', error)
    return {
      props: {},
    }
  }
}
