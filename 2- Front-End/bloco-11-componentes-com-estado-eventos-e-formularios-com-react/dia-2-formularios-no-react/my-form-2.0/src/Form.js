import React from "react";
import SelectStates from "./SelectStates";
class Form extends React.Component {
    render (){
        const uppercase = (event) => {
            event.target.value = event.target.value.toUpperCase();
        }
        const validation = (event) => {
            if(event.target.value === '')alert('O campo é obrigatório!');
        }
        const checkStartWithNumber = (event) => {
           if(event.target.value.match(/^\d/))event.target.value = '';
        }
        const clickouEmMim = (event) => {
            console.log(event.target)
        }
        return(
            <>
            <div className='container'>
            
            <div className='container--form'>
            <h1>Dados Pessoais</h1>
            <fieldset>
                    <label>Nome: </label>
                    <input type='text' id='name' name='name' maxLength='40' 
                    onChange={uppercase} placeholder='Nome' onSubmit={validation}></input>
                     <label>Email: </label>
                    <input type='text' id='email' name='email' maxLength='50' 
                    onSubmit={validation}></input>
                     <label>CPF: </label>
                    <input type='text' id='cpf' name='cpf' maxLength='11' 
                    onSubmit={validation}></input>
                     <label>Cidade: </label>
                    <input type='text' id='cidade' name='cidade' maxLength='28' 
                    onSubmit={validation} onBlur={checkStartWithNumber}></input>
                    <br></br>
                    <SelectStates validation = {validation}/>
                    <label>Casa: </label>
                    <input type='radio' id='casa' name='home' onSubmit={validation}></input>
                    <label>Apartamento: </label>
                    <input type='radio' id='apart' name='home' onSubmit={validation}></input>
                </fieldset>

            </div>
               
               <div className='container--form'>
               <h1>Dados do seu último emprego</h1>
                <fieldset>
                    <label>Nome: </label>
                    <input type='text' id='name' name='name' maxLength='40' 
                    onChange={uppercase} placeholder='Nome' onSubmit={validation}></input>
                     <label>Email: </label>
                    <input type='text' id='email' name='email' maxLength='50' 
                    onSubmit={validation}></input>
                     <label>CPF: </label>
                    <input type='text' id='cpf' name='cpf' maxLength='11' 
                    onSubmit={validation}></input>
                     <label>Cidade: </label>
                    <input type='text' id='cidade' name='cidade' maxLength='28' 
                    onSubmit={validation} onBlur={checkStartWithNumber}></input>
                    <br></br>
                    <SelectStates validation = {validation}/>
                    <label>Casa: </label>
                    <input type='radio' id='casa' name='home' onSubmit={validation}></input>
                    <label>Apartamento: </label>
                    <input type='radio' id='apart' name='home' onSubmit={validation}></input>
                </fieldset>
               </div>
                
            </div>
            </>
            )
    }
}

export default Form;