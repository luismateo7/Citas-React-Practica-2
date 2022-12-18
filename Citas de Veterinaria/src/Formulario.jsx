import { useState, useEffect } from 'react'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

    const[nombre, setNombre] = useState('');
    const[propietario, setPropietario] = useState('');
    const[email, setEmail] = useState('');
    const[fecha, setFecha] = useState('');
    const[sintomas, setSintomas] = useState('');

    const[mensajeError, setMensajeError] = useState(false);
    
    const generarId = ()=>{
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36)
        
        return random + fecha;
    }
    
    useEffect(()=>{
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
        }
    }, [paciente])

    const handleSubmit = (e)=>{
        e.preventDefault();

        //Validar el formulario
        if([nombre, propietario, email, fecha, sintomas].includes('')){
            return setMensajeError(true);
        }
        else setMensajeError(false);

        //Objeto Paciente que esta en State osea que esta en el Formulario
        let objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }

        if(paciente.id){
            //Editando Paciente
            objetoPaciente.id =  paciente.id;

            const pacientesActualizado = pacientes.map( pacienteState =>
                pacienteState.id === objetoPaciente.id ? objetoPaciente : pacienteState)

            setPacientes(pacientesActualizado);
            setPaciente({});
        }
        else{
            //Agregando Paciente
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }

        //Reiniciar el formulario
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');
    }

    return (
        <div className="my-10 md:w-2/5">
            <p className='font-black text-3xl text-center'>Seguimiento de Pacientes</p>
            <p className='text-lg mt-5 text-center'>Añade Pacientes y {' '}
                <span className='text-indigo-600 font-bold'>Administralos</span>
            </p>

            <form className="mt-10 bg-white-100 ml-5 px-5 bg-white rounded-md py-10" onSubmit={handleSubmit}>

                { mensajeError && (
                    <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
                        <p>Todos los campos son necesarios</p>
                    </div>
                )}

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
                    className="rounded-md p-2 w-full mt-3 mb-5 bg-indigo-600 text-white font-bold hover:bg-indigo-700"
                    value={paciente.id ? 'EDITAR PACIENTE' : 'AGREGAR PACIENTE'}
                />
            </form>
        </div>
  )
}

export default Formulario