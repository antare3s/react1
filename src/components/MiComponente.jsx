import React from 'react'
import Atanagildo from '../img/rey_atanagildo.png';
import Ataulfo from '../img/rey_ataulfo.png';
import Ervigio from '../img/rey_ervigio.png';
import Incognito from '../img/rey_incognito.png';
import Leogivildo from '../img/rey_leogivildo.png';
import Recesvinto from '../img/rey_recesvinto.png';
import Sisebuto from '../img/rey_sisebuto.png';
import Teodorico from '../img/rey_teodorico.png';
const MiComponente = ({rey,setTotal}) => { 
  let name = (rey.nombre).toLowerCase()  
  const ruta = `https://html6.es/img/rey_${name}.png`    
  const comprar = (elemento) => {
    // forma 1 usando todo del use state
    //let newTotal = Number(total) + Number(rey.precio)
    //setTotal(newTotal)
    // forma 2 usando solo settotal  mejor esta
    setTotal((e) => Number(e) + Number(rey.precio))
    elemento.target.parentNode.style.display="none"    
  }
  return (
    <div style={{backgroundColor: rey.color }} className='rey' >
      <img src={ruta} />
      <p>nombre: {name}</p>      
      <p className='precio' >precio: {rey.precio} USD</p>
      <p className='label'>
        <span  style={{ color: "red" }}> {name.toUpperCase()} </span> ha comido {rey.vacasComidas} en sus {rey.reinado} años de reinado
      </p>
      <button onClick={comprar} >Comprar</button>      
    </div>
  )
}

MiComponente.defaultProps={
//    rey.reses:"pocas",
//    rey.nombre:"Rey Godo"
}

export {MiComponente}