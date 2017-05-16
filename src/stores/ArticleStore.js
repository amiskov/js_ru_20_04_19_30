import {EventEmitter} from 'events'
import AppDispatcher from '../dispatcher'

class ArticleStore extends EventEmitter {
    constructor(initialState = []) {
        super(); // this можно использовать только после вызова родительского конструктора, так в ES6
        this._items = {};
        initialState.forEach(this._add);

        AppDispatcher.register((action) => {
            const {type, payload} = action;

            switch (type) {
                case 'DELETE_ARTICLE':
                    this._delete(payload.id);
                    this.emitChange(); // оповещаем вьюху, что произошло изменение
                    break;
            }
        })
    }

    getAll() {
        return Object.keys(this._items).map(this.getById) // тут удобно6 что getById записано в виде arrow-function (todo попробовать как метод)

        // todo добавить sort (13-я минута)
    }

    getById = id => this._items[id];

    _delete(id) {
        delete this._items[id]
    }

    _add = item => {
        this._items[item.id] = item
    };

    addChangeListener(cb) {
        this.on('SOME_INTERNAL_EVENT', cb)
    }

    removeChangeListener(cb) {
        this.removeListener('SOME_INTERNAL_EVENT', cb)
    }

    emitChange() { // вызываем, когда меняется стор, чтобы оповестить вьюху
        this.emit('SOME_INTERNAL_EVENT')
    }
}

export default ArticleStore
