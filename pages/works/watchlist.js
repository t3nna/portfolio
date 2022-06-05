import Image from "next/image";
import Link from "next/link";

import Main from "../../components/Main";
import AboutHeader from "../../components/AboutHeader";
import LogoImage from "../../components/LogoImage";

import image1 from '../../images/image 2.jpg'
import image2 from '../../images/image 3.jpg'
import image3 from '../../images/image 4.jpg'
import Footer from "../../components/Footer";

export default function Watchlist() {
    return (
        <div className={'work watchlist'}>
            <Main>
                <LogoImage text={'This is awesome watchlist'}/>
                <header className="work-header">
                    <h1>Watchlist</h1>
                    <div className="highlight">
                        <h4>2022</h4>
                    </div>
                </header>
                <div className="work-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci est, nemo omnis repudiandae
                        vel veniam veritatis? Alias aliquid aperiam cumque deleniti distinctio dolor est exercitationem
                        expedita explicabo harum ipsa, ipsam laborum nemo nobis placeat, quae qui quibusdam quidem sunt
                        unde? Animi nobis quas quis voluptatibus.</p>

                </div>
                <div className="work-properties">
                    <p><strong className={'highlight'}>Platform</strong> WEB</p>
                    <p><strong className={'highlight'}>Stack</strong> React, Firebase, TMDB Api</p>
                    <p><strong className={'highlight'}>Website</strong>
                        <Link href={'https://thirsty-noyce-827daa.netlify.app'}>
                            <a> link to my website</a>
                    </Link>
                    </p>
                </div>

                <div className="work-images">
                    <div className="work-image">
                        <Image
                            src={image1}
                            layout={'responsive'}
                        />

                    </div>
                    <div className="work-image">
                    <Image
                        src={image3}
                        layout={'responsive'}
                    />

                    </div>
                    <div className="work-image">

                        <Image
                            src={image2}
                            layout={'responsive'}
                        />
                    </div>
                </div>

<Footer/>
            </Main>
        </div>
    )
}