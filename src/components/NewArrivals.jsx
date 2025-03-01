import React, { useState } from "react";
import { useCart } from "../context/CartContext";
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
  const { addToCart, items } = useCart();
  const [loading, setLoading] = useState({});

  const handleAddToCart = async (product) => {
    try {
      setLoading((prev) => ({ ...prev, [product.id]: true }));

      // Check if item already exists in cart
      const existingItem = items.find((item) => item.id === product.id);

      const cartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        title2: product.title2,
        quantity: existingItem ? existingItem.quantity + 1 : 1,
        quantities: [
          {
            product_cost: parseFloat(product.price),
            mrp_cost: parseFloat(
              product.actualprice.replace("₹", "").replace(",", "")
            ),
            discount: parseInt(product.discount),
          },
        ],
      };

      addToCart(cartItem);

      if (existingItem) {
        alert(`Increased ${product.name} quantity in cart!`);
      } else {
        alert(`${product.name} added to cart!`);
      }
      alert("nnnn")
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add item to cart. Please try again.");
    } finally {
      setLoading((prev) => ({ ...prev, [product.id]: false }));
    }
  };

  const featuredProducts = [
    {
      id: "1",
      image: saree1,
      name: "Uppada Cotton Saree",
      title2: "Uppada Jamdhani Cotton Saree",
      actualprice: "₹4,925",
      price: "3940",
      discount: "20%",
      rating: 4.1,
    },
    {
      id: "2",
      image: saree2,
      name: "Bandar Cotton Saree",
      title2: "Bandar/Polavaram Saree",
      actualprice: "₹2,272",
      price: "1818",
      discount: "20%",
      rating: 4.5,
    },
    {
      id: "3",
      image: saree3,
      name: "Venkatagiri Cotton Saree",
      title2: "Venkatagiri Cotton Saree",
      actualprice: "₹2,315",
      price: "1852",
      discount: "20%",
      rating: 4.8,
    },
    {
      id: "4",
      image: saree4,
      name: "Madhavaram Cotton Saree",
      title2: "Madhavaram Cotton Zari Saree",
      actualprice: "₹4,459",
      price: "3567",
      discount: "20%",
      rating: 4.1,
    },
    {
      id: "5",
      image: saree5,
      name: "Bandar Cotton Saree",
      title2: "Bandar Saree",
      actualprice: "₹4,940",
      price: "3952",
      discount: "20%",
      rating: 4.3,
    },
    {
      id: "6",
      image: saree6,
      name: "Venkatagiri Cotton Saree",
      title2: "Venkatagiri Cotton Saree",
      actualprice: "₹2,760",
      price: "2208",
      discount: "20%",
      rating: 4.8,
    },
    {
      id: "7",
      image: saree7,
      name: "Rajahmundry Cotton Saree",
      title2: "Rajahmundry Cotton Saree",
      actualprice: "₹2,239",
      price: "1791",
      discount: "20%",
      rating: 4.2,
    },
    {
      id: "8",
      image: saree8,
      name: "Venkatagiri Cotton Saree",
      title2: "Venkatagiri Cotton Saree",
      actualprice: "₹2,960",
      price: "2368",
      discount: "20%",
      rating: 4.1,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredProducts.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-sm overflow-hidden group flex flex-col items-center md:w-[300px] hover:shadow-lg transition-shadow duration-300"
        >
          <div className="relative h-64">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 pt-[20px]"
            />
            <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white">
              <Heart className="h-5 w-5 text-gray-600" />
            </button>
            {product.discount && (
              <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                {product.discount} OFF
              </div>
            )}
          </div>
          <div className="p-4 w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 mb-2">{product.title2}</p>
            <div className="flex items-center justify-between mb-2">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">
                  ₹{product.price}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  {product.actualprice}
                </span>
              </div>
              <div className="flex items-center bg-green-50 px-2 py-1 rounded">
                <span className="text-yellow-400">★</span>
                <span className="ml-1 text-sm text-gray-600">
                  {product.rating}
                </span>
              </div>
            </div>
            <button
              onClick={() => handleAddToCart(product)}
              disabled={loading[product.id]}
              className={`mt-4 w-full py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2
                ${
                  loading[product.id]
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 hover:scale-[1.02]"
                } 
                text-white`}
            >
              {loading[product.id] ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to Cart
                </>
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewArrivals;
