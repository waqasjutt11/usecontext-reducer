import React, { useContext } from 'react';
import Bus from './bus'; 
import valueContext from './context';
function Car(props){
  let number =useContext(valueContext);
  return(
    <div>
      <p>
        This is my Car {number}
       </p>
       <Bus></Bus>
        </div>
  );
}
      

export default Car;
