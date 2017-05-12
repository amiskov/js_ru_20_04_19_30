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

    // Инкапсулируем логику в декораторе,
    // передаем дополнительную функцию для проверки, открыта ли секция. Тут может быть любая логика в будущем,
    // может быть не просто проверка айдишников на равенство. Все тут, ArticleList никак не участвует:
    isSectionOpen = sectionId => this.state.openSectionId === sectionId; // `this` будет привязан

    // Для лучшего понимания, вариант на ES5
    // isSectionOpen = function(sectionId) {
    //     return this.state.openSectionId === sectionId;
    // }.bind(this)

    toggleSection = openSectionId => ev => {
        this.setState({
            openSectionId: this.isSectionOpen(openSectionId) ? null : openSectionId
        })
    }
}
