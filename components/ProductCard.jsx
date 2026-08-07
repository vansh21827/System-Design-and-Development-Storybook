import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Badge from "./Badge";
import "../styles/productCard.css";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div className="product-card">
      {product.discountPercentage > 0 && (
        <div className="discount-badge">
          <Badge variant="danger">
            {Math.round(product.discountPercentage)}% OFF
          </Badge>
        </div>
      )}

      <div className="product-image">
        <img
          src={product.thumbnail}
          alt={product.title}
        />
      </div>

      <div className="product-info">
        <p className="product-brand">
          {product.brand || product.category}
        </p>

        <h3>{product.title}</h3>

        <div className="rating">
          ⭐ {product.rating}
        </div>

        <div className="price-section">
          <span className="price">${product.price}</span>
        </div>

        <Button
  variant={product.stock === 0 ? "secondary" : "primary"}
  disabled={product.stock === 0}
  fullWidth
  onClick={() => navigate(`/product/${product.id}`)}
>
  {product.stock === 0 ? "Out of Stock" : "View Details"}
</Button>
      </div>
    </div>
  );
}

export default ProductCard;