import './domainecard.css';
export function DomaineCard({key,nom,icon,onClick}){
    return (
        <div key={key+1} onClick={onClick}><div className="domaine-card" >
            <div key={key+2} className="domaine-card-icon-frame">
                <img key={key+3} className="domaine-card-icon" src={icon} alt="not im"/>
            </div>
            <label className="domaine-card-text">{nom}</label>
            </div>
        </div>
    )
}