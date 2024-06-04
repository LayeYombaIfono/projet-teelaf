import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import INSTANCE_AXIOS from "../api/Api";
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await INSTANCE_AXIOS.get(`/products/${id}`);
        setProduct(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Erreur lors du chargement des données", error.message);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product)
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-center">
          Chargement des données en cours........👹
        </h1>
      </div>
    );

  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row">
          <img
            src={product.image}
            alt={product.title}
            className="w-full md:w-1/2 object-cover"
          />
          <div className="md:ml-4">
            <h3 className="text-2xl font-semibold">{product.title}</h3>
            <p className="text-gray-700 mb-2">Prix : ${product.price}</p>
            <p className="text-gray-600 mb-2">
              Description {product.description}
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Ajouter au pannier
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
