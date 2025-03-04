import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const ProductContext = createContext();

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};

const fetchCategoryItems = async (categoryId) => {
  try {
    const response = await fetch(
      "https://api.meebuddy.com/app/v4/common/category-items",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category_id: categoryId,
        }),
      }
    );
    const result = await response.json();
    if (result.status === "success" && result.data?.items) {
      return result.data.items.slice(0, 4);
    }
    return [];
  } catch (error) {
    console.error(`Error fetching items for category ${categoryId}:`, error);
    return [];
  }
};

export const ProductProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [products, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = useCallback((product) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((item) => item._id === product._id);
      if (isFavorite) {
        return prevFavorites.filter((item) => item._id !== product._id);
      } else {
        const favoriteItem = {
          _id: product._id,
          name: product.name,
          price: product.quantities?.[0]?.product_cost || product.price,
          mrp: product.quantities?.[0]?.mrp_cost || product.mrp,
          discount: product.quantities?.[0]?.discount || product.discount,
          image_url: product.images?.[0]?.image_url || product.image_url,
          sub_category: product.sub_category,
        };
        return [...prevFavorites, favoriteItem];
      }
    });
  }, []);

  const isFavorite = useCallback(
    (productId) => {
      return favorites.some((item) => item._id === productId);
    },
    [favorites]
  );

  const fetchAllCategories = useCallback(async () => {
    try {
      setIsLoading(true);
      const categoriesResponse = await fetch(
        "https://api.meebuddy.com/app/v4/common/shop_categories",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        }
      );
      const categoriesResult = await categoriesResponse.json();

      if (
        categoriesResult.status === "success" &&
        Array.isArray(categoriesResult.data)
      ) {
        const categories = categoriesResult.data;
        const productsData = {};

        await Promise.all(
          categories.map(async (category) => {
            const items = await fetchCategoryItems(category._id);
            if (items.length > 0) {
              productsData[category._id] = {
                name: category.name,
                items: items,
              };
            }
          })
        );

        setProducts(productsData);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const value = {
    favorites,
    products,
    isLoading,
    toggleFavorite,
    isFavorite,
    fetchAllCategories,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
