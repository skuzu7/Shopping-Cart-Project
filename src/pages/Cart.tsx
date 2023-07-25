import { useCart } from '@/context/CartContext'
import {
  CartContainer,
  ImageContainer,
  ProductContainer,
  ProductDetails,
  TotalContainer,
} from '@/styles/pages/Cart'
import axios from 'axios'
import Image from 'next/image'
import { useState } from 'react'
import { Button, Offcanvas, Badge } from 'react-bootstrap'
import { FaTrash, FaShoppingCart } from 'react-icons/fa'

export const Cart = () => {
  const { cartItems, removeItem, getTotalPrice } = useCart()
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const finalizePurchase = async () => {
    try {
      // Crie um array contendo os IDs e preços dos itens do carrinho
      const itemsData = cartItems.map((item) => ({
        id: item.id,
        priceId: item.priceId, // Assumindo que cada item tem uma propriedade 'price' que representa o preço do item no Stripe
      }))

      console.log(itemsData)

      // Envie os IDs e preços dos itens do carrinho para o servidor para finalizar a compra
      const response = await axios.post('/api/checkout', { itemsData })
      const { sessionId } = response.data

      // Redirecione o usuário para a página de checkout do Stripe
      window.location.href = sessionId
    } catch (error) {
      // Se ocorrer algum erro na chamada para o servidor, você pode tratá-lo aqui.
      console.error('Erro na compra:', error)
      alert(
        'Ocorreu um erro ao processar a compra. Por favor, tente novamente mais tarde.',
      )
    }
  }
  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{
          backgroundColor: 'transparent',
          color: 'white',
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        <FaShoppingCart style={{ fontSize: '30px', marginRight: '8px' }} />
        {cartItems.length > 0 && <Badge bg="danger">{cartItems.length}</Badge>}
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{ background: 'var(--grayscale-elements, #202024)' }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CartContainer>
            {cartItems.map((item) => (
              <li key={item.id}>
                <ProductContainer>
                  <ImageContainer>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={94}
                      height={94}
                    />
                  </ImageContainer>
                  <ProductDetails>
                    <h1>{item.name}</h1>
                    <strong> R$ {item.price}</strong>
                    <button onClick={() => removeItem(item.id)}>
                      <FaTrash />
                    </button>
                  </ProductDetails>
                </ProductContainer>
              </li>
            ))}
          </CartContainer>
          <TotalContainer>
            <strong>
              <div>Total: R$</div> {getTotalPrice().toFixed(2)}
            </strong>
            <Button onClick={finalizePurchase}>Finalizar Compra</Button>
          </TotalContainer>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Cart
