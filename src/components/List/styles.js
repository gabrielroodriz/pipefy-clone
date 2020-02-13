import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${props => props.done ? 0.6 : 1}
  /**
  Essa sintaxe é a junção de três propriedades Flex:
  [Flex-grow]: A habilidade de esticar caso a tela fique maior
  [Flex-shrink]: A habilidade de diminuir caso a tela fique menor
  [Flex-basis]: O tamanho daquela propriedade, lendo a largura

  com o & + div (Toda a div que não tenha antes dela uma div)
  Estou pegando a segunda lista, já que ela não possui uma div antes dela.
  */
  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }
  header {
    display: flex; /**Um elemento ao lado do outro*/
    justify-content: space-between; /**Cada um fique em um canto*/
    align-items: center;/**Buton maior que o H2 */
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }
    button {
      width:42px;
      height: 42px;
      border-radius: 18px;
      background: #3b5dfd;
      border: 0;
      cursor: pointer;
    }
  }
  ul {
    margin-top: 30px;
  }
`;
