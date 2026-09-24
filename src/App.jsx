import Coleccion from "./componentes/coleccion"
import Favoritos from "./componentes/favoritos"
import Info from "./componentes/info"
import Inicio from "./componentes/inicio"
import Pokemon from "./componentes/pokemon"
import Usuario from "./componentes/usuario"

function App() {
    
  return (
      <>
        <Inicio />        
        <Coleccion />
        <Favoritos />
        <Info />
        <Usuario />
        <Pokemon />
      </>
  )
}

export default App