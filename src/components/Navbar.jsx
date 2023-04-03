import { Button } from '@mui/material'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='nav-main'>
            <div className="left">
                ToDoList
            </div>
            <Button variant="outlined" style={{ backgroundColor: 'white' }}>
                Login
            </Button>
        </nav >
    )
}

export default Navbar