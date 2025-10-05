import React from 'react'
import ProductCard from './ProductCard'
import ProductGrid from './ProductGrid'
import Navbar from '../Navbar'
import product from '../../assets/product.png'


const ProductPage = () => {
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
        <div className='bg-[#F3F4F6]'>
            <section>
                <Navbar></Navbar>
            </section>
            <div className='xl:px-38 lg:px-24 md:px-16 sm:px-10 px-6'>
                <section>
                    <ProductCard></ProductCard>
                </section>

                <section className='py-13'>
                    <ProductGrid products={sampleProducts} ></ProductGrid>
                </section>
            </div>
        </div>
    )
}

export default ProductPage