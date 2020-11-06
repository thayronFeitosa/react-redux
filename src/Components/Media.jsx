import React from 'react';
import { connect } from 'react-redux'
import Card from './Card';


const Media = props => {

    const { min, max } = props.numeros;

    return (
        <Card title="Media dos Números" green>
            <div >
                <span>
                    <span> Resutado:</span>

                    <strong>{(min + max)/2}</strong>
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

export default connect(mapStateToProps)(Media);

