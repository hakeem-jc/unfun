import { Container } from "../../components/Container";

export const ErrorFallback = () => {
    return (
        <Container>
            <section className="content-container">
              <h1 className="content-header">Well, that wasn't supposed to happen 🙁</h1>
              <button className='content-btn' onClick={()=>window.location.reload()}>Reload</button>
            </section>
        </Container>
    )
}

