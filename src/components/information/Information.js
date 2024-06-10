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
                        <div className="back-button"><label className="back-button-text">Etape précédente</label></div>
                    </div>
                    <div className='notification-frame'></div>
                </div>
                <div className="rigth-content-frame">
                    <div className="rigth-item-frame">
                        <div className='main-text'>Réparation d’une fuite de la vanne principale ou avant la vanne</div>
                        <div className="rigth-content-item-frame">
                            <ul>
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