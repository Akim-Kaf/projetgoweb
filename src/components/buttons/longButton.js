
export default function LongButton(key,text,icon,onClick){
    return (
        <div className="questionnaire-card" key={key} onClick={()=>onClick}>
            <div className="questionnaire-card-text-frame"><label className="questionnaire-card-text" >{text}</label></div>
            <div className="questionnaire-card-icon-frame">
                <img className="questionnaire-card-icon" src={icon} alt="not icon"/>
            </div>                            
        </div>
    )
}