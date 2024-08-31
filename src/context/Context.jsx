
import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {

    const NavbarComponents = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "About us",
            path: "/about",

        },
        {
            name: "Courses",
            path: "/",
        },
        {
            name: "Review",
            path: "/",
        },
        {
            name: "Services",
            path: "/",
        },
        {
            name: "Register Now",
            path: "/register" 

        }
    ]

    const [isOpen, setIsOpen] = useState(false)
    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }
    const [open, setOpen] = useState(false)

    const contextValue = {
        NavbarComponents,
        isOpen,
        setIsOpen,
        open,
        setOpen,
        toggleNavbar
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
