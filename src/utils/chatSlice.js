import { createSlice} from "@reduxjs/toolkit";
import { OFSET_LIVE_CHAT } from "./constants";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        message:[],
    },
    reducers:{
        addmessage:(state,action)=>{
            state.message.slice(OFSET_LIVE_CHAT,1);
            state.message.push(action.payload);
        },
    },
});

export const{addmessage}=chatSlice.actions; 

export default chatSlice.reducer;