import React, {Component} from 'react'
import CommnetList from './CommentList'
import PropTypes from 'prop-types'

function Article(props) {
    const {article, toggleOpen} = props;

    const getBody = () => {
        return props.isOpen && (
                <div>
                    {props.article.text}
                    <CommnetList comments={props.article.comments}/>
                </div>
            )
    };

    return (
        <section>
            <h2 onClick={toggleOpen}>
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
    toggleOpen: PropTypes.func
};

export default Article