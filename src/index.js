import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from './store';
import todosReducer from './reducers/todos_reducer';
import App from './components/app';


const store = createStore(todosReducer);


function render(){
  ReactDOM.render(<App store={store}/>, document.getElementById('container'))
}

render()

store.subscribe(render)
