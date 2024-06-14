import FooterContent from "./footerContent";
import NavBarLogout from "./navBarLogout";

const PostAnAdd = () => {
    return (
        <div>
            <NavBarLogout />
            <div className="flex flex-col items-center mt-40 mb-16">
                <h1>PostAnAdd Page</h1>
                <p>This is the Contact page.</p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit repellendus esse dignissimos omnis nesciunt eveniet incidunt voluptatibus quam voluptatem tempora hic nostrum ipsa quia reiciendis, porro doloribus officiis error minima!
            </div>
            <FooterContent />
        </div>
    );
};

export default PostAnAdd;