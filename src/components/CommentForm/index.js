import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.less';

class CommentForm extends Component {
    state = {
        user: '',
        text: ''
    };

    handleChange = type => ev => {
        const {value} = ev.target;

        if (value.length > 20) {
            return;
        }

        this.setState({
            [type]: value
        });
    };

    handleFormSubmit = ev => {
        ev.preventDefault();
        alert('Submitted!')
    };

    getClassName = type => {
        return !this.isFieldValid(type) ? '_error' : '';
    };

    isFieldValid = type => !(this.state[type].length && this.state[type].length < 5);

    isFormValid = () => {
        return (
            this.state.user !== '' && this.state.text !== '' &&    // fields are filled
            this.isFieldValid('user') && this.isFieldValid('text') // fields are valid
        )
    };

    render() {
        return (
            <form className="form" action="#" onSubmit={this.handleFormSubmit}>
                <div className="form__row">
                    <input
                        onChange={this.handleChange('user')}
                        className={'form__input ' + this.getClassName('user')}
                        type="text"
                        value={this.state.user}
                        placeholder="Enter from 5 to 20 symbols"
                    />
                </div>
                <div className="form__row">
                    <textarea
                        value={this.state.text}
                        className={'form__input form__textarea ' + this.getClassName('text')}
                        onChange={this.handleChange('text')}
                        placeholder="Enter from 5 to 20 symbols"
                    />
                </div>
                <div className="form__row">
                    <button type="submit"
                            className="form__button"
                            disabled={!this.isFormValid()}
                    >Send
                    </button>
                </div>
            </form>
        );
    }
}

CommentForm.propTypes = {
    user: PropTypes.string,
    text: PropTypes.string
};

export default CommentForm;
