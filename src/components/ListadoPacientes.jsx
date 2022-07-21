import React ,{ useEffect } from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

    useEffect(() => {
        (pacientes.length > 0) && console.log('Nuevo paciente');
    }, [pacientes])

    return (
        <div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll">
            {   pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black md:text-3xl text-2xl text-center text-gray-400">Administra</h2>
                    <p className="text-xl text-center mt-5 mb-10 text-white">
                        Su cita del {''}
                        <span className="text-indigo-600 font-bold">Paciente</span>
                    </p>
                    {pacientes.map( (paciente)=>(
                            <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}/>
                    ) )}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay Pacitentes</h2>
                    <p className="text-xl text-center mt-5 mb-10">
                        Agrega pacientes {''}
                        <span className="text-indigo-600 font-bold">a continuación..</span>
                    </p>
                </>
            )}
        </div>
    )
}

export default ListadoPacientes
