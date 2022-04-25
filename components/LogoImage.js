import Image from "next/image";
import main from "../images/kristaps-grundsteins-uBqMx7quDFo-unsplash.jpeg";

export default function LogoImage({text = 'Hello I’m front-end developer based in Poland!'}){
    return(
        <div className={'logo-image'}>
            <Image
                src={main}
                alt={'sakura tree'}
                width={16}
                height={9}
                layout={'responsive'}
            />
            <div className="about-main-image__overlap-text">
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}