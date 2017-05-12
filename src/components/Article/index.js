import React from 'react'
import CommentList from '../CommentList'
import PropTypes from 'prop-types'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './style.css'

class Article extends React.Component {
    render() {
        const {article, isOpen, toggleSection} = this.props;
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

                <CSSTransitionGroup
                    transitionName="article"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {getBody()}
                </CSSTransitionGroup>
            </section>
        )
    }
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