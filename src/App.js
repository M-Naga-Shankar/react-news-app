
import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import NewsCard from './components/NewsCard';
function App() {
  return (
    <div className="App">
 <Navbar/>

 <NewsCard />
 <NewsCard />
 </div>

  );
}

export default App;
