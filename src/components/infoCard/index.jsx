import './style.css'

export function InfoCard(props) {
    return (
        <div className="info">
            <p>{props.msg}</p>
        </div>
    )
}