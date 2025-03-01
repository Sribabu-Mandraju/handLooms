const ProductCard = () => {
    const product = {
      _id: "1",
      name: "Sample Product",
      sub_category: "Category Name",
      quantities: [
        {
          product_cost: 499,
          mrp_cost: 699,
        },
      ],
    };
  
    return (
      <div className="bg-white max-w-84 w-full rounded-lg overflow-hidden shadow-t-md shadow-sm hover:shadow-md transition-all duration-300 relative">
        <div className="relative h-48 sm:h-56 lg:h-64">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.lYiEUEqLjXB3Hi32BLl0ZQHaHC&pid=Api"
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
          />
          {/* Heart Icon for Like/Dislike */}
          <button
            className="absolute cursor-pointer top-2 right-2 bg-white rounded-full p-1.5 shadow-md hover:bg-gray-100 transition-colors duration-200"
            onClick={(e) => {
              const heart = e.currentTarget.querySelector("svg");
              heart.classList.toggle("liked");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
  
        <div className="p-3 sm:p-4">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
            {product.name}
          </h3>
  
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <div>
              <p className="text-gray-600 text-xs sm:text-sm mb-1">
                {product.sub_category}
              </p>
              <p className="text-base sm:text-lg font-bold text-gray-900">
                ₹{product.quantities[0]?.product_cost}
                {product.quantities[0]?.mrp_cost > product.quantities[0]?.product_cost && (
                  <span className="text-xs sm:text-sm text-gray-500 line-through ml-2">
                    ₹{product.quantities[0]?.mrp_cost}
                  </span>
                )}
              </p>
            </div>
  
            <button className="bg-blue-600 text-white px-2 py-1.5 sm:px-4 rounded-sm cursor-pointer hover:bg-blue-700 transition-colors duration-200 text-sm">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;