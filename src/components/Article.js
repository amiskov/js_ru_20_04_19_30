import React, {Component} from 'react'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            comments: PropTypes.array
        }),
        // from toggleOpen decorator
        toggleOpen: PropTypes.func,
        isOpen: PropTypes.bool
    }

    render() {
        const {article, toggleOpen} = this.props;

        return (
            <section>
                <h2 onClick={toggleOpen}>
                    {article.title}
                </h2>
                {this.getBody()}
            </section>
        )
    }

    getBody() {
        return this.props.isOpen &&
            <div>{this.props.article.text}<CommentList comments={this.props.article.comments}/></div>
    }
}

export default toggleOpen(Article)