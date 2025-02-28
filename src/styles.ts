import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelhoClaro: '#E66767',
  corTexto: '#FFEBD9',
  corFundo: '#FFFFFF'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '820px',
  cellphone: '768px'
}

const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }
  body {
    background-color:#FFF8F2;
  }
  .container{
    max-width:1024px;
    width:100%;
    margin:0 auto;
  }

  /* CONFIGURAÇÕES DA SCROLLBAR */

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background:#E66767;
}

::-webkit-scrollbar-thumb {
    background: #FFEBD9;
    border: 2px solid #E66767;
}

*::selection {
    color: #fff;
    background: #E66767;
    -webkit-text-fill-color: #fff;
}
`
export default GlobalCss
