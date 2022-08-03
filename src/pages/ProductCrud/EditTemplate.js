// // src/pages/EditProductPage.js
 
// import { useState, useEffect } from "react";
// import { useParams, useNavigate} from "react-router-dom";
// import axios from "axios";
 
// const API_URL = "http://localhost:5005";
 
// function EditProductPage(props) {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [material, setMaterial] = useState("");
//   const [description, setDescription] = useState("");

//   const {productId} = useParams()

//   const navigate = useNavigate()

  
//   useEffect(() => {
//     axios.get(`${API_URL}/api/gallery/${productId}`)
//     .then((resultado)=>{
//       // console.log(resultado.data);
//       const {name, price, material, description} = resultado.data;

//       setName(name);
//       setPrice(price);
//       setMaterial(material);
//       setDescription(description);
      
//     })
//     .catch(console.log)
//   }, [])

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // console.log(name, price, material, description);
//     axios.put(`${API_URL}/api/gallery/${[productId]}`, {name, price, material, description})
//     .then(resultado => {
//       // console.log(resultado)
//       navigate("/gallery")
//     })
//     .catch(console.log)
//   }

//   return (
//     <div classname="EditProductPage">
//       <h3>Edit the Prodect</h3>
 
//       <form onSubmit={handleSubmit}>
//         <label>name:</label>
//         <input
//           type="text"
//           name="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
        
//         <label>Price:</label>
//         <input
//           type="number"
//           name="price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//         />

//         <label>Material</label>
//         <textarea
//           name="material"
//           value={material}
//           onChange={(e) => setMaterial(e.target.value)}
//         />

//         <label>Description:</label>
//         <textarea
//           name="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
 
//         <input type="submit" value="Submit" />
//       </form>














//       <div>
//     <>
//       <div className="newProductContainer">
//         <div className="md:grid md:grid-cols-3 md:gap-6">

//           <div className="mt-2 md:mt-10 md:col-span-3 px-10 py-10">
//             <form onSubmit={handleSubmit}>
//               <div className="shadow sm:rounded-md sm:overflow-hidden">
//                 <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Nombre del Producto
//                     </label>

//                       <div className="mt-1">
//                         <input
//                           type="text"
//                           name="name"
//                           rows={3}
//                           value={name}
//                           onChange={(e) => setName(e.target.value)}
//                           className="shadow-sm focus:ring-indigo-500
//                                      focus:border-indigo-500 mt-1 block w-full 
//                                      sm:text-sm border border-gray-300 rounded-md"
//                           placeholder="Nombre del Producto"
                         
//                         />
//                       </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                         Precio
//                     </label>

//                       <div className="mt-1">
//                         <input
//                           type="number"
//                           name="price"
//                           value={price}
//                           rows={3}
//                           onChange={(e) => setPrice(e.target.value)}
//                           className="shadow-sm focus:ring-indigo-500
//                                      focus:border-indigo-500 mt-1 block w-full 
//                                      sm:text-sm border border-gray-300 rounded-md"
//                           placeholder="Precio"
                          
//                         />
//                       </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Material
//                     </label>

//                       <div className="mt-1">
//                         <input
//                           type= "text"
//                           name="material"
//                           value={material}
//                           rows={3}
//                           className="shadow-sm focus:ring-indigo-500
//                                      focus:border-indigo-500 mt-1 block w-full 
//                                      sm:text-sm border border-gray-300 rounded-md"
//                           placeholder="Material"
//                           onChange={(e) => setMaterial(e.target.value)}
//                         />
//                       </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Descripción
//                     </label>

//                       <div className="mt-1">
//                         <textarea
//                           type="text"
//                           name="Description"
//                           rows={3}
//                           value={description}
//                           className="shadow-sm focus:ring-indigo-500
//                                      focus:border-indigo-500 mt-1 block w-full 
//                                      sm:text-sm border border-gray-300 rounded-md"
//                           placeholder="Descripción"
//                           onChange={(e) => setDescription(e.target.value)}
//                         />
//                       </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Cover photo</label>
//                     <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
//                       <div className="space-y-1 text-center">
//                         <svg
//                           className="mx-auto h-12 w-12 text-gray-400"
//                           stroke="currentColor"
//                           fill="none"
//                           viewBox="0 0 48 48"
//                           aria-hidden="true"
//                         >
//                           <path
//                             d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
//                             strokeWidth={2}
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                         </svg>
//                         <div className="flex text-sm text-gray-600">
//                           <label
//                             htmlFor="file-upload"
//                             className="relative cursor-pointer bg-white rounded-md font-medium text-red-700 hover:text-gray-900 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
//                           >
//                             <span>Upload a file</span>
//                             <input id="file-upload" name="file-upload" type="file" className="sr-only" />
//                           </label>
//                           <p className="pl-1">or drag and drop</p>
//                         </div>
//                         <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
//                   <button
//                     type="submit"
//                     className="inline-flex 
//                     justify-center py-2 px-4 
//                     border border-transparent 
//                     shadow-sm text-sm font-medium 
//                     rounded-md text-white 
//                     bg-gray-700 
//                     hover:bg-gray-600  
//                     focus:outline-none 
//                     focus:ring-2 
//                     focus:ring-offset-2 
//                     focus:ring-indigo-500"
//                   >
//                     Agregar Producto
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   </div>







//     </div>







//   );
// }
 
// export default EditProductPage;