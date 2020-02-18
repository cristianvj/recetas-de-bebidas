import React from 'react';
import Header from './component/Header';
import Formulario from './component/Formulario';
import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
<<<<<<< HEAD
import ModalProvider from './context/modalContext';
import ListaRecetas from './component/ListaRecetas';
>>>>>>> 5fa6b58627a9de53c3a0113ad222a8a34cb6f44d

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
<<<<<<< HEAD
        <ListaRecetas/>
        </ModalProvider>
          
        </div>
>>>>>>> 5fa6b58627a9de53c3a0113ad222a8a34cb6f44d
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
