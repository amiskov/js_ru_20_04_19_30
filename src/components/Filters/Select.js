import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux'
import {updateSelection} from '../../AC/index'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    // state = {
    //     selection: null
    // };

    getSelectedItems() {
        return this.props.selection;
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        console.log('from component props.seleciton: ', this.props.selection);

        return (
            <Select options={options} value={this.props.selection}
                    onChange={this.handleSelectionChange}
                    multi={true}
            />
        )
    }

    handleSelectionChange = selection => {
        // console.log('from component to AC: ', selection);
        console.log('items: ', this.props);
        return this.props.updateSelection(selection)
    }
}

function mapStateToProps({articles, selection}) {
    return {
        articles,
        selection
    }
}

export default connect(mapStateToProps, {updateSelection})(SelectFilter)
