import React from 'react';



export function Button(props) {
  return   <header className='App-header'>
    
    <div>
    <button type="button" className="btn btn-success btn-lg">Desayunos</button>
    {/* <button type="button" className="btn btn-danger btn-lg">Cocina</button> */}
    </div>

  </header>;
}
export function Almuerzos (props) {
  return <header className='App-header'>
  <div>
  <button type="button" className="btn btn-danger btn-lg">Almuerzos</button>
  {/* <button type="button" className="btn btn-danger btn-lg">Cocina</button> */}
  </div>

</header>;
}
// export default Button;
