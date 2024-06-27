import { createStore } from "redux"

const initialState ={
    balance:0,
    name:"",
    mobile:null
}

function accountReducer(state=initialState,action){
    switch (action.type) {
        case "deposit":
            return {...state, balance:state.balance + +action.payload};
        case "withdraw":
            return {...state, balance:state.balance - +action.payload};
        case "updateName":
            return {...state, name:action.payload};
        case "updateMobile":
            return {...state, mobile:action.payload};
        default:
            return state;
    }
}
const store = createStore(accountReducer)

export default store