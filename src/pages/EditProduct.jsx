import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const nameRef = useRef();
  const priceRef = useRef();
  const imgSrcRef = useRef();
  const categoryRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/categories")
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  // uef
  useEffect(() => {
    fetch("http://localhost:8080/products/" + id)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [id]);

  const updateProduct = () => {
    const newProduct = {
      id: id,
      name: nameRef.current.value,
      price: priceRef.current.value,
      imgSrc: imgSrcRef.current.value,
      category: {
        id: categoryRef.current.value
      },
      active: activeRef.current.checked
    }
    fetch("http://localhost:8080/products",{
      method: "PUT",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => navigate("/halda-tooteid"));
  }

  return ( 
    <div>
      <label>Toote nimi</label> <br/>
      <input defaultValue={product.name} ref={nameRef} type="text" /> <br/>
      <label>Toote hind</label> <br/>
      <input defaultValue={product.price} ref={priceRef} type="number" /> <br/>
      <label>Toote pilt</label> <br/>
      <input defaultValue={product.imgSrc} ref={imgSrcRef} type="text" /> <br/>
      <label>Toote kategooria</label> <br />
      <select defaultValue={product.category?.id} ref={categoryRef}>
        {categories.map(category => <option value={category.id}>{category.name}</option>)}
      </select> <br />
      <label>Toote aktiivsus</label> <br/>
      <input defaultChecked={product.active} ref={activeRef} type="checkbox" /> <br/>
      <button onClick={() => updateProduct()}>Muuda toode</button>
    </div> );
}

export default EditProduct;