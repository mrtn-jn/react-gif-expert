import { useState } from 'react';
import { AddCategory, GifGrid } from './components'; //las toma del archivo index, no se lo nombra ya que lo busca por defecto

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState( [ 'One Punch' ] );
  
  const onAddCategory = (newCategory) => {
    //si la categoria ya existe no hace nada
    if ( categories.includes(newCategory) ) return;


    setCategories([ newCategory, ...categories ]);
  }

  return (
    <>
      {/* Titulo */}
      <h1>Gif Expert App</h1>

      {/* Input */}
      <AddCategory 
        // setCategories={ setCategories }
        // onNewCategory={ (event) => onAddCategory(event) }
        // onNewCategory={ function(event) { onAddCategory(event) } }
        onNewCategory={ onAddCategory }
      />
      {/* Listado de gifs */}
      {/* <button onClick={ onAddCategory }>Agregar Categoria</button> */}
      {/* <ol> */}
        { 
        categories.map( (cat) => (//{
          // return <li key={ cat }>{ cat }</li>
          // ahora quiero listar por categorias
          /*return*/ (
            // <div key={ cat }>
            //   <h3>{ cat }</h3>
            //   <li>{ cat }</li>
            // </div> 
            //el bloque anterior de div lo voy a cambiar por el componente GifGrid
            <GifGrid  
              cat={ cat }
              key={ cat }
            />
          ))
          // veo que esta funcion flecha solo devuelve un return por lo tanto puedo escribirlo asi
          // sacando las llaves de la funcion y eliminando la palabra return

  
          
        /*}*/)
        }
       
      {/* </ol> */}
        {/* gif item */}
    </>
  )
}
