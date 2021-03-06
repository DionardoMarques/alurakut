//Todo componente deve ser nomeado com a letra maiúscula, pois não é uma tag
//Importando a biblioteca do styled components
import styled from 'styled-components';

//Todo componente deve ser nomeado com a letra maiúscula, pois não é uma tag
//Os componentes criados através do comando "const" são novas tags do HTML que poderão ser usadas dentro do "return"
//A crase ` sempre indica o início do código CSS e consequentemente o fim dele

const Box = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 14px;
  border-bottom: 3px solid #e402a2;
  .boxLink {
      font-size: 14px;
      color: #2E7BB4;
      text-decoration: none;
      font-weight: 800;
  }
  .boxLink a {
      font-size: 50px;
  }

  .title {
      font-size: 32px;
      font-weight: 400;
      margin-bottom: 20px;
  }
  .subTitle {
      font-size: 18px;
      font-weight: 400;
      margin-bottom: 20px;
  }
  .smallTitle {
      margin-bottom: 20px;
      font-size: 16px;
      font-weight: 700;
      color: #333333;
      margin-bottom: 20px;
  }

  hr {
      margin-top: 12px;
      margin-bottom: 8px;
      border-color: transparent;
      border-bottom-color: #ECF2FA;
  }

  input {
      width: 100%;
      background-color: #F4F4F4;
      color: #333333;
      border: 0;
      padding: 14px 16px;
      margin-bottom: 14px;
      border-radius: 10000px;
      ::placeholder {
          color: #333333;
          opacity: 1;
      }
  }

  button {
      border: 0;
      padding: 8px 12px;
      color: #FFFFFF;
      border-radius: 10000px;
      background-color: #6F92BB;
  }
`;

//Exportando o componente "Box" para importar em outros arquivos e poder utilizá-lo
export default Box