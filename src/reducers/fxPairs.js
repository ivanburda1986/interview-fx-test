import {LOAD_FXPAIRS} from '../actions/fxPairs';

export default function fxPairs(state={}, action){
    switch(action.type){
        case LOAD_FXPAIRS:
            return{
                ...state,
                ...action.items
            }
        default:
            return state;
    }
}