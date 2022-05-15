import './Styles/App.css';
import Landing from './pages/Landing';
import PageNotFound from './pages/PageNotFound';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
   <Router>
     <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='*' element={<PageNotFound />}/>
     </Routes>
   </Router>
  );
}

export default App;
