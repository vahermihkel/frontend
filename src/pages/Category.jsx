import { useEffect, useRef, useState } from "react";

function Category() {
  const nameRef = useRef();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://mihkel-java.herokuapp.com/categories")
    .then(res => res.json())
    .then(data => setCategories(data));
  }, []);

  const addCategory = () => {
    fetch("https://mihkel-java.herokuapp.com/categories",{
      method: "POST",
      body: JSON.stringify({name: nameRef.current.value}),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  return ( <div>
    <label>Kategooria nimi</label>
    <input ref={nameRef} type="text" />
    <button onClick={addCategory}>Lisa uus kategooria</button>
    { categories.map(element => 
      <div>
          {element.name} 
      </div>) }
  </div> );
}

export default Category;