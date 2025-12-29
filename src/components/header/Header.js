import React, { useEffect, useState } from 'react'
import './Header.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { Menu, UserCircle, X } from 'lucide-react'
import { Tooltip } from 'react-tooltip'

export default function Header() {
    // state to determine if the header is visible
    const [ show, setShow ] = useState(true) // initial state is true (header visible)

    // state to determine the position of the header
    const [ lastScrollY, setLastScrollY ] = useState(0)

    // state to show the header on icon click
    const [ menuOpen, setMenuOpen ] = useState(false) // initial state is false


    // state to control the header background on page scroll
    const [ scrolled, setScrolled ] = useState(false) // initial state is false

    // useEffect react hook to apply side effects on mount
    useEffect(() => {
        // if menuOpen is true (Header on mobile)
        if (menuOpen) return // exit the function
        
        // function to handle the scroll (function will trigger every time the user scrolls)
        const handleScroll = () => {
            
            // how far the page has scrolled in pixels
            const currentScrollY = window.scrollY // stor in variable to compare with lastScrollY

            // if currentScroll is greater than lastScroll (scrolling down)
            if (currentScrollY > lastScrollY) {
                // scrolling down
                setShow(false)
            } else {
                // scrolling up
                setShow(true)
            }
            

            // if the automatic browser scroll's value is 0
            if (currentScrollY > 0) {
                setScrolled(true) // update the state to true, since the user is scrolling
            } else {
                setScrolled(false) // update the state to false, since the user is at the top
            }

            // update the lastScroll with teh currentScroll
            setLastScrollY(currentScrollY)
        }

        // Tell the browser to execute the handleScroll function every time the user scrolls
        window.addEventListener("scroll", handleScroll)
        // clean up
        return () => window.removeEventListener("scroll", handleScroll) // stop listening to scroll events to prevent memory leaks and scroll events

    }, [lastScrollY, menuOpen]) // watch out for the astScroll value to determine the position of the header when scrolling down

    console.log(menuOpen)

    const navigate = useNavigate()

    const accountLink = () => {
        alert('User registration coming soon.')
    }
    
  return (
    <section>
        <header
            className={`header ${show ? 'show' : 'hide'} ${scrolled ? "scrolled" : "top"}`}
        >
            <div
                className='logo'
                onClick={() => navigate('/')}
            >
                <h3>DYNATRONI<span>X</span></h3>
            </div>

            <nav>
                <NavLink to='/' className={({ isActive }) => isActive ? "active" : ""}>
                    Machines
                </NavLink>

                <NavLink to='/automation' className={({ isActive }) => isActive ? "active" : ""}>
                    Automation
                </NavLink>

                <NavLink to='/gadgets' className={({ isActive }) => isActive ? "active" : ""} >
                    gadgets
                </NavLink>
                
                {/* <NavLink to='/shop' className={({ isActive}) => isActive ? "active " : ""}>
                    Shop
                </NavLink> */}

                <NavLink to='/connect' className={({ isActive }) => isActive ? "active" : ""}>
                    Connect
                </NavLink>

            </nav>
            
            <div>
                <UserCircle
                    size={20}
                    stroke='#0dcaf0'
                    data-tooltip-id="userTip"
                    className='user-toolTip'
                />
            </div>

            {menuOpen ? (
                <X
                    size={25}
                    stroke='#0dcaf0'
                    className='menu-icon'
                    onClick={() => setMenuOpen(prev => !prev)} // flip the state on click
                />
            ) : (
                <Menu
                    size={25}
                    stroke='#0dcaf0'
                    className='menu-icon'
                    onClick={() => setMenuOpen(prev => !prev)} // flip the state on click
                />
            )}

            {menuOpen && (
                <div
                    className='mobile-nav'
                >
                    <nav>
                        <NavLink to='/' className={({ isActive }) => isActive ? "active" : ""}>
                            Machines
                        </NavLink>

                        <NavLink to='/automation' className={({ isActive }) => isActive ? "active" : ""}>
                            Automation
                        </NavLink>

                        <NavLink to='/gadgets' className={({ isActive}) => isActive ? "active " : ""}>
                            Gadgets
                        </NavLink>

                        <NavLink to='/shop' className={({ isActive }) => isActive ? "active" : ""} >
                            Shop
                        </NavLink>

                        <NavLink to='/connect' className={({ isActive }) => isActive ? "active" : ""}>
                            Connect
                        </NavLink>

                        <NavLink onClick={accountLink} className={({ isActive }) => isActive ? "active" : ""}>
                            Account
                        </NavLink>
                    </nav>
                </div>
            )}

            <Tooltip id="userTip" effect="solid" place="bottom" className="signUp-Tip">Account</Tooltip>
        </header>
    </section>
  )
}