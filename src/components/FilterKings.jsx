import React from 'react'


const FilterKings = ({reyes}) => {
  const removeKingG = (e) =>{
    console.log('remove ', e.target.parentNode)
    e.target.parentNode.remove()
    
}

const FilterKings = reyes.filter(rey => !rey.nombre.includes("g")).
map((rey,index) => 
<div className={`filterKingG-${index}`} >
  <div>{rey.nombre} come {rey.vacasComidas}</div> 
  <button onClick={removeKingG} >Remove</button>
</div>
)
  return (
    <div>
    <h1>
      Actividad mostrar los reyes que no tengan la 
      letra G y porder eliminarlos con un boton usar remove()
    </h1>
    {FilterKings}
    
  </div>
  )
}



export {FilterKings} 