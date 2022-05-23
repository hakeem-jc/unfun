import './footer.css';
import { useContext } from 'react';
import { AppContext } from '../../store/context';

export function Footer() {
    // Language
    let langContext = useContext(AppContext);

    let nextLanguage = (currentLanguage) => currentLanguage === 'EN' ? 'Español': 'English';

    return (
        <footer>
            <nav className='footer-language'>
                <h2 className='footer-language-option' onClick={langContext.toggleLanguage}>{nextLanguage(langContext.language)}</h2>
            </nav>
            <p className="footer-copyright">&copy; 2022 Hakeem Clarke</p>
        </footer>
    )
}