import React from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'


let mapStateToPropsRedirect = (state) => ({
    isAuth: state.auth.isAuth
});


const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render () {
            if (!this.props.isAuth) return <Redirect to={'./Login'}/>

            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
};

export default withAuthRedirect;