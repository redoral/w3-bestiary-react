import './App.css';
import React from 'react';
import MonsterViewComponent from './components/MonsterView/MonsterView';
import SidebarComponent from './components/Sidebar/Sidebar';
import axios from 'axios';

function App() {
  const [monsters, setMonsters] = React.useState({ loading: true, items: [] });
  const [currentMonster, setCurrentMonster] = React.useState({});
  const [searchQuery, setSearchQuery] = React.useState('');
  const [opacity, setOpacity] = React.useState(1);

  React.useEffect(() => {
    try {
      axios.get('http://127.0.0.1:8080/api/v1/monsters').then((res) => {
        setMonsters({ loading: false, items: res.data });
        setCurrentMonster(res.data[0]);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  console.log(monsters.items);

  return (
    <div className='App'>
      <SidebarComponent
        monsters={monsters}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setCurrentMonster={setCurrentMonster}
        currentMonster={currentMonster}
        setOpacity={setOpacity}
      />
      <MonsterViewComponent currentMonster={currentMonster} opacity={opacity} />
    </div>
  );
}

export default App;
