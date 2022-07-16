import React from 'react'

const Paciente = () => {
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded mb-10">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">Hook</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">Jhonatan</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Correo: {''}
                <span className="font-normal normal-case">correo@corre.com</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
                <span className="font-normal normal-case">10 Diciembre 2022</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
                <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illo dicta ullam est eum sit in ad delectus ipsa, pariatur sapiente expedita excepturi officiis illum vitae laborum, voluptatibus perferendis impedit?</span>
            </p>
        </div>
    )
}

export default Paciente
