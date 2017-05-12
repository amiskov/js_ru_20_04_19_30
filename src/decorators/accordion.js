import React, {Component} from 'react'

export default Sections => class Accordion extends Component {
    state = {
        openSectionId: null
    };

    render() {
        return (
            <Sections
                {...this.props}
                {...this.state}
                toggleSection={this.toggleSection}
                isSectionOpen={this.isSectionOpen}
            />
        )
    }

    isSectionOpen = sectionId => this.state.openSectionId === sectionId;

    toggleSection = openSectionId => ev => {
        this.setState({
            openSectionId: (this.state.openSectionId === openSectionId) ? null : openSectionId
        })
    }
}
