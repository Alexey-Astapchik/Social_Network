import React from 'react';

import './LoginPage.css'
import {Field,reduxForm} from 'redux-form'


const LoginForm = (props) =>{
    return (
        <div className='container-form'>
            <form onSubmit={props.handleSubmit}>
                    <div className='input_form'>
                        <Field
                            type={'text'}
                            name={'login'}
                            id={'email'}
                            placeholder={'Enter your email'}
                            component={'input'}
                        />
                        <label for='email'>Enter your email</label>
                    </div>
                    <div className='input_form'>
                        <Field
                                type={'text'}
                                name={'password'}
                                id={'password'}
                                placeholder={'Password'}
                                component={'input'}
                            />
                        <label for='password'>Password</label>
                    </div>
                    <div className='input_box'>
                        <button  className="btn_form">Login</button>
                        <Field component={'input'} name={'rememberMe'} className={'check_remember'} type='checkbox'></Field>
                    </div>
            </form>
        </div>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const LoginPage = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return(
        <LoginReduxForm onSubmit={onSubmit}/>
    )
    
}




export default LoginPage;
