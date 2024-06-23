import './Intervention.css';
import Logo from './../../assets/images/logo.png';
import Flechegauche from './../../assets/images/flechegauche.png';
import Redline from './../../assets/images/redline.png';
import { FormControl,TextField, createTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { postFormAndResponses } from '../../actions/interventionActions';

function Intervention(props){

    const userQuestionReponse=useSelector((state)=>state.userResponses);
    console.log("init User responses: ",userQuestionReponse);
    const [prenom,setPrenom]=useState("");
    const [nom,setNom]=useState("");
    const [adresse,setAdresse]=useState("");
    const [codePostal,setCodePostal]=useState("");
    const [telephone,setTelephone]=useState("");
    const [email,setEmail]=useState("");
    const [checkPayOnline,setCheckPayOnline]=useState(false);
    const [checkPayInCash,setCheckPayInCash]=useState(false);

    const [prenomColor,setPrenomColor]=useState(null);
    const [nomColor,setNomColor]=useState("");
    const [adresseColor,setAdresseColor]=useState("");
    const [codePostalColor,setCodePostalColor]=useState("");
    const [telephoneColor,setTelephoneColor]=useState("");
    const [emailColor,setEmailColor]=useState("");

    const [prenomError,setPrenomError]=useState(false);
    const [nomError,setNomError]=useState(false);
    const [adresseError,setAdresseError]=useState(false);
    const [codePostalError,setCodePostalError]=useState(false);
    const [telephoneError,setTelephoneError]=useState(false);
    const [emailError,setEmailError]=useState(false);
    
    function handlerChange(event){        
        var value=event.target.value; 
        
        if(event.target.name==="prenom"){            
            setPrenom(value);       
            console.log("Test: ",value.trim()!="")
            if(value.trim()!=""){                
                setPrenomColor("success");
                setPrenomError(false);
            }else{                
                setPrenomColor(null);
                setPrenomError(true);
            }
        }

        if(event.target.name==="nom"){
            setNom(value);
            if(value.trim()!=""){                
                setNomColor("success");
                setNomError(false);
            }else{                
                setNomColor(null);
                setNomError(true);
            }
          }  

        if(event.target.name==="adresse"){
            setAdresse(value);
            if(value.trim()!=""){                
                setAdresseColor("success");
                setAdresseError(false);
            }else{                
                setAdresseColor(null);
                setAdresseError(true);
            }
        } 
        if(event.target.name==="codePostal"){
            setCodePostal(value);
            if(value.trim()!=""){                
                setCodePostalColor("success");
                setCodePostalError(false);
            }else{                
                setCodePostalColor(null);
                setCodePostalError(true);
            }
        }

        if(event.target.name==="telephone"){
            setTelephone(value);
            if(value.trim()!=""){                
                setTelephoneColor("success");
                setTelephoneError(false);
            }else{                
                setTelephoneColor(null);
                setTelephoneError(true);
            }
        } 
        if(event.target.name==="email"){
            setEmail(value);
            if(value.trim()!=""){                
                setEmailColor("success");
                setEmailError(false);
            }else{                
                setEmailColor(null);
                setEmailError(true);
            }
        } 
    }

    function handlerCheckbox(event){
        const value=event.target.value;        
        if(event.target.name==="payOnLine"){
            const choise=!checkPayOnline;
            setCheckPayOnline(choise);
            setCheckPayInCash(!choise);
        }else{
            const choise=!checkPayInCash;
            setCheckPayInCash(choise)
            setCheckPayOnline(!choise);            
        }
    }

    function postForm(event){
        console.log("Event: ",event);
        event.preventDefault();
        const userData={
            'prenom': prenom,
            'nom':nom,
            'telephone':telephone,
            'adresse': adresse,
            'codePostal': codePostal,
            'email': email,
            'reponses': userQuestionReponse
        }        
        console.log("All User responses: ",userQuestionReponse);
        console.log("All DATA User : ",userData);

        postFormAndResponses(userData);
    }
           
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
                    
                    <form method='post' onSubmit={(event)=>postForm(event)}>
                        <FormControl>
                            <div className='customer-information-frame'>
                                <div className='information-layout'><div className='info-icon-frame'><label className='point-text'>1</label></div><div className='information-text-layout'><label className='information-text'>Information</label></div></div>
                                <div className='grid-frame'>                                                            
                                    <TextField name="prenom" error={prenomError}  value={prenom} color={prenomColor} required InputLabelProps={{shrink: true,}}  label="Prénom" className='intputlayout' onChange={handlerChange}/>                                                                                
                                    <TextField name="nom" error={nomError} value={nom} color={nomColor} InputLabelProps={{shrink: true,}} sx={{"& label.Mui-focused" : {color: "black"},"& .MuiOutlinedInput-root" : {"&.Mui-focused fieldset" : {borderColor: "black"}}}} label="Nom" required className='intputlayout' onChange={handlerChange}/>                                                            
                                    <TextField name="adresse" error={adresseError} value={adresse} color={adresseColor} InputLabelProps={{shrink: true,}} sx={{"& label.Mui-focused" : {color: "black"},"& .MuiOutlinedInput-root" : {"&.Mui-focused fieldset" : {borderColor: "black"}}}} label="Adresse (numéro et voie)" required className='intputlayout' onChange={handlerChange}/>                                                                    
                                    <TextField name="codePostal" error={codePostalError} value={codePostal} color={codePostalColor} InputLabelProps={{shrink: true,}} sx={{"& label.Mui-focused" : {color: "black"},"& .MuiOutlinedInput-root" : {"&.Mui-focused fieldset" : {borderColor: "black"}}}} label="Code postal" required className='intputlayout' onChange={handlerChange}/>                                                                    
                                    <TextField name="telephone" error={telephoneError} value={telephone} color={telephoneColor} InputLabelProps={{shrink: true,}} sx={{"& label.Mui-focused" : {color: "black"},"& .MuiOutlinedInput-root" : {"&.Mui-focused fieldset" : {borderColor: "black"}}}} label="Téléphone" required className='intputlayout' onChange={handlerChange}/>                                                                    
                                    <TextField name="email" error={emailError} value={email} color={emailColor} type='email' InputLabelProps={{shrink: true,}} sx={{"& label.Mui-focused" : {color: "black"},"& .MuiOutlinedInput-root" : {"&.Mui-focused fieldset" : {borderColor: "black"}}}}  label="Adresse email" required className='intputlayout' onChange={handlerChange}/>                                                                    
                                </div>
                            </div>
                        </FormControl>

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
                                        <input name="payCash" checked={checkPayInCash}  onChange={handlerCheckbox} className='card-icon' type="checkbox"></input>
                                    </div>                            
                                </div>

                                <div className='card'>
                                    <div className='card-text-frame'><label className='card-text'>Payer en ligne</label></div>
                                    <div className='card-icon-frame'>                                    
                                        <input name="payerOnLigne" checked={checkPayOnline} onChange={handlerCheckbox} className='card-icon' type="checkbox"></input>
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
                                        <label className='label-checkbox' >J’ai bien pris connaissance des <a href="http://localhost:3000/" target="_blank" rel="noreferrer">dispositions relatives au droit de rétractation</a></label>
                                    </div>                                
                                    <div className='condition-element'>
                                        <input id="checkbox-3" name="checkbox-3" className='card-icon' type="checkbox"></input>    
                                        <label className='label-checkbox' >Je souhaite recevoir par voie électronique des offres commerciales personnalisées</label>
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
                                <input  value="Passer commande et payer en ligne" type="submit" className="pay-button"/>
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