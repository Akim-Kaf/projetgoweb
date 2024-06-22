import './Intervention.css';
import Logo from './../../assets/images/logo.png';
import Flechegauche from './../../assets/images/flechegauche.png';
import Redline from './../../assets/images/redline.png';
import { TextField } from '@mui/material';

function Intervention(props){
           
    return (
    <div className="main-container">
        <div className="nav-bar">
            <div className='logo-frame'>
                <div className="logo-layout">
                    <img className='logo' src={Logo} alt='no icon'></img>
                </div>                
            </div>
            <div className='contact-frame'>
                <label className='contact-text'>Contact</label><label className='red-text'>.</label>
            </div>
        </div>        
        <div className="main-frame">                            
                <div className='content-frame'>            
                    
                    <form>
                        <div className='customer-information-frame'>
                            <div className='information-layout'><div className='info-icon-frame'><label className='point-text'>1</label></div><div className='information-text-layout'><label className='information-text'>Information</label></div></div>
                            <div className='grid-frame'>                        
                                <TextField focused required label="Prénom" name="prenom"  className='intputlayout'/>
                                <TextField focused label="Nom" name="nom" required className='intputlayout'/>                                                            
                                <TextField focused label="Adresse (numéro et voie)" required className='intputlayout'/>                                                                    
                                <TextField focused label="Code postal" required className='intputlayout'/>                                                                    
                                <TextField focused label="Téléphone" required className='intputlayout'/>                                                                    
                                <TextField focused type='email'  label="Adresse email" required className='intputlayout'/>                                    
                                

                            </div>
                        </div>
                        
                        <div className='pay-information-frame'>                        
                                <div className='pay-layout'>
                                    <div className='info-icon-frame'>
                                        <label className='point-text'>2</label>
                                    </div>

                                    <div className='pay-text-layout'>
                                        <label className='information-text'>Modes de paiement</label>
                                    </div>
                                </div>

                                <div className='card'>
                                    <div className='card-text-frame'><label className='card-text'>Payer sur place</label></div>
                                    <div className='card-icon-frame'>                                   
                                        <input name="payersurplace" className='card-icon' type="checkbox"></input>
                                    </div>                            
                                </div>

                                <div className='card'>
                                    <div className='card-text-frame'><label className='card-text'>Payer en ligne</label></div>
                                    <div className='card-icon-frame'>                                    
                                        <input name="payerenligne" className='card-icon' type="checkbox"></input>
                                    </div>                            
                                </div>                                 
                                                                                  
                        </div>

                        <div className='condition-frame'>                                
                                    <div className='condition-element'>
                                        <input id="checkbox-1" name="checkbox-1" className='card-icon' type="checkbox"></input>
                                        <label className='label-checkbox'>J’accepte les <a href="http://localhost:3000/" target="_blank" rel="noreferrer" >conditions générales d’utilisation du service</a></label>
                                    </div>
                                    <div className='condition-element'>
                                        <input id="checkbox-2" name="checkbox-2" className='card-icon' type="checkbox"></input>
                                        <label className='label-checkbox' for="checkbox-2">J’ai bien pris connaissance des <a href="http://localhost:3000/" target="_blank" rel="noreferrer">dispositions relatives au droit de rétractation</a></label>
                                    </div>                                
                                    <div className='condition-element'>
                                        <input id="checkbox-3" name="checkbox-3" className='card-icon' type="checkbox"></input>    
                                        <label className='label-checkbox' for="checkbox-3">Je souhaite recevoir par voie électronique des offres commerciales personnalisées</label>
                                    </div>                                
                        </div>
                        
                        <div className='form-back-pay-btn-frame'>
                            <div className="back-button-frame">                                
                                <div className="back-button">
                                    <div className='card-icon-frame'>
                                        <img className='card-icon' src={Flechegauche} alt="not icon"/>                                    
                                    </div>
                                    <span className="back-button-text">Etape précédente</span>
                                </div>                        
                            </div>
                            <div className="pay-button-frame">                                
                                <div className="pay-button"><span className="pay-button-text">Passer commande et payer en ligne</span></div>
                            </div>
                        </div>
                    </form>                    
                    
                </div>
                <div className="rigth-content-frame">
                    <div className="rigth-item-frame">
                        <div className='main-text'>Réparation d’une fuite de la vanne principale ou avant la vanne</div>                        
                        <img className='line-frame' src={Redline} alt='no icon'/>
                        <div className="rigth-content-items-frame">
                            <div className="rigth-content-items-ul">
                                <ul>
                                    <li id="euro"><span className='notification-text'>Entre 150€ et 300€ TTC</span></li>
                                    <li><span className='notification-text'>Gros matériel</span></li>
                                    <li><span className='notification-text'>Déplacement</span></li>                                
                                    <li><span className='notification-text'>Petites fournitures</span></li>
                                    <li><span className='notification-text'>Nettoyage du chantier</span></li>
                                    <li><span className='notification-text'>Main d’oeuvre</span></li>                                
                                </ul>
                            </div>                                                        
                        </div>                        
                        
                    </div>

                    <div className='assistance-frame'>
                        <div className='assistance-text-frame'>
                            <label className='assistance-text'>Besoin d’une assistance téléphonique ?</label></div>                                                
                            <div className="assistance-button"><span className="assistance-button-text">Afficher le numéro</span>
                        </div>                        
                    </div>

                    <div className="rigth-bottom-item-frame">                        
                        <span className="rigth-bottom-text">
                        <b>Vous êtes recontactés sous 20 minutes après votre passage de commande.</b>
                        </span>
                        <p className='rigth-bottom-text-p'>Si l’origine de votre panne nécessite un diagnostic complémentaire, 
                        il s’agit d’une intervention à part entière demandant l’exêrtise d’un professionnel. 
                        Celle-ci fera l’objet d’une facturation.
                        </p>
                    </div>
                </div>                                                            
        </div>        
                    
        <div className='bottom-frame'>
            <div className='bottom-logo-frame'>
                <div className="logo-layout">
                        <img className='logo' src={Logo} alt='no icon'></img>
                </div>
            </div>                               
        </div>    

    </div>);
}

export default Intervention;