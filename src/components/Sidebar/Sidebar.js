import React from 'react';
import './Sidebar.css';

const SidebarComponent = (props) => {
  return (
    <div className='sidebarContainer'>
      <div className='sidebarHeader'>
        <h1 className='sidebarTitle'>The Witcher 3 Bestiary</h1>
        <span className='addMonsterButton'>
          <img
            src='https://static.wikia.nocookie.net/witcher/images/d/de/Tw3_icon_monster_nest.png'
            height='24px'
            className='addMonsterIcon'
          />
          Add a monster
        </span>
      </div>
      <div className='monsterList'>
        <input type='text' className='searchBar' placeholder='Search...' />
        <p className='monstersTitle'>All monsters</p>
        {props.monsters.map((monster) => {
          return (
            <div className='monsterItem'>
              <img src={monster.img} className='sidebarMonsterIcon' />
              <span
                className='sidebarMonsterName'
                onClick={() => props.setCurrentMonster(monster)}
              >
                {monster.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarComponent;
