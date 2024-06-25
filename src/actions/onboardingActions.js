import axios from "../config";

// Recuperer les domaines
export const getAllDomaines = () => {  

    try{
      return axios
          .get("domaines")
          .then((response,error) => { 
            if(error){
              console.log("Erro in query");
              return [];
            }                               
            return response.data;
          });
    }catch(error){      
      console.log("ERROR: ",error);
      return [];
    }    
  };