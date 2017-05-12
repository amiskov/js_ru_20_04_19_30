import React from 'react'
import CommentList from './CommentList'
import PropTypes from 'prop-types'

function Article({article, isOpen, toggleSection}) { // вместо const {article, toggleSection} = props;
    const getBody = () => {
        return isOpen && (
                <div>
                    {article.text}
                    <CommentList comments={article.comments}/>
                </div>
            )
    };

    return (
        <section>
            <h2 onClick={toggleSection}>
                {article.title}
            </h2>
            {getBody()}
        </section>
    )
}

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        comments: PropTypes.array
    }),
    //from parent/HOC
    isOpen: PropTypes.bool,
    toggleSection: PropTypes.func
};

export default Article