import React from 'react';
import './Sidebar.css';

const SidebarComponent = (props) => {
  const selectMonster = (monster) => {
    props.setOpacity(0);

    setTimeout(() => {
      props.setCurrentMonster(monster);
      props.setOpacity(1);
    }, 200);
  };

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
          <span className='addMonsterText'>Add a monster</span>
        </span>
      </div>
      <div className='monsterList'>
        <input
          type='text'
          className='searchBar'
          placeholder='Search...'
          onChange={(ev) => {
            props.setSearchQuery(ev.target.value);
          }}
        />
        <p className='monstersTitle'>
          {props.searchQuery.length > 0
            ? "Search query '" + props.searchQuery + "'"
            : 'All monsters'}
        </p>
        {props.monsters.items
          .filter((query) => {
            return query.name
              .toLowerCase()
              .includes(props.searchQuery.toLowerCase());
          })
          .map((monster) => {
            return (
              <div className='monsterItem' key={monster.id}>
                <img src={monster.img} className='sidebarMonsterIcon' />
                <span
                  onClick={() => {
                    selectMonster(monster);
                  }}
                  className={`${
                    monster.name === props.currentMonster.name
                      ? 'activeMonster'
                      : ''
                  } sidebarMonsterName`}
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
