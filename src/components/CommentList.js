import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

function CommentList(props) {
    const {comments = [], isOpen, toggleOpen} = props;

    const elements = comments.map((comment) => {
        return (
            <li className="comment-list__item" key={comment.id}>
                <Comment comment={comment}/>
            </li>
        )
    });

    const getText = () => {
        return isOpen ? 'Hide comments' : 'Show comments'
    }

    if(!comments.length) {
        return <p>No comments yet</p>;
    }

    return (
        <div className="comments">
            <button onClick={toggleOpen} className="comments__toggle">
                {getText()} {comments.length}
            </button>
            {isOpen ?
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

// Тут можно писать другие функции, которые нужны компоненты.
// Их просто не экспортить. Это нормально. Не надо все пихать внутрь функции компонента.

export default toggleOpen(CommentList);
