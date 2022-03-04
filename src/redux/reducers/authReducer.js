import { loginActionType, resetActionTypes } from "../actionType/actionType";

const initialState = {
        loginSuccess: null,
        loginLoading: false,
        loginFailed: null,  
    };


    const authReducer = (state = initialState, action) => {
        switch (action.type) {
             // sign in   
            case loginActionType.SUCCESS_ACTION:
                return {
                    ...state,
                    loginSuccess: action.value,
                    loginLoading: false,
                    loginFailed: null
                };
    
            case loginActionType.FAILED_ACTION:
                return {
                    ...state,
                    loginFailed: action.value,
                    loginLoading: false,
                    loginSuccess: null
                };
    
            case loginActionType.REQUEST_ACTION:
                return {
                    ...state,
                    loginLoading: true,
                    loginFailed: null,
                    loginSuccess: null
                };
    
          
            // Reset Action Types
            case resetActionTypes.AUTH_RESET_ACTION:
                return {
                    ...state,
                    loginLoading: false,
                    loginFailed: null,
                    loginSuccess: null,
                };
    
            default:
                return state
        }
    };
    
    export default authReducer
    