import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing';
import Notfound from './pages/Notfound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </Router>
  )
}

export default App;
