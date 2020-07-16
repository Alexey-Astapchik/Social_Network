import React from 'react';

import Loader from '../../Loader/Loader';
import style_status from '../ProfileItem/ProfileStatus.css';


class ProfileStatus extends React.Component {

    

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
        
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }


    componentDidUpdate (prevProps, prevState) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }   
    }

    render () {
        return (
            <div className='user_status'>
                { !this.state.editMode && 
                    <div>
                        <p>What do you think?</p>
                        <span onClick={ this.activateEditMode }>
                            {this.props.status || 'Write...'}
                        </span>
                    </div>
                }
                { this.state.editMode && 
                    <div>
                        <input 
                            autoFocus={true} 
                            onChange={this.onStatusChange}
                            value={this.state.status}
                            onBlur={ this.deactivateEditMode } 
                            className='active_style' 
                        />
                    </div>
                }              
            </div>
          )
    }

}

export default ProfileStatus;