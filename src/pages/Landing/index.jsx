import { Navbar } from "../../components/Navbar/navbar";
import { Content } from "../../components/Content/content";
import { Footer } from "../../components/Footer/footer";

function Landing() {
    return (
      <section className='app-background'>
          <Navbar/>
          <Content/>
          <Footer />
      </section>
    );
  }
  
  export default Landing;