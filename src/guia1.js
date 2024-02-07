import React from 'react';
import { useRef, useState } from 'react';
import './style.css';

export default function App() {
  const [title, setTitle] = useState('Hello StackBlitz!')
  const [cnt, setCnt] = useState(0)
  const [inputA, setInputA] = useState(0)
  const [inputB, setInputB] = useState(0)
  const [inputR, setInputR] = useState(0)
  const refCaja = useRef();
  const reyRojo = 'https://dummyimage.com/300x100/f00004/#FF000.png';
  const reyAzul = 'https://dummyimage.com/300x100/0400f0/#FF000.png';
  const reyVerde = 'https://dummyimage.com/300x100/04f000/#FF000.png';
  const reyAmarillo = 'https://dummyimage.com/300x100/e0f000/#FF000.png';
  const reyGris = 'https://dummyimage.com/300x100/a1a1a1/#FF000.png';
  const nameKing = ['Rey rojo', 'Rey Azul', 'Rey verde'];
  const [smsKing, setSmsKing] = useState('')
  // const [aficion, setAficion] = useState('')  
  const [cntMsg, setCntMsg] = useState(0)
  // https://html6.es/curso/aficiones.txt  
  const reyesGodos=[
    {
      nombre: "Ataúlfo",
      aficion: "comer toros sin pelar",
    },{
      nombre: "Recesvinto",
      aficion: "leer a Hegel en arameo",
    },{
      nombre: "Teodorico",
      aficion: "la cría del escarabajo en almíbar"
    }
  ]
 
  // https://html6.es/curso/conversor.txt

  function incrementar(e) {
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
    if (e.target.innerHTML >= 10) {
      console.log('entroo 10');
      e.target.innerHTML = 1;
    }
    if (e.target.innerHTML >= 5) {
      console.log('entroo');
      e.target.style.backgroundColor = 'red';
    } else {
      e.target.style.backgroundColor = 'blue';
    }
  }
  const convertir = () => {
    let cambio = 4200;
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML * cambio);
  };
  const changeText = (e) => {
    console.log('Text ', e.target.value);
    refCaja.current.innerHTML = e.target.value;
  };
  const changeKing = (e) => {
    e.target.parentNode.style.backgroundColor = 'white';
    if (e.target.src != reyGris) {
      e.target.src = reyGris;
    } else if (e.target.src == reyGris) {
      e.target.style.visibility = 'hidden';
    } else {
    }
  };
  const cambiarTexto = (e) => {
    if (e.target.innerHTML == 'Visto') {
      e.target.innerHTML = '';
    } else {
      e.target.innerHTML = 'Visto';
    }
  };
  const changeTitle = () => {
    setTitle('Learn React')
    console.log(title)
  }
  const cnt1 = () => {
    setCnt(cnt+1)    
  }
  const cnt2 = () => {
    setCnt(cnt-1)    
  }
  const Reset = () => {
    setCnt(0)    
  }
  const inA = (e) => {
    let numberA = Number(e.target.value);    
    setInputA(numberA)   
  }
  const inB = (e) => {
    let numberB =  Number(e.target.value); 
    setInputB(numberB)   
  }
  const sum =()=>{
    let op = Number(inputA + inputB)
    setInputR(op)
  }

  const nextSms = () => {
    let cnt = cntMsg+1;
    setCntMsg(cnt)
    let sms =''
    if(cnt == 1){
      sms= <h2> La aficcion principal de <span className="king-name" > {reyesGodos[cnt-1].nombre} </span> es <span className="king-aficion"> {reyesGodos[cnt-1].aficion} </span> </h2>
      setSmsKing(sms)
    }else if(cnt == 2){
      sms= <h2> La aficcion principal de <span className="king-name" > {reyesGodos[cnt-1].nombre} </span> es <span className="king-aficion"> {reyesGodos[cnt-1].aficion} </span> </h2>
      setSmsKing(sms)
    }else if(cnt == 3){
      sms= <h2> La aficcion principal de <span className="king-name" > {reyesGodos[cnt-1].nombre} </span> es <span className="king-aficion"> {reyesGodos[cnt-1].aficion} </span> </h2>
      setSmsKing(sms)
    }else{
      setSmsKing('')
      setCntMsg(0)
    }
    
  }

  return (
    <div>
      <div ref={refCaja} className="caja" onClick={incrementar}>
        1{' '}
      </div>
      <div>
        <p>Contador: <span>{cnt}</span> </p>
        <button onClick={cnt1}>+</button>
        <button onClick={cnt2}>-</button>
        <button onClick={Reset}>Reset</button>
      </div>
      <div className="summadorInput">
        
      <input type="number" placeholder="A" value={inputA}  onChange={inA}/>
        <input type="number" placeholder="B" value={inputB}  onChange={inB}/>
        <input type="number" value={inputR}  readOnly/>
        <button onClick={sum} > Sum</button>

      </div>

      <div className="king-activity">
        <button onClick={nextSms} >Ver siguiente </button>
        <p> {smsKing} </p>
      </div>


      <button onClick={convertir}>incrementar</button>
      <button onClick={changeTitle}>Title</button>
      <h1>{title}</h1>
      <p>Start editing to see some magic happen :)</p>
      <input onChange={changeText} />
      <div className="contents-kings">
        <div className="caja">
          <img className="rey" src={reyRojo} onClick={changeKing} />
          <div onClick={cambiarTexto} className="nombre">
            {nameKing[0]}
          </div>
        </div>
        <div className="caja">
          <img className="rey" src={reyAzul} onClick={changeKing} />
          <div onClick={cambiarTexto} className="nombre">
            {nameKing[1]}
          </div>
        </div>
        <div className="caja">
          <img className="rey" src={reyVerde} onClick={changeKing} />
          <div onClick={cambiarTexto} className="nombre">
            {nameKing[2]}
          </div>
        </div>
      </div>
    </div>
  );
}
