import React from 'react';
import { connect } from "react-redux";
import Header from './Header';
import Axios, * as axios from 'axios';
import {getAuthUserData} from '../../redux/ authy_reducer';
import {authAPI} from '../API/API';

class Header_container extends React.Component {

   

    render() {
        return <Header {...this.porps} />
    }
}

let mapStateToProps = (state) => {
    return {
    isAuth: state.auth.isAuth,
    login: state.auth.isAuth
}}

export default connect (mapStateToProps) (Header_container); 