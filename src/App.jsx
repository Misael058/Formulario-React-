


import React, { useState } from "react";
import { FaFileContract } from "react-icons/fa";




function App() {

  const [porcentagem, setPorcentagem] = useState();
  const [dados , setDados] = useState ({
    name: "",
    email: "",
    estadoCivil: "",
    genero: "",
  
  
  
  
  })


  
const verificacao = (event) => {
  let name = event.target.name
  const valor = event.target.value
  setDados({...dados, [name]: valor})
  contagem()
  console.log(dados)
}

const vazio = dados.name === '' || dados.email === '' || dados.genero === null;
const emailVeri=  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const contagem = () => {
  let contador = 0;
  let progresso = 25
  if (dados.name ) {
    const corteName = dados.name.split(" ");

    if (corteName[1]) {
      contador += progresso;

    }
   
    
  }
  if (dados.email ) {

    if (emailVeri.test(dados.email)) {
      contador += progresso;

    }
  }
  if (dados.genero ) {
    contador += progresso;
    
  }
  if (dados.estadoCivil) {
    contador += progresso;
    
  }
   
  return contador;
  
}


function submit () {
  alert("Dados enviados com sucesso!!")
  
}

  

  
  return (
    <div className='App'>
      <h1>Formulario <FaFileContract /></h1>

      <main>
       <div className="bar-container ">
        <div className="bar" style={{width: `${contagem()}%` }}></div>
       </div>
        <div className='form-group'>
          <label htmlFor=''>Nome Completo</label>
          <input name="name" onChange={verificacao} value={dados.name} />
        </div>
        <div className='form-group'>
          <label htmlFor=''>E-mail</label>
          <input name="email" onChange={verificacao} value={dados.email} />
        </div>
        <div className='form-group'>
          <label htmlFor=''>Estado Civil</label>
          <select name="estadoCivil"onChange={verificacao} >
            <option value=''>- selecione...</option>
            <option name='solteiro'  value='solteiro'>Solteiro</option>
            <option name='casado' value='casado'>Casado</option>
            <option name= "divorciado"  value='divorciado'>Divorciado</option>
          </select>
        </div>
        <div className='form-group' name='genero' onChange={verificacao} >
          <label htmlFor=''>Gênero</label>
          <div className='radios-container'>
            <span>
              <input type='radio' name="genero" /> Masculino
            </span>
            <span>
              <input type='radio'name="genero"  /> Feminino
            </span>
          </div>
        </div>
        <button onClick={submit} disabled= {vazio} >Enviar Formulário</button>
      </main>
    </div>
  );
}

export default App;