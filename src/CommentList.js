import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
    state = {
        show: false,
        //зачем эта функция в стейте, ты ведь не собираешься ее менять
        text: () => {
            return this.state.show ? 'Hide comments' : 'Show comments'
        }
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

        return (
            <div className="comments">
                <button onClick={this.toggle} className="comments__toggle">
                    {this.state.text()} {comments.length}
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
