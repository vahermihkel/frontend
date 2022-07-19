import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function MaintainProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products")
    .then(res => res.json())
    .then(data => setProducts(data));
    // products = data;
  }, []);

  const deleteProduct = (productId) => {
    fetch("http://localhost:8080/products/" + productId,{
      method: 'DELETE'
    }).then(res => res.json())
    .then(data => setProducts(data));
  }

  const decreaseStock = (product) => {
    fetch("http://localhost:8080/decrease-stock", {
      method: 'PATCH',
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
    .then(data => setProducts(data));
  }

  const increaseStock = (product) => {
    fetch("http://localhost:8080/increase-stock", {
      method: 'PATCH',
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
    .then(data => setProducts(data));
  }

  return ( 
    <div>
      {products.map(product => 
        <div key={product.id}>
          <div>ID: {product.id}</div>
          <div>{product.name}</div>
          <div>K: {product.category?.name}</div>
          <div>{product.price} €</div>
          <div>{product.imgSrc}</div>
          <div>Aktiivne: {product.active + 0}</div>
          <button onClick={() => decreaseStock(product)}>-</button>
          <div>Kogus {product.stock} tk</div>
          <button onClick={() => increaseStock(product)}>+</button>
          <button onClick={() => deleteProduct(product.id)}>Kustuta</button>
          <Link to={"/muuda-toode/" + product.id}>
            <button>Muuda</button>
          </Link>
        </div>)}
    </div>
   );
}

export default MaintainProducts;