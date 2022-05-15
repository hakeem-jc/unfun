import './Styles/App.css';
import { Landing } from './pages/Landing';
import { PageNotFound }from './pages/PageNotFound';
import { ErrorFallback } from './pages/ErrorFallback';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
    >
      <Router>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='*' element={<PageNotFound />}/>
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
