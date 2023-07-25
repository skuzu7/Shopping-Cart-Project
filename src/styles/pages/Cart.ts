import { styled } from '..'

export const CartContainer = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',

  flexDirection: 'column',
  flexShrink: 0,
})

export const ImageContainer = styled('div', {
  width: '101px',
  height: '93px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
})

export const ProductContainer = styled('div', {
  display: 'flex',
})

export const ProductDetails = styled('div', {
  display: 'flex',

  width: '384px',
  justifyContent: 'center',
  marginLeft: '20px',

  gap: '24px',

  h1: {
    color: 'var(--grayscale-text, #C4C4CC)',
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '160%' /* 28.8px */,
    justifyContent: 'center',
    alignItems: 'center',
  },

  strong: {
    color: 'var(--grayscale-title, #E1E1E6)',
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '700px',
    lineHeight: '160%' /* 28.8px */,
  },
  button: {
    fontSize: '16px',
    fontWeight: '700px',
    lineHeight: '160%',
    color: '$greenPrincipal',
    backgroundColor: 'transparent',
    border: 'none',
    '&:hover': {
      color: '$greenLight', // Cor de fundo diferente ao passar o mouse
    },
  },
})

export const TotalContainer = styled('div', {
  display: 'flex',
  flexDirection: ' column',
  marginTop: '-300px',

  strong: {
    display: 'flex',
    color: '$text',
    fontSize: '20px',
    gap: '100px',
    marginTop: '100px',
  },

  button: {
    marginTop: '100px',
  },
})
