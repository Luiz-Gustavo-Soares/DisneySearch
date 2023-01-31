import { useEffect, useState } from 'react'
import './style.css'

export function DetailCharacter(props) {

    const [informacoes, setInformacoes] = useState({name:'', imageUrl:'', filmes:[], series:[], jogos:[]})


    useEffect(()=>{     
        fetch(`https://api.disneyapi.dev/characters/${props.id}`)
        .then(response => response.json())
        .then(data => {
            const newInfo = {
                name: data.name,
                imageUrl: data.imageUrl,
                filmes: data.films,
                series: data.tvShows,
                jogos: data.videoGames
                }
            
            setInformacoes(newInfo)
        })
        .catch(error => console.log(error))
    }, [])

    return (
        <div className="detail-character">
            <div className='detail-character-header' >
                <h2>{informacoes.name}</h2>
                <img src={informacoes.imageUrl} alt={informacoes.name} />
                
            </div>
            <div className='shows-character'>
                <div className="show-character">
                    <h3>Filmes</h3>
                    <ul>
                        {informacoes['filmes'].map(name => <li key={name} onClick={() => props.search(name, 'films')} >{name}</li>)}         
                    </ul>
                </div>

                <div className="show-character">
                    <h3>Series</h3>
                    <ul>
                        {informacoes.series.map(name => <li key={name} onClick={() => props.search(name, 'tvShows')} >{name}</li>)}         
                    </ul>
                </div>

                <div className="show-character">
                    <h3>Jogos</h3>
                    <ul>
                        {informacoes.jogos.map(name => <li key={name} onClick={() => props.search(name, 'videoGames')} >{name}</li>)}         
                    </ul>
                </div>
            </div>

        </div>
    )
}
