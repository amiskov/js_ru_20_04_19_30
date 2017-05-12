import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.less';

class CommentForm extends Component {
    state = {
        commentUser: '',
        commentText: ''
    };

    handleUserChange = ev => {
        this.validate(ev.target, 'commentUser');
    };

    handleTextChange = ev => {
        this.validate(ev.target, 'commentText');
    };

    validate = (el, stateItemName) => {
        const value = el.value;

        el.style.borderColor = (value.length < 5 && value.length !== 0) ? 'red' : '';

        if (value.length > 20) {
            el.style.borderColor = 'red';

            setTimeout(() => {
                el.style.borderColor = '';
            }, 300);
            return;
        }

        const stateObj = {};
        stateObj[stateItemName] = value;

        this.setState(stateObj);
    };

    handleFormSubmit = ev => {
        ev.preventDefault();

        if (this.state.commentUser.length < 5 || this.state.commentText < 5) {
            alert('Data is not valid!')
        } else {
            alert('Data is ok, ready to submit.')
        }
    };

    render() {
        return (
            <form className="form" action="#" onSubmit={this.handleFormSubmit}>
                <div className="form__row">
                    <input
                        className="form__input"
                        onChange={this.handleUserChange}
                        type="text"
                        value={this.state.commentUser}
                        placeholder="Enter from 5 to 20 symbols"
                    />
                </div>
                <div className="form__row">
                    <textarea
                        value={this.state.commentText}
                        className="form__input form__textarea"
                        onChange={this.handleTextChange}
                        placeholder="Enter from 5 to 20 symbols"
                    />
                </div>
                <div className="form__row">
                    <button type="submit" className="form__button">Send</button>
                </div>
            </form>
        );
    }
}

CommentForm.propTypes = {
    commentUser: PropTypes.string,
    commentText: PropTypes.string
};

export default CommentForm;
