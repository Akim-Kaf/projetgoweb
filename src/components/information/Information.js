import './Information.css';
function Information(props){
           
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
                <div className='content-frame'>            
                    <img  className='grid-frame' src="oip.png" alt="no icon"/> 
                    <div className="back-button-frame">
                        <div className="back-button"><label className="back-button-text">Etape précédente</label></div>
                    </div>
                    <div className='notification-frame'></div>
                </div>
                <div className="rigth-content-frame">
                    <div className="rigth-item-frame">

                    </div>
                    <div className="rigth-bottom-item-frame">
                        
                    </div>
                </div>                                                            
        </div>        
                    
        <div className='bottom-frame'>        
            <label className='bottom-text'>Goweb</label><label className='bottom-red-text'>.</label>
        </div>    

    </div>);
}

export default Information;