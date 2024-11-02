import './App.css';
import Header from './components/header';
import MobileNavigation from './components/mobileNavigation';
import Navigation from './components/navigation';
import Dashboard from './dashboard';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <MobileNavigation/>
      <Dashboard/>
    </div>
  );
}

export default App;
