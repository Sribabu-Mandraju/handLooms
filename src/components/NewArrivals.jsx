import React from 'react';
import Card from './Card';
import { Heart } from "lucide-react";
import saree1 from "../assets/sarees/1-181-200x300.jpg";
import saree2 from "../assets/sarees/1-182-200x300.jpg";
import saree3 from "../assets/sarees/1-183-200x300.jpg";
import saree4 from "../assets/sarees/1-184-200x300.jpg";
import saree5 from "../assets/sarees/1-185-200x300.jpg";
import saree6 from "../assets/sarees/1-187-200x300.jpg";
import saree7 from "../assets/sarees/1-395-200x300.jpg";
import saree8 from "../assets/sarees/1-403-200x300.jpg";


const NewArrivals = () => {
  const featuredProducts = [
    {
      image1: saree1,
      image2: "",
      name: "Uppada Cotton Saree",
      title2: "Uppada Jamdhani Cotton Saree",
      actualprice: "₹4,925",
      saleprice: "₹3,940",
      discount: "20%",
      rating:4.1
    },
    {
      image1: saree2,
      image2: "",
      name: "Bandar Cotton Saree",
      title2: "Bandar/Polavaram Saree",
      actualprice: "₹2,272",
      saleprice: "₹1,818",
      discount: "20%",
      rating:4.5
    },
    {
      image1: saree3,
      image2: "",
      name: "Venkatagiri Cotton Saree",
      title2: "Venkatagiri Cotton Saree",
      actualprice: "₹2,315",
      saleprice: "₹1,852",
      discount: "20%",
      rating:4.8
    },
    {
      image1:saree4,
      image2: "",
      name: "Madhavaram Cotton Saree",
      title2: "Madhavaram Cotton Zari Saree",
      actualprice: "₹4,459",
      saleprice: "₹3,567",
      discount: "20%",
      rating:4.1
    },
    {
      image1: saree5,
      image2: "",
      name: "Bandar Cotton Saree",
      title2: "Bandar Saree",
      actualprice: "₹4,940",
      saleprice: "₹3,952",
      discount: "20%",
      rating:4.3
    },
    {
      image1: saree6,
      image2: "",
      name: "Venkatagiri Cotton Saree",
      title2: "Venkatagiri Cotton Saree",
      actualprice: "₹2,760",
      saleprice: "₹2,208",
      discount: "20%",
      rating:4.8
    },
    {
      image1: saree7,
      image2: "",
      name: "Rajahmundry Cotton Saree",
      title2: "Rajahmundry Cotton Saree",
      actualprice: "₹2,239",
      saleprice: "₹1,791",
      discount: "20%",
      rating:4.2
    },
    {
      image1: saree8,
      image2: "",
      name: "Venkatagiri Cotton Saree",
      title2: "Venkatagiri Cotton Saree",
      actualprice: "₹2,960",
      saleprice: "₹2,368",
      discount: "20%",
      rating:4.1
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredProducts.map((product) => (
                  <div key={product.name} className="bg-white rounded-lg shadow-sm overflow-hidden group flex flex-col items-center md:w-[300px]">
                    <div className="relative">
                      <img
                        src={product.image1}
                        alt={product.name}
                        className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-300 pt-[20px]"
                      />
                      <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white">
                        <Heart className="h-5 w-5 text-gray-600" />
                      </button>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-gray-900">{product.saleprice}</span>
                        <div className="flex items-center">
                          <span className="text-yellow-400">★</span>
                          <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                        </div>
                      </div>
                      <div className="ml-1 text-[14px] text-gray-500 line-through">{product.actualprice}</div>
                      <button
                        onClick={() => {
                          addToCart(product);
                        }}
                        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
  );
};

export default NewArrivals;