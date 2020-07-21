import React from 'react';

import * as axios from 'axios';
import '../Profile/Profile.css';
import store from '../../redux/redux-store';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserProfile, getStatus, updateStatus} from '../../redux/profilePage_reducer';
import { withRouter, Redirect } from 'react-router-dom';
import withAuthRedirect from '../HOC/withAuthRedirect';
import { compose } from 'redux';
class Profile_Container extends React.Component {

    componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId){
        userId = this.props.loggedUserId;
      }
      this.props.getUserProfile(userId);
      this.props.getStatus(userId);
    }

    render () {
        return (
            <div className="content">
              <Profile {...this.props} 
                      profile={this.props.profile} 
                      status={this.props.status} 
                      updateStatus={this.props.updateStatus}/>
            </div>
          )
    } 
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile, 
  status: state.profilePage.status,
  loggedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
}); 

export default compose( 
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
  withAuthRedirect
) (Profile_Container)
