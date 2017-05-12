import React from 'react'
import {findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from '../decorators/accordion'

class ArticleList extends React.Component {
    componentDidMount() {
        // const ref = this.refs[this.props.articles[0].id];
        // console.log(ref, findDOMNode(ref));
    }

    componentDidUpdate() {
        console.log(findDOMNode(this.refs[this.props.articles[0].id]));
    }

    render() {
        const {articles, isSectionOpen, toggleSection} = this.props;

        const elements = articles.map(
            article =>
                <li key={article.id}>
                    <Article
                        article={article}
                        isOpen={isSectionOpen(article.id)}
                        toggleSection={toggleSection(article.id)}
                        ref={article.id}
                    />
                </li>
        );

        return (
            <ul ref='ololoList'>
                {elements}
            </ul>
        )
    }

    getContainerRef = ref => {this.container = ref;}

}

ArticleList.propTypes = {
    articles: PropTypes.array,

    // from accordion decorator
    isSectionOpen: PropTypes.func,
    toggleSection: PropTypes.func
};

export default Accordion(ArticleList)