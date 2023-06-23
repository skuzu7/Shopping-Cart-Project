import { createStitches } from '@stitches/react'

export const { config, styled, globalCss, getCssText,theme, createTheme, } =
  createStitches({
    theme: {
      colors: {
        rocketseat: '#8257e6',
        white:'#FFF',
        title:'#E1E1E6',
        text: '#C4C4CC',

        greenLight:'#00b37e',
        greenPrincipal:'#00875f'
      },
    },
  })
