import React from 'react';
import { Link } from 'react-router-dom';
import './Characters.css'




const Characters = ({characters, loading, filtroBusqueda}) => {



    return (
        (loading) ? (
            <h1 className='display flex justify-center'>
                <i className="fa-10x fas fa-sync fa-spin"></i>
            </h1>
        ): (
            <div className='display flex flex-col'>
                <div className="buscador">                   
                    <input 
                        className="appearance-none border rounded w-full py-2  px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="buscar" onChange={filtroBusqueda} name="buscar" type="text" placeholder="Buscar"/>                            
                    
                </div>
                <div className="fondo w-full display flex flex-wrap justify-evenly">


                    {characters.map(character => (              
                    <Link to={`/personaje/${character.id}`} key={character.id}>
                        <div>
                            <div className="card-container p-3 w-80 border border-black display flex flex-col rounded-lg text-black hover:bg-yellow-700 cursor-pointer">
                                <div className="head-container rounded-lg display flex flex-col text-center mb-4 border border-black">
                                    <img className="rounded-lg" src={character.image} alt="" />
                                    <span className="font-black font-mono my-3">{character.name}</span>
                                </div>
                                <div className="body-container text-center display flex flex-col">
                                    <span>Especie: {character.species}</span>
                                    <span>Género: {character.gender}</span>
                                </div>
                            </div>
                        </div>                     
                    </ Link>
                    ))}
                </div>
            </div>
        )     
    )        
    
}

export default Characters

