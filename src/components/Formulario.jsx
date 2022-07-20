import { useEffect, useState } from "react"
import ErrorFormulario from "./ErrorFormulario"
import Paciente from "./Paciente"


const Formulario = ({pacientes, setPacientes,paciente, setPaciente}) => {

    const [nombre, setNombre ] = useState('')
    const [propietario, setPropietario ] = useState('')
    const [email, setEmail ] = useState('')
    const [fecha, setFecha ] = useState('')
    const [sintomas, setSintomas ] = useState('')

    const [error, setError] = useState(false)

    useEffect(() =>{
        if ( Object.keys(paciente).length>0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }

        /* console.log(paciente); */
    },[paciente])

    const handleSubmit = (e) =>{
        e.preventDefault()
        //valiacion del form
        if ([nombre,propietario,email,fecha,sintomas].includes('')) {
            console.log('Hay campos vacios')
            setError(true)
            return
        }
        setError(false)

        // Objeto de Paciente
        const objPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
        }

        if (paciente.id) {
            console.log('Editado');
            objPaciente.id = paciente.id;
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState)
            setPacientes(pacientesActualizados)
            setPaciente({})
        } else{
            //Nuevo registro
            objPaciente.id = self.crypto.randomUUID()
            setPacientes([...pacientes, objPaciente])
        }


        //Reiniciar form
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded py-10 px-5 mb-10 mx-5">

                {error &&
                <ErrorFormulario>Campos obligatorios</ErrorFormulario>
                }

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={ (e) => setPropietario(e.target.value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Correo Electrónico</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Correo electrónico del Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 rounded-md"
                        value={fecha}
                        onChange={ (e) => setFecha(e.target.value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>
                    <textarea
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los Síntomas"
                        name=""
                        id="sintomas"
                        cols="30"
                        rows="10"
                        value={sintomas}
                        onChange={ (e) => setSintomas(e.target.value) }
                        >
                    </textarea>
                </div>

                <input
                    className="bg-indigo-600 w-full p-3 text-white rounded uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                    type="submit"
                    value={paciente.id ? "Editar Paciente": "Agregar paciente"}
                />

            </form>
        </div>
    )
}

export default Formulario
