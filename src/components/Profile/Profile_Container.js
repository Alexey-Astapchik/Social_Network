import React from 'react';

import * as axios from 'axios';
import '../Profile/Profile.css';
import store from '../../redux/redux-store';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserProfile} from '../../redux/profilePage_reducer';
import { withRouter, Redirect } from 'react-router-dom';


class Profile_Container extends React.Component {

    componentDidMount() {
      let userId = this.props.match.params.userId;
      if(!userId){
        userId = 2;
      }
      this.props.getUserProfile(userId)
    }

    render(){

      if (!this.props.isAuth) return <Redirect to={'./Login'}/>

        return (
            <div className="content">
              <Profile {...this.props} profile={this.props.profile} />
            </div>
          )
    }
    
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})

let WithURLDataContainerComponent = withRouter(Profile_Container)

export default connect(mapStateToProps, {getUserProfile}) (WithURLDataContainerComponent);

