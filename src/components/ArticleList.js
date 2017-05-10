import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from '../decorators/Accordion'

function ArticleList(props) {
    const elements = props.articles.map(
        article =>
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id == props.openSectionId}
                    toggleOpen={props.toggleSection(article.id)}
                />
            </li>
    )

    return (
        <ul>
            {elements}
        </ul>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.array
}

export default Accordion(ArticleList)