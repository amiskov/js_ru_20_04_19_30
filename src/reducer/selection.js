import {UPDATE_SELECTION} from '../constants'

export default (selection = [], action) => {
    const {type, payload} = action;

    switch (type) {
        case UPDATE_SELECTION:
            return payload.selection
    }

    return selection;
}