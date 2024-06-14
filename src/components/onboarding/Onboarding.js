import "./Onboarding.css";
import Line from './../../assets/images/line.png';
function Onboarding(props){
    const domaines=[
        {id:1,nom:"Plomberie",icon:"plomberie.png"},
        {id:2,nom:"Plomberie",icon:"plomberie.png"},
        {id:3,nom:"Plomberie",icon:"plomberie.png"},
        {id:4,nom:"Plomberie",icon:"plomberie.png"},
        {id:5,nom:"Plomberie",icon:"plomberie.png"},
        {id:6,nom:"Plomberie",icon:"plomberie.png"}
    ]

    return (
    <div className="onboarding-main-container">
        
            <div className="onboarding-main-frame">
                <div className="onboarding-main-text">Mon problème concerne :</div>
                <img className="onboarding-line-frame" src={Line} alt="no icon"/>
                <div className="onboarding-grid-frame">
                    {domaines.map((domaine)=>(
                        <div className="onboarding-card" key={domaine.id}>
                            <div className="onboarding-card-icon-frame">
                                <img className="onboarding-card-icon" src={domaine.icon} alt="not im"/>
                            </div>
                            <div className="onboarding-card-text-frame"><label className="onboarding-card-text">{domaine.nom}</label></div>
                        </div>
                    ))                    
                    }
                                    
                </div>            
            </div>
                    
        <div className="onboarding-bottom-frame">        
            <label className="onboarding-bottom-text">Goweb</label><label className="onboarding-bottom-red-text">.</label>
        </div>    

    </div>);
}

export default Onboarding;