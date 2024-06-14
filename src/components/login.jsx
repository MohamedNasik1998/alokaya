// import '../assets/css/login.css';
import React from 'react';


const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                <div className="mb-4">
                    <input 
                        type="text" 
                        placeholder="Phone Number" 
                        required 
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <input 
                        type="password" 
                        placeholder="Password" 
                        required 
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="flex items-center justify-between mb-4">
                    <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="ml-2">Remember Me</span>
                    </label>
                    <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password</a>
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Login
                </button>
                <div className="mt-4 text-center">
                    Don't have an account? <link to ="/Register"/><button className="text-blue-500 hover:underline">Register</button>
                    
                </div>
            </form>
        </div>
    );
};

export default Login;
