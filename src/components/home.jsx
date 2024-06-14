import FooterContent from './footerContent';
import NavBarLogout from './navBarLogout';
import { adds } from '../assets/data/Data';

const Home = () => {
    console.log(adds.length);
    return (
        <>
            <NavBarLogout />
            <div className="flex flex-col items-center mt-40 mb-16">
                {adds.length == 0 && (
                    <div className="flex items-center font-bold text-2xl h-[60vh] text-gray-800"> No items found! </div>
                )}
                {adds.map((add, index) =>
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

            <FooterContent />
        </>
    );
};

export default Home;