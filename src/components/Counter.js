import React, {Component} from 'react';
import {increment} from '../AC';
import {connect} from 'react-redux';

class Counter extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.count}
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        );
    }

    handleIncrement = ev => {
        ev.preventDefault();

        // const action = increment();
        // this.props.dispatch(action) // отправляем в Reducer

        // вместо предыдущих двух строк можно в connect передать объект с экшн-криейтерами
        // и тут вызвать уже обернутый в dispatch экшн-криейтор:
        this.props.increment(); // вызывать надо именно из пропсов, тут он уже связан с диспетчером

    }
}

function mapStateToProps(storeState) { // передает стора для комопнента Counter как пропсы
    return {
        count: storeState.counter
    }
}

export default connect(mapStateToProps, {increment})(Counter);
// export default connect(mapStateToProps, {increment: increment})(Counter); // объект без сахара
