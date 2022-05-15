import { Navbar } from "../../components/Navbar/navbar";
import { Footer } from "../../components/Footer/footer";

export function Container(props) {
    return (
      <section className='app-background'>
          <Navbar/>
          {props.children}
          <Footer />
      </section>
    );
}