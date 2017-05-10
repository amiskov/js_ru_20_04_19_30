import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'

export default class ArticleList extends Component {
    state = {
        openArticleId: null // все статьи по началу закрыты
    }

    render() {
        const elements = this.props.articles.map((article) => {
            return (
                <li key={article.id}>
                    <Article
                        article={article}
                        isOpen={article.id == this.state.openArticleId}
                        toggleOpen={this.toggleArticle(article.id)}
                    />
                </li>
            )
        });

        return (
            <ul>
                {elements}
            </ul>
        )
    }

    // карирование, запоминаем id в замыкании и возвращаем функцию.
    // Тут toggleArticle не метод, чтоб this не биндить
    toggleArticle = id => ev => {
        this.setState({
            openArticleId: id
        })
    }

    /*
    // toggleOpen={this.toggleArticle.bind(this, article.id)}
    toggleArticle(id) {
        this.setState({
            openArticleId: id
        })
    }
    */
}

ArticleList.propTypes = {
    articles: PropTypes.array 
}