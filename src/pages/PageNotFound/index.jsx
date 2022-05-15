import { Navbar } from "../../components/Navbar/navbar";
import { Footer } from "../../components/Footer/footer";
import {Link } from 'react-router-dom';

function PageNotFound() {
    return (
      <section className='app-background'>
          <Navbar/>
          <section className="content-container">
              <h1 className="content-header">Page Not Found</h1>
              <Link to='/' className='content-btn'>Go Home</Link>
          </section>
          <Footer />
      </section>
    );
  }
  
  export default PageNotFound;