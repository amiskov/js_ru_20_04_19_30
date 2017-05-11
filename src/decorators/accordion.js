import React, {Component} from 'react'

//не возвращая анонимный класс - потом в девтулах путаница будет
export default Sections => class extends Component {
    state = {
        openSectionId: null
    };

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
            openSectionId: (this.state.openSectionId === id) ? null : id
        })
    }
}
