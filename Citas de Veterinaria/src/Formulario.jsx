import {useState} from 'react'

const Formulario = () => {

    const[nombre, setNombre] = useState('');
    const[propietario, setPropietario] = useState('');
    const[email, setEmail] = useState('');
    const[fecha, setFecha] = useState('');
    const[sintomas, setSintomas] = useState('');

    return (
        <div className="my-10 md:w-2/5">
            <p className='font-black text-3xl text-center'>Seguimiento de Pacientes</p>
            <p className='text-lg mt-5 text-center'>Añade Pacientes y {' '}
                <span className='text-indigo-600 font-bold'>Administralos</span>
            </p>

            <form className="mt-10 bg-white-100 ml-5 px-5 bg-white rounded-md py-10">

                <label htmlFor="mascota" className='block uppercase font-bold'>Nombre de la mascota</label>
                <input
                    type = 'text'
                    className='rounded-md border-2 p-2 w-full mt-3 mb-5'
                    placeholder='Nombre de la mascota'
                    id='mascota'
                    value={nombre}
                    onChange={e=> setNombre(e.target.value)}
                />

                <label htmlFor="propietario" className="uppercase font-bold ">Nombre del Propietario</label>
                <input
                    type="text"
                    className="rounded-md border-2 p-2 w-full mt-3 mb-5"
                    placeholder="Nombre del propietario"
                    id="propietario"
                    value={propietario}
                    onChange={e=> setPropietario(e.target.value)}
                />

                <label htmlFor="email" className="uppercase font-bold ">Email</label>
                <input
                    type="email"
                    className="rounded-md border-2 p-2 w-full mt-3 mb-5"
                    placeholder="Correo Electronico"
                    id="email"
                    value={email}
                    onChange={e=> setEmail(e.target.value)}
                />

                <label htmlFor="fecha" className="uppercase font-bold ">Fecha de Ingeso</label>
                <input
                    type="date"
                    className="rounded-md border-2 p-2 w-full mt-3 mb-5"
                    id="fecha"
                    value={fecha}
                    onChange={e=> setFecha(e.target.value)}
                />

                <label htmlFor="sintomas" className="uppercase font-bold ">Sintomas</label>
                <input
                    type="text"
                    className="rounded-md border-2 p-2 w-full mt-3 mb-5"
                    placeholder="Sintomas"
                    id="sintomas"
                    value={sintomas}
                    onChange={e=> setSintomas(e.target.value)}
                />

                <input
                    type="submit"
                    className="rounded-md p-2 w-full mt-3 mb-5 bg-indigo-600 text-white font-bold"
                    value={'AGREGAR PACIENTE'}
                />
            </form>
        </div>
  )
}

export default Formulario