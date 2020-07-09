import React from 'react';
import { connect } from "react-redux";
import Header from './Header';
import Axios, * as axios from 'axios';
import {setAuthUserDataAC} from '../../redux/ authy_reducer';
class Header_container extends React.Component {

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
                .then(response => {
                    if (response.data.resultCode === 0){
                        let {id, email, login} =  response.data.data;
                        this.props.setAuthUserDataAC(id. email, login);
                    } 
            })
    }

    render() {




        return <Header {...this.porps} />
    }
}

let mapStateToProps = (state) => {
    return {
    isAuth: state.auth.isAuth,
    login: state.auth.isAuth
}}

export default connect (mapStateToProps, {setAuthUserDataAC}) (Header_container); 