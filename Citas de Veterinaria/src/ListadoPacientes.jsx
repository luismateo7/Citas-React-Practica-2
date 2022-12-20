import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  return (
    <div className="my-10 md:w-3/5">

        {pacientes && pacientes.length ?
            (<>
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
            </>):
            (<>
                <p className='font-black text-3xl text-center'>No hay pacientes</p>
                <p className='text-lg mt-5 text-center'> Comienza agregando pacientes y {' '}
                    <span className='text-indigo-600 font-bold'> aparecerán en este lugar</span>
                </p>
            </>)
        }
    </div>
  )
}

export default ListadoPacientes