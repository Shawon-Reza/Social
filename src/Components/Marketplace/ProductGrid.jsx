// ProductGrid.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductGrid = ({ products = [] }) => {
    console.log(products)
    const navigate = useNavigate()
    const handleClick = (id) => {
        console.log(id)
    }
    if (!products || products.length === 0) {
        return (
            <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg shadow-md">
                <p className="text-gray-500 text-lg">No products available right now 🚫</p>
            </div>
        );
    }
    

    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products?.map((product) => (
                <div
                    key={product?.id}
                    onClick={() => {
                        handleClick(product?.id)
                        navigate(`/marketplace/${product?.id}`)
                    }}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-103 transform transition-transform duration-700 ease-in-out cursor-pointer">
                    <img
                        src={product?.image}
                        alt={product?.name}
                        className="w-full h-48 object-cover"
                    />
                    <div className="">
                        <p className="text-sm text-gray-500 mb-1 bg-[#DBEAFE] p-3 rounded-br-[100px]">{product.category}</p>
                        <div className='px-4 py-1'>
                            <p className="text-lg font-semibold text-green-600 mb-1">{product.price}</p>
                            <p className="text-base text-gray-800 mb-1">{product?.name}</p>
                            <p className="text-sm text-gray-500">{product?.sold}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;