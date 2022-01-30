import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/menu';
import Intro from './components/intro';
import Gift from './components/gift';
import Review2021 from './components/review-2021';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/review-2021" element={<Review2021 />} />
          <Route path="/gift" element={<Gift />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
