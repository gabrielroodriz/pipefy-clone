import {
  createGlobalStyle
} from 'styled-components'

export default createGlobalStyle `
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

/**Reset padrão do navegador */
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
/** Assim o elemento ocupa a tela inteira, assim não vamos ter 
  * um scroll denecessário na tela
 */
  html, body, #root {
    height: 100%;
  }

  body {
    font: 14px 'Roboto', sans-serif;
    background: #ecf1f8;
    color: #333;
    -webkit-font-smoothing: antialiased !important; /** Comando para deixar a fonte um pouco mais detalhada */
  }
  ul {
    list-style: none;
  }
`;