import { useState, useContext, useEffect } from 'react';
import { fetchQuote } from './content-logic';
import { AppContext } from '../../store/context';

export const Content = () => {
    // Button Text
    const starterText = "Let's Go";
    const [btnText, setBtnText] = useState(starterText);
    
    // Language
    let langContext = useContext(AppContext);

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
        do {
            newQuote = fetchQuote(langContext.language)
        } while (content.quote === newQuote.quote);
        setContent(newQuote);
    }

    useEffect(() => {
       if (langContext.language === 'EN') {
        setBtnText("Next");
       } else if (langContext.language === 'ES') {
        setBtnText("Próxima");
       }

    },[langContext.language])

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