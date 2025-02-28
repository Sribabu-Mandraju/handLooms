import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProductListing = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
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
        
        if (result.status === 'success') {
          setProducts(result.data.items);
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
      fetchProducts();
    }
  }, [categoryId]);

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div 
            key={product._id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-64">
              <img
                src={product.images[0]?.image_url}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {/* Discount badge if needed */}
              {product.quantities[0]?.discount > 0 && (
                <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-sm">
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
                
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing; 