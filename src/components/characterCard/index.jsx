import './style.css'


export function CharacterCard(props) {
    let id = props.id
    return (
        <div className="characterCard">
            <div className="image-character"><img src={props.imageUrl} alt={props.name} /></div>
            <p className='name-character'><strong>{props.name}</strong></p>
            <p className='detalhes' onClick={()=>props.view(id)}>Visualizar</p>
        </div>
    )
}
