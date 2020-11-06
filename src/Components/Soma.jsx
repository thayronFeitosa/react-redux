import React from 'react';
import Card from './Card';


export default props => {
    const { min, max } = props;

    return (
        <Card title="Soma dos numeros" blue>
            <div >
                <span>
                    <span> Resutado:</span>

                    <strong>{max + min}</strong>
                </span>

            </div>
        </Card>
    )
}

