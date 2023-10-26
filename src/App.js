import React from 'react';
import './App.css';
import {colorList} from './data';
import { useEffect } from 'react';

function App() {

  const [list, setList] = React.useState([]);
  const handleChange = (v) => {
    const data = colorList.filter(item => (item.name.includes(v) || item.hex.includes(v)));
    setList(data);
  }

  useEffect(() => {
    setList(colorList);
  }, []);

  return (
    <div className="App">
      <input type="text" style={{width:'80%'}} onChange={(e) => handleChange(e.target.value)}/>
      <div className="container" >{
      list.map(item => {
        return <div className={'card'}  style={{'backgroundColor': item.hex}} key={item.hex}>{item.name}</div>
      })}
      </div>
    </div>
  );
}

export default App;
