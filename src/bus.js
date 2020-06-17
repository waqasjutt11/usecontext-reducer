import React, { useReducer } from 'react';
import numberReducer from'./reducer';
function Bus(){
    let [state, dispatch]=useReducer(numberReducer, 33);
    return(
    <div>
        This is my bus {state}<br/>
        <button onClick={()=>{ dispatch ({abc:"INCREMENT", val:100})}}>Increase Value</button><br/>
        <button onClick={()=>{ dispatch ({abc:"DECREMENT", val:50})}}>decrease number</button>
    </div>
    );
}

export default Bus;
