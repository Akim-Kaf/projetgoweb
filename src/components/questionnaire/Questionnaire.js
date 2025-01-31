import "./Questionnaire.css";
import Logo from './../../assets/images/logo.png';
import Flecherouge from './../../assets/images/flecherouge.png';
import Flechegauche from './../../assets/images/flechegauche.png';
import Okvert from './../../assets/images/ok.png'
import Redline from './../../assets/images/redline.png';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addUserResponses, setQuestionnaire, updateUserResponses } from "../../redux";
import { useNavigate } from "react-router-dom";
import BackButton from "../buttons/backButton";
import { NavBar } from "../header/navbar";
import { Footer } from "../footer/footer";


function Questionnaire(props){
           
    const [questionReponse,setQuestionReponse]=useState(null);    
    var questionnaire=useSelector((state)=>state.questionnaire);
    const curentDomaine=useSelector((state)=>state.curentDomaine);
    const userResponses=useSelector((state)=>state.userResponses);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    useEffect(()=>{        
        setQuestionReponse(questionnaire);                                
    },[questionnaire])       
    
    if(questionnaire.domaine.length===0){
        console.log("PAS DE DATA (Page actualisée!!!!)");
        navigate("/")
    }    
    
    //trouve la clée de la prochaine question
    function getNextQuestion(id,reponse){
        dispatch(addUserResponses(
            {'domaine':questionReponse.domaine,
            'idQ' : questionReponse.id,
            'question':questionReponse.question,
            'reponse':reponse
        }));

        var key="";        
        if(id){
            if(id[0]==="B"){
                key=String.fromCharCode(id.charCodeAt(0)+1)+(parseInt(id.split(id[0])[1])-1).toString();
            }else{
                key=String.fromCharCode(id.charCodeAt(0)+1)+(parseInt(id.split(id[0])[1])).toString();        
            }            
        }        
        
        try{
            if(Object.keys(curentDomaine.questionnaire).indexOf(key[0])!==-1 && Object.keys(curentDomaine.questionnaire[key[0]]).indexOf(key)!==-1){
                const newQestionnaire=curentDomaine.questionnaire[key[0]][key];                
                dispatch(setQuestionnaire(newQestionnaire));
                //setQuestionReponse(newQestionnaire);                
            }else{                             
                navigate("/information");

            }
            
        }catch(err){
            console.error("Error: ",err);
        }             
        return key;
    }

    //trouve la clé de la précédente question
    function getPrevQuestion(){        
        var key="";
        if(userResponses.length>0){
            const lastResponse=userResponses[userResponses.length-1];
            key=lastResponse.idQ;            
        }else{
            console.log("redirecte to boarding");
            navigate("/")
        }                        
        
        try{
            if(key[0]==="B"){
                if(Object.keys(curentDomaine.questionnaire).indexOf(key[0])!==-1){
                    const prevQestionnaire=curentDomaine.questionnaire[key[0]].filter((e)=>e.id===key)
                    if(prevQestionnaire.length>0){                        
                        const newUpdateUserResponses=userResponses.filter((e)=>e.idQ!==key);                                                
                        dispatch(setQuestionnaire(prevQestionnaire[0]));                        
                        dispatch(updateUserResponses(newUpdateUserResponses));
                        //setQuestionReponse(prevQestionnaire[0]);                
                    }                
                }else{
                    console.log("Pas de question Cas B:");                    
                    navigate("/")    
                }

            }else{

                try{
                    if(Object.keys(curentDomaine.questionnaire).indexOf(key[0])!==-1 && Object.keys(curentDomaine.questionnaire[key[0]]).indexOf(key)!==-1){
                        const newQestionnaire=curentDomaine.questionnaire[key[0]][key];                        
                        const newUpdateUserResponses=userResponses.filter((e)=>e.idQ!==key);                                                
                        dispatch(setQuestionnaire(newQestionnaire));                        
                        dispatch(updateUserResponses(newUpdateUserResponses));
                        //setQuestionReponse(newQestionnaire);                
                    }else{                        
                        navigate("/")
        
                    }
                    
                }catch(err){
                    console.error("Error: ",err);
                }             
                return key;

            }            
            
        }catch(err){
            console.error("Error: ",err);
        }             
        return key;
    }

    return (
    
    <div className="main-container">

        <NavBar Logo={Logo} text="Contact"/>         
        <div className="questionnaire-main-frame">            
                <div className="questionnaire-main-text">{questionReponse ? questionReponse.question:null}</div>
                <img className="line-frame" src={Redline} alt="no icon"/>
                <div className="questionnaire-content-frame">            
                    <div className="questionnaire-grid-frame">
                        {questionReponse ? questionReponse.reponses.map((reponse,index)=>(
                            <div className="questionnaire-card" key={index} onClick={()=>getNextQuestion(reponse.id,reponse.value)}>
                                <div className="questionnaire-card-text-frame"><label className="questionnaire-card-text" >{reponse.value}</label></div>
                                <div className="questionnaire-card-icon-frame">
                                    <img className="questionnaire-card-icon" src={Flecherouge} alt="not icon"/>
                                </div>                            
                            </div>
                        )):null
                        } 
                        <BackButton icon={Flechegauche} text="Etape précédente" onClick={()=>getPrevQuestion()}/>                                              
                    </div>                
                    
                </div>                             
                <div className="questionnaire-notification-frame">
                    <ul className="custom-unique-list" style={{margin:"auto","--image-url":`url(${Okvert})`}} >
                        <li><span className="questionnaire-notification-text">Plus de <b>1500 professionnels qualifiés,</b> recrutés selon des critères et un processus stricts</span></li>
                        <li><span className="questionnaire-notification-text">Fourchette tarifaire <b>connue à l’avance,</b> incluant le déplacement ainsi qu’un devis gratuit</span></li>
                        <li><span className="questionnaire-notification-text">Intervention <b>7j/7 24h/24</b> pour les dépannages d’urgence</span></li>
                    </ul>                
                </div>
        </div>        
        <Footer logo={Logo}/>
    </div>);
}

export default Questionnaire;