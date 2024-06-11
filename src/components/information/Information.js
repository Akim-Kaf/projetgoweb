import './Information.css';
function Information(props){
           
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
                    <img  className='grid-frame' src="oip.png" alt="no icon"/> 
                    <div className="back-button-frame">
                        <div className="back-button"><span className="back-button-text">Bon à savoir</span></div>
                    </div>
                    <div className='notification-frame'>
                        <span className='probleme-text'>
                            Vous faites face à des WC bouchés qui ne se vident plus correctement ? Vous vous interrogez sur les raisons de ce blocage et les solutions pour y remédier ? Faites appel à un plombier de MesDépanneurs.fr pour un débouchage efficace et rapide de vos toilettes !
                            <p>
                                Informations utiles pour le cas "Débouchage de WC"
                                Le coût du débouchage de WC sans sanibroyeur dépend de l'ampleur de l'engorgement de vos toilettes et de la complexité à éliminer le bouchon. Le cas "Débouchage de WC" comprend les prestations suivantes : 
                                <dl>
                                    <dt>- Les frais de déplacement et de main-d'œuvre, </dt>
                                    <dt>- La fourniture du matériel (pompe manuelle, acides, furet électrique, etc) </dt>
                                    <dt>- Le débouchage des WC, </dt>
                                    <dt>- Le nettoyage du chantier.</dt>
                                </dl>
                                Dans les cas les plus complexes, où le dégorgement dure plus de deux heures, le coût total pourrait excéder le devis initial (si l'usage d'un furet électrique sur différents niveaux est requis par exemple).
                                Néanmoins, sachez que le plombier vous préviendra en amont de toute modification des frais si cette situation se produit. 
                            </p>                            
                            
                            
                        </span>
                    </div>
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

export default Information;