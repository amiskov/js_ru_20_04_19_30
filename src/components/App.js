import React from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'
import UserForm from './UserForm'
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class App extends React.Component {
    state = {
        counter: 0,
        selection: null
    };

    updateCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    };

    handleSelectionChange = selection => this.setState({selection});

    // Более расширенная запись
    // handleSelectionChange = selection => this.setState({
    //     selection: selection
    // });

    componentDidUpdate(nextProps) {
        console.log(this.state);
    }

    render() {
        const options = this.props.articles.map(article => ({ // круглые скобки говорят интерпретатору, что тут выражение, а не тело функции
            label: article.title,
            value: article.id
        }));

        return (
            <div>
                <UserForm/>
                <Select
                    options={options}
                    value={this.state.selection}
                    onChange={this.handleSelectionChange}
                    multi={true}
                />
                <button onClick={this.updateCounter}>Update Chart</button>
                <ArticleList articles={this.props.articles}/>
                <Chart
                    key={this.state.counter}
                    counter={this.state.counter}
                    articles={this.props.articles}
                />
            </div>
        );
    }
}

export default App;

