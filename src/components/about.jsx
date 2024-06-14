import FooterContent from "./footerContent";
import NavBarLogout from "./navBarLogout";

const About = () => {
    return (
        <>
        <NavBarLogout/>
            <h1>About Page</h1>
            <div style={{minWidth:'100%'}}>hi</div>
            <p>This is the About page.</p>
            <FooterContent />
        </>
    );
};

export default About;