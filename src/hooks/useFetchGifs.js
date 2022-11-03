import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//un hook no es mas una funcion que regresa algo 
export const useFetchGifs = ( cat ) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async() => {
    const newImages = await getGifs( cat );
    setImages(newImages);
    setIsLoading(false);

  }

  useEffect( () => {
    getImages();
  }, [])

  return {
    // images: images,
    // desde ES6 cuando una propiedad apunta a una variable con el mismo nombre
    // podemos dejarlo así:
    images,
    isLoading
  }

}

