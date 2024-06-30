import "./UserForm.css"
import { TextField } from '@mui/material';
import { useState } from 'react';
import LongCheckBox from '../checkbox/longCheckBox';
import ConditionsList from '../lists/conditionsList';
import BackButton from '../buttons/backButton';
import Flechegauche from './../../assets/images/flechegauche.png';
import { postFormAndResponses } from '../../actions/interventionActions';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

export function UserForm(props){    
    const userQuestionReponse=useSelector((state)=>state.userResponses);
    const [checkPayOnline,setCheckPayOnline]=useState(false);
    const [checkPayInCash,setCheckPayInCash]=useState(false);
    const navigate=useNavigate();
    
    const [formData, setFormData] = useState({
        prenom: "",
        nom: "",
        adresse:"",
        codePostal: "",
        telephone: "",
        email: "",
        responses:[]
    });
    
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

    const[isValide,setIsValide]=useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
        
    if(event.target.name==="prenom"){                         
        console.log("Test: ",value.trim()!=="")
        if(value.trim()!==""){                            
            setPrenomColor("success");
            if(!isValide)setIsValide(true);
            setPrenomError(false);
            setPrenomErrorMessage("");
        }else{                
            if(isValide)setIsValide(false);
            setPrenomColor(null);
            setPrenomError(true);
            setPrenomErrorMessage(errorMessage);
        }
    }

    if(event.target.name==="nom"){            
        if(value.trim()!==""){                
            setNomColor("success");
            if(!isValide)setIsValide(true);
            setNomError(false);
            setNomErrorMessage("");
        }else{                
            setNomColor(null);
            if(isValide)setIsValide(false);
            setNomError(true);
            setNomErrorMessage(errorMessage);
        }
        }  

    if(event.target.name==="adresse"){            
        if(value.trim()!==""){                
            setAdresseColor("success");
            if(!isValide)setIsValide(true);
            setAdresseError(false);
            setAdresseErrorMessage("");
        }else{                
            setAdresseColor(null);        
            if(isValide)setIsValide(false);        
            setAdresseError(true);
            setAdresseErrorMessage(errorMessage);
        }
    } 
    if(event.target.name==="codePostal"){            
        if(value.trim()!==""){                
            setCodePostalColor("success");
            if(!isValide)setIsValide(true);
            setCodePostalError(false);
            setCodePostalErrorMessage("");
        }else{                
            setCodePostalColor(null);
            if(isValide)setIsValide(false);
            setCodePostalError(true);
            setCodePostalErrorMessage(errorMessage);
        }
    }

    if(event.target.name==="telephone"){            
        if(value.trim()!=="" && /^0\d{9}$/.test(value.trim())){                
            setTelephoneColor("success");
            if(!isValide)setIsValide(true);
            setTelephoneError(false);
            setTelephoneErrorMessage("");
        }else{                
            setTelephoneColor(null);
            if(isValide)setIsValide(true);
            setTelephoneError(true);
            setTelephoneErrorMessage(errorMessage);
        }
    } 
    if(event.target.name==="email"){            
        if( /\S+@\S+\.\S+/.test(value.trim())){                
            setEmailColor("success");
            if(!isValide)setIsValide(true);
            setEmailError(false);
            setEmailErrorMessage("");
        }else{                
            setEmailColor(null);
            if(isValide)setIsValide(false);
            setEmailError(true);
            setEmailErrorMessage(errorMessage);
        }
    }
  };

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
        if(isValide){
            const userData={
                'prenom': formData.prenom,
                'nom':formData.nom,
                'telephone':formData.telephone,
                'adresse': formData.adresse,
                'codePostal': formData.codePostal,
                'email': formData.email,
                'reponses': userQuestionReponse
            }
            try{
                postFormAndResponses(userData);
                console.log("All User responses: ",userQuestionReponse);
                console.log("All DATA User : ",userData);        
            }catch(error){
                alert("ERROR !")
            }            
        }              
        
    }

    return(
        <form method='post' onSubmit={(event)=>postForm(event)}>                        
            <div className='customer-information-frame'>
                <div className='information-layout'><div className='info-icon-frame'><label className='point-text'>1</label></div><div className='information-text-layout'><label className='information-text'>Information</label></div></div>
                <div className='grid-frame'>                                                            
                    <TextField  helperText={prenomErrorMessage} autoComplete='off' name="prenom" error={prenomError}  value={formData.prenom} color={prenomColor} required InputLabelProps={{shrink: true,}}  label="Prénom" className={`intputlayout ${prenomColor==="success" ? 'valid' : ''}`}   onChange={handleChange}/>                                                                                
                    <TextField  helperText={nomErrorMessage} autoComplete='off' name="nom" error={nomError} value={formData.nom} color={nomColor} InputLabelProps={{shrink: true,}}  label="Nom" required className='intputlayout' onChange={handleChange}/>                                                            
                    <TextField helperText={adresseErrorMessage} autoComplete='off' name="adresse" error={adresseError} value={formData.adresse} color={adresseColor} InputLabelProps={{shrink: true,}}  label="Adresse (numéro et voie)" required className='intputlayout' onChange={handleChange} />                                                                                                        
                    <TextField helperText={codePostalErrorMessage} autoComplete='off' name="codePostal" error={codePostalError} value={formData.codePostal} color={codePostalColor} InputLabelProps={{shrink: true,}}  label="Code postal" required className='intputlayout' onChange={handleChange} />                                                                    
                    <TextField placeholder="0625567891" helperText={telephoneErrorMessage} autoComplete='off' name="telephone" error={telephoneError} value={formData.telephone} color={telephoneColor} InputLabelProps={{shrink: true,}}  label="Téléphone" required className='intputlayout' onChange={handleChange}/>                                                                    
                    <TextField helperText={emailErrorMessage} autoComplete='off' name="email" error={emailError} value={formData.email} color={emailColor} type='email' InputLabelProps={{shrink: true,}}  label="Adresse email" required className='intputlayout' onChange={handleChange}/>                                                                    
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

                    <LongCheckBox name="payCash" text="Payer sur place" checked={checkPayInCash} onChange={handlerCheckbox}/>
                    <LongCheckBox name="payOnLine" text="Payer en ligne" checked={checkPayOnline} onChange={handlerCheckbox}/>                                                                                                                                                                                       
            </div>

            <div className='condition-frame'>                                
                <ConditionsList/>                               
            </div>
            
            <div className='form-back-pay-btn-frame'>                                                            
                    <BackButton icon={Flechegauche} text="Etape précédente" onClick={()=>navigate("/information")}/>                                                    
                <div className="pay-button-frame">                                
                    <input  value="Passer commande et payer en ligne" type="submit" className="pay-button"/>                    
                </div>
            </div>
        </form>
    )
}