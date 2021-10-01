import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidear from '../components/Sidebar'

const Bar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
           <Sidear isOpen={isOpen} toggle={toggle} />
           <Navbar toggle={toggle} /> 
        </>
    )
}

export default Bar
