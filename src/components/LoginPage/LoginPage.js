import React from 'react';

import './LoginPage.css'
import {Field,reduxForm} from 'redux-form'
import {Input} from '../ValidationForm/ValidationForm'
import { requiredField, maxLenCreator } from '../../util/validator';
import {connect} from 'react-redux'
import {login} from '../../redux/ authy_reducer';
import { Redirect } from 'react-router-dom';

// const maxLength = maxLenCreator(10)

const LoginForm = (props) =>{
    debugger
    return (
        <div className='container-form'>
            <form onSubmit={props.handleSubmit}>
                    <div className='input_form'>
                        <Field
                            type={'text'}
                            name={'login'}
                            id={'email'}
                            placeholder={'Enter your email'}
                            component={Input}
                            validate={[requiredField]}
                        />
                        {/* <label for='email'>Enter your email</label> */}
                    </div>
                    <div className='input_form'>
                        <Field
                                type='password'
                                name={'password'}
                                id={'password'}
                                placeholder={'Password'}
                                component={Input}
                                validate={[requiredField]}
                            />
                        {/* <label for='password'>Password</label> */}
                    </div>
                    <div className='input_box'>
                       
                        <button  className="btn_form">Login</button>
                        <div className="checkbox_form">
                            <Field component={'input'} name={'rememberMe'} className={'check_remember'} type='checkbox'/>
                            <p className="checkBox_text">Remember me</p>
                        </div>
                    </div>
            </form>
        </div>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const LoginPage = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth) {
        return <Redirect to={'/Profile'}/>
    }
    return(
        <LoginReduxForm onSubmit={onSubmit}/>
    )
    
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, { login }) (LoginPage);
