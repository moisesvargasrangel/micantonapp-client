import swal from 'sweetalert';

import { useState } from "react";

import emailjs from "emailjs-com";
// import NumberFormat from 'react-number-format';
 
// const API_URL = `${process.env.REACT_APP_SERVER_URL}`;
 
function ContactPage(props) {

  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


  function sendEmail(e){
    e.preventDefault();
    
    emailjs.send('gmail', 'template_os1ge2m',{clientName, email, phone}, 's5Ww3Z4qxpc20MHT_')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    e.target.reset()
    swal("¡Enviado con éxito!", "Recibimos tu información, en breve nos comunicaremos contigo vía email.", "success");
  }
 

  return (
    <div className="ContactPage" >

{/* HEADER */}
<div className="bg-white">
      <div className="relative  pb-40">
        <div className="absolute inset-2">
          <img
            className="h-full w-full object-cover"
            src="/images/headerVentas.png"
            alt=""
          />        
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">        
        </div>
      </div>  
    </div>


{/* FORMULARIO */}

    <div className="relative bg-white"> 
      <div className="nuevaPropiedadContainer">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-2 md:mt-0 md:col-span-3 px-10 py-10">
            <form onSubmit={sendEmail}  className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
     
            <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-black">
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
                <label className="block text-sm font-medium text-black">
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
                  Número Telefónico
                </label>
                <div className="mt-1">
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder='Número Telefónico'
                    className="block w-full shadow-sm sm:text-sm 
                            focus:ring-indigo-500 focus:border-indigo-500 
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
                  Enviar Información
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
 
export default ContactPage;