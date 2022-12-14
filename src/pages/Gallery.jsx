import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from "axios";
import NumberFormat from 'react-number-format';
 
const API_URL = `${process.env.REACT_APP_SERVER_URL}`; 
 
function Gallery() {
  const [products, setproducts] = useState([]);
 
  const getAllproducts = () => {
    axios
      .get(`${API_URL}/gallery`)
      .then((response) => setproducts(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllproducts();
  }, [] );
 
  return (
    <div className="Gallery">

      {/* HEADER */}
<div className="bg-white">
<div className="relative  pb-40">
        <div className="absolute inset-2">
          <img
            className="h-full w-full object-cover"
            src="/images/headerCompras.png"
            alt=""
          />        
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">        
        </div>
      </div>  
    </div>

<div className="bg-white">
       <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
         <h2 className="text-xl font-bold text-gray-900">Propiedades</h2>

         <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
           {products.map((product) => (
            <div key={product._id}>
              <div className="relative">
                <div className="relative w-full h-72 rounded-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt="Product Image"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{product.material}</p>
                  <p className="mt-1 text-sm text-gray-400">{product.description}</p>               
             
                </div>
                <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  
                  <NumberFormat
                        value={product.price}
                        className="relative text-lg font-semibold text-white"
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        suffix={"MXN"}
                        renderText={(value, props) => <div {...props}>{value}</div>}
                      />
                </div>
              </div>

               <div className="mt-2"> 
                <Link
                  to={`/gallery/${product._id}`}
                  className="relative flex bg-cyan-600 
                            border border-transparent 
                            rounded-md py-2 px-8 
                            items-center justify-center 
                            text-sm font-small text-white
                            hover:bg-cyan-700"
                >
                  DETALLES DE LA PROPIEDAD <span className="sr-only">, {product.name}</span>
                </Link>
                </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>          
  </div>
  );
}
 
export default Gallery;
