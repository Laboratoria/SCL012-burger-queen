import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'
import App from './App';

// jest.mock('./Components/Button', () => {
//   return () => (<button type="button">MESERO</button>);
// });

describe('App - Component', () => {

  let component;
let application ;
  beforeEach(() => {
    application = new App();
    component = render(<App></App>);
  });

  test('should create', () => {
    expect(component).toBeTruthy()
  })

  test('should have a button element', () => {
    const alertSpy = jest.spyOn(console, 'log');
    const buttonElem = screen.queryByText('MESERO');
    expect(buttonElem).toBeTruthy();
    expect(alertSpy).not.toHaveBeenCalled();
    fireEvent.click(buttonElem);
    expect(alertSpy).toHaveBeenCalledWith(1);
  });

  test('should have a method called handleClick',()=>{
    expect(application.handleClick).toBeInstanceOf(Function);
  });

  test('should call preventDefault from event on handleClick call',()=>{
    const event = {
      preventDefault: jest.fn()
    };
    expect(event.preventDefault).not.toHaveBeenCalled();
    application.handleClick(event);
    expect(event.preventDefault).toHaveBeenCalled();
  });
})
