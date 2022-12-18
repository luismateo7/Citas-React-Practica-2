import Header from "./Header"
import Formulario from "./Formulario"

function App() {

  return (
    <div className="App">
      <Header></Header>
      <div className="md:flex">
        <Formulario></Formulario>
      </div>
    </div>
  )
}

export default App
