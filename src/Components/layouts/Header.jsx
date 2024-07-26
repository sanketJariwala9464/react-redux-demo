import { useState, useEffect, cloneElement } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
    Navbar as MTNavbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import RouterLink from "../ui/RouterLink";

const Header = ({ brandName, action }) => {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <RouterLink name="Home" path="/" />
            <RouterLink name="About" path="/about" />
            <RouterLink name="Contact" path="/contact" />
        </ul>
    );

    return (
        <MTNavbar color="transparent" className="p-3">
            <div className="container mx-auto flex items-center justify-between text-white">
                <Link to="/">
                    <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-bold">
                        {brandName}
                    </Typography>
                </Link>
                <div className="hidden lg:block">{navList}</div>
                <div className="hidden gap-2 lg:flex">
                    <a
                        href="https://www.material-tailwind.com/blocks?ref=mtkr"
                        target="_blank"
                    >
                        <Button variant="text" size="sm" color="white" fullWidth>
                            pro version
                        </Button>
                    </a>
                    {cloneElement(action, {
                        className: "hidden lg:inline-block",
                    })}
                </div>
                <IconButton
                    variant="text"
                    size="sm"
                    color="white"
                    className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon strokeWidth={2} className="h-6 w-6" />
                    ) : (
                        <Bars3Icon strokeWidth={2} className="h-6 w-6" />
                    )}
                </IconButton>
            </div>
            <MobileNav
                className="rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900"
                open={openNav}
            >
                <div className="container mx-auto">
                    {navList}
                    <a
                        href="https://www.material-tailwind.com/blocks/react?ref=mtkr"
                        target="_blank"
                        className="mb-2 block"
                    >
                        <Button variant="text" size="sm" fullWidth>
                            pro version
                        </Button>
                    </a>
                    {cloneElement(action, {
                        className: "w-full block",
                    })}
                </div>
            </MobileNav>
        </MTNavbar>
    );
}

Header.defaultProps = {
    brandName: "Material Tailwind React",
    action: (
      <a
        href="https://www.creative-tim.com/product/material-tailwind-kit-react"
        target="_blank"
      >
        <Button variant="gradient" size="sm" fullWidth>
          free download
        </Button>
      </a>
    ),
};

Header.propTypes = {
    brandName: PropTypes.string,
    action: PropTypes.node,
};
  

export default Header;