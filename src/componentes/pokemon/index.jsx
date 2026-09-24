import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import "./style.css"

function Pokemon() {
    const {name} = useParams();
    const [datapoke, setDatapoke] = useState([]);

    useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.json())
      .then(responseData => setDatapoke(responseData))
      .catch(error => console.error("Error:", error));
    }, [name]); 
    console.log(datapoke)

    if (!datapoke || !datapoke.id) return <p>Cargando...</p>;
     
    return (
      <>
        {datapoke.name}
        {datapoke.abilities[0].ability.name}
      </>
    )
}

export default Pokemon