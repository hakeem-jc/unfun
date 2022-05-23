import './footer.css';

export function Footer() {
    return (
        <footer>
            <nav className='footer-language'>
                <h2 className='footer-language-option'>EN</h2>
                <h2 className='footer-language-option'>ES</h2>
            </nav>
            <p className="footer-copyright">&copy; 2022 Hakeem Clarke</p>
        </footer>
    )
}