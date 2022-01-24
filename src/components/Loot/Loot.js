import React from 'react';
import './Loot.css';
import lootIcon from '../../assets/gold.png';

const LootComponent = (props) => {

    
    return <div className='lootContainer'>
        <div className='lootBox'>
            <div className='lootHeading'>
                <h1 className='lootTitle'>Loot</h1>
                Items dropped by {props.name}
            </div>
            <div className='lootBody'>
                {props.loot.map((loot) => {
                    return <p><img src={lootIcon} style={{marginRight: 10}} /> {loot}</p>
                })}
            </div>
        </div>
    </div>
}

export default LootComponent;