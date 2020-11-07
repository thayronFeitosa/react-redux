import './Intervalo.css';
import React from 'react';
import { connect } from 'react-redux'
import Card from './Card';
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/numeros'

function Intervalo(props) {
    const { min, max } = props.numeros



    return (
        <Card title="Intervalo de numeros" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min}
                        onChange={e => props.alterarMinino(+ e.target.value)} />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max}
                    onChange={e => props.alterarMaximo(+e.target.value)} />
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

function mapDispatchToProp(dispatch) {
    return {
        alterarMinino(novoNumero) {
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        },
        alterarMaximo(novoNumero) {
            const action = alterarNumeroMaximo(novoNumero)
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(Intervalo);

