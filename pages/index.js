import Head from 'next/head'
import Image from 'next/image'
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import IntroduceSection from "../components/IntroduceSection";
import WatchlistProject from "../components/WatchlistProject";
import QrCodeGenerator from "../components/QrCodeGenerator";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className={'index-page'}>
            <Main>
                <IntroduceSection/>
                <QrCodeGenerator/>
                <WatchlistProject/>
                <Footer/>
            </Main>
        </div>
    )
}
