import { configureStore, createSlice } from "@reduxjs/toolkit";

const domainesSlice= createSlice({
    name: "domaines",
    initialState : [],
    reducers: {
        setDomainesData: (state, action) =>{
            // { type: "domaines/setDomainesData", payload: [{}]}
            const data=action.payload;
            state=data;
            return state;
        }        
    }
})

const curentDomaineSlice= createSlice({
    name: "curentDomaine",
    initialState : {},
    reducers: {
        setCurentDomaine: (state, action) =>{
            // { type: "domaines/setCurentDomainesData", payload: [{}]}
            const data=action.payload;
            state=data;
            return state;
        }        
    }
})


const questionnaireSlice= createSlice({
    name: "questionnaire",
    initialState : {
        id: "",
        domaine: "",
        question : "",
        reponses : []
    },
    reducers: {
        setQuestionnaire: (state, action)=>{
            // { type: "questionnaire/stQuestionnaire", payload: "Mon proble concerne le WC"}
            const data=action.payload;
            state=data;
            return state;            
        }        
    }    
})

const userQuestionnaireSlice= createSlice({
    name: "UserQuestionnaire",
    initialState: [],
    reducers: {
        addUserQuestionnaire: (state, action)=>{
            // { type: "questionnaire/addQuestionnaire", payload: "Mon proble concerne le WC"}
            const newQestionnaire = {
                question: action.payload,
                reponse: action.payload
            }
            state.push(newQestionnaire);
        },
        updateUserQuestionnaire: (state, action)=>{}
    }    
})


export const { setDomainesData }= domainesSlice.actions;
export const { setQuestionnaire }= questionnaireSlice.actions;
export const { addUserQuestionnaire, updateUserQuestionnaire }= userQuestionnaireSlice.actions;
export const {setCurentDomaine}=curentDomaineSlice.actions;


export const store = configureStore({
    reducer: {
        domaines: domainesSlice.reducer,
        questionnaire: questionnaireSlice.reducer,
        curentDomaine: curentDomaineSlice.reducer
    }
})

