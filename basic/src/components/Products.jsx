import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev)
  }


  useEffect(() => {
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
    .then((res) => res.json())
    .then((data) => {
      console.log('뜨근한 데이터를 가져옴');
      setProducts(data);
    })
    return () => {
      console.log('깨끗하게 청소')
    }
  }, [checked])

  return (
    <>
      <input type='checkbox' value={checked} onChange={handleChange} />
      <label htmlFor='checkbox'>Show Only hot!</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}

