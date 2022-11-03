import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props){
        super(props)
        this.state = {
            age : 26
        }
    }

    render() {
        return (
            <div>
                <h1>
                    HOLA {this.props.name}!
                </h1>
                <h2>
                    Tu edad es: {this.state.age}
                </h2>
                <div>
                    {/* si le colocas () al metodo, le indicas que se ejecute inmediatamente,
                     si no lo incluye cambiara solo cuando se le de al boton */}
                     
                    <button onClick={this.birthday}>
                        Te haci viejo po weon!
                    </button>
                </div>
            </div>
        );
    }

    /* arrow function para cambiar el state de un componente de tipo clase */

    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age + 1
            }
        ))
    }
}


Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;

