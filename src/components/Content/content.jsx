import { useState } from 'react';
import { fetchQuote } from './content-logic';
import './content.css';

let url = 'http://127.0.0.1:4000';

export const Content = () => {

    const starterText = "Let's Go";
    const [btnText, setBtnText] = useState(starterText);
    let [content, setContent] = useState({
        id:"",
        quote:"Feeling too good? Let's fix that with some demotivational quotes",
        author:"Test"
    });
    const setQuote = () => {
        if (btnText === starterText) setBtnText("Next");
        setContent(fetchQuote());
    }

    return (
        <>
           <section className="content-container">
                <h1 className="content-text">{content.quote}</h1>
                <h2 className="content-sub-header">{content.author}</h2>
                <button className='content-btn' onClick={()=>setQuote()}>{btnText}</button>
            </section>
        </>
        
    )
}