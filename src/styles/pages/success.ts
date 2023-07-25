import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: '656',

  h1: {
    fontSize: '40px',
    color: '$text',
  },
  p: {
    fontSize: '20px',
    maxWidth: '560',
    marginTop: '2rem',
    lineHeight: '1.4',
  },

  a: {
    marginTop: '5rem',
    display: 'block',
    fontsize: '20px',
    color: '$greenPrincipal',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: '130px',
  height: '145px',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '4rem',

  img: {
    objectFit: 'cover',
  },
})
