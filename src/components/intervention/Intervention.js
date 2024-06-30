import './Intervention.css';
import Logo from './../../assets/images/logo.png';
import Euro from './../../assets/images/cercle-euro.png';
import Redline from './../../assets/images/redline.png';
import { UserForm } from '../forms/UserForm';
import { NavBar } from '../header/navbar';
import { Footer } from '../footer/footer';

function Intervention(props){    
    return (
    <div className="main-container">             
        <NavBar Logo={Logo} text="Contact"/>   
        <div className="main-frame">                            
                <div className='content-frame'>                                
                    <UserForm/>                                        
                </div>
                <div className="rigth-content-frame">
                    <div className="rigth-item-frame">
                        <div className='main-text'>Réparation d’une fuite de la vanne principale ou avant la vanne</div>                        
                        <img className='line-frame' src={Redline} alt='no icon'/>
                        <div className="rigth-content-items-frame">
                            <div className="rigth-content-items-ul">
                                <ul className="custom-unique-list">
                                    <li id="custom" style={{"--image-url":`url(${Euro})`}}><span className='notification-text'>Entre 150€ et 300€ TTC</span></li>
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
        <Footer logo={Logo}/>                  
    </div>);
}

export default Intervention;