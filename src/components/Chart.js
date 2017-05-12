import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Задача этого компонента — строить графики, используя какие-то библиотеки, работающие с реальным DOM.
class Chart extends Component {
    render() {
        return (
            <div ref={this.getContainerRef}/>
        );
    }

    componentWillReceiveProps(nextProps) {
        // manage chart manually
        console.log('updated');
    }

    getContainerRef = ref => {
        console.log('Chart initialization');
        this.container = ref;

        if (!ref) {
            // Удалился из DOM, здесь можно делать какую-то чистку
            return;
        }

        // Строим графики
        this.container.innerHTML = `Counter: ${this.props.counter}`;
    }
}

Chart.propTypes = {
    articles: PropTypes.array
};

export default Chart;
