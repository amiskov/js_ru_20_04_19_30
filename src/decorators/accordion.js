import React, {Component} from 'react'

export default Sections => class extends Component {
    state = {
        openSectionId: null
    };

    render() {
        return (
            <Sections
                {...this.props}
                {...this.state}
                toggleSection={this.toggleSection.bind(this)}
            />
        )
    }

    toggleSection(id) {
        this.setState({
            openSectionId: (this.state.openSectionId === id) ? null : id
        })
    }
}