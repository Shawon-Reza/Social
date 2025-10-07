import React from 'react'
import ProductCard from '../Marketplace/ProductCard'
import Navbar from '../Navbar'

const MyProductDetails = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>


            <div className='container mx-auto sm:mt-15 md:mt-7'>
                <ProductCard></ProductCard>
            </div>
        </div>
    )
}

export default MyProductDetails