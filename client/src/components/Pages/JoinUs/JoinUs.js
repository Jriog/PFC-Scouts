import React from 'react';
import './JoinUs.css';
import { jsPDF } from "jspdf";

function mayor(){
    var div_familia = document.getElementById("familia");

    if(div_familia.style.display === "none"){
      div_familia.style.display = "block";
    }else{
      div_familia.style.display = "none";
    }
};

function exportpdf(){


  
};

function JoinUs() {
  return (
    <div className='scrollmenu'>
      <br></br>
        <form id='' className='form'>
          <div id='' class="relative z-0 w-full mb-6 group grid grid-cols-2 gap-6">
              <div id='name_user'>
                <input id="name" type="text" name="dni" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
                <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
              </div>
              <div id='sunrame_user'>
                <input id="surname" type="text" name="birthDate" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="yes"/>
                <label for="surnmae" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellidos</label>
              </div>
            </div>
            <br></br>
            <div id='' class="relative z-0 w-full mb-6 group grid grid-cols-2 gap-6">
              <div>
                <input id='DNI' type="text" name="dni" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
                <label for="dni" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">DNI/NIE</label>
              </div>
              <div >
                <input type="Date" name="birthDate" id='birthDate' class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="yes"/>
                <label for="birthDate" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fecha de Nacimiento</label>
              </div>
            </div>
            <br></br>
            <div id='' class="relative z-0 w-full mb-6 group grid grid-cols-2 gap-6">
              <div id='home'>
                <input type="text" id='home' name="home" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="yes"/>
                <label for="home" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Domiciio</label>
              </div>
              <div id=''>
                <input type="text" id='locale' name="last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="yes"/>
                <label for="last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Localidad</label>
              </div>
            </div>
            <br></br>
            <div class="relative z-0 w-full mb-6 group grid grid-cols-2 gap-6">
              <div id=''>
                <input type="number" id='tlf' name="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
                <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefono</label>
              </div>
              <div id=''>
                <input type="email" id='email' name="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="yes"/>
                <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo electrónico </label>
              </div>
            </div>
            <br></br>
            
            <div>
                <input type="checkbox" id="mayor de edad" onChange={mayor}/><label>   Mayor de edad</label>
            </div>

            <div id='familia'>
              <br></br>
              <div id='p_1'>
                <div id='' class="relative z-0 w-full mb-6 group grid grid-cols-2 gap-6">
                  <div id='name_user'>
                    <input type="text" name="" id='name_f_1' class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
                    <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre familiar 1</label>
                  </div>
                  <div id='sunrame_user'>
                    <input type="text" name="surnamef1" id='surname_f_1' class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="yes"/>
                    <label for="surnmae" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellidos familiar 1</label>
                  </div>
                </div>
              <br></br>
                <div id='' class="relative z-0 w-full mb-6 group grid grid-cols-2 gap-6">
                  <div >
                    <input type="text" name="" id='dni_f_1' class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
                    <label for="dni" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">DNI/NIE  familiar 1</label>
                  </div>
                  <div>
                    <input type="email" name="floating_email" id='email_f_1' class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="yes"/>
                    <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo electrónico familiar 1</label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div id='p_2'>
                <div id='' class="relative z-0 w-full mb-6 group grid grid-cols-2 gap-6">
                  <div id='name_user'>
                    <input type="text" name="dni" id='name_f_2' class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
                    <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre  familiar 2</label>
                  </div>
                  <div id='sunrame_user'>
                    <input type="text" name="birthDate" id='name_f_2' class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="yes"/>
                    <label for="surnmae" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellidos familiar 2</label>
                  </div>
                </div>
                <br></br>
                <div id='' class="relative z-0 w-full mb-6 group grid grid-cols-2 gap-6">
                  <div id='DNI'>
                    <input type="text" name="dni" id='dni_f_2' class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
                    <label for="dni" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">DNI/NIE  familiar 2</label>
                  </div>
                  <div id='last_name'>
                    <input type="email" name="floating_email" id='email_f_2' class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="yes"/>
                    <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo electrónico  familiar 2</label>
                  </div>
                </div>
              </div>
            </div>
            
            <br></br>

            <div className=''>
              <div>
                GRUPO ASOCIACIÓN SCOUT SAN JORGE 33 trata a información que lle foi proporcionada para xestionar o rexistro dos membros do grupo scout. 
                Os datos subministrados conservaranse sempre que se manteña a relación asociativa ou durante os anos necesarios para cumprir as obrigas legais.
                 Os datos poderán ser transferidos á Federación de Asociacións de Scouts de España e á Federación de exploradores de ASDE de Galicia. 
                 Vostede ten dereito a obter confirmación sobre se estamos tratando os seus datos persoais polo que ten dereito a acceder aos seus datos 
                 persoais, rectificar datos inexactos ou solicitar a súa portabilidade, limitación ou eliminación cando os datos deixen de ser necesarios 
                 escribindo ao correo electrónico: secretaría@sanjorge33.com Así mesmo, e especialmente se considera que non obtivo a total satisfacción 
                 no exercicio dos seus dereitos, pode presentar unha reclamación á autoridade nacional de control dirixíndose á Axencia Española de Protección 
                 de Datos, C / Jorge Juan, 6 - 28001 Madrid.
              </div>
              <br></br>
              <div>
                <input type="checkbox"/><label>   Autorizo a la ASOCIACIÓN GRUPO SCOUT SAN JORGE 33 al envío de comunicaciones vía WhatsApp.</label>
              </div>
              <br></br>
              <div>
                <input type="checkbox"/><label>   Autorizo a la ASOCIACIÓN GRUPO SCOUT SAN JORGE 33 a que las imágenes del socio recogidas en los diferentes actos y eventos puedan ser objeto de publicación en la página web así como en redes sociales, conforme a lo establecido en el artículo 4.3 de la Ley Orgánica 1/1996 de protección jurídica del menor y según lo dispuesto en el RGPD y en la LOPD-GDD.</label>
              </div>
              
            </div>
            <br></br>
            <div id="button_pdf" className='grid grid-cols-7'>
              <div></div>
              <div></div>
              <div></div>
              <button type="submit" onclick="exportpdf" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Exportar y firmar</button>
            </div>
            
            <br></br>
            <br></br>
        </form>

    </div>
  );
}



export default JoinUs;