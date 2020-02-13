import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 30px 0;
  /*Aqui com o calc(100% - 60px) eu estou ocupando toda a altura do container, menos 60px do meu Header*/
  height: calc(100% - 60px);
`;
