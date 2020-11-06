import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';



const Sorteio = props => {
    const {min, max}  = props.numeros;
    const result = parseInt(Math.random() * (max - min)) + min;

    return (
        <Card title="Sorteio de um Número" purple>
            <div >
                <span>
                    <span> Resutado:</span>
                    <strong>{result}</strong>
                </span>
            </div>
        </Card>
    )
}
function mapStateToProps(state) {

    return {
        numeros: state.numeros
    }
}

export default connect(mapStateToProps)(Sorteio);

