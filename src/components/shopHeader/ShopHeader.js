import React, { useEffect, useState } from 'react'
import './ShopHeader.css'
import { motion } from 'framer-motion'
import { ShoppingCart, UserCircle } from 'lucide-react'
import { Tooltip } from 'react-tooltip'

export default function ShopHeader() {

    // state to track which element is currently in cycle
    const [ currentProduct, setCurrentProduct ] = useState(0) // initial index is 0

    // state to control the headers visibility
    const [ showHeader, setShowHeader ] = useState(false) // initially, the header is not visible

    // An array of products to search
    const products = [
        `"headphones"`,
        `"airpods"`,
        `"ps5"`,
        `"gamepads"`,
        `"smartwatch"`
    ]

    // useEffect to cycle through the products
    useEffect(() => {
        // An interval function
        const interval = setInterval(() => {
            setCurrentProduct(prev => prev === products.length - 1 ? 0 : prev + 1)

        }, 5000) // cycle every 5 seconds

        // clean up
        return () => clearInterval(interval)
        
    }, []) // empty dependency array


    // useEffect to rub the scroll
    useEffect(() => {

        // function to scroll
        const onScroll = () => {
            // control the headers visibility
            const currentScrollY = window.scrollY
            // update the state
            setShowHeader(currentScrollY > 0)
        }

        // event listener
        window.addEventListener('scroll', onScroll)

        // clean up
        return () => window.removeEventListener('scroll', onScroll)

    }, [])

  return (
    <motion.header
        initial={{ opacity: 0, y: 20 }}
        // animate={ showHeader ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className={`shop-header ${showHeader ? 'show' : 'hide'}`}
    >
        <div>
            <input 
                type='text'
                name='product'
                placeholder={`Search ${products[currentProduct]}`}
                className='shop-header-input'
            />
        </div>

        <div
            className='shop-header-icon'
        >
            <ShoppingCart 
                size={30}
                stroke='#06d6ff'
                data-tooltip-id="shoppingCart-tip"
                className='icon-cart'
            />

            <UserCircle
                size={30}
                stroke='#0dcaf0'
                data-tooltip-id="accountTip"
                className='icon-account'
            />
            
        </div>

        <Tooltip id='shoppingCart-tip' effect='solid' place='bottom' className='cart-tooltip'>ShoppingCart</Tooltip>
        <Tooltip id='accountTip' effect='solid' place='bottom' className='account-tooltip'>Account</Tooltip>

    </motion.header>
  )
}
