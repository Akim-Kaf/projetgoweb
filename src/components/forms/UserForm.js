const { useState } = require("react");
const { LongCheckBox } = require("../checkbox/longCheckBox");
const { ConditionsList } = require("../lists/conditionsList");


export function UserForm(props){

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

    return(
        <form method='post' onSubmit={(event)=>postForm(event)}>
                        <FormControl>
                            <div className='customer-information-frame'>
                                <div className='information-layout'><div className='info-icon-frame'><label className='point-text'>1</label></div><div className='information-text-layout'><label className='information-text'>Information</label></div></div>
                                <div className='grid-frame'>                                                            
                                    <TextField  helperText={prenomErrorMessage} autoComplete='off' name="prenom" error={prenomError}  value={prenom} color={prenomColor} required InputLabelProps={{shrink: true,}}  label="Prénom" className='intputlayout' onChange={handlerChange}/>                                                                                
                                    <TextField  helperText={nomErrorMessage} autoComplete='off' name="nom" error={nomError} value={nom} color={nomColor} InputLabelProps={{shrink: true,}}  label="Nom" required className='intputlayout' onChange={handlerChange}/>                                                            
                                    <TextField helperText={adresseErrorMessage} autoComplete='off' name="adresse" error={adresseError} value={adresse} color={adresseColor} InputLabelProps={{shrink: true,}}  label="Adresse (numéro et voie)" required className='intputlayout' onChange={handlerChange} />                                                                                                        
                                    <TextField helperText={codePostalErrorMessage} autoComplete='off' name="codePostal" error={codePostalError} value={codePostal} color={codePostalColor} InputLabelProps={{shrink: true,}}  label="Code postal" required className='intputlayout' onChange={handlerChange} />                                                                    
                                    <TextField helperText={telephoneErrorMessage} autoComplete='off' name="telephone" error={telephoneError} value={telephone} color={telephoneColor} InputLabelProps={{shrink: true,}}  label="Téléphone" required className='intputlayout' onChange={handlerChange}/>                                                                    
                                    <TextField helperText={emailErrorMessage} autoComplete='off' name="email" error={emailError} value={email} color={emailColor} type='email' InputLabelProps={{shrink: true,}}  label="Adresse email" required className='intputlayout' onChange={handlerChange}/>                                                                    
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

                                <LongCheckBox name="payCash" text= "Payer sur place" checked={checkPayInCash} onChange={handlerCheckbox}/>
                                <LongCheckBox name="payCash" text= "Payer en ligne" checked={checkPayOnline} onChange={handlerCheckbox}/>                                                                                                                                                                                       
                        </div>

                        <div className='condition-frame'>                                
                            <ConditionsList/>                               
                        </div>
                        
                        <div className='form-back-pay-btn-frame'>
                            <div className="back-button-frame">                                
                                <BackButton/>                        
                            </div>
                            <div className="pay-button-frame">                                
                                <input  value="Passer commande et payer en ligne" type="submit" className="pay-button"/>
                            </div>
                        </div>
                    </form>
    )
}