import Hero from "./Hero";
import img from "../../assets/vfx.webp";
import HomeMiddle from "./HomeMiddle";
import HomeAbout from "./HomeAbout";
import HomeExplore from "./HomeExplore";
import HomeReview from "./HomeReview";
import usePageSeo from "../../components/Meta/Meta";
import Logo from "/public/model/Game-Design.webp"
function Home() {
    const seoDetails = {
        title: '3D Animation Classes in Surat - HKM Media',
        description: 'Join our 3D animation classes in Surat and unleash your creativity in the world of animation.',
        keywords: ['3D animation classes', 'Surat', 'animation courses'],
        ogTitle: '3D Animation Classes in Surat - HKM Media',
        ogDescription: 'Unlock your potential with our 3D animation classes in Surat. Learn from industry experts and create stunning animations.',
        ogImage: Logo,
    };

    usePageSeo(seoDetails);

    const containerStyle = {
        position: "relative",
        minHeight: "100vh",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    };

    const bgOverlayStyle = {
        content: "",
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background:
            "linear-gradient(to right, #353777 0%, #3b5998 50%, #353777 100%)",
        opacity: 0.89,
    };

    return (
        <>

            <div style={containerStyle}>
                <div style={bgOverlayStyle}></div>
                <Hero />
            </div>
            <HomeMiddle />
            <HomeAbout />
            <HomeExplore />
            <HomeReview />
        </>
    );
}

export default Home;
