import React from 'react'
import SearchBar from './SearchBar';
import ProductGrid from './ProductGrid';
import Navbar from '../Navbar';
import product from '../../assets/product.png'

const MarketPlace = () => {

    const sampleProducts = [
        {
            id: 1,
            image: product, // Placeholder image URL; replace with actual image URLs from backend
            category: 'Computer & Laptop',
            price: '$1,039',
            name: 'Galaxy Drift FX150 (2021) - VM4420T 1TB',
            sold: '390 Sold',
        },
        {
            id: 2,
            image: product,
            category: 'Computer & Laptop',
            price: '$1,039',
            name: 'Galaxy Drift FX150 (2021) - VM420T 1TB',
            sold: '390 Sold',
        },
        {
            id: 3,
            image: product, // Placeholder image URL; replace with actual image URLs from backend
            category: 'Computer & Laptop',
            price: '$1,039',
            name: 'Galaxy Drift FX150 (2021) - VM4420T 1TB',
            sold: '390 Sold',
        },
        {
            id: 4,
            image: product,
            category: 'Computer & Laptop',
            price: '$1,039',
            name: 'Galaxy Drift FX150 (2021) - VM420T 1TB',
            sold: '390 Sold',
        },
        {
            id: 5,
            image: product, // Placeholder image URL; replace with actual image URLs from backend
            category: 'Computer & Laptop',
            price: '$1,039',
            name: 'Galaxy Drift FX150 (2021) - VM4420T 1TB',
            sold: '390 Sold',
        },
        {
            id: 6,
            image: product,
            category: 'Computer & Laptop',
            price: '$1,039',
            name: 'Galaxy Drift FX150 (2021) - VM420T 1TB',
            sold: '390 Sold',
        },
        {
            id: 7,
            image: product, // Placeholder image URL; replace with actual image URLs from backend
            category: 'Computer & Laptop',
            price: '$1,039',
            name: 'Galaxy Drift FX150 (2021) - VM4420T 1TB',
            sold: '390 Sold',
        },
        {
            id: 8,
            image: product,
            category: 'Computer & Laptop',
            price: '$1,039',
            name: 'Galaxy Drift FX150 (2021) - VM420T 1TB',
            sold: '390 Sold',
        },
        // Add more sample products as needed...
        // In production, this array will come from props or state fetched from backend
    ];

    return (
        <div className='bg-gray-100'>

            <section className='py-7'>
                <Navbar />
            </section>
            <div className='xl:px-28 lg:px-20 md:px-16 sm:px-10 px-6'>
                <section>
                    <SearchBar></SearchBar>
                </section>
                <section >
                    <ProductGrid products={sampleProducts} ></ProductGrid>
                </section>
            </div>

        </div>
    )
}

export default MarketPlace