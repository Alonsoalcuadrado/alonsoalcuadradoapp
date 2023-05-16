import { Route, Routes } from 'react-router-dom';

import { Home } from './pages';

import { Navbar } from './components';
import './App.sass';

function App() {
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-10 py-5">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
