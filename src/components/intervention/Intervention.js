import './Intervention.css';
function Intervention(props){
           
    return (
    <div className="main-container">
        <div className="nav-bar">
            <div className='logo-frame'>
                <div className="logo-layout">
                    <img className='logo' src='logo.png' alt='no icon'></img>
                </div>                
            </div>
            <div className='contact-frame'>
                <label className='contact-text'>Contact</label><label className='red-text'>.</label>
            </div>
        </div>        
        <div className="main-frame">                            
                <div className='content-frame'>            
                    
                    <form>
                        <div className='grid-frame'>                        
                            <fieldset className='intputlayout'>
                                <legend>Prénom*</legend>
                                <input name="prenom" required></input> 
                            </fieldset>
                            <fieldset className='intputlayout'>
                                <legend>Nom*</legend>
                                <input name="nom" required></input> 
                            </fieldset>
                            <fieldset className='intputlayout'>
                                <legend>Adresse (numéro et voie)*</legend>
                                <input className=''></input> 
                            </fieldset>
                            <fieldset className='intputlayout'>
                                <legend>Code postal*</legend>
                                <input className=''></input> 
                            </fieldset>
                            <fieldset className='intputlayout'>
                                <legend>Téléphone*</legend>
                                <input className=''></input> 
                            </fieldset>
                            <fieldset className='intputlayout'>
                                <legend>Adresse email*</legend>
                                <input className=''></input> 
                            </fieldset>

                        </div>
                        <div>
                            Modes de paiement
                            <div className='card'>
                                <div className='card-text-frame'><label className='card-text'>Payer sur place</label></div>
                                <div className='card-icon-frame'>
                                    {/*<img className='card-icon' src='flecherouge.png' alt="not icon"/>*/}
                                    <input name="payersurplace" className='card-icon' type="checkbox"></input>
                                </div>                            
                            </div> 
                            <div className='card'>
                                <div className='card-text-frame'><label className='card-text'>Payer en ligne</label></div>
                                <div className='card-icon-frame'>                                    
                                    <input name="payerenligne" className='card-icon' type="checkbox"></input>
                                </div>                            
                            </div>
                            <div className='condition-frame'>                                
                                <div className='condition-element'>
                                    <input id="checkbox-1" name="checkbox-1" className='card-icon' type="checkbox"></input>
                                    <label className='label-checkbox'>J’accepte les conditions générales d’utilisation du service</label>
                                </div>
                                <div className='condition-element'>
                                <input id="checkbox-2" name="checkbox-2" className='card-icon' type="checkbox"></input>
                                <label className='label-checkbox' for="checkbox-2">J’ai bien pris connaissance des dispositions relatives au droit de rétractation</label>
                                </div>                                
                                <div className='condition-element'>
                                <input id="checkbox-3" name="checkbox-3" className='card-icon' type="checkbox"></input>    
                                <label className='label-checkbox' for="checkbox-3">Je souhaite recevoir par voie électronique des offres commerciales personnalisées</label>
                                </div>                                
                            </div>                           
                        </div>
                        <div className='form-back-pay-btn-frame'>
                            <div className="back-button-frame">
                                <div className="back-button"><span className="back-button-text">Bon à savoir</span></div>                        
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
                        <div className="rigth-content-item-frame">
                            <ul>
                                <li id="euro"><span className='notification-text'>Entre 150€ et 300€ TTC</span></li>
                                <li><span className='notification-text'>Gros matériel</span></li>
                                <li><span className='notification-text'>Déplacement</span></li>                                
                                <li><span className='notification-text'>Petites fournitures</span></li>
                                <li><span className='notification-text'>Nettoyage du chantier</span></li>
                                <li><span className='notification-text'>Main d’oeuvre</span></li>
                                
                            </ul>

                            <div className="intervention-button-frame">
                                <div className="intervention-button"><span className="intervention-button-text">Demender une intervention</span></div>
                            </div>
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
                        <img className='logo' src='logo.png' alt='no icon'></img>
                </div>
            </div>                               
        </div>    

    </div>);
}

export default Intervention;