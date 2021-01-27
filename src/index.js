import React, { createElement } from 'react'
import reactDom from 'react-dom';
// import { Quality }  from '../src/exportToIndex.js'

//import CSS
import '../src/index.css';

//import JS components
import { ShowBookList } from './exportComponent/getBooks';
import App from './exportComponent/avancedExport';
import Example from './exportComponent/canDoClick';
import AllIn from './exportComponent/callJustElements'
import Welcome from './exportComponent/tryingProps'
import AddMore from './exportComponent/usingGoodProps'
import HandsomestEvent from './exportComponent/goingWithEvents'
import Card from './exportComponent/cycleOfComponent'
import BrokeLink from './exportComponent/handleEventDoc'
import ToggleTry from './exportComponent/useToggle'
import Greeting from './exportComponent/conditionalRendering'
import loginControl from './exportComponent/condicionalState'
import NameForm from './exportComponent/iziForm'
import { render } from '@testing-library/react'

// -- Nested Components --

// -- how show the component -- 
// reactDom.render(<ShowBookList/>, document.getElementById('root'));
//  reactDom.render(<App/>, document.getElementById("root"));
// reactDom.render(<Example/>, document.getElementById('root'));
// reactDom.render(<AllIn/>, document.getElementById('root'));
// reactDom.render(<AddMore />, document.getElementById('root'));
// reactDom.render(<HandsomestEvent/>, document.getElementById("root"))
// reactDom.render(<Card/>, document.getElementById('root'));
// reactDom.render(<BrokeLink/>, document.getElementById("root"));
// reactDom.render(<ToggleTry/>, document.getElementById("root"));
// reactDom.render(<Greeting isLoggedIn={true} />, document.getElementById('root'));
// reactDom.render(<loginControl/>, document.getElementById('root'))
// reactDom.render(<NameForm/>, document.getElementById('root'))