import './App.css';
import Btn from './components/Btn';
import Carousel12 from './components/Carousal12';
import Firstnav from './components/Firstnav';
import Secondnav from './components/Secondnav';

function App() {
  return (
    <div className="App">
      <Firstnav />
      <Secondnav />
      
      <Carousel12 />
      <Btn/>
    </div>
  );
}

export default App;
