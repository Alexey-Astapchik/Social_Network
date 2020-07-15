import React from 'react';

import * as axios from 'axios';
import '../Profile/Profile.css';
import store from '../../redux/redux-store';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserProfile} from '../../redux/profilePage_reducer';
import { withRouter, Redirect } from 'react-router-dom';
import withAuthRedirect from '../HOC/withAuthRedirect';
import { compose } from 'redux';
class Profile_Container extends React.Component {

    componentDidMount() {
      let userId = this.props.match.params.userId;
      if(!userId){
        userId = 2;
      }
      this.props.getUserProfile(userId);
      this.props.getUserStatus(status);
    }

    render(){
        return (
            <div className="content">
              <Profile {...this.props} profile={this.props.profile} />
            </div>
          )
    } 
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile, 
  status: state.profilePage.state 
}); 

export default compose( 
  connect(mapStateToProps, {getUserProfile}),
  withRouter,
  withAuthRedirect
) (Profile_Container)
