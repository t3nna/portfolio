import Image from "next/image";

import me from '../images/me.jpg';
import main from '../images/programming.jpeg'
import LogoImage from "./LogoImage";


export default function AboutHeader() {
    return (
        <header className={'about-header'}>
            <LogoImage/>
            <div className="about-header-info">
                <div className="about-header-info__name">
                    <h1>Ivan Melnyk</h1>
                    <h4>(Developer / Designer / Musician )</h4>
                </div>
                <div className="about-header-info__image">
                    <Image
                        src={me}
                        width={100}
                        height={100}
                    />
                </div>
            </div>
        </header>
    )
}