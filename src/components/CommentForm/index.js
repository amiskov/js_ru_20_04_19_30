import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.less';

class CommentForm extends Component {
    state = {
        user: '',
        text: ''
    };

    handleUserChange = ev => {
        this.validate(ev.target, 'commentUser');
    };

    handleTextChange = ev => {
        this.validate(ev.target, 'commentText');
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
        return (this.state[type].length && this.state[type].length < 5) ? '_error' : '';
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
                            disabled={this.state.user.length < 5 || this.state.text.length < 5}
                    >Send</button>
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
