// import { Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { routes } from './router/routes';

function App() {

  return (
    <Router>
      <Routes>
        {routes.map((r, index) => {
          return <Route key={index} path={r.path} element={r.component} />
        })}
      </Routes>
    </Router>
  );
}

export default App;
