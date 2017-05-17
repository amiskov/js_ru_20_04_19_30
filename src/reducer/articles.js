import {articles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE} from '../constants'

export default (articles = defaultArticles, action) => {
    const {type, payload} = action;

    switch (type) { // тут только типа не достаточно, нужно еще передавать id статьи, чтоб знать, что удалять
        case DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id);
    }

    return articles; // Если пришел другой экшн, не DELETE_ARTICLE, просто возвращаем статьи
}