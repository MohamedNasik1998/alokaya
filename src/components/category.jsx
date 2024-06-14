import FooterContent from "./footerContent";
import NavBarLogout from "./navBarLogout";
import vechicle from '../assets/images/vechicle.png';
import electronic from '../assets/images/electronic.png';
import properties from '../assets/images/properties.png';
import home from '../assets/images/home Appli.png';
import pet from '../assets/images/pet.png';
import sports from '../assets/images/sports.png';
import education from '../assets/images/education.png';
import clothing from '../assets/images/clothing.png';
import service from '../assets/images/service.png';
import cosmetics from '../assets/images/cosmetics.png';
import vacan from '../assets/images/vacan.png';
import others from '../assets/images/others.png';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTimesCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { adds } from "../assets/data/Data";

const Category = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubCategory, setSelectedSubCategory] = useState('');
    const [filteredAdds, setFilteredAdds] = useState([]);
    const [filteredAddsLength, setFilteredAddsLength] = useState(0);

    const categories = [
        { name: 'vehicle', image: vechicle },
        { name: 'electronic', image: electronic },
        { name: 'property', image: properties },
        { name: 'homeAppliance', image: home },
        { name: 'pet', image: pet },
        { name: 'sport', image: sports },
        { name: 'education', image: education },
        { name: 'clothing', image: clothing },
        { name: 'service', image: service },
        { name: 'cosmetic', image: cosmetics },
        { name: 'vacancy', image: vacan },
        { name: 'others', image: others },

    ];
    const subcategory = {
        vehicle: ['car', 'van', 'motorcycle', 'tractor', 'bus', 'three wheel', 'jeep', 'lorry', 'other'],
        electronic: ['tv', 'mobile phone', 'laptop', 'speaker', 'radio', 'air condition', 'other'],
        property: ['apartment', 'house', 'commercial shop', 'room', 'annex', 'villa', 'land', 'other'],
        homeAppliance: ['furniture', 'kitchen appliance', 'other'],
        pet: ['dog', 'cat', 'bird', 'fish', 'other'],
        sport: ['fitness', 'cricket item', 'indoor sport', 'other'],
        education: ['computer class', 'dance class', 'language class', 'sport class', 'private tuition', 'other'],
        clothing: ['shirt', 't-shirt', 'trouser', 'belt', 'shoe', 'other'],
        service: ['ticket booking', 'beauty makeup', 'cleaning', 'courier service', 'doctor', 'security', 'real estate', 'plumber', 'photographer', 'health fitness', 'party event', 'other'],
        cosmetic: ['face cream', 'body lotion', 'shampoo', 'hair cream', 'other'],
        vacancy: ['web developer', 'graphic designer', 'data entry operator', 'content writer', 'typing', 'cashier', 'doctor', 'engineer', 'supervisor', 'team leader', 'clerk', 'teacher', 'chef', 'helper', 'beautician', 'cleaner', 'painter', 'software engineer', 'other'],
        other: [],
    };

    const closePopup = () => {
        setOpenPopup(false);
        setSelectedCategory('');
        setSelectedCategory('');
    }

    const selectCat = (category) => {
        setOpenPopup(true);
        setSelectedCategory(category);
    }
    const selectSubCategory = (subCat) => {
        setOpenPopup(false);
        setSelectedSubCategory(subCat);
        // Do ur functionality
        const tempAdds = adds.filter((add) => (add.category === selectedCategory) && (add.subCategory === subCat));
        setFilteredAdds(tempAdds);
        setFilteredAddsLength(tempAdds.length);
        setShowResults(true);

    }

    const clearFilter = () => {
        setSelectedCategory('');
        setSelectedSubCategory('');
        setFilteredAdds([]);
        setFilteredAddsLength(0);
        setShowResults(false);
    }



    return (
        <>
            {openPopup &&
                (
                    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-30 ">
                        <div className="w-full max-w-md p-10 bg-white rounded-lg border-2 border-gray-300 shadow-2xl max-h-[45vh] overflow-y-scroll overflow-x-hidden">
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-semibold ml-3 text-gray-800">{selectedCategory.toLocaleUpperCase()}</h2>
                                <button onClick={closePopup}>
                                    <FontAwesomeIcon
                                        icon={faTimesCircle}
                                        className="text-[18px] text-white bg-gray-600 border-[2px] border-gray-600 rounded-full hover:bg-gray-900"
                                    />
                                </button>
                            </div>
                            <div>
                                {subcategory[selectedCategory].map((subcat, index) => (
                                    <div onClick={() => selectSubCategory(subcat)} key={index} className={`shadow-2xl hover:bg-gray-300 cursor-pointer border bg-white text-gray-800 shadow-md rounded-md px-5 m-2 h-10 w-full mb-4 flex items-center justify-between`}>
                                        <span>{subcat.toUpperCase()}</span>
                                        <FontAwesomeIcon
                                            icon={faArrowRight}
                                            className="text-[16px]"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            <NavBarLogout />
            {!showResults && (
                <div className="flex justify-center mt-40 mb-16">
                    <div className="grid grid-cols-4 gap-4">
                        {categories.map((cat, index) =>
                            <div key={index} className="card flex flex-col w-[250px] bg-white p-2 rounded-lg shadow-2xl hover:bg-gray-300 cursor-pointer"
                                onClick={() => selectCat(cat.name)}>
                                <div className="w-full p-5 rounded-lg">
                                    <img src={cat.image} className='w-[200px] rounded-md' alt="photo" />
                                </div>
                                <div className="text-gray-900 font-semibold text-lg capitalize flex items-center justify-center">
                                    {cat.name}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
            {showResults && (
                <div className="flex flex-col mt-40">
                    <div className="flex flex-col items-center">
                        <div className="flex w-[85%] font-bold text-xl ml-5 gap-4 text-gray-800">
                            <span>Filtered Items {`(${filteredAddsLength})`}</span>
                            <span>
                                <button className="btn bg-red-700 px-2 py-1 rounded-md text-white text-sm"
                                    onClick={clearFilter}>
                                    Clear
                                    <FontAwesomeIcon
                                        icon={faTrash}
                                        className="pl-2"
                                    />
                                </button>
                            </span>
                        </div>
                        {filteredAddsLength == 0 && (
                            <div className="flex items-center font-bold text-2xl h-[60vh] text-gray-800"> No items found! </div>
                        )}
                        {filteredAdds.map((add, index) =>
                            <div key={index} className="card flex w-[85%] bg-slate-100 py-2 px-2 my-3 rounded-lg shadow hover:bg-gray-300">
                                <div className="w-[20%] p-5 rounded-lg">
                                    <img src={add.image} className='w-[200px] rounded-md' alt="photo" />
                                </div>
                                <div className="w-[70%] flex flex-col justify-center">
                                    <div className='text-xl font-bold text-gray-800'>{add.name}</div>
                                    <div className='py-1'>{add.details}</div>
                                    <h4 className='text-gray-800 text-sm pt-2'>{add.location}</h4>
                                    <h4 className='text-gray-800'> {add.date}</h4>
                                </div>
                                <div className="w-[10%] flex justify-center items-center p-3">
                                    <button className='btn bg-blue-500 px-4 py-2 rounded-lg text-white'>{add.price}</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <FooterContent />
        </>
    );
};

export default Category;