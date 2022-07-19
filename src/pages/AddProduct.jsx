import { useEffect, useRef, useState } from 'react';

function AddProduct() {
  const nameRef = useRef();
  const priceRef = useRef();
  const imgSrcRef = useRef();
  const categoryRef = useRef();
  const activeRef = useRef();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/categories")
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  const addNewProduct = () => {
    const newProduct = {
      name: nameRef.current.value,
      price: priceRef.current.value,
      imgSrc: imgSrcRef.current.value,
      category: {
        id: categoryRef.current.value
      },
      active: activeRef.current.checked
    }
    fetch("http://localhost:8080/products",{
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }


  return ( 
    <div>
      <label>Toote nimi</label> <br/>
      <input ref={nameRef} type="text" /> <br/>
      <label>Toote hind</label> <br/>
      <input ref={priceRef} type="number" /> <br/>
      <label>Toote pilt</label> <br/>
      <input ref={imgSrcRef} type="text" /> <br/>
      <label>Toote kategooria</label> <br />
      <select ref={categoryRef}>
        {categories.map(category => <option value={category.id}>{category.name}</option>)}
      </select> <br />
      <label>Toote aktiivsus</label> <br/>
      <input ref={activeRef} type="checkbox" /> <br/>
      <button onClick={() => addNewProduct()}>Lisa uus toode</button>
    </div>
   );
}

export default AddProduct;