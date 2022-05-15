import { useState } from 'react';
import { fetchQuote } from './content-logic';
import './content.css';

export const Content = () => {
    // Button Text
    const starterText = "Let's Go";
    const [btnText, setBtnText] = useState(starterText);

    // Dynamic Content
    let [content, setContent] = useState({
        id:"",
        quote:"Feeling too good? Let's fix that with some demotivational quotes",
        author:""
    });

    // Set current quote
    const setQuote = () => {
        if (btnText === starterText) setBtnText("Next");
        let newQuote = {};

        // TODO - Move duplicate check to server when API is integrated
        do {
            newQuote = fetchQuote()
        } while (content.quote === newQuote.quote);
        setContent(newQuote);
    }

    return (
        <>
           <section className="content-container">
                <h1 className="content-header">{content.quote}</h1>
                <h2 className="content-sub-header">{content.author}</h2>
                <button className='content-btn' onClick={()=>setQuote()}>{btnText}</button>
            </section>
        </>
    )
}