import { useState } from "react";
import LinkContainer from "../LinkContainer/LinkContainer";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, path: '/',name: 'Home'},
        { id: 2, path: '/about', name: 'About'},
        { id: 3, path: '/courses', name: 'Courses'},
        { id: 4, path: '/contact', name: 'Contact'},
        { id: 5, path: '/dashboard', name: 'Dashboard'}
      ];
    return (
        <div className="text-left md:flex">
            <span onClick={()=>setOpen(!open)} className="mr-4 text-2xl cursor-pointer md:hidden font-bold">
                {
                    open ? <IoClose></IoClose> : <TiThMenu></TiThMenu>
                }
            </span>
            <span className={`${open ? "flex flex-col md:flex-row" : "hidden md:flex"} `}>
            {
                routes.map(route=> <LinkContainer key={route.id} route={route}></LinkContainer> )
            }
            </span>
        </div>
    );
};

export default Navbar;