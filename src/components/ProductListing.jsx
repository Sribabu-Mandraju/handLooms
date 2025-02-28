import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProductListing = () => {
  const { categoryId } = useParams();
  const [subcategories, setSubcategories] = useState([]);
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductsAndSubcategories = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.meebuddy.com/app/v4/common/category-items', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            category_id: categoryId
          })
        });

        const result = await response.json();
        console.log('API Response:', result);

        if (result.status === 'success') {
          const groupedProducts = result.data.items.reduce((acc, product) => {
            const subCategory = product.sub_category;
            if (!acc[subCategory]) {
              acc[subCategory] = [];
            }
            acc[subCategory].push(product);
            return acc;
          }, {});

          const subcategoryList = [...new Set(Object.keys(groupedProducts))];
          console.log('Subcategories:', subcategoryList);
          setSubcategories(subcategoryList);
          setProducts(groupedProducts);
        } else {
          throw new Error('Failed to fetch products');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (categoryId) {
      fetchProductsAndSubcategories();
    }
  }, [categoryId]);

  const handleScrollToSubcategory = (subCategory) => {
    document.getElementById(subCategory).scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="w-1/4 p-6  shadow-lg m-[20px] border-[2px] border-gray-300 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Subcategories</h2>
        <ul>
          {subcategories.map((subCategory) => (
            <li key={subCategory} className="mb-4">
              <button
                onClick={() => handleScrollToSubcategory(subCategory)}
                className="text-lg hover:text-blue-300 transition-colors duration-200"
              >
                {subCategory}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 p-6">
        {subcategories.map((subCategory) => (
          <div key={subCategory} id={subCategory} className="mb-12">
            <h3 className="text-3xl font-bold mb-6">{subCategory}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products[subCategory].map((product) => (
                <div
                  key={product._id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <img
                      src={product.images[0]?.image_url}
                      alt={product.name}
                      className="w-full h-full object-contain hover:scale-105 duration-500 ease-in-out"
                    />
                    {/* Discount badge if needed */}
                    {product.quantities[0]?.discount > 0 && (
                      <div className="absolute top-2 right-2 bg-blue-600 text-black px-2 py-1 rounded-full text-sm">
                        {product.quantities[0].discount}% OFF
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600 text-sm mb-1">
                          {product.sub_category}
                        </p>
                        <p className="text-lg font-bold text-gray-900">
                          ₹{product.quantities[0]?.product_cost}
                          {product.quantities[0]?.mrp_cost > product.quantities[0]?.product_cost && (
                            <span className="text-sm text-gray-500 line-through ml-2">
                              ₹{product.quantities[0]?.mrp_cost}
                            </span>
                          )}
                        </p>
                      </div>
                      
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing; 