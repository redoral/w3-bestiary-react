import React from 'react';
import './MonsterView.css';
import healthBar from '../../assets/healthBar.png';
import LootComponent from '../Loot/Loot';
import WeaknessesComponent from '../Weaknesses/Weaknesses';

const MonsterViewComponent = (props) => {

  return (
    <div className='monsterViewContainer'>
      <div className='monsterLoot'>
        <LootComponent loot={props.currentMonster.loot} name={props.currentMonster.name} />
      </div>
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
      <div className='monsterWeakness'>
        <WeaknessesComponent weakness={props.currentMonster.susceptibility} name={props.currentMonster.name} />
      </div>
    </div>
  );
};

export default MonsterViewComponent;
