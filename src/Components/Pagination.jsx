import React from 'react'
import './Pagination.css'

const Pagination = ({prev, next, onPrevious, onNext}) => {

    const handlePrevious = () => {
        onPrevious()
    }

    const handleNext = () => {
        onNext()
    }


    return (
        <nav className="nav">
            <ul className="display flex justify-center list-none"> 
                {
                    prev ?
                <li>
                    <button onClick={handlePrevious} className="border border-green bg-green-200 
                    rounded p-2 m-2 hover:bg-yellow-500 font-italic">Anterior</button>
                </li>
                : null}
                {
                    next ?
                <li>
                    <button onClick={handleNext} className="border border-green bg-green-200 
                    rounded p-2 m-2 hover:bg-yellow-500 font-italic">Siguiente</button>
                </li>
                : null
                }
            </ul>
        </nav>
    )
}

export default Pagination
