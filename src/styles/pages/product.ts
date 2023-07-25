import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',
  maxWidth: 1188,
  margin: '0 auto',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: '625px',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 0,
  padding: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  marginLeft: '40px',

  img: {
    objectFit: 'cover',
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '40px',

  h1: {
    fontSize: '40px',
    color: '$text',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '20px',
    color: '$greenPrincipal',
  },

  p: {
    marginTop: '2rem',
    lineHeight: '1.6',
    color: '$text',
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$greenPrincipal',
    border: 0,
    color: '$white',
    borderRadius: '5px',
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '20px',
    transition: 'background-color 0.3s ease',

    '&:hover': {
      backgroundColor: '$greenLight', // Cor de fundo diferente ao passar o mouse
    },
  },
})
