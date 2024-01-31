import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function SectionCatalog() {
  const [dataProducts, setDataProducts] = useState(null);


  async function getProducts() {
    try {
      const data = await fetch("https://dummyjson.com/products");
      const res = await data.json();
      const data_product = res.products
      setDataProducts(data_product);
    } catch (e) {
      alert("gagal mendapatkan product, jika kamu developer lihat console.log");
      console.log(e);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);



  return (
    <section className="container">
      <h3 className="mb-3 text-2xl font-bold">Products</h3>

      <div className="grid grid-cols-4 gap-5">
        {dataProducts !== null ?
          dataProducts.map((item) => (
            <Card
              title={item.title}
              desc={item.description}
              price={item.price}
              key={item.id}
            />
          )) : "loading"
        }
      </div>
    </section>
  );
}
