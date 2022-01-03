import React from 'react';
import './MonsterView.css';
import healthBar from '../../assets/healthBar.png';

const MonsterViewComponent = (props) => {
  return (
    <div className='monsterViewContainer'>
      <div
        style={{
          opacity: props.opacity,
          transition: 'opacity 0.2s ease-in-out',
        }}
        className='mainMonsterInfo'
      >
        <img src={healthBar} />
        <h1 className='monsterName'>{props.currentMonster.name}</h1>
        <p className='monsterType'>{props.currentMonster.type} </p>
        <img src={props.currentMonster.img} height='300px' />
      </div>
    </div>
  );
};

export default MonsterViewComponent;
