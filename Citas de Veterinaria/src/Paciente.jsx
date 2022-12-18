import React from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {nombre, propietario, email, fecha, sintomas, id} = paciente;

    const handleEliminar = ()=>{
        let respuesta = confirm("Deseas Eliminar este paciente ?")

        if(respuesta) eliminarPaciente(id)
    }

  return (
    <div>
            <div className="mt-10 bg-white-100 mx-5 px-5 bg-white rounded-md py-10">
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                    <span className="font-normal normal-case">{nombre}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                    <span className="font-normal normal-case">{propietario}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                    <span className="font-normal normal-case">{email}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Fecha: {''}
                    <span className="font-normal normal-case">{fecha}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                    <span className="font-normal normal-case">{sintomas}</span>
                </p>

                <div className='flex justify-between botones'>
                    <button
                        className='py-2 px-10 bg-indigo-600 rounded-lg hover:bg-indigo-700 font-bold uppercase text-white'
                        type='button'
                        onClick={()=> setPaciente(paciente)}
                    >Editar</button>

                    <button
                        className='py-2 px-10 bg-red-600 rounded-lg hover:bg-red-700 font-bold uppercase text-white'
                        type='button'
                        onClick={handleEliminar}
                    >Eliminar</button>
                </div>
            </div>
        </div>
  )
}

export default Paciente