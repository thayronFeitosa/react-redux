import React from 'react';
import Card from './Card';


export default props => {
    const {min, max} = props;

    return (
        <Card title="Media dos Números" green>
            <div >
                <span>
                    <span> Resutado:</span>

                    <strong>{(max+min) /2}</strong>
                </span>

            </div>
        </Card>
    )
}

