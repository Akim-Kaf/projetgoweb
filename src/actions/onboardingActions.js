import { useDispatch } from "react-redux";
import axios from "../config";





// Recuperer les domaines
export const getAllDomaines = () => {  
    return axios
          .get("domaines")
          .then((response,error) => { 
            if(error){
              console.log("Erro in query");
              return [];
            }                               
            return response.data;
          });
  };