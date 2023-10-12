import logo from './logo.svg';
import './App.css';
import App1 from './c1';
import Pavan from './social';
import Pavan1 from './notificaation';
import Pavan2 from './box';
import BannerCardItem from './reusable banner';
import TechnologyCardItem from './technology cards';
function App() {
  return (
    <div className="App">
      <h1 className="heading">Super Over League</h1>
        <img src={'https://assets.ccbp.in/frontend/react-js/rcb-img.png'}  alt="logo" />
        <img src={'https://assets.ccbp.in/frontend/react-js/csk-img.png'}  alt="logo" />
        
    
      <App1 />
      <Pavan />
      <Pavan1 />
      <Pavan2 />
      <BannerCardItem />
      <TechnologyCardItem />
    </div>
  );
}

export default App;
