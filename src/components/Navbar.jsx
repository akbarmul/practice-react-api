import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Navbar() {
    return (
        <nav>
            <div className='container flex justify-between py-5'>
                <h1>Logo</h1>
                <NavLink to="/add-product">
                    <button>
                        Add Product
                    </button>
                </NavLink>
            </div>
        </nav>
    )
}
