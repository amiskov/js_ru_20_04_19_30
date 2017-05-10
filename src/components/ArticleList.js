import React from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from '../decorators/accordion'

function ArticleList(props) {
    const toggleArticle = id => ev => props.toggleSection(id);

    const elements = props.articles.map(
        article =>
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === props.openSectionId}
                    toggleOpen={toggleArticle(article.id)}
                />
            </li>
    );

    return (
        <ul>
            {elements}
        </ul>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.array,
    openSectionId: PropTypes.oneOfType([PropTypes.object, PropTypes.string]), // null or string
    toggleSection: PropTypes.func
};

export default Accordion(ArticleList)