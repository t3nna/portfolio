import {useState} from "react";


import Main from "../components/Main";
import Footer from "../components/Footer";
import LogoImage from "../components/LogoImage";
import Link from "next/link";

export default function Contact() {
    const initialState = {
        name: '',
        email: '',
        title: '',
        message: ''

    }

    const [userInfo, setUserInfo] = useState(initialState)

    const handleInputs = (e) => {
        const target = e.target


        setUserInfo({
            ...userInfo,
            [target.name]: target.value
        })

    }


    return (
        <div className={'contact'}>
            <Main>
                <LogoImage/>
                <h1 className={'contact-title'}>Contact</h1>
                <form className="contact-form">
                    <div className="contact-form__input">
                        <label htmlFor="phone-number">Name Surname</label>
                        <input type="text"
                               value={userInfo.name}
                               required={true}
                               onChange={(e) => handleInputs(e)}
                               name={'name'} id={'phone-number'} placeholder={'Name, Surname'}/>
                    </div>


                    <div className="contact-form__input">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                               value={userInfo.email}
                               required={true}
                               onChange={(e) => handleInputs(e)}
                               placeholder={'Your Email'}
                               name={'email'} id={'email'}/>
                    </div>

                    <div className="contact-form__input">
                        <label htmlFor="receive">Message</label>
                        <textarea
                            value={userInfo.message}
                            required={true}
                            onChange={(e) => handleInputs(e)}
                            name={'message'} id={'receive'}>

                    </textarea>
                    </div>
                    <div className="contact-form__submit">
                        <button className={'button-link'} type={'submit'}>
                            <span>Send
                            </span>
                            <span className="button-link-arrow-icon"><svg viewBox="0 0 24 24" focusable="false"
                                                                          aria-hidden="true"><path
                                fill="currentColor"
                                d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg></span>
                        </button>
                    </div>


                </form>

                <Footer/>
            </Main>
        </div>
    )
}