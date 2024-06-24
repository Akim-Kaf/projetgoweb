
export default function BackButton(props){
    return(
        <div className="back-button">
            <div className='card-icon-frame'>
                <img className='card-icon' src={Flechegauche} alt="not icon"/>                                    
            </div>
            <span className="back-button-text">Etape précédente</span>
        </div>
    )
}