import {NavLink, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";


const navLinks = ['Home','Popular','Battle'];

const Nav = () => {
//    const[selectedLink, setSelectedLink] = useState('Home')

//    useEffect (() => {

//    },[selectedLink])

//    const handleLink = (event) => {
//        const link =  [...event.target.href].slice(22,29).join('') === '' ? 'Home' : [...event.target.href].slice(22,29).join('')
//        const link =  [...event.target.href].slice(69,76).join('') === '' ? 'Home' : '/'  //[...event.target.href].slice(69,76).join('')
//        setSelectedLink(link )
//        console.log([...event.target.href].slice(69,76).join(''),"????????????????????")
//        }  // onClick={handleLink} >

    return (
        <>
            <ul className="nav">
                {navLinks.map((navLink, index) => (
                    <li key={index}>
                        <NavLink to={navLink === 'Home'? '/' : navLink.toLowerCase()} >
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