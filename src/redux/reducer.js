
const initialState = {
    user:"",
}


const UserReducer = (state= initialState,action)=>{
    switch(action.type){
        case 'ADD_USER' : return {
            ...state,
            user:action.payload
        }
        default: return state;
    }
}

export default UserReducer;