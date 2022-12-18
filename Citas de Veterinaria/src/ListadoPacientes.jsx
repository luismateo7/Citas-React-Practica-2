import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  return (
    <div className="my-10 md:w-3/5">
        <p className='font-black text-3xl text-center'>Listado de Pacientes</p>
        <p className='text-lg mt-5 text-center'> Administra tus {' '}
            <span className='text-indigo-600 font-bold'>Pacientes</span>
        </p>

        <div className='md:h-screen overflow-y-scroll'> 
            {pacientes.map((paciente)=>(
                <Paciente
                    paciente={paciente}
                    key={paciente.id}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                />
            ))}
        </div>
    </div>
  )
}

export default ListadoPacientes