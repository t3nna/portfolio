import Image from "next/image";
import Link from "next/link";

import LogoImage from "../../components/LogoImage";
import Main from "../../components/Main";

import work1 from '../../images/work1.jpeg'
import work2 from '../../images/work2.jpeg'
import work3 from '../../images/work3.jpeg'
import work4 from '../../images/work4.jpeg'
import Footer from "../../components/Footer";

export default function Works() {
    return (
        <div className={' works'}>
            <Main>
                <LogoImage text={'This are my works!'}/>
                <ul className="works-grid">
                    <li className={'works-grid__item'}>
                        <Image
                            src={work1}
                            width={16}
                            height={9}
                            layout={"responsive"}
                            objectFit={"cover"}
                            objectPosition={'center'}
                        />
                        <h6>Watchlist</h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias delectus expedita minima
                            quas vel? Laudantium quas, recusandae. Amet cum cupiditate deserunt modi molestias mollitia,
                            perferendis, possimus quis vero voluptate voluptates!
                        </p>
                    </li>
                    <li className={'works-grid__item'}>
                        <Image
                            src={work2}
                            width={16}
                            height={9}
                            layout={"responsive"}
                            objectFit={"cover"}
                            objectPosition={'center'}
                        />
                        <h6>Watchlist</h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias delectus expedita minima
                            quas vel? Laudantium quas, recusandae. Amet cum cupiditate deserunt modi molestias mollitia,
                            perferendis, possimus quis vero voluptate voluptates!
                        </p>
                    </li>
                    <li className={'works-grid__item'}>
                        <Image
                            src={work3}
                            width={16}
                            height={9}
                            layout={"responsive"}
                            objectFit={"cover"}
                            objectPosition={'center'}
                        />
                        <h6>Watchlist</h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias delectus expedita minima
                            quas vel? Laudantium quas, recusandae. Amet cum cupiditate deserunt modi molestias mollitia,
                            perferendis, possimus quis vero voluptate voluptates!
                        </p>
                    </li>
                    <li className={'works-grid__item'}>
                        <Image
                            src={work4}
                            width={16}
                            height={9}
                            layout={"responsive"}
                            objectFit={"cover"}
                            objectPosition={'center'}
                        />
                        <h6>Watchlist</h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias delectus expedita minima
                            quas vel? Laudantium quas, recusandae. Amet cum cupiditate deserunt modi molestias mollitia,
                            perferendis, possimus quis vero voluptate voluptates!
                        </p>
                    </li>
                </ul>

                {/*<Link href={'/works'}>*/}
                {/*    <a>*/}
                {/*        <button className={'button-link'}>*/}
                {/*            <span>All works*/}
                {/*            </span>*/}
                {/*            <span className="button-link-arrow-icon"><svg viewBox="0 0 24 24" focusable="false"*/}
                {/*                                                          aria-hidden="true"><path fill="currentColor"*/}
                {/*                                                                                   d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg></span>*/}
                {/*        </button>*/}
                {/*    </a>*/}
                {/*</Link>*/}


                <Footer/>
            </Main>
        </div>
    )
}