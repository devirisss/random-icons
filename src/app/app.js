import { useState } from 'react';
import { fas } from '@fortawesome/free-solid-svg-icons';
import RandomIcon from '../random-icon';
import Button from '../button';

import './app.css';

function App() {

  const [currentIcon, setCurrentIcon] = useState(null);
  const [loading, setLoading] = useState(false);

  const allIcons = Object.values(fas);

  const getRandomIcon = () => {
    const randomIndex = Math.floor(Math.random() * allIcons.length);
    return allIcons[randomIndex];
  };

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      const randomIcon = getRandomIcon();
      setCurrentIcon(randomIcon);
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="app">
      <Button handleClick={handleClick} getRandomIcon={getRandomIcon} />
      <RandomIcon currentIcon={currentIcon} loading={loading} />
    </div>
  );
}

export default App;