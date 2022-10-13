import swal from 'sweetalert';
import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
import emailjs from "emailjs-com";
import NumberFormat from 'react-number-format';
 
const API_URL = `${process.env.REACT_APP_SERVER_URL}`;
 
function ContactPagePropiedad(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [material, setMaterial] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  const {productId} = useParams()

  function sendEmail(e){
    e.preventDefault();
    
    emailjs.send('gmail', 'template_2amd3nn',{name, price, material, description, image, clientName, email, comments}, 's5Ww3Z4qxpc20MHT_')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    e.target.reset()
    swal("¡Enviado con éxito!", "Recibimos tu información, en breve nos comunicaremos contigo vía email.", "success");
  }
  
  useEffect(() => {
    axios.get(`${API_URL}/gallery/${productId}`)
    .then((resultado)=>{
      const {name, price, material, description, image} = resultado.data;
      setName(name);
      setPrice(price);
      setMaterial(material);
      setDescription(description);
      setImage(image);      
    })
    .catch(console.log)
  }, [])

  return (
    <div className="ContactPage" >
    <div className="relative bg-white">

      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src={image}
            alt=""
          />
        </div>
      </div>
      
      <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-16 lg:grid lg:grid-cols-2">
        <div className="lg:pr-8">
          <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Recibir Información</h2>
            <br></br>
            <p className="mt-4 text-small text-gray-500 sm:mt-3">
            ¡Estás a un solo paso de obtener información de tu propiedad preferida!.
            </p>
            <p className="mt-4 text-small text-gray-500 sm:mt-3">
            En breve, nos comunicaremos contigo vía email para brindarte una atención personalizada. 
            Gracias por tu preferencia. 
            </p>

            <form onSubmit={sendEmail}  className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              
            <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <div className="mt-1">
                  <input
                    id="clientName"
                    name="clientName"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}                   
                    type="text"                  
                    placeholder='Nombre'                 
                    className="block w-full shadow-sm sm:text-sm 
                              focus:ring-indigo-500 focus:border-indigo-500
                              border-gray-300 rounded-md"
                  />
                </div>
              </div>

            <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Correo Electrónico
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Correo Electrónico'
                    className="block w-full shadow-sm sm:text-sm 
                              focus:ring-indigo-500 focus:border-indigo-500 
                              border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Comentarios Adicionales
                </label>
                <div className="mt-1">
                  <input
                    id="comments"
                    name="comments"
                    type="text"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    placeholder='Comentarios'
                    className="block w-full shadow-sm sm:text-sm 
                            focus:ring-indigo-500 focus:border-indigo-500 
                            border-gray-300 rounded-md"
                  />
                </div>
              </div>
              
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Nombre de la Propiedad
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    rows={3}
                    value={name}
                    disabled
                    className="block w-full shadow-sm sm:text-sm 
                            focus:ring-indigo-500 focus:border-indigo-500
                            border-gray-300 rounded-md"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  Material
                </label>
                <div className="mt-1">
                  <input
                    type= "text"
                    name="material"
                    value={material}
                    rows={3}
                    disabled
                    className="block w-full shadow-sm sm:text-sm 
                            focus:ring-indigo-500 
                            focus:border-indigo-500 
                            border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Precio
                </label>
                <div className="mt-1">
                  <NumberFormat
                    displayType={'number'}
                    name="price"
                    value={price}
                    rows={3}
                    disabled
                    className="block w-full shadow-sm 
                              sm:text-sm focus:ring-indigo-500 
                              focus:border-indigo-500 
                              border-gray-300 rounded-md"
                    thousandSeparator={true}
                    prefix={'$'}
                    suffix={"MXN"}
                    renderText={(value, props) => <div {...props}>{value}</div>}
                              
                  />
                </div>               
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Descripción del producto
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="description"
                    rows={3}
                    value={description}
                    disabled
                    className="block w-full shadow-sm 
                              sm:text-sm focus:ring-indigo-500 
                              focus:border-indigo-500
                              border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="text-right sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex justify-center 
                            py-2 px-4 border border-transparent 
                            shadow-sm text-sm font-medium rounded-md 
                            text-white bg-cyan-600
                            hover:bg-cyan-700 focus:outline-none 
                            focus:ring-2 focus:ring-offset-2 
                            focus:ring-indigo-500"
                  value="Send Message"
                  onSubmit={() => alert("¡Enviado con éxito! Recibimos tu información, en breve nos comunicaremos contigo vía email.")}
               >
                  Obtener Información
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
 
export default ContactPagePropiedad;