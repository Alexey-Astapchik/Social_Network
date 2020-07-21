import React from 'react'
import '../ValidationForm/ValidationForm.css'

const Textarea = ({input, meta, ...props}) => {

    const isError = meta.touched && meta.error 

    return (
        <div className={isError ? 'error_post_message' : '' }>     
            <input {...input} {...props} type="text" class="inp form-control" id="validationCustom03" />
            <div class="invalid-feedback">
                Write your post...
            </div>
            <div className={'error_post_message'}>
            { isError && <span className='error_post'>{meta.error}</span>}
            </div>
        </div>  
    )
}

 export const Input = ({input, meta, ...props}) => {

    const isError = meta.touched && meta.error 


    return (
        <div className={isError ? 'error_post_message' : '' }>     
            <input {...input} {...props} type="text" class="inp form-control" id="validationCustom03" />
            <div class="invalid-feedback">
            </div>
            <div className={'error_post_message_for_login'}>
            { isError && <span className='error_login'>{meta.error}</span>}
            </div>
        </div>  
    )
}

export default Textarea;