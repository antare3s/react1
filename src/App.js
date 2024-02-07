import React from 'react';

import { useRef, useState } from 'react';
import {MiComponente} from './components/MiComponente'
import {FilterKings} from './components/FilterKings'
import {Actividad3} from './components/Actividad3'

import './style.css';


export default function App() {
  // https://html6.es/curso/misReyes.txt
  const reyes=[
    {
      nombre:"Atanagildo",
      color:"darkolivegreen",
      reinado:15,
      vacasComidas:9,
      precio:178
    },{
      nombre:"Ervigio",
      color:"crimson",
      reinado:20,
      vacasComidas:10,
      precio:169
    },{
      nombre:"Ataulfo",
      color:"peru",
      reinado:25,
      vacasComidas:5,
      precio:81
    },{
      nombre:"Leogivildo",
      color:"darkmagenta",
      reinado:10,
      vacasComidas:7,
      precio:126
    },{
      nombre:"Recesvinto",
      color:"royalblue",
      reinado:6,
      vacasComidas:5,
      precio:141
    },{
      nombre:"Sisebuto",
      color:"teal",
      reinado:30,
      vacasComidas:12,
      precio:69
    }
  ]
  // https://html6.es/curso/datos.txt
  const [total,setTotal]=useState(0)
  const reyCome = reyes.filter(rey =>rey.vacasComidas>=8).
    map(rey => <div>{rey.nombre} come {rey.vacasComidas}</div> )

  const reyFind = reyes.find(rey => rey.vacasComidas >= 10 && rey.vacasComidas <=12)  
  

  const reyInclu = reyes.filter(rey => rey.nombre.includes("i")).
  map(rey => <div>{rey.nombre} come {rey.vacasComidas}</div> )
  console.log('reyInclu ',reyInclu)







  return (
  <>
    <h2>Total a pagar {total} usd</h2>
    <div className='cajaCentral'>
      <div>
        <button onClick={() =>{setTotal(0)}} >Limpiar</button>
      </div>
      <ul>
      {     
        reyes.map((rey, index)=> (
          <li id={"rey-"+index}>
            <MiComponente rey={
              { 
                nombre:rey.nombre,
                color:rey.color, 
                precio:rey.precio,  
                reinado: rey.reinado,
                vacasComidas: rey.vacasComidas            
              }              
            } 
            setTotal={setTotal}         
            />  
          </li>          
        ))
      } 
      </ul>  
    </div>

    <div>
      <h1>Cantidad de vacas que comme</h1>
      <p>Forma 1 directa filter toma todo los resultados y map recorre el array de esos resultados</p>
        {
          reyes.filter(rey =>rey.vacasComidas>=8).
          map(rey => <div>{rey.nombre} come {rey.vacasComidas}</div> )
        }
      
      <p>forma 2 desde una constante</p>
      {reyCome}

      <p>Usod de find encuentra un resultado y lo entrega</p>
      {
        reyFind.nombre        
      }

      <p> includes</p>
      {reyInclu}
    </div>
   
     <FilterKings reyes={reyes} />

     <Actividad3 reyes={reyes} />
    
  </>
  );
}
