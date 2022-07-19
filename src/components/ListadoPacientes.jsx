import React ,{ useEffect } from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({pacientes, setPaciente}) => {

    useEffect(() => {
        (pacientes.length > 0) && console.log('Nuevo paciente');
    }, [pacientes])

    return (
        <div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll">
            {   pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Pacitentes</h2>
                    <p className="text-xl text-center mt-5 mb-10">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>
                    {pacientes.map( (paciente)=>(
                            <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}/>
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
