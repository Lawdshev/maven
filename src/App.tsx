import { useSelector } from 'react-redux';
import './App.css';
import Header from './components/header';
import MobileNavigation from './components/mobileNavigation';
import Navigation from './components/navigation';
import Dashboard from './dashboard';
import { RootState } from './redux/store';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function App() {
  const loading = useSelector((state: RootState) => state.loading)
  return (
    <div className="App">
      <Header />
      <Navigation />
      <MobileNavigation />
      {loading ? (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <AiOutlineLoading3Quarters className="w-10 h-10 text-blue-500 animate-spin" />
        </div>
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default App;
