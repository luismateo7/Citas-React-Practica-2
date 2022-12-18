import Header from "./Header"
import Formulario from "./Formulario"
import ListadoPacientes from "./ListadoPacientes"

import { useState, useEffect } from 'react'

function App() {

  const [ pacientes, setPacientes ] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [ paciente, setPaciente ] = useState({});

  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes])

  const eliminarPaciente = id =>{
    const pacientesActualizados = pacientes.filter(pacienteIterando => pacienteIterando.id !== id)

    setPacientes(pacientesActualizados);
  }

  return (
    <div className="App">
      <Header></Header>

      <div className="md:flex">
        <Formulario
          paciente = {paciente}
          pacientes = {pacientes}
          setPaciente = {setPaciente}
          setPacientes = {setPacientes}
        />

        <ListadoPacientes
          pacientes = {pacientes}
          setPaciente = {setPaciente}
          setPacientes = {setPacientes}
          eliminarPaciente = {eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
