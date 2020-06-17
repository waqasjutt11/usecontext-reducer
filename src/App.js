import React, { useState } from 'react';
import Car from './Car';
import valueContext from './context';
function App(){
  //let [value, setValue] = useState(56);
  let value = useState(23);
  return(
    <valueContext.Provider value={value}>
    <div>
      Hello World
     <Car></Car>
    </div>
  </valueContext.Provider>
  );

}
export default App;