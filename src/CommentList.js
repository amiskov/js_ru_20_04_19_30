import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
    state = {
        show: false
    };

    toggle = () => {
        this.setState({
            show: !this.state.show
        })
    };

    render() {
        const {comments} = this.props;

        if (!comments) {
            return null;
        }

        const elements = comments.map((comment) => {
            return (
                <li className="comment-list__item" key={comment.id}>
                    <Comment comment={comment}/>
                </li>
            )
        });

        const getText = () => {
            return this.state.show ? 'Hide comments' : 'Show comments'
        }

        return (
            <div className="comments">
                <button onClick={this.toggle} className="comments__toggle">
                    {getText()} {comments.length}
                </button>
                {this.state.show ?
                    <div className="comments__container">
                        <h3>Comments</h3>
                        <ul className="comment-list">
                            {elements}
                        </ul>
                    </div>
                    : ''}
            </div>
        )
    }
}

export default CommentList;
