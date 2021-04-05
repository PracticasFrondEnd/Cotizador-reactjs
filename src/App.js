import React, {Fragment} from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;


function App() {
  return (
    <Fragment>
      <Contenedor>
        <Header
          titulo='Cotizador de seguros'
        />
        <ContenedorFormulario>

        </ContenedorFormulario>
      </Contenedor>
    </Fragment>
  );
}

export default App;
