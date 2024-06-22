import "./Information.css";
import OipImg from '../../assets/images/oip.png';
import { useNavigate } from "react-router-dom";

function Information(props){

    const navigate=useNavigate();
           
    return (
    <div className="information-main-container">
        <div className="information-nav-bar">
            <div className="information-logo-frame">
                <div className="information-logo-layout">
                    <img className="information-logo" src="logo.png" alt="no icon"></img>
                </div>                
            </div>
            <div className="information-contact-frame">
                <label className="information-contact-text">Contact</label><label className="information-red-text">.</label>
            </div>
        </div>        
        <div className="information-main-frame">                            
                <div className="information-content-frame">            
                    <img  className="information-grid-frame" src={OipImg} alt="no icon"/> 
                    <div className="information-back-button-frame">
                        <div className="information-back-button"><span className="information-back-button-text">Bon à savoir</span></div>
                    </div>
                    <div className="information-notification-frame">
                        <span className="information-probleme-text">
                            Vous faites face à des WC bouchés qui ne se vident plus correctement ? Vous vous interrogez sur les raisons de ce blocage et les solutions pour y remédier ? Faites appel à un plombier de MesDépanneurs.fr pour un débouchage efficace et rapide de vos toilettes !
                            <p>
                                Informations utiles pour le cas "Débouchage de WC"
                                Le coût du débouchage de WC sans sanibroyeur dépend de l"ampleur de l"engorgement de vos toilettes et de la complexité à éliminer le bouchon. Le cas "Débouchage de WC" comprend les prestations suivantes : 
                                <dl>
                                    <dt>- Les frais de déplacement et de main-d"œuvre, </dt>
                                    <dt>- La fourniture du matériel (pompe manuelle, acides, furet électrique, etc) </dt>
                                    <dt>- Le débouchage des WC, </dt>
                                    <dt>- Le nettoyage du chantier.</dt>
                                </dl>
                                Dans les cas les plus complexes, où le dégorgement dure plus de deux heures, le coût total pourrait excéder le devis initial (si l"usage d"un furet électrique sur différents niveaux est requis par exemple).
                                Néanmoins, sachez que le plombier vous préviendra en amont de toute modification des frais si cette situation se produit. 
                            </p>                            
                            
                            
                        </span>
                    </div>
                </div>
                <div className="information-rigth-content-frame">
                    <div className="information-rigth-item-frame">
                        <div className="information-main-text">Réparation d’une fuite de la vanne principale ou avant la vanne</div>
                        <div className="information-rigth-content-item-frame">
                            <ul>
                                <li id="euro"><span className="information-notification-text">Entre 150€ et 300€ TTC</span></li>
                                <li><span className="information-notification-text">Gros matériel</span></li>
                                <li><span className="information-notification-text">Déplacement</span></li>                                
                                <li><span className="information-notification-text">Petites fournitures</span></li>
                                <li><span className="information-notification-text">Nettoyage du chantier</span></li>
                                <li><span className="information-notification-text">Main d’oeuvre</span></li>
                                
                            </ul>

                            <div className="information-intervention-button-frame">
                                <div className="information-intervention-button" onClick={()=>navigate('/intervention')}><span className="information-intervention-button-text">Demender une intervention</span></div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="information-rigth-bottom-item-frame">                        
                        <span className="information-rigth-bottom-text">
                        <b>Vous êtes recontactés sous 20 minutes après votre passage de commande.</b>
                        </span>
                        <p className="information-rigth-bottom-text-p">Si l’origine de votre panne nécessite un diagnostic complémentaire, 
                        il s’agit d’une intervention à part entière demandant l’exêrtise d’un professionnel. 
                        Celle-ci fera l’objet d’une facturation.
                        </p>
                    </div>
                </div>                                                            
        </div>        
                    
        <div className="information-bottom-frame">
            <div className="information-bottom-logo-frame">
                <div className="information-logo-layout">
                        <img className="information-logo" src="logo.png" alt="no icon"></img>
                </div>
            </div>                               
        </div>    

    </div>);
}

export default Information;