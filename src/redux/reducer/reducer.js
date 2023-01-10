import {addItem,removeFromCart} from '../Actions/actions';

const initialState = []

export const cartReducer =(state = initialState,action)=>{
    switch(action.type){
        case addItem :
            return [...state,action.payload]
        case removeFromCart:
            return [action.payload]
        default : return state
    }
}