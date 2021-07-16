import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import{handleLoadServerFXPairs} from '../../actions/fxPairs';

export default function FXPairsList(){
const dispatch = useDispatch();

React.useEffect(()=>{
dispatch(handleLoadServerFXPairs());
},[dispatch]);

return(<div>Hello</div>);
}