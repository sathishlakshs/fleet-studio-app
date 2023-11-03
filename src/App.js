import React from 'react';
import './App.css';
import {colorList} from './data';
import { useEffect } from 'react';

function App() {

  const [list, setList] = React.useState([]);
  const [colors, setColors] = React.useState();
  const [value, setValue] = React.useState('');
  const handleChange = (v) => {
    setValue(v);
    // const data = colorList.filter(item => (item.name.includes(v) || item.hex.includes(v)));
    // setList(data);
  }
  
  const onSearch = (event) => {
    if(event.key === 'Enter') {
      if(value) {
        const temp = colors[value];
        setList(temp?[...temp]:null);
        return;
      }
      setList(null);
    }
  }

  useEffect(() => {
    setColors(colorList);
  }, []);

  return (
    <div className="App">
      <input type="text" className='searchBox' style={{width:'80%'}} onChange={(e) => handleChange(e.target.value)} onKeyDown={onSearch} value={value}/>
      <div className="container" >{
      list?list.map(item => <div className={'card'}   key={item.hexCode}><div style={{'backgroundColor': item.hexCode, height: '180px'}}></div><p>{`${item.hexCode}`}</p></div>):
    'Your search phrase related data not found in data.js'
    }
      </div>
    </div>
  );
}

export default App;
