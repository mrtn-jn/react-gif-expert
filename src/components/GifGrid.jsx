import { useState, useEffect } from "react";
// import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ cat }) => {
  /*
  const [images, setImages] = useState([]);

  const getImages = async() => {
    const newImages = await getGifs( cat );
    setImages(newImages);
  }

  // useEffect dispara efectos secuendarios cuando algo sucede, en el punto que quiera
  // 1er arg: funcion que se va ejecutar
  // el 2do arg son las condiciones con las que se va a volver a ejecutar la funcion
  // si dejo un array de dependencias (condiciones) vacio, quiere decir que la funcion del 1er arg
  // solo se va a disparar la primera vez que se construya el componente 
  useEffect( () => {
    getImages();
  }, [])
  */
  //todo lo anterior pude reducirse a un CUSTOM HOOK, donde desestructuramos un objeto
  //y devolvemos images, isLoading en base a una categoria
  //quedaria asi:
  const { images, isLoading } = useFetchGifs( cat );
  
  console.log( isLoading );

  return (
    <>
      <h3>{ cat }</h3>
      {
        // ver Cargando
        // usansdo ternario        
        // isLoading 
        // ? ( <h2>Cargando...</h2> )
        // : null

        // usando and logico
        isLoading && ( <h2>Cargando...</h2> )
      }

      <div className="card-grid">
        {
          images.map( (image) => (
            <GifItem 
              key={ image.id }
              { ...image }
            /> 
          ))
        }
      </div>
    </>
  )
}
