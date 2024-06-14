// import '../assets/css/register.css';

const Register = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
                <form action="">
                    <h1 className="text-2xl font-bold text-center">Register</h1>
                    <div className="mt-8 space-y-4">
                        <div className="input-box">
                            <input
                                type="text"
                                placeholder="Username"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div className="input-box">
                            <input
                                type="text"
                                placeholder="Phone Number"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div className="input-box">
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div className="input-box">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Sign Up
                    </button>
                    <div className="mt-4 text-center">
                        Already have an account? <a href="login.html" className="text-blue-500 hover:underline">Login</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
