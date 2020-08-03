import React from 'react';

import './App.css';
import { connect } from "react-redux";
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile_Container from './components/Profile/Profile_Container';
import Chats_Container from './components/Chats/Chats_Container';
import Settings from './components/Settings/Settings';
import Friends_Container from './components/Friends/Friends_Container';
import Feed from './components/Feed/Feed'
import Header_container from './components/Header/Header_container';
import { Route, BrowserRouter, withRouter } from 'react-router-dom';
import store from './redux/redux-store';
import LoginPage from './components/LoginPage/LoginPage';
import {getAuthUserData} from './redux/ authy_reducer';
import {initialize} from './redux/app_reducer'
import { compose } from 'redux'
import Loader from './components/Loader/Loader';

class App extends React.Component{

  componentDidMount(){
    this.props.initialize();
  }

  render (){
    if (!this.props.initialized){
      return <Loader/>
    }
    return (
      <BrowserRouter>
        <div className='wrapper'>
          <Header_container/>
          <Nav />
          <Route path='/Friends' render={() => <Friends_Container/>}/>
          <Route path='/Feed' component={Feed}/>
          <Route path='/Settings' component={Settings}/>
          <Route path='/Profile/:userId' render={ () => <Profile_Container store={store}/> }/>
          <Route path='/Chats' render={ () => <Chats_Container store={store} />}/>
          <Route path='/Login' render={() => <LoginPage/>}/>
        </div>
      </BrowserRouter>
    )
  }
 
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  connect(mapStateToProps, {initialize}))(App);
