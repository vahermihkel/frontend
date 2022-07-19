import { useEffect, useState } from 'react';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/active-products")
    .then(res => res.json())
    .then(data => setProducts(data));
    // products = data;
  }, []);

  const addToCart = (productClicked) => {
    // lisame brauseri lokaalsesse mällu (localStorage)
    // 1. võtame vana seisu localStorage
    let cart = localStorage.getItem("cartProducts");
    // 2. võtame jutumärgid maha, teeme stringist massiivi
    cart = JSON.parse(cart) || [];
    // 3. paneme vanale seisule klikitud toote juurde
    cart.push(productClicked);
    // 4. paneme jutumärgid peale, teeme massiivist stringi
    cart = JSON.stringify(cart);
    // 5. lisame localStorage-sse
    localStorage.setItem("cartProducts", cart);
  }

  return ( 
    <div>
      {products.map(product => 
        <div key={product.id}>
          <img className='product-picture' src={product.imgSrc} alt="" />
          <div>{product.name}</div>
          <button onClick={() => addToCart(product)}>Lisa ostukorvi</button>
        </div>)}
    </div>
   );
}

export default HomePage;

// ctrl + *