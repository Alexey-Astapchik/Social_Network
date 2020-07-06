import React from 'react';

import * as axios from 'axios';
import '../Profile/Profile.css';
import store from '../../redux/redux-store';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setUserProfile} from '../../redux/profilePage_reducer';
import { withRouter } from 'react-router-dom';

class Profile_Container extends React.Component {

    componentDidMount() {
      let userId = this.props.match.params.userId;
      if(!userId){
        userId = 2;
      }
        axios.get(`https://social-network.samuraijs.com/api/1.0/Profile/` + userId)
                .then(response => {
                    this.props.setUserProfile(response.data);

            })
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
})

let WithURLDataContainerComponent = withRouter(Profile_Container)

export default connect(mapStateToProps, {setUserProfile}) (WithURLDataContainerComponent);

