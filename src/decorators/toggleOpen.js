import React from 'react'

// Передаем компонент для декорирования, возвращаем новый, отдекорированный компонент
export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    // Теперь стейт спрятан тут, в декораторе,
    // а в декорируемых компонентах он не нужен. Им состояние передается уже как пропсы
    state = {
        isOpen: false
    }

    render() {
        // Возвращаем декорируемый компонент и передаем ему все, что надо в виде пропсов
        return (
            // все передаваемые параметры уйдут в props к OriginalComponent.
            // И isOpen и toggleOpen доставать будет из props
            <OriginalComponent
                {...this.props}
                {...this.state}
                toggleOpen={this.toggleOpen}
            />
        )
    }

    toggleOpen = ev => {
        // если есть preventDefault в событии — вызываем
        ev && ev.preventDefault && ev.preventDefault();
        
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}