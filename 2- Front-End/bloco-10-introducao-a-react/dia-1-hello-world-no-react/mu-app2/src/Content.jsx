import React from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];
  
class Content extends React.Component {
    render (key){
        return (
            conteudos.map(({conteudo,bloco,status}) => {
                return <div className='cards'>
                         <span>O conteúdo é : {conteudo}</span>
                            <p>Status: {bloco}</p>
                            <p>Bloco:  {status}</p>
                            <hr></hr>
                      </div>
            })
        )
    }
}

export default Content;