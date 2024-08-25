import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-transparent shadow-md py-4 px-10">
            <div className="flex justify-between">
                <h1 className="text-xl">
                    <a href="/" className="text-black-500 hover:text-gray-700">Austin Huang</a>
                </h1>
                <div className="flex space-x-4">
                    <a href="/#/projects" className="text-gray-500 text-lg hover:text-black">Projects</a>
                    <a href="/blog" className="text-gray-500 text-lg hover:text-black">Blog</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;