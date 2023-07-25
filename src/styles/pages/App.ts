import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: '100vh',
  justifyContent: 'center',
  gap: 3,
})

export const Header = styled('header', {
  display: 'flex',
  padding: '2rem',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: 1100,
  margin: '0 auto',
})
