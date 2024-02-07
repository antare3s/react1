import React from 'react'

const Actividad3 = ({reyes}) => {

    const FilterKings = reyes.filter(rey => !rey.nombre.includes("g")).
        map((rey,index) => 
        <div className={`filterKingG-${index}`} >
            <div>{rey.nombre} come {rey.vacasComidas}</div>             
        </div>
    )



  return (
    <div>Actividad3
        Filtrar reyes y cuando no encuentre un rey mostrar mensaje de error
        <div className='reyes-act3'>
            {FilterKings}
        </div>
    </div>
  )
}

export {Actividad3}