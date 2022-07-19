import { useEffect, useState } from "react";

function Cart() {
  const [parcelMachines, setParcelMachines] = useState([])
  const [country, setCountry] = useState("ee");
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cartProducts")) || [])
  
  useEffect(() => {
    fetch("http://localhost:8080/parcel-machines/" + country)
      .then(res => res.json())
      .then(data => setParcelMachines(data.omnivaParcelMachines));
  }, [country]);

  const deleteFromCart = (index) => {
    if (index >= 0) {
      cart.splice(index, 1);
      setCart(cart.slice());
      localStorage.setItem("cartProducts", JSON.stringify(cart));
    }
  }

  const emptyCart = () => {
    setCart([]); // uuenda HTMLi
    localStorage.setItem("cartProducts", JSON.stringify([])); // salvesta lokaalmällu brauseris
  }

  const pay = () => {
    fetch("http://localhost:8080/payment/3131231",{
      method: "POST",
      body: JSON.stringify(cart),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
    .then(data => window.location.href = data.link)
  }

  return ( <div>
    {cart.length > 0 && <button onClick={() => emptyCart()}>Tühjenda</button>}
    {cart.map((product, index) => 
      <div>
        {product.name} - {product.price} €
        <button onClick={() => deleteFromCart(index)}>X</button> 
      </div>)}
    <button onClick={() => setCountry("ee")}>Eesti pakiautomaadid</button>
    <button onClick={() => setCountry("lv")}>Läti pakiautomaadid</button>
    <button onClick={() => setCountry("lt")}>Leedu pakiautomaadid</button>
    <br />
    <select>
      {parcelMachines.map(pm => <option>{pm.NAME}</option>)}
    </select>
    <button onClick={() => pay()}>MAKSMA</button>
  </div> );
}

export default Cart;