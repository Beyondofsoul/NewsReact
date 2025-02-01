import Header from './components/Header/Header';
import { useTheme } from './context/ThemeContext';

import Home from './pages/Home/Home';

function App() {
  const { isDark } = useTheme();
  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <Header />
      <div className="container">
        <Home isDark={isDark} />
      </div>
    </div>
  );
}

export default App;
