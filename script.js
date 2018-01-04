var Counter = React.createClass({
    
    getDefaultProps: function() {
        console.log("getDefaultProps - Ustawienie domyślnych warości propsów, które nie zostały przekazane do komponentu.");
    },

    getInitialState: function() {
        console.log("getInitialState - Określenie początkowego stanu komponentu.");
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter -1
        });
    },

    componentWillMount: function() {
        console.log("componentWillMoun - Wywołanie zaraz przed załadowaniem komponentu.");
    },

    render: function(){
        console.log("render - Ładowanie komponentu");
        return React.createElement('div', {},
            React.createElement('span', {}, ' Licznik ' + this.state.counter + ' '),
            React.createElement('button', {onClick: this.increment}, '+'),
            React.createElement('button', {onClick: this.decrement}, '-')
        );
    },

    componentDidMount: function() {
        console.log("componentDidMount - Wywołanie po załadowaniu komponentu i zamontowaniu go w drzewie DOM, co umożliwia wykonywanie na nim różnych operacji, używanie jQuery oraz pobieranie danych.");
    },

    componentWillReceiveProps: function() {
        console.log("componentWillReceiveProps - Wywołanie, gdy komponent otrzyma nowe właściwości, co umozliwa aktualizowanie stanu.");
    },

    shouldComponentUpdate: function() {
        console.log("shouldComponentUpdate - Wywołanie przed wywołaniem metody render, pozwala sprawdzić czy konieczne jeste przerysowanie komponentu, umozliwi optymalizacje działania komponentu. Zwracanie wartości true/false.");
        return true
    },

    componentWillUpdate: function() {
        console.log("componentWillUpdate - Wywołanie, gdy metoda shouldComponentUpdate zwróci wartość true, przygotowanie na nadchodzace zmiany.");
    },

    componentDidUpdate: function() {
        console.log("componentDidUpdate - Wywołanie po przerysowaniu komponentu, umożliwi manipulację DOM.");
    },

    componentWillUnmount: function() {
        console.log("componentWillUnmount - Czyszczenie komponentu np. anulowanie żądań serwera, usunięcie nasłuchiwania zdarzęń");
    }

});

var element = React.createElement('div', {}, React.createElement(Counter, {}), React.createElement(Counter,{}));
ReactDOM.render(element, document.getElementById('app'));