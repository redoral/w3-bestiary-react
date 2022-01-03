import React from 'react';
import './MonsterView.css';

const MonsterViewComponent = (props) => {
  return (
    <div className='monsterViewContainer'>
      <h1 className='monsterName'>{props.currentMonster.name}</h1>
      <p className='monsterType'>{props.currentMonster.type}</p>
      <img src={props.currentMonster.img} height='300px' />
    </div>
  );
};

export default MonsterViewComponent;
