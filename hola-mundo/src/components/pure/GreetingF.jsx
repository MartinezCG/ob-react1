import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    // Breve intro a useState
    //const [Variable, Metodo para actualizarlo] = useState(valor inicial)

    const [age, setage] = useState(29);

    const birthday = () => {

        // actualiza el State
        setage(age+1)

    }

    return (
        <div>
                <h1>
                    HOLA {props.name} desde componente funcional!
                </h1>
                <h2>
                    Tu edad es: {age}
                </h2>

                <div>                   
                    <button onClick={birthday}>
                        Te haci viejo po weon!
                    </button>
                </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
