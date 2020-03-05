import React from "react";
import db from './configFire';

function breakfastMenu() { 
           db.collection('Almuerzo').get()
           .then((snapShots) => { 
                    snapShots.forEach(doc => {        
                        console.log("hola", doc.data());     
                     })   
                    });
    return ( <div>        
          <p></p>         
           </div>   
            );
          }
  export default breakfastMenu;