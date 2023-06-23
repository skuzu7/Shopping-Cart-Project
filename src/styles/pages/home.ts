import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  maxWidth: 1200,


});

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  display: 'flex',
  flexDirection: 'column',


  footer: {
    background: 'rgba(32, 32, 36, 0.9)',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'space-between',

    padding: '32px',


    opacity: 0,
    transition: 'opacity 0.3s ease',

  },

  strong: {
    color: '$greenPrincipal',
  },

  '&:hover': {
    footer: {
      opacity: 1,
    },
  },
});
