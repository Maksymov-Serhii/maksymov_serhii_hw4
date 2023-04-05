import IncreaseNumberWhenUpdate from '../IncreaseNumberWhenUpdate/IncreaseNumberWhenUpdate';
import ShouldUpdate from '../ShouldUpdate/ShouldUpdate';
import ShowImage from '../ShowImage/ShowImage';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='title'>CyberBionic systematics</h1>
      <h3 className='title'>Welcome</h3>
      <ShowImage />
      <IncreaseNumberWhenUpdate />
      <ShouldUpdate />
    </div>
  );
}

export default App;
