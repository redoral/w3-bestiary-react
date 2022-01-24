import React from 'react';
import './Weaknesses.css';
import weak from '../../assets/weak.png';

const WeaknessesComponent = (props) => {
    return <div className='weaknessContainer'>
    <div className='weaknessBox'>
        <div className='weaknessHeading'>
            <h1 className='weaknessTitle'>Weaknesses</h1>
           Big ouchie to {props.name}
        </div>
        <div className='weaknessBody'>
            {props.weakness.map((weakness) => {
                return <p><img src={weak} style={{marginRight: 10}} />{weakness}</p>
            })}
        </div>
    </div>
</div>
}

export default WeaknessesComponent;