import {useEffect} from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);
  const onCloseHandler = () => {
    tg.close();
  };
  return (
    <div className='App'>
      <h1>Work...</h1>
      <button onClick={onCloseHandler}>Close</button>
    </div>
  );
}

export default App;
