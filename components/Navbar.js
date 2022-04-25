import {useTheme} from 'next-themes'
import Link from "next/link";
import {MoonIcon, SunIcon, CubeTransparentIcon} from "@heroicons/react/outline";
import {useEffect, useState} from "react";

export default function Navbar() {
    const themesList = ['dark', 'light', 'system']

    const [burger, setBurger] = useState(false)
    const {theme, setTheme} = useTheme()
    const [localTheme, setLocalTheme] = useState(null)


    useEffect(() => {
        setLocalTheme(localStorage.getItem('theme'))
        console.log(localTheme)
        if (localTheme) {
            setTheme(localTheme)
        }
    }, [])


    useEffect(() => {
        setLocalTheme(localStorage.getItem('theme'))


        // const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        // console.log(darkThemeMq)
        // if (darkThemeMq.matches) {
        //     // Theme set to dark.
        //     console.log('sys dark')
        // } else {
        //     // Theme set to light.
        //     console.log('sys light')
        // }
    }, [theme])


    function handleChangeTheme() {
        if (localTheme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }


    return (
        <nav className={burger ? 'navbar navbar_active' : 'navbar'}>
            <div className="fixed-nav-wrapper">
                <div className="navbar__list-container">
                    <ul className="initial-list">
                        <li className="initial-list__theme-switcher"

                            onClick={() => {
                                // themeToggle ? setTheme('dark') : setTheme('light')
                                // setThemeToggle(!themeToggle)
                                handleChangeTheme()
                            }}>
                            {
                                localTheme === 'dark' ? <MoonIcon className={'change-theme'}/> :
                                    <SunIcon className={'change-theme'}/>
                            }


                        </li>


                        <li className="initial-list__burger-icon" onClick={() => setBurger(!burger)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </li>
                    </ul>
                    <ul className={'toggled-list'}>
                        <li className="toggled-list__item">
                            <Link href={'/about'}>
                                <a className={'link'} onClick={() => setBurger(!burger)}>
                                    About
                                </a>
                            </Link>
                        </li>
                        <li className="toggled-list__item">
                            <Link href={'/works'}>
                                <a className={'link'} onClick={() => setBurger(!burger)}>
                                    Works
                                </a>
                            </Link>
                        </li>
                        <li className="toggled-list__item">
                            <Link href={'/contact'}>
                                <a className={'link'} onClick={() => setBurger(!burger)}>
                                    Contact
                                </a>
                            </Link>
                        </li>
                        <li className="toggled-list__item">
                            <Link href={'/#'}>
                                <a className={'link'} onClick={() => setBurger(!burger)}>
                                    GitHub
                                </a>
                            </Link>
                        </li>
                        <li className="toggled-list__item">
                            <Link href={'/#qr-code-generator'}>
                                <a className={'bookmark'} onClick={() => setBurger(!burger)}>
                                    Last Project
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}