import React, {Component} from 'react'

export default (Sections) => class Accordion extends Component {
    state = {
        openSectionId: null
    }

    render() {
        return (
            <Sections
                {...this.props}
                {...this.state}
                toggleSection={this.toggleSection}
            />
        )
    }

    toggleSection = id => ev => {
        this.setState({
            openSectionId: (this.state.openSectionId == id) ? null : id
        })
    }
}