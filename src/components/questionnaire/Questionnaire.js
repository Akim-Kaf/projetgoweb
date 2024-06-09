import './Questionnaire.css';
function Questionnaire(props){
    const questionReponses={
        id:1,question:'Où se situe votre problème ?',
            responses:['WC','Lavabo/évier','Douche/baignoire',
                "colonne générale d'immeuble","Tuyauterie/canalisation",
                "Tuyauterie/canalisation","Tuyau machine à laver/lave-vaisselle",
                "chaudiere/chauffe-eau/ballon d'eau chaude"
            ]
        }       

    return (
    <div className="main-container">
        <div className="nav-bar">
            <div className='logo-frame'>
                <img className='logo' src='logo.png' alt='no icon'></img>
            </div>
            <div className='contact-frame'>
                <label className='contact-text'>Contact</label><label className='red-text'>.</label>
            </div>
        </div>        
        <div className="main-frame">            
                <div className='main-text'>{questionReponses.question}</div>
                <img className='line-frame' src='redline.png' alt='no icon'/>
                <div className='content-frame'>            
                    <div className='grid-frame'>
                        {questionReponses.responses.map((reponse,index)=>(
                            <div className='card' key={index}>
                                <div className='card-text-frame'><label className='card-text'>{reponse}</label></div>
                                <div className='card-icon-frame'>
                                    <img className='card-icon' src='flecherouge.png' alt="not icon"/>
                                </div>                            
                            </div>
                        ))                    
                        } 
                        <div className="back-button-frame">
                            <div className="back-button"><label className="back-button-text">Etape précédente</label></div>
                        </div>               
                    </div> 
                </div>                                            
                <div className='notification-frame'>
                <ul>
                    <li><span className='notification-text'>Plus de <b>1500 professionnels qualifiés,</b> recrutés selon des critères et un processus stricts</span></li>
                    <li><span className='notification-text'>Fourchette tarifaire <b>connue à l’avance,</b> incluant le déplacement ainsi qu’un devis gratuit</span></li>
                    <li><span className='notification-text'>Intervention <b>7j/7 24h/24</b> pour les dépannages d’urgence</span></li>
                </ul>
                
                </div>
        </div>        
                    
        <div className='bottom-frame'>        
            <label className='bottom-text'>Goweb</label><label className='bottom-red-text'>.</label>
        </div>    

    </div>);
}

export default Questionnaire;