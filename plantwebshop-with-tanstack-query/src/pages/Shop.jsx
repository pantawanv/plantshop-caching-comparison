import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useQuery } from "@tanstack/react-query";
import { getPlants } from "../api/plants";

function Shop() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const cartQuantity = cartItems.reduce(
    (total, product) => total + product.quantity,
    0,
  );

  // Fetch and cache plants with TanStack Query
  const {
    data: plants = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["plants"],
    queryFn: getPlants,
  });

  return (
    <div>
      <h2 className="section-title">All plants</h2>
      {isLoading && (
        <p className="loading">
          Please wait while we load the plants...we promise it's worth the wait!
          🌱
        </p>
      )}

      {isError && <p>Error: {error.message}</p>}

      <div className="product-grid">
        {plants.map((plant) => (
          <div className="product-card" key={plant.id}>
            <img
              src={plant.default_image?.medium_url}
              alt={plant.common_name}
            />
            <h2>{plant.common_name}</h2>
            <p> 199 kr.</p>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: plant.id,
                    name: plant.common_name,
                    image: plant.default_image?.regular_url,
                    price: 199,
                  }),
                )
              }
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
