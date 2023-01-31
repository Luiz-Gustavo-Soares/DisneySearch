import { useEffect, useState } from 'react'
import './style.css'

export function DetailCharacter({id}) {

    const [informacoes, setInformacoes] = useState({name:'', imageUrl:'', filmes:'', series:'', jogos:''})


    useEffect(()=>{     
        fetch(`https://api.disneyapi.dev/characters/${id}`)
        .then(response => response.json())
        .then(data => {
            const newInfo = {
                name: data.name,
                imageUrl: data.imageUrl,
                filmes: data.films.toString().replace(/,/g, ', '),
                series: data.tvShows.toString().replace(/,/g, ', '),
                jogos: data.videoGames.toString().replace(/,/g, ', ')
                }
            
            setInformacoes(newInfo)
        })
        .catch(error => console.log(error))
    }, [])

    return (
        <div className="detail-character">
            <div>
                <h2>{informacoes.name}</h2>
                <img src={informacoes.imageUrl} alt={informacoes.name} />
                
            </div>
            <div className='shows-character'>
                <div className="show-character">
                    <h3>Filmes</h3>
                    <p>{informacoes.filmes}</p>
                </div>

                <div className="show-character">
                    <h3>Series</h3>
                    <p>{informacoes.series}</p>
                </div>

                <div className="show-character">
                    <h3>Jogos</h3>
                    <p>{informacoes.jogos}</p>
                </div>
            </div>

        </div>
    )
}
