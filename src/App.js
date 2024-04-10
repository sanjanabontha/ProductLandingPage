import './App.css';
import Home from "./components/Home";
import Elements from './components/Elements';
import About from "./components/About";
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Home/>
      <Elements />
      <About />
      <Footer />
    </div>
  );
}

export default App;
