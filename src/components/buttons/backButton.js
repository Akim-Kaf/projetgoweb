
export default function BackButton({icon,text}){
    return(
        <div className="back-button">
            <div className='card-icon-frame'>
                <img className='card-icon' src={icon} alt="not icon"/>                                    
            </div>
            <span className="back-button-text">{text}</span>
        </div>
    )
}