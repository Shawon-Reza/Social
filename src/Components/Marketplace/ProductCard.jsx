import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const dummyProduct = {
  id: 1,
  images: [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
  ],
  category: "Computer & Laptop",
  price: "$415.10",
  name: "Astro Wave TX800 (2023) - QZ540M 128GB",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  color: "Black",
  storage: "128 GB",
  variants: ['red', 'yellow', 'gray', 'white']
};

const ProductCard = ({ product = dummyProduct }) => {
  const [quantity, setQuantity] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const unitPrice = typeof product.price === 'string'
    ? parseFloat(product.price.replace('$', ''))
    : product.price;

  const totalPrice = (unitPrice * quantity).toFixed(2);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div className="flex flex-col lg:flex-row items-start rounded-lg p-4 lg:p-8 max-w-7xl mx-auto space-y-6 lg:space-y-0 lg:space-x-8">

      {/* Product Images */}
      <div className="w-full lg:w-[60%]">
        {/* Main Swiper */}
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="rounded-xl overflow-hidden"
        >
          {product.images?.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`product-${idx}`}
                className="w-full h-[300px] sm:h-[400px] md:h-[450px] object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail Swiper */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mt-4"
        >
          {product.images?.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`thumb-${idx}`}
                className="w-full h-16 sm:h-20 object-cover rounded-lg opacity-60 hover:opacity-100 transition"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Product Details */}
      <div className="w-full lg:w-[40%] space-y-6 px-2 sm:px-4">
        {/* Product Info */}
        <div>
          <p className="text-2xl font-bold text-green-600">${totalPrice}</p>
          <p className="text-xl font-semibold mt-2">{product.name}</p>
          <p className="text-sm text-gray-500 mt-1">{product.category}</p>
          <p className="text-sm text-gray-600 mt-3">{product.description}</p>
        </div>

        {/* Quantity Section */}
        <div className="p-4 rounded-lg shadow-inner bg-white">
          <div className="flex items-center justify-between mb-2">
            <span className="text-lg font-medium text-gray-700">Set Amount and Notes</span>
          </div>
          <div className="flex flex-col justify-start ">
            <span className="text-sm text-gray-600">
              {product.color} {product.storage}
            </span>

            <hr className='bg-[#E2E2E2] border-[#E2E2E2] mt-2' />

            <div className="flex items-center justify-center border border-gray-300 rounded-full overflow-hidden my-3  w-30">
              <button
                onClick={handleDecrease}
                className="px-3 py-1 text-gray-600 hover:text-gray-800 cursor-pointer"
              >
                <AiOutlineMinus />
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="px-3 py-1 text-gray-600 hover:text-gray-800 cursor-pointer"
              >
                <AiOutlinePlus />
              </button>
            </div>


            <p className="text-lg font-semibold">${totalPrice}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 mt-7">
            <button className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
              Add to Cart
            </button>
            <button className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
              Buy Now
            </button>
          </div>
        </div>




      </div>
    </div>
  );
};

export default ProductCard;
