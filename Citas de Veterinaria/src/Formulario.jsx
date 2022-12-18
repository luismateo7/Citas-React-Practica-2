
const Formulario = () => {
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
            ></input>
        </form>
    </div>
  )
}

export default Formulario