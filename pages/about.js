import Navbar from "../components/Navbar";
import Main from "../components/Main";
import AboutHeader from "../components/AboutHeader";
import Link from "next/link";
import Footer from "../components/Footer";

export default function About() {
    return (
        <div className={'about'}>
            <Main>
                <AboutHeader/>

                <div className="about-bio">
                    <section className={'go-to-works'}>
                        <Link href={'/works'}>
                            <a className={'button-link-a'}>
                                <button className={'button-link'}>
                            <span>All works
                            </span>
                                    <span className="button-link-arrow-icon"><svg viewBox="0 0 24 24" focusable="false"
                                                                                  aria-hidden="true"><path
                                        fill="currentColor"
                                        d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg></span>
                                </button>
                            </a>
                        </Link>
                    </section>

                    <section>
                        <h3>Bio</h3>
                        <p><strong>2005</strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam nam
                            natus numquam
                            recusandae similique sit unde. </p>
                        <p><strong>2005</strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam nam
                            natus numquam
                            recusandae similique sit unde. </p>
                        <p><strong>2005</strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam nam
                            natus numquam
                            recusandae similique sit unde. </p>
                    </section>
                    <section>
                        <h3>Hobbies</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum dignissimos dolore est, et
                            mollitia pariatur quod recusandae rem voluptas.</p>
                    </section>
                    <section>
                        <h3>Hard Skills</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, neque, voluptatum? Aut
                            est explicabo inventore officia quidem sed sint veniam? Adipisci aspernatur, dolore
                            explicabo itaque iure mollitia quos rem. Accusamus commodi id nam neque repudiandae tempore
                            unde velit voluptatum. Atque cupiditate modi odio qui voluptate.</p>

                    </section>
                    <section className="on-the-web">
                        <h3>On the web</h3>
                        <div className="about-social-links">
                            <div className="instagram icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g id="icons8-instagram (1) 1">
                                        <path id="Vector"
                                              d="M6.39998 18.4H13.6C16.2508 18.4 18.4 16.2508 18.4 13.6V6.40001C18.4 3.74921 16.2508 1.60001 13.6 1.60001H6.39998C3.74918 1.60001 1.59998 3.74921 1.59998 6.40001V13.6C1.59998 16.2508 3.74918 18.4 6.39998 18.4Z"
                                              stroke="inherit" strokeWidth="1" strokeMiterlimit="10"/>
                                        <path id="Vector_2"
                                              d="M10 6C8.93913 6 7.92172 6.42143 7.17157 7.17157C6.42143 7.92172 6 8.93913 6 10C6 11.0609 6.42143 12.0783 7.17157 12.8284C7.92172 13.5786 8.93913 14 10 14C11.0609 14 12.0783 13.5786 12.8284 12.8284C13.5786 12.0783 14 11.0609 14 10C14 8.93913 13.5786 7.92172 12.8284 7.17157C12.0783 6.42143 11.0609 6 10 6Z"
                                              stroke="inherit" strokeWidth="1" strokeMiterlimit="10"/>
                                        <path id="Vector_3"
                                              d="M14.8 4.39999C14.5878 4.39999 14.3843 4.48428 14.2343 4.63431C14.0843 4.78434 14 4.98782 14 5.19999C14 5.41217 14.0843 5.61565 14.2343 5.76568C14.3843 5.91571 14.5878 5.99999 14.8 5.99999C15.0122 5.99999 15.2157 5.91571 15.3657 5.76568C15.5157 5.61565 15.6 5.41217 15.6 5.19999C15.6 4.98782 15.5157 4.78434 15.3657 4.63431C15.2157 4.48428 15.0122 4.39999 14.8 4.39999Z"
                                              fill="inherit"/>
                                    </g>
                                </svg>

                                <h5>@t3nna</h5>
                            </div>
                            <div className="icon telegram">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g id="icons8-telegram-app 1">
                                        <path id="Vector"
                                              d="M16.7695 2.65626C16.5528 2.66582 16.3509 2.72894 16.1732 2.80079C16.0067 2.86777 15.3705 3.14062 14.3685 3.57032C13.3656 4.0004 12.0377 4.57053 10.6211 5.1797C7.78798 6.39803 4.60281 7.76946 2.97135 8.47136C2.91001 8.49775 2.69595 8.56613 2.46875 8.7435C2.24155 8.92087 2 9.2884 2 9.69793C2 10.0282 2.15738 10.3562 2.35547 10.5521C2.55356 10.748 2.76316 10.8447 2.94271 10.918C3.59415 11.1838 5.61456 12.0106 5.99609 12.1667C6.13036 12.578 6.86166 14.815 7.03125 15.3633C7.14304 15.7251 7.24946 15.9517 7.38802 16.1315C7.4573 16.2214 7.53783 16.3002 7.63542 16.362C7.67442 16.3867 7.71719 16.4057 7.76042 16.4232L7.76302 16.4245C7.77298 16.4285 7.78157 16.4353 7.79167 16.4388C7.81072 16.4455 7.82347 16.4463 7.84896 16.4518C7.95051 16.4846 8.05303 16.5052 8.14453 16.5052C8.53464 16.5052 8.77344 16.2904 8.77344 16.2904L8.78776 16.28L10.7943 14.5443L13.2279 16.8464C13.2621 16.8948 13.5817 17.3333 14.2865 17.3333C14.7049 17.3333 15.0369 17.1234 15.25 16.8997C15.4631 16.6761 15.5959 16.4412 15.6523 16.1458V16.1445C15.7051 15.8654 17.9479 4.35157 17.9479 4.35157L17.944 4.3672C18.0097 4.06752 18.0269 3.78844 17.9544 3.51303C17.882 3.23762 17.6911 2.97394 17.4544 2.83204C17.2178 2.69018 16.9862 2.6467 16.7695 2.65626ZM16.6445 4.04949C16.6413 4.06895 16.6469 4.05916 16.6419 4.08204L16.6406 4.08985L16.6393 4.09767C16.6393 4.09767 14.4243 15.4643 14.3424 15.8971C14.3484 15.8645 14.321 15.9295 14.293 15.9688C14.2533 15.9414 14.1719 15.9063 14.1719 15.9063L14.1589 15.8919L10.8346 12.7474L8.48437 14.7787L9.18359 11.9792C9.18359 11.9792 13.5544 7.45475 13.8177 7.19142C14.0297 6.98075 14.0742 6.90731 14.0742 6.83465C14.0742 6.73731 14.0235 6.66668 13.9102 6.66668C13.8082 6.66668 13.671 6.76584 13.5977 6.81251C12.6423 7.42154 8.44788 9.8661 6.56771 10.9596C6.26892 10.8374 4.19311 9.98766 3.48958 9.70053C3.49491 9.6982 3.49316 9.69903 3.4987 9.69662C5.13058 8.99453 8.31442 7.62312 11.1471 6.40496C12.5635 5.79588 13.8924 5.22532 14.8945 4.79558C15.8812 4.37247 16.5667 4.08127 16.6445 4.04949Z"
                                              fill="inherit"/>
                                    </g>
                                </svg>
                                <h5>@t3nna</h5>
                            </div>

                            <div className="icon twitter">
                                <svg width="18" height="15" viewBox="0 0 18 15" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector"
                                          d="M17.334 1.66733C16.696 1.95067 16.0107 2.14133 15.2913 2.22733C16.026 1.78733 16.5893 1.09067 16.8547 0.26C16.168 0.667334 15.4067 0.963333 14.596 1.12333C13.9473 0.432 13.0233 0 12.0007 0C10.0367 0 8.44467 1.59267 8.44467 3.556C8.44467 3.83467 8.47667 4.10667 8.53667 4.366C5.58133 4.218 2.96133 2.802 1.20667 0.65C0.901333 1.17533 0.726 1.786 0.726 2.43867C0.726 3.672 1.35333 4.76067 2.30733 5.398C1.72467 5.37933 1.176 5.21933 0.696667 4.95333C0.696667 4.96867 0.696667 4.98267 0.696667 4.998C0.696667 6.72133 1.922 8.15867 3.54933 8.48467C3.25133 8.566 2.93667 8.60933 2.612 8.60933C2.38333 8.60933 2.16 8.58667 1.94333 8.546C2.396 9.95867 3.70933 10.9873 5.26533 11.016C4.04867 11.97 2.51533 12.5387 0.848667 12.5387C0.562 12.5387 0.278667 12.522 0 12.4887C1.574 13.4973 3.44267 14.086 5.45133 14.086C11.9927 14.086 15.5687 8.66733 15.5687 3.968C15.5687 3.814 15.5653 3.66067 15.5587 3.508C16.254 3.006 16.8573 2.38 17.334 1.66733Z"
                                          fill="inherit"/>
                                </svg>
                                <h5>@t3nna</h5>
                            </div>
                        </div>
                    </section>

                </div>
            <Footer/>
            </Main>
        </div>
    )
}