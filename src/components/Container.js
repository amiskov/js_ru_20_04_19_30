import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {articleStore} from '../stores'
import ArticleList from './ArticleList'

class Container extends Component {
    constructor() {
        super();
        this.state = {
            articles: articleStore.getAll()
        }
    }

    componentDidMount() {
        // хорошая практика — выносить подписку на события в этот метод.
        // в конструкторе или в componentWillMount лучше не подписываться, потому что при серверном рендеринге
        // мы не сможем отписаться и получим утечку памяти
        articleStore.addChangeListener(this.handleChange)
    }

    componentWillUnmount() {
        articleStore.removeChangeListener(this.handleChange)
    }

    handleChange = () => {
        this.setState({
            articles: articleStore.getAll() // на любое изменение достаем все статьи
        })
    };

    render() { // принято делать чистой функцией от пропсов и стейтов
        // должна зависеть от своих аргументов (пропсов и стейтов) и не от чего больше
        return (
            <ArticleList articles={this.state.articles}/>
        );
    }
}

Container.propTypes = {};
Container.defaultProps = {};

export default Container;
