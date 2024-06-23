import axios from "../config";

// Poste le formulaire de l'utilisateur et ses reponses
export const postFormAndResponses = (data) => {  
  return axios.post("/intervention", data).then((response) => {
      return response.data});
};