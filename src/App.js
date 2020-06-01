import React from 'react';

import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Chats from './components/Chats/Chats';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import Feed from './components/Feed/Feed'

import { Route, BrowserRouter } from 'react-router-dom';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header/>
        <Nav state={props.state.sidebar}/>
        <Route path='/Friends' component={Friends}/>
        <Route path='/Feed' component={Feed}/>
        <Route path='/Settings' component={Settings}/>
        <Route path='/Profile' render={ () => <Profile 
                                state={props.state.profilePage} 
                                dispatch={ props.dispatch }/> }/>
        <Route 
          path='/Chats' 
          render={ () => <Chats state={props.state.chatsPage} store={ props.store } 
        />}
        />
      </div>
    </BrowserRouter>
  );
}


export default App;
