import "./Questionnaire.css";
import Logo from './../../assets/images/logo.png';
import Flecherouge from './../../assets/images/flecherouge.png';
import Redline from './../../assets/images/redline.png';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addUserResponses, setQuestionnaire, updateUserResponses } from "../../redux";
import { useNavigate } from "react-router-dom";


function Questionnaire(props){

    /*
    const questionnaire={
        id:1,question:"Où se situe votre problème ?",
            responses:["WC","Lavabo/évier","Douche/baignoire",
                "colonne générale d'immeuble","Tuyauterie/canalisation",
                "Tuyauterie/canalisation","Tuyau machine à laver/lave-vaisselle",
                "chaudiere/chauffe-eau/ballon d'eau chaude"
            ]
        }
    */    
    console.log("Main Init......");
    const [questionReponse,setQuestionReponse]=useState(null);
    const [isMounted,setIsMounted]=useState(false);
    var questionnaire=useSelector((state)=>state.questionnaire);
    const curentDomaine=useSelector((state)=>state.curentDomaine);
    const userResponses=useSelector((state)=>state.userResponses);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    useEffect(()=>{
        console.log("Use effect...... is Mount:",isMounted);
        if(!isMounted){                                                
            setQuestionReponse(questionnaire);
            console.log("QuestionnaireReponse Now: ",questionReponse);
            setIsMounted(true);
        }
    },[isMounted])        

    console.log("QuestionnaireReponse After: ",questionReponse);
    console.log("User responses after After: ",userResponses);
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
        console.log("CurentD: ",curentDomaine);
        console.log("result nex question :",key);           
        try{
            if(Object.keys(curentDomaine.questionnaire).indexOf(key[0])!==-1 && Object.keys(curentDomaine.questionnaire[key[0]]).indexOf(key)!==-1){
                const newQestionnaire=curentDomaine.questionnaire[key[0]][key];
                console.log("Qestionnaire curent :",questionnaire);
                console.log("New curent :",newQestionnaire);
                dispatch(setQuestionnaire(newQestionnaire));
                setQuestionReponse(newQestionnaire);                
            }else{
                console.log("Pas de question:");
                console.log("props:",props);
                console.log("props keys:",Object.keys(props));
                navigate("/information")

            }
            
        }catch(err){
            console.error("Error: ",err);
        }             
        return key;
    }

    function getPrevQuestion(){        
        var key="";
        if(userResponses.length>0){
            const lastResponse=userResponses[userResponses.length-1];
            key=lastResponse.idQ;            
        }else{
            console.log("redirecte to boarding")
                    //navigate("/")
        }                
        console.log("CurentD: ",curentDomaine);
        console.log("result Prev question :",key);           
        console.log("User reepones :",userResponses);           
        try{
            if(key[0]==="B"){
                if(Object.keys(curentDomaine.questionnaire).indexOf(key[0])!==-1){
                    const prevQestionnaire=curentDomaine.questionnaire[key[0]].filter((e)=>e.id===key)
                    if(prevQestionnaire.length>0){
                        //=curentDomaine.questionnaire[key[0]][key];
                        console.log("Qestionnaire curent :",questionnaire);
                        console.log("New prev questionnairecurent :",prevQestionnaire[0]);
                        const newUpdateUserResponses=userResponses.filter((e)=>e.idQ!==key);                                                
                        dispatch(setQuestionnaire(prevQestionnaire[0]));
                        dispatch(updateUserResponses(newUpdateUserResponses));
                        setQuestionReponse(prevQestionnaire[0]);                

                    }                
                }else{
                    console.log("Pas de question:");
                    console.log("props:",props);
                    console.log("props keys:",Object.keys(props));
                    //navigate("/")
    
                }

            }else{

                try{
                    if(Object.keys(curentDomaine.questionnaire).indexOf(key[0])!==-1 && Object.keys(curentDomaine.questionnaire[key[0]]).indexOf(key)!==-1){
                        const newQestionnaire=curentDomaine.questionnaire[key[0]][key];
                        console.log("Qestionnaire curent :",questionnaire);
                        console.log("New curent :",newQestionnaire);
                        //dispatch(setQuestionnaire(newQestionnaire));
                        //setQuestionReponse(newQestionnaire);                
                    }else{
                        console.log("Pas de question:");
                        console.log("props:",props);
                        console.log("props keys:",Object.keys(props));
                        //navigate("/information")
        
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
    
    <div className="questionnaire-main-container">

        <div className="questionnaire-nav-bar">
            <div className="questionnaire-logo-frame">
                <img className="questionnaire-logo" src={Logo} alt="no icon"></img>
            </div>
            <div className="questionnaire-contact-frame">
                <label className="questionnaire-contact-text">Contact</label><label className="questionnaire-red-text">.</label>
            </div>
        </div>        
        <div className="questionnaire-main-frame">            
                <div className="questionnaire-main-text">{questionReponse ? questionReponse.question:null}</div>
                <img className="questionnaire-line-frame" src={Redline} alt="no icon"/>
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
                        <div className="questionnaire-back-button-frame" onClick={()=>getPrevQuestion()}>
                            <div className="questionnaire-back-button"><label className="questionnaire-back-button-text">Etape précédente</label></div>
                        </div>               
                    </div> 
                </div>                             
                <div className="questionnaire-notification-frame">
                <ul>
                    <li><span className="questionnaire-notification-text">Plus de <b>1500 professionnels qualifiés,</b> recrutés selon des critères et un processus stricts</span></li>
                    <li><span className="questionnaire-notification-text">Fourchette tarifaire <b>connue à l’avance,</b> incluant le déplacement ainsi qu’un devis gratuit</span></li>
                    <li><span className="questionnaire-notification-text">Intervention <b>7j/7 24h/24</b> pour les dépannages d’urgence</span></li>
                </ul>
                
                </div>
        </div>        
                    
        <div className="questionnaire-bottom-frame">        
            <label className="questionnaire-bottom-text">Goweb</label><label className="questionnaire-bottom-red-text">.</label>
        </div>    

    </div>);
}

export default Questionnaire;