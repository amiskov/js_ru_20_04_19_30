import React from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from '../decorators/accordion'

function ArticleList({articles, isSectionOpen, toggleSection}) {
    const elements = articles.map(
        article =>
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={isSectionOpen(article.id)}
                    toggleSection={toggleSection(article.id)}
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