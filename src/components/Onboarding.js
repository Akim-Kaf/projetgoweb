import React from 'react';
import './Onboarding.css';
function Onboarding(props){
    const domaines=[
        {id:1,nom:'Plomberie',icon:'plomberie.png'},
        {id:2,nom:'Plomberie',icon:'plomberie.png'},
        {id:3,nom:'Plomberie',icon:'plomberie.png'},
        {id:4,nom:'Plomberie',icon:'plomberie.png'},
        {id:5,nom:'Plomberie',icon:'plomberie.png'},
        {id:6,nom:'Plomberie',icon:'plomberie.png'}
    ]

    return (
    <div className="main-container">
        
            <div className="main-frame">
                <div className='main-text'>Mon problème concerne :</div>
                <img className='line-frame' src='line.png' alt='no icon'/>
                <div className='grid-frame'>
                    {domaines.map((domaine)=>(
                        <div className='card' key={domaine.id}>
                            <div className='card-icon-frame'>
                                <img className='card-icon' src={domaine.icon} alt="not im"/>
                            </div>
                            <div className='card-text-frame'><label className='card-text'>{domaine.nom}</label></div>
                        </div>
                    ))                    
                    }
                                    
                </div>            
            </div>
                    
        <div className='bottom-frame'>        
            <label className='bottom-text'>Goweb</label><label className='bottom-red-text'>.</label>
        </div>    

    </div>);
}

export default Onboarding;