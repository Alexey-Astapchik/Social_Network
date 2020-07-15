import React from 'react';

import Loader from '../../Loader/Loader';
import style_status from '../ProfileItem/ProfileStatus.css';


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
    }

    activateEditMode () {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode () {
        this.setState({
            editMode: false
        })
    }

    render (props){
        return (
            <div className='user_status'>
                { !this.state.editMode && 
                    <div>
                        <span onClick={ this.activateEditMode.bind(this) }>{this.props.status}</span>
                    </div>
                }
                { this.state.editMode && 
                    <div>
                        <input autoFocus={true} onBlur={ this.deactivateEditMode.bind(this) } className='active_style'></input>
                    </div>
                }              
            </div>
          )
    }

}

export default ProfileStatus;