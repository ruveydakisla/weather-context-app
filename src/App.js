
import './App.css';
import Header from './components/Header';
import Images from './components/Images';
import { CityProvider } from './context/CityContext';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
    <div className="App">
      <CityProvider>
        <WeatherProvider>
          <Header/>
          
          <Images/>
          
        </WeatherProvider>
     </CityProvider>
    </div>
  );
}

export default App;
