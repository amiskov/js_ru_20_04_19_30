import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component {
    state = {
        name: ''
    };

    render() {
        return (
            <div>
                <label htmlFor="userName">Username:</label>
                <input
                    id="userName"
                    ref="userName"
                    value={this.state.name}
                    type="text"
                    onChange={this.handleChange}
                />
            </div>
        );
    }

    handleChange = ev => {
        if (ev.target.value.length > 10) {
            ev.target.style.borderColor = 'red';
            return;
        } else {
            ev.target.style.borderColor = '';
        }
        this.setState({

            name: ev.target.value
        })
    }
}

UserForm.propTypes = {};
UserForm.defaultProps = {};

export default UserForm;
