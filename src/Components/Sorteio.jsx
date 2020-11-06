import React from 'react';
import Card from './Card';


export default props => {
    const { min, max } = props;
    const result = parseInt( Math.random() * (max - min)) + min;

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

