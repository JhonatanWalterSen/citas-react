import React from 'react'

const ErrorFormulario = ({children}) => {
    return (
    <div className="text-center bg-red-600 text-white py-3 rounded mb-3 uppercase font-bold">
        <p>{children}</p>
    </div>
    )
}

export default ErrorFormulario
