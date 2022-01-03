import './App.css';
import React from 'react';
import MonsterViewComponent from './components/MonsterView/MonsterView';
import SidebarComponent from './components/Sidebar/Sidebar';
import axios from 'axios';

function App() {
  const [monsters, setMonsters] = React.useState([]);
  const [currentMonster, setCurrentMonster] = React.useState({});
  const [searchQuery, setSearchQuery] = React.useState('');

  React.useEffect(() => {
    axios
      .get('http://127.0.0.1:8080/api/v1/monsters')
      .then((res) => setMonsters(res.data));
  }, []);

  return (
    <div className='App'>
      <SidebarComponent
        monsters={monsters}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setCurrentMonster={setCurrentMonster}
      />
      <MonsterViewComponent currentMonster={currentMonster} />
    </div>
  );
}

export default App;
