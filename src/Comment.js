import React from 'react'

export default function Comment({comment}) {
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
