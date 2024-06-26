import './Intervention.css';
import Logo from './../../assets/images/logo.png';
import Flechegauche from './../../assets/images/flechegauche.png';
import Redline from './../../assets/images/redline.png';
import { FormControl,TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { postFormAndResponses } from '../../actions/interventionActions';
import { UserForm } from '../forms/UserForm';
import { NavBar } from '../header/navbar';
import { Footer } from '../footer/footer';

function Intervention(props){

    const userQuestionReponse=useSelector((state)=>state.userResponses);
    console.log("init User responses: ",userQuestionReponse);
    /*
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
    
    const errorMessage="Ce champs est requis";
    const [prenomErrorMessage,setPrenomErrorMessage]=useState("");
    const [nomErrorMessage,setNomErrorMessage]=useState("");
    const [adresseErrorMessage,setAdresseErrorMessage]=useState("");
    const [codePostalErrorMessage,setCodePostalErrorMessage]=useState("");
    const [telephoneErrorMessage,setTelephoneErrorMessage]=useState("");
    const [emailErrorMessage,setEmailErrorMessage]=useState("");

    function handlerChange(event){        
        var value=event.target.value; 
        
        if(event.target.name==="prenom"){            
            setPrenom(value);       
            console.log("Test: ",value.trim()!=="")
            if(value.trim()!==""){                
                setPrenomColor("success");
                setPrenomError(false);
                setPrenomErrorMessage("");
            }else{                
                setPrenomColor(null);
                setPrenomError(true);
                setPrenomErrorMessage(errorMessage);
            }
        }

        if(event.target.name==="nom"){
            setNom(value);
            if(value.trim()!==""){                
                setNomColor("success");
                setNomError(false);
                setNomErrorMessage("");
            }else{                
                setNomColor(null);
                setNomError(true);
                setNomErrorMessage(errorMessage);
            }
          }  

        if(event.target.name==="adresse"){
            setAdresse(value);
            if(value.trim()!==""){                
                setAdresseColor("success");
                setAdresseError(false);
                setAdresseErrorMessage("");
            }else{                
                setAdresseColor(null);                
                setAdresseError(true);
                setAdresseErrorMessage(errorMessage);
            }
        } 
        if(event.target.name==="codePostal"){
            setCodePostal(value);
            if(value.trim()!==""){                
                setCodePostalColor("success");
                setCodePostalError(false);
                setCodePostalErrorMessage("");
            }else{                
                setCodePostalColor(null);
                setCodePostalError(true);
                setCodePostalErrorMessage(errorMessage);
            }
        }

        if(event.target.name==="telephone"){
            setTelephone(value);
            if(value.trim()!==""){                
                setTelephoneColor("success");
                setTelephoneError(false);
                setTelephoneErrorMessage("");
            }else{                
                setTelephoneColor(null);
                setTelephoneError(true);
                setTelephoneErrorMessage(errorMessage);
            }
        } 
        if(event.target.name==="email"){
            setEmail(value);
            if( /\S+@\S\.\S+/.test(value.trim())){                
                setEmailColor("success");
                setEmailError(false);
                setEmailErrorMessage("");
            }else{                
                setEmailColor(null);
                setEmailError(true);
                setEmailErrorMessage(errorMessage);
            }
        } 
    }

    function handlerCheckbox(event){        
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
        */   
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
        <Footer logo={Logo}/>                  
    </div>);
}

export default Intervention;