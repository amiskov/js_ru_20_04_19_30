import {INCREMENT, DELETE_ARTICLE, UPDATE_SELECTION} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: {id}
    }
}

export function updateSelection(selection) {
    console.log('from AC: ', selection);
    return {
        type: UPDATE_SELECTION,
        payload: {
            selection: selection
        }
    }
}