import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import ScrollToTop from './ScrollToTop';
import NavBar from './components/Navbar/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import About from './pages/About';
import Events from './pages/Events';
import Releases from './pages/Releases';
import Programs from './pages/Programs';
import Program from './pages/Program';
import Team from './pages/Team';

function App() {

  const [title, setTitle] = React.useState('Academic Outreach and New Initiatives | IIT Delhi');
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    document.title = title;
  }, [title])

  return (
    <BrowserRouter>
      <LoadingBar
        color='#C21717'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <NavBar setTitle={setTitle} setProgress={setProgress} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home setProgress={setProgress} setTitle={setTitle} />} />
        <Route path="/about" element={<About setProgress={setProgress} setTitle={setTitle} />} />
        <Route path="/events" element={<Events setProgress={setProgress} setTitle={setTitle} />} />
        <Route path="/programs" element={<Programs setProgress={setProgress} setTitle={setTitle} />} />
        <Route path="/programs/*" element={<Program setProgress={setProgress} setTitle={setTitle} />} />
        <Route path="/releases" element={<Navigate to="/releases/podcasts" />} />
        <Route path="/releases/podcasts" element={<Releases setProgress={setProgress} setTitle={setTitle} activeItem={0} />} />
        <Route path="/releases/institute-contributions" element={<Releases setProgress={setProgress} setTitle={setTitle} activeItem={1} />} />
        <Route path="/releases/tech-reviews" element={<Releases setProgress={setProgress} setTitle={setTitle} activeItem={2} />} />
        <Route path="/team" element={<Team setProgress={setProgress} setTitle={setTitle} />} />
        <Route path="/programs/sci-tech-spins" element={<Team setProgress={setProgress} setTitle={setTitle} />} />
        <Route path="/programs/stem-mentorship" element={<Team setProgress={setProgress} setTitle={setTitle} />} />
        <Route path="/programs/grip" element={<Team setProgress={setProgress} setTitle={setTitle} />} />
        <Route path="/programs/change-makers" element={<Team setProgress={setProgress} setTitle={setTitle} />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

// Podcast
// Institute contributions
// Tech review