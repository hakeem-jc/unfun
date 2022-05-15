import { Navbar } from "../../components/Navbar/navbar";
import { Footer } from "../../components/Footer/footer";

function ErrorFallback() {
    return (
      <section className='app-background'>
          <Navbar/>
          <section className="content-container">
              <h1 className="content-header">Well, that wasn't supposed to happen 🙁</h1>
              <button className='content-btn' onClick={()=>window.location.reload()}>Reload</button>
          </section>
          <Footer />
      </section>
    );
  }
  
  export default ErrorFallback;