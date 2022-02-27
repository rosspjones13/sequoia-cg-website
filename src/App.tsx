import ReactGA from 'react-ga';
import './App.scss';

import { Route, Routes } from 'react-router-dom'
import WelcomeScreen from './containers/WelcomeScreen/WelcomeScreen'
import ContactScreen from './containers/ContactScreen/ContactScreen'
import Layout from './containers/Layout/Layout'

const trackingId = "UA-158882003-1";
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<WelcomeScreen />}/>
          <Route path="/contact" element={<ContactScreen />}/>
          <Route path="*" element={<WelcomeScreen />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
