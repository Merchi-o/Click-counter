import './App.css';
import './Stylesheets/Counter.css'
import Counter from './Components/Counter.js';
import Button from './Components/Button.js';
import { useState } from 'react';

function App() {

  const[clickCount,setClickCount] = useState(0);

  const doClick = () => {
    setClickCount(clickCount + 1);
  }

  const resetCount = () => {
    setClickCount(0);
  }
  return (
    <div className="App">
      <div className="title">
        <h1>Click Counter</h1>
      </div>
      <div className='main-box'>
        <Counter clickCount={clickCount}/>
        <Button 
          text='Click'
          isClickButton={true}
          doClick={doClick}/>
        <Button 
          text='Reset'
          isClickButton={false}
          doClick={resetCount}/>
      </div>
    </div>
  );
}

export default App;
