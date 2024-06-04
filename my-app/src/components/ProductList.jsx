import React, { useState } from "react";
import { useEffect } from "react";
import INSTANCE_AXIOS from "../api/Api";
// import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const reponse = await INSTANCE_AXIOS.get("/products");
        setProducts(reponse.data);
        console.log(reponse.data);
      } catch (error) {
        console.log("Erreur lors du chargement des données", error.message);
      }
    };

    fetchProducts();
  }, []);

  if (!products)
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-center">
          Chargement des données en cours........👹
        </h1>
      </div>
    );

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 bg-white">
      {products.map((product) => (
        <div
          key={product.id}
          className=" p-4 rounded shadow hover:shadow-lg transition-shadow group"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover mb-4 object-center group-hover:opacity-75"
          />

          <h3 className="mt-4 text-xl text-gray-700 font-semibold">
            {product.title}
          </h3>
          <p className="text-gray-700 mt-2 text-xl">Prix : ${product.price}</p>
          {/* <Link
            to={`/product/{$product.id}`}
            className="text-blue-500 hover:underline"
          >
            Voir plus
          </Link> */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
