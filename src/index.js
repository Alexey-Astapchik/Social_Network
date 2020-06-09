import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { Provider } from 'react-redux';


// let rerenderTheWholeTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
    </React.StrictMode>, document.getElementById('root'));
// }
// state={ state } dispatch={ store.dispatch.bind(store) } store={ store } 
// rerenderTheWholeTree(store.getState());

// store.subscribe(() => {
//   let state = store.getState();
//   rerenderTheWholeTree(state);
// });

// rerenderTheWholeTree();

// store.subscribe(()=> {
//   rerenderTheWholeTree();
// })

