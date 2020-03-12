import React from 'react';

// Creando el componente boton que nos servira para mostrar Desayunos
export function BreakfastButton() {
  return <header className='App-header'>
    <div>

    <button type="button" className="btn btn-danger btn-lg">Desayunos</button>
   
    </div>

  </header>
}
// Creando el boton que nos servira para mostrar Almuerzos
export function LunchButton () {
  return <header className='App-header'>
  <div>

  <button type="button" className="btn btn-success btn-lg">Almuerzos</button>
  
  </div>

</header>
}

export function KitchenButton () {
  return <header className='App-header'>
  <div>

  <button type="button" className="btn btn-primary btn-lg">Cocina</button>
  
  </div>

</header>
}


