import React, {Component} from 'react'

class Comment extends Component {
    render() {
        const {comment} = this.props;

        return (
            <div className="comment">
                <div className="comment__user">
                    <strong>{comment.user}</strong>
                </div>
                <div className="comment__text">
                    {comment.text}
                </div>
            </div>
        )
    }
}

export default Comment;
