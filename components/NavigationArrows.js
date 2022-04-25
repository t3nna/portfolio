import Link from "next/link";

export default function NavigationArrows({topHref='#', bottomHref='#'}) {
    return (
        <div className="scroll-arrows">
            <Link href={topHref}>
                <a>
                    <div className="arrow-top">


                        <svg width="24" height="80" viewBox="0 0 24 73" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.0607 0.984779C12.4749 0.398994 11.5251 0.398994 10.9393 0.984779L1.3934 10.5307C0.807611 11.1165 0.807611 12.0663 1.3934 12.652C1.97919 13.2378 2.92893 13.2378 3.51472 12.652L12 4.16676L20.4853 12.652C21.0711 13.2378 22.0208 13.2378 22.6066 12.652C23.1924 12.0663 23.1924 11.1165 22.6066 10.5307L13.0607 0.984779ZM13.5 72.0454L13.5 2.04544H10.5L10.5 72.0454H13.5Z"
                                fill="inherit"/>
                        </svg>
                    </div>

                </a>
            </Link>

            <Link href={bottomHref}>
                <a>


                    <div className="arrow-bottom">
                        <svg width="24" height="80" viewBox="0 0 24 72" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.9393 71.0607C11.5251 71.6464 12.4749 71.6464 13.0607 71.0607L22.6066 61.5147C23.1924 60.9289 23.1924 59.9792 22.6066 59.3934C22.0208 58.8076 21.0711 58.8076 20.4853 59.3934L12 67.8787L3.51472 59.3934C2.92893 58.8076 1.97919 58.8076 1.3934 59.3934C0.807611 59.9792 0.807611 60.9289 1.3934 61.5147L10.9393 71.0607ZM10.5 0L10.5 70H13.5L13.5 0L10.5 0Z"
                                fill="inherit"/>
                        </svg>
                    </div>
                </a>
            </Link>


        </div>
    )
}