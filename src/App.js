import React from 'react';

import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Chats_Container from './components/Chats/Chats_Container';
import Settings from './components/Settings/Settings';
import Friends_Container from './components/Friends/Friends_Container';
import Feed from './components/Feed/Feed'

import { Route, BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header/>
        <Nav />
        <Route path='/Friends' render={() => <Friends_Container/>}/>
        <Route path='/Feed' component={Feed}/>
        <Route path='/Settings' component={Settings}/>
        <Route path='/Profile' render={ () => <Profile store={props.store}/> }/>
        <Route path='/Chats' render={ () => <Chats_Container store={props.store} />}/>
      </div>
    </BrowserRouter>
  );
}
// store={props.store}
// state={props.state.sidebar} store={store}


export default App;
