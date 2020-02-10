import React, {useContext, useState} from 'react';
import {CategoriasContext} from '../context/CategoriasContext'

const Formulario = () => {

  const [busqueda, setBusqueda] = useState({
    nombre: '',
    categoria: '',
  });

  const {categorias} = useContext(CategoriasContext);

  // Función para leer los contenidos
  const obtenerDatosReceta = e =>{
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    })
  }  

  return (
    <form action="" className="col-12">
      <fieldset className="text-center">
        <legend>Busca bebidas por categoria o ingredientes: </legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="nombre"
            className="form-control"
            type="text"
            placeholder="Buscar por Ingrediente"
            onChange={obtenerDatosReceta}
            />
        </div>
        <div className="col-md-4">
          <select 
            name="categoria"
            className="form-control"
            onChange={obtenerDatosReceta}
          >
            <option value="">--Selecciona Categoria--</option>
            {
              categorias.map(categoria=>(
                <option key={categoria.strCategory} value={categoria.strCategory}> {categoria.strCategory} </option>
              ))
            }
          </select>
        </div>
        <div className="col-md-4">
          <input
            className="btn btn-block btn-primary"
            type="submit"
            Value="Buscar Bebidas"
            />
        </div>
      </div>
    </form>
  );
}

export default Formulario;
