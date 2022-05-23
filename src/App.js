import './Styles/App.css';
import { Landing } from './pages/Landing';
import { PageNotFound }from './pages/PageNotFound';
import { ErrorFallback } from './pages/ErrorFallback';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary';
import { AppContext } from './store/context';
import { useState } from 'react';

function App() {

  const [lang, setLang] = useState('EN');
  let toggleLanguage = () => {
    lang === 'EN' ? setLang('ES'):setLang('EN');
  } ;

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
    >
      <AppContext.Provider value={{
        language:lang,
        toggleLanguage:toggleLanguage}
      }>
        <Router>
          <Routes>
            <Route path='/' element={<Landing />}/>
            <Route path='*' element={<PageNotFound />}/>
          </Routes>
        </Router>
      </AppContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
