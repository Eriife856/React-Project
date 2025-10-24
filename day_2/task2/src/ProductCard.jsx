

function ProductCard({ name, price, image, inStock }) {
  return (
    <div className={`productCard ${inStock ? 'inStock' : 'outOfStock'}`}>
      <img src={image} alt={name} className="productImage" />
      <h2>{name}</h2>
      <p className="price">₦{price.toLocaleString()}</p>
      <p className={`stockStatus ${inStock ? 'green' : 'red'}`}>
        {inStock ? 'In Stock ✓' : 'Out of Stock ✗'}
      </p>
      <div>
        {inStock ? (
          <button className="addButton">In stock</button>
        ) : (
          <button className="disabledButton" disabled>Out of Stock</button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
