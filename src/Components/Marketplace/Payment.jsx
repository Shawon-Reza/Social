

import { useState } from "react";
import Navbar from "../Navbar";
import Swal from "sweetalert2";

const Payment = () => {
  const [formData, setFormData] = useState({
    product: 'Jacket Trucker Denim',
    quantity: 1,
    subtotal: 44.11,
    deliveryFees: 4.00,
    tax: 9.99,
    deliveryShipping: 0.00,
    total: 58.01,
    deliveryType: 'toAddress',
    paymentMethod: 'cashOnDelivery',
    address: {
      receiverName: 'Icin Caroline',
      phoneNumber: '+1 245-534-8',
      city: 'California',
      addressLine: '88 Jenna Lane, Petrolia, California, 95558, United States',
    },
    isPopupOpen: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      address: { ...prev.address, [name]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    if (formData?.paymentMethod === "cashOnDelivery") {
      Swal.fire({
        title: "Are you sure?",
        text: "Please check your order details before you proceed with the transaction.",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Proceed",
            text: "Successfully placed your order.",
            icon: "success",
          });
        }
      });
    } else if (formData?.paymentMethod === "creditCard") {
      console.log("Credit card selected");
    }

  }



  const togglePopup = () => {
    setFormData((prev) => ({ ...prev, isPopupOpen: !prev.isPopupOpen }));
  };

  const saveAddress = () => {
    setFormData((prev) => ({ ...prev, isPopupOpen: false }));
    console.log('Updated Address:', formData.address);
  };

  return (
    <div className="bg-[#F3F4F6] min-h-screen">
      <div>
        <Navbar></Navbar>
      </div>

      <div className="container mx-auto  mt-10  ">
        <h2 className="text-xl font-bold mb-6">Payment & Delivery</h2>

        <div className="grid grid-cols-2 gap-6">
          {/* Left Section - Product and Delivery Details */}
          <div className="bg-white p-6 shadow-xl rounded-2xl">
            <h3 className="text-lg font-semibold mb-2">Product</h3>
            <p>{formData.product}</p>
            <p>Quantity {formData.quantity}</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">Delivery Detail</h3>
            <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-md">
              <p className="text-blue-700">Please complete your address information first.</p>
              <button
                onClick={togglePopup}
                className="mt-2 text-blue-500 hover:underline"
              >
                Add Address
              </button>
            </div>

            <div className="mb-4 fle">
              <p className="font-semibold">Delivery Type</p>
              <div className="flex gap-3 mt-2">
                <label className="flex items-center space-x-2 border border-[#E0E0E0] rounded-lg px-3 py-2">
                  <input
                    type="radio"
                    name="deliveryType"
                    value="toAddress"
                    checked={formData.deliveryType === 'toAddress'}
                    onChange={handleChange}
                    className="text-green-500 focus:ring-green-500"
                  />
                  <span className="text-green-700">Send to my Address</span>
                </label>
                <label className="flex items-center space-x-2  border border-[#E0E0E0] rounded-lg px-3 py-2">
                  <input
                    type="radio"
                    name="deliveryType"
                    value="pickUp"
                    checked={formData.deliveryType === 'pickUp'}
                    onChange={handleChange}
                    className="text-green-500 focus:ring-green-500"
                  />
                  <span>Pick up in the Outlet</span>
                </label>
              </div>
            </div>
          </div>

          {/* Right Section - Order Details and Payment Methods */}
          <div className="shadow-xl p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-2">Order Detail</h3>
            <div className="space-y-2">
              <p>Subtotal <span className="float-right">${formData.subtotal.toFixed(2)}</span></p>
              <p>Delivery Fees <span className="float-right">${formData.deliveryFees.toFixed(2)}</span></p>
              <p>Tax <span className="float-right">${formData.tax.toFixed(2)}</span></p>
              <p>Delivery & Shipping <span className="float-right">${formData.deliveryShipping.toFixed(2)}</span></p>
              <p className="font-bold">Total <span className="float-right">${formData.total.toFixed(2)}</span></p>
            </div>

            <h3 className="text-lg font-semibold mt-4 mb-2">Payments Methods</h3>
            <p className="mb-2">Choose your payments methods.</p>
            <label className="flex items-center space-x-2 mb-2">
              <input
                type="radio"
                name="paymentMethod"
                value="cashOnDelivery"
                checked={formData.paymentMethod === 'cashOnDelivery'}
                onChange={handleChange}
                className="text-green-500 focus:ring-green-500"
              />
              <span>Cash on Delivery</span>
            </label>
            <label className="flex items-center space-x-2 mb-2">
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                checked={formData.paymentMethod === 'creditCard'}
                onChange={handleChange}
                className="text-green-500 focus:ring-green-500"
              />
              <span>Credit Card</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="paymentMethod"
                value="bankTransfer"
                checked={formData.paymentMethod === 'bankTransfer'}
                onChange={handleChange}
                className="text-green-500 focus:ring-green-500"
              />
              <span>Bank Transfer</span>
            </label>

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full mt-4 bg-gray-300 text-gray-700 py-2 rounded-md "
            >
              Proceed
            </button>
          </div>
        </div>

        {/* Popup for Address */}
        {formData.isPopupOpen && (
          <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h3 className="text-lg font-semibold mb-4">Add Address</h3>
              <p className="text-gray-600 mb-4">Receiver Name. Please fill form below and make sure the address is correct.</p>
              <div className="space-y-4">
                <input
                  type="text"
                  name="receiverName"
                  value={formData.address.receiverName}
                  onChange={handleAddressChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Receiver Name"
                />
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.address.phoneNumber}
                  onChange={handleAddressChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Phone Number"
                />
                <input
                  type="text"
                  name="city"
                  value={formData.address.city}
                  onChange={handleAddressChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="City"
                />
                <input
                  type="text"
                  name="addressLine"
                  value={formData.address.addressLine}
                  onChange={handleAddressChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Address"
                />
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={togglePopup}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Close
                  </button>
                  <button
                    onClick={saveAddress}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;