import { Container } from "../../components/Container";
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
    return (
        <Container>
          <section className="content-container">
              <h1 className="content-header">Page Not Found</h1>
              <Link to='/' className='content-btn'>Go Home</Link>
          </section>
        </Container>
    );
}