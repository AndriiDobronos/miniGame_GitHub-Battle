import {NavLink, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";


const navLinks = ['Home','Popular','Battle'];

const Nav = () => {
    const[selectedLink, setSelectedLink] = useState('Home')

    useEffect (() => {

    },[selectedLink])

    const handleLink = (event) => {
        const link =  [...event.target.href].slice(22,29).join('') === '' ? 'Home' : [...event.target.href].slice(22,29).join('')
        setSelectedLink(link )
        }

    return (
        <>
            <ul className="nav">
                {navLinks.map((navLink, index) => (
                    <li key={index}>
                        <NavLink to={navLink === 'Home'? '/' : navLink.toLowerCase()} onClick={handleLink} >
                            {navLink}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <Outlet />
        </>
    )
}
export default Nav;