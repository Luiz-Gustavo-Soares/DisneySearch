import { useState } from "react";

import "./style.css"
import { BsSearch } from "react-icons/bs";

import { CharacterCard } from "../../components/characterCard";
import { DetailCharacter } from "../../components/detailCharacter"


export function Home() {
  
  const [personagemBuscInput, setPersonagemBuscInput] = useState('')
  const [personagensCardBusca, setPersonagensCardBusca] = useState([])
  const [detailCharacter, setDetailCharacter] = useState()

  function buscarPersonagens(nome, tipo='name'){
    
    if ( nome == ''){
      return
    }

    setDetailCharacter()

    fetch(`https://api.disneyapi.dev/character?${tipo}=${nome}`)
    .then(response => response.json())
    .then(data => {

      const personagens = data.data
      let newPersonagensBusca = []

      for (const personagen of personagens ) {
        newPersonagensBusca.push({name:personagen.name, imageUrl:personagen.imageUrl, id:personagen._id})
      }

      setPersonagemBuscInput('')
      setPersonagensCardBusca(newPersonagensBusca)

    })
    .catch(error => console.log(error))
  }

  function getDetailCharacter(id) {
    setPersonagensCardBusca([])
    setDetailCharacter(<DetailCharacter id={id} search={buscarPersonagens}/>)
  }

  function reset(){
    setDetailCharacter()
    setPersonagensCardBusca([])
  }

  return (
    <div className="home">
        <header>
            <h1 onClick={reset} >DisneySearch</h1>
        </header>
      <div className="buscar">
        <input 
          type="text" 
          placeholder="Digite o nome do personagem..." 
          value={personagemBuscInput} 
          onChange={(value)=>setPersonagemBuscInput(value.target.value)}
          onKeyDown={(keypress) => keypress.key == 'Enter' && buscarPersonagens(personagemBuscInput) }
        />

        <button onClick={() => buscarPersonagens(personagemBuscInput)}>
          <BsSearch color="#fff" size={20}/>
        </button>
      </div>

      {detailCharacter}

      { 
      personagensCardBusca.map((personagem) => 
          {
            return (
              <CharacterCard 
              view={getDetailCharacter}
              name={personagem.name}
              imageUrl={personagem.imageUrl} 
              id={personagem.id}
              key={personagem.id} 
              />
            )
          }
        )
      }
      

    </div>
  )
}
