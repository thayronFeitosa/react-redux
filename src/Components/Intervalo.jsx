import './Intervalo.css';
import React from 'react';
import { connect } from 'react-redux'
import Card from './Card';
import {alterarNumeroMinimo} from '../store/numeros'

function Intervalo (props) {
    const {min, max} = props.numeros
    

    
    return (
        <Card title="Intervalo de numeros" red>
            <div className="Intervalo">
            <span>
                <strong>Mínimo:</strong>
                <input type="number" value={min} 
                onChange={e => props.alterarMinino(+ e.target.value)}/>
            </span>
            <span>
                <strong>Máximo:</strong>
                <input type="number" value={max} readOnly />
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

function mapActionCreatorToProp(dispatch){
    return{
        alterarMinino(novoNumero){
        const action =    alterarNumeroMinimo(novoNumero)
        dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapActionCreatorToProp)(Intervalo);

