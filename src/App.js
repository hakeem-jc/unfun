import './Styles/App.css';
import { Navbar } from './components/Navbar/navbar';
import { Footer } from './components/Footer/footer';

function App() {
  return (
    <section className='app-background'>
        <Navbar/>
        
        <Footer />
    </section>
  );
}

export default App;
