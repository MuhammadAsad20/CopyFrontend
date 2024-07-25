import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="text-white text-md font-medium body-font py-4 md:py-20">
            <div className="flex justify-between items-center px-4 md:px-0">
                <button className="md:hidden" onClick={toggleMenu}>
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            <nav className={`h-auto w-full max-w-[469px] md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-between ${isOpen ? "block" : "hidden"} md:flex`}>
                <a className="mr-5 hover-underline-blue"><p className="opacity-30">Home</p></a>
                <a className="mr-5 hover-underline-blue">Features</a>
                <a className="mr-5 hover-underline-blue">Pricing</a>
                <a className="mr-5 hover-underline-blue">Blog</a>
                <a className="mr-5 hover-underline-blue"><i className="fab fa-dribbble"></i></a>
                <a className="mr-5 hover-underline-blue"><i className="fab fa-behance"></i></a>
            </nav>
        </header>
    );
};

export default Header;
