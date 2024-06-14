import "./Questionnaire.css";
import Logo from './../../assets/images/logo.png';
import Flecherouge from './../../assets/images/flecherouge.png';
import Redline from './../../assets/images/redline.png';
function Questionnaire(props){
    const questionReponses={
        id:1,question:"Où se situe votre problème ?",
            responses:["WC","Lavabo/évier","Douche/baignoire",
                "colonne générale d'immeuble","Tuyauterie/canalisation",
                "Tuyauterie/canalisation","Tuyau machine à laver/lave-vaisselle",
                "chaudiere/chauffe-eau/ballon d'eau chaude"
            ]
        }       

    return (
    <div className="questionnaire-main-container">
        <div className="questionnaire-nav-bar">
            <div className="questionnaire-logo-frame">
                <img className="questionnaire-logo" src={Logo} alt="no icon"></img>
            </div>
            <div className="questionnaire-contact-frame">
                <label className="questionnaire-contact-text">Contact</label><label className="questionnaire-red-text">.</label>
            </div>
        </div>        
        <div className="questionnaire-main-frame">            
                <div className="questionnaire-main-text">{questionReponses.question}</div>
                <img className="questionnaire-line-frame" src={Redline} alt="no icon"/>
                <div className="questionnaire-content-frame">            
                    <div className="questionnaire-grid-frame">
                        {questionReponses.responses.map((reponse,index)=>(
                            <div className="questionnaire-card" key={index}>
                                <div className="questionnaire-card-text-frame"><label className="questionnaire-card-text">{reponse}</label></div>
                                <div className="questionnaire-card-icon-frame">
                                    <img className="questionnaire-card-icon" src={Flecherouge} alt="not icon"/>
                                </div>                            
                            </div>
                        ))                    
                        } 
                        <div className="questionnaire-back-button-frame">
                            <div className="questionnaire-back-button"><label className="questionnaire-back-button-text">Etape précédente</label></div>
                        </div>               
                    </div> 
                </div>                                            
                <div className="questionnaire-notification-frame">
                <ul>
                    <li><span className="questionnaire-notification-text">Plus de <b>1500 professionnels qualifiés,</b> recrutés selon des critères et un processus stricts</span></li>
                    <li><span className="questionnaire-notification-text">Fourchette tarifaire <b>connue à l’avance,</b> incluant le déplacement ainsi qu’un devis gratuit</span></li>
                    <li><span className="questionnaire-notification-text">Intervention <b>7j/7 24h/24</b> pour les dépannages d’urgence</span></li>
                </ul>
                
                </div>
        </div>        
                    
        <div className="questionnaire-bottom-frame">        
            <label className="questionnaire-bottom-text">Goweb</label><label className="questionnaire-bottom-red-text">.</label>
        </div>    

    </div>);
}

export default Questionnaire;