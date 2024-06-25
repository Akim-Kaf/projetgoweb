
export function DomaineCard({key,nom,icon,onClick}){
    return (
        <div key={key+1} onClick={onClick}><div className="onboarding-card" >
            <div key={key+2} className="onboarding-card-icon-frame">
                <img key={key+3} className="onboarding-card-icon" src={icon} alt="not im"/>
            </div>
            <label className="onboarding-card-text">{nom}</label>
            </div>
        </div>
    )
}