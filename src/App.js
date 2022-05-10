import './Styles/App.css';
import { Navbar } from './components/Navbar/navbar';
import { Content } from './components/Content/content';
import { Footer } from './components/Footer/footer';

function App() {
  return (
    <section className='app-background'>
        <Navbar/>
        <Content/>
        <Footer />
    </section>
  );
}

export default App;
