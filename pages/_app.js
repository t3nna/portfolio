import {ThemeProvider} from 'next-themes';
import '../styles/globals.scss'
import '../styles/navbar.scss'
import '../styles/sections.scss'
import '../styles/theme.css'
import '../styles/about.scss'
import '../styles/works.scss'
import '../styles/all-works.scss'
import '../styles/contact.scss'
import Navbar from "../components/Navbar";

function MyApp({Component, pageProps}) {
    return (
        <ThemeProvider defaultTheme={'system'}
                       enableSystem={true}
                       enableColorScheme={true}
        >
            <div className="page-wrapper">
                <Navbar/>
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    )
}

export default MyApp
