import "./Onboarding.css";
import Line from './../../assets/images/line.png';
import { useEffect,useState } from "react";
import SerrurerieImg from "./../../assets/images/Serrurerie.png"
import PlomberieImg from "./../../assets/images/Plomberie.png"
import ElectriciteImg from "./../../assets/images/Electricite.png"
import ChauffageImg from "./../../assets/images/Chauffage.png"
import ElectromenagerImg from "./../../assets/images/Electromenager.png"
import VitrerieImg from "./../../assets/images/Vitrerie.png"
import { useDispatch, useSelector } from "react-redux";
import { setCurentDomaine, setDomainesData, setQuestionnaire } from "../../redux";
import{getAllDomaines} from "../../actions/onboardingActions"
import { useNavigate } from "react-router-dom";





function Onboarding(props){        
    const [isMounted,setIsMounted]=useState(false);    
    const dispatch = useDispatch();
    const domaines=useSelector((state)=> state.domaines);    
    const navigate=useNavigate();
    useEffect(()=>{
        if(!isMounted){                              
            setIsMounted(true);
            getAllDomaines().then((data)=>{
                console.log("Get result: ",data);
                dispatch(setDomainesData(data));
            });
        }                
    },[isMounted]);

    function getImage(nom){
        if(nom==="Plomberie")return PlomberieImg;
        if(nom==="Electricité") return ElectriciteImg;
        if(nom==="Chauffage") return ChauffageImg;
        if(nom==="Electroménager") return ElectromenagerImg;    
        if(nom==="Serrurerie"){
            return SerrurerieImg;
        }else{        
            return VitrerieImg
        }
    }

    function dispatchQuestionnaire(nom){        
        //var domaineCopy=[... domaines];
        const curentDomaine=domaines.filter((e)=>e.nom.trim()===nom.trim())[0];        
        const premiereCol=Object.keys(curentDomaine.questionnaire)[0];        
        console.log("{} questionnaire: ",curentDomaine.questionnaire[premiereCol][0]);
        const questionnaire=curentDomaine.questionnaire[premiereCol][0];
        dispatch(setCurentDomaine(curentDomaine));
        dispatch(setQuestionnaire(questionnaire));                
        navigate("/questionnaire")
    }
    

    return (                
            <div className="onboarding-main-container">
                
                <div className="onboarding-main-frame">
                    <div className="onboarding-main-text">Mon problème concerne :</div>
                    <img className="onboarding-line-frame" src={Line} alt="no icon"/>
                    <div className="onboarding-grid-frame">
                        {domaines?domaines.map((domaine,index=0)=>{                            
                            return (                                
                            <div key={index} onClick={()=>{dispatchQuestionnaire(domaine.nom)}}><div key={index} className="onboarding-card" >
                                <div key={index+1} className="onboarding-card-icon-frame">
                                    <img key={index+2} className="onboarding-card-icon" src={getImage(domaine.nom)} alt="not im"/>
                                </div>
                                <label className="onboarding-card-text">{domaine.nom}</label>
                                </div>
                            </div>
                        )}):null                    
                        }
                                        
                    </div>            
                </div>
                        
                <div className="onboarding-bottom-frame">        
                    <label className="onboarding-bottom-text">Goweb</label><label className="onboarding-bottom-red-text">.</label>
                </div>    
        </div>
            
    );
}

export default Onboarding;