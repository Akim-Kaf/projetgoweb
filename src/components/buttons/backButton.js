
export default function BackButton({icon,text,onClick}){
    return(
        <div className="back-button-frame">
            <div className="back-button" onClick={onClick}>
                <div className='card-icon-frame'>
                    <img className='card-icon' src={icon} alt="not icon"/>                                    
                </div>
                <label className="back-button-text">{text}</label>
            </div>
        </div>
    )
}