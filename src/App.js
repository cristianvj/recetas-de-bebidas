import React from 'react';
import Header from './component/Header';
import Formulario from './component/Formulario';
import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
import ModalProvider from './context/modalContext';

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
        <Header/>
          <div className="container mt-5">
            <div className="row">
              <Formulario/>
            </div>
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
