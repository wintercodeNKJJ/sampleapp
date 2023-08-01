import './App.css';
import Layout from './components/layout';
import { MyContext } from './utils/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <div className='App-title'>
        <h1>My todo App</h1>
      </div>
      <MyContext>
        <Router>
          <Routes>
            <Route path='/*' element={<Layout/>}/>
          </Routes>
        </Router>
      </MyContext>
    </div>
  );
}

export default App;
