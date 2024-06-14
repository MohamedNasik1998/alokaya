import FooterContent from "./footerContent";
import NavBarLogout from "./navBarLogout";

const Location = () => {
    return (
        <div>
            <NavBarLogout />
            <div className="flex flex-col items-center mt-40 mb-16">
                <div className="font-bold text-2xl text-gray-800 py-3">LOCATE US!!</div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.683681133968!2d79.98954927585575!3d6.80827801978672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24e1a4acef3e7%3A0xb2ef9c84206274fc!2sInstitute%20of%20Technology%2C%20University%20of%20Moratuwa!5e0!3m2!1sen!2slk!4v1718288274082!5m2!1sen!2slk"
                     className="border-4 rounded-md border-gray-400 w-[80vh] h-[60vh]" title="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <FooterContent />
        </div>
    );
};

export default Location;