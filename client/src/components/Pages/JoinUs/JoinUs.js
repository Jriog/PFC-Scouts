import React from 'react';
import './JoinUs.css';
import cabecera from './cabecera.jpg'
import { jsPDF } from "jspdf";
import { renderToString } from "react-dom/server";
import $ from "jquery";


function mayor(){
  console.log("Soy mayor de edad")
    var div_familia = document.getElementById("familia");

    if(div_familia.style.display === "none"){
      div_familia.style.display = "block";
    }else{
      div_familia.style.display = "none";
    }
};



function exportpdf(){
  console.log("aAAAAA");
  


  var plantilla =`<div>
        <p style= "font-size: 10pt; margin: 0pt; padding-left: 25pt;text-indent: 0pt;text-align: left;"><span><img width="683" height="108" alt="image" src={cabecera} /></span></p>
        <br></br>
        <p className="s1 s2" style= "font-size: 10pt; margin: 0pt;padding-top: 4pt;padding-left: 138pt;text-indent: 0pt; color: black; font-family: 'Times New Roman', serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13pt;">FORMULARIO DE INSCRICIÓN DE SOCIOS</p>
        <br></br>

        <table style= "font-size: 10pt; margin: 0pt;border-collapse:collapse;margin-left:26.269pt" cellspacing="0">
            <tr style= "font-size: 10pt; margin: 0pt;height:24pt">
                <td
                  style= "font-size: 10pt; margin: 0pt;width:127pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style= "font-size: 10pt; margin: 0pt;padding-left: 2pt;text-indent: 0pt;text-align: left;">nome e apelidos</p>
                </td>
                <td style= "font-size: 10pt; margin: 0pt;width:356pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                    colspan="3">
                    <p style= "font-size: 10pt; margin: 0pt;text-indent: 0pt;text-align: left;">$('#name').valueOf().value $('#surname').valueOf().value</p>
                </td>
            </tr>
            <tr style= "font-size: 10pt; margin: 0pt;height:17pt">
                <td
                  style= "font-size: 10pt; margin: 0pt;width:127pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style= "font-size: 10pt; margin: 0pt;padding-left: 2pt;text-indent: 0pt;text-align: left;">DNI:</p>
                </td>
                <td
                  style= "font-size: 10pt; margin: 0pt;width:114pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style= "font-size: 10pt; margin: 0pt;text-indent: 0pt;text-align: left;">$('#dni').valueOf().value</p>
                </td>
                <td
                  style= "font-size: 10pt; margin: 0pt;width:121pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style= "font-size: 10pt; margin: 0pt;padding-left: 3pt;text-indent: 0pt;text-align: left;">Fecha de nacimiento</p>
                </td>
                <td
                  style= "font-size: 10pt; margin: 0pt;width:121pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style= "font-size: 10pt; margin: 0pt;text-indent: 0pt;text-align: left;">$('#birthDate').valueOf().value</p>
                </td>
            </tr>
            <tr style= "font-size: 10pt; margin: 0pt;height:17pt">
                <td
                  style= "font-size: 10pt; margin: 0pt;width:127pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style= "font-size: 10pt; margin: 0pt;padding-left: 2pt;text-indent: 0pt;text-align: left;">Domicilio:</p>
                </td>
                <td style= "font-size: 10pt; margin: 0pt;width:356pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                    colspan="3">
                    <p style= "font-size: 10pt; margin: 0pt;text-indent: 0pt;text-align: left;">$('#domicile').valueOf().value</p>
                </td>
            </tr>
            <tr style= "font-size: 10pt; margin: 0pt;height:17pt">
                <td
                  style= "font-size: 10pt; margin: 0pt;width:127pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style= "font-size: 10pt; margin: 0pt;padding-left: 2pt;text-indent: 0pt;text-align: left;">C.P.</p>
                </td>
                <td
                  style= "font-size: 10pt; margin: 0pt;width:114pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style= "font-size: 10pt; margin: 0pt;text-indent: 0pt;text-align: left;">$('#cp').valueOf().value</p>
                </td>
                <td
                  style= "font-size: 10pt; margin: 0pt;width:121pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style= "font-size: 10pt; margin: 0pt;padding-left: 3pt;text-indent: 0pt;text-align: left;">Localidad:</p>
                </td>
                <td
                  style= "font-size: 10pt; margin: 0pt;width:121pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style= "font-size: 10pt; margin: 0pt;text-indent: 0pt;text-align: left;">$('#locale').valueOf().value</p>
                </td>
            </tr>
            <tr style= "font-size: 10pt; margin: 0pt;height:17pt">
                <td
                  style= "font-size: 10pt; margin: 0pt;width:127pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style= "font-size: 10pt; margin: 0pt;padding-left: 2pt;text-indent: 0pt;text-align: left;">Teléfono fijo</p>
                </td>
                <td
                  style= "font-size: 10pt; margin: 0pt;width:114pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style= "font-size: 10pt; margin: 0pt;text-indent: 0pt;text-align: left;">$('#tlf).valueOf().value</p>
                </td>
                <td
                  style= "font-size: 10pt; margin: 0pt;width:121pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style= "font-size: 10pt; margin: 0pt;padding-left: 3pt;text-indent: 0pt;text-align: left;">Teléfono mobil propio:
                    </p>
                </td>
                <td
                  style= "font-size: 10pt; margin: 0pt;width:121pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style= "font-size: 10pt; margin: 0pt;text-indent: 0pt;text-align: left;">$('#mobile).valueOf().value</p>
                </td>
            </tr>
            <tr style= "font-size: 10pt; margin: 0pt;height:17pt">
                <td
                  style= "font-size: 10pt; margin: 0pt;width:127pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style= "font-size: 10pt; margin: 0pt;padding-left: 2pt;text-indent: 0pt;text-align: left;">Correo electrónico
                        propio:
                    </p>
                </td>
                <td style= "font-size: 10pt; margin: 0pt;width:356pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                    colspan="3">
                    <p style= "font-size: 10pt; margin: 0pt;text-indent: 0pt;text-align: left;">$('#email).valueOf().value</p>
                </td>
            </tr>
        </table>
        <br></br>
        <table style= "font-size: 10pt; margin: 0pt;border-collapse:collapse;margin-left:26.269pt" cellspacing="0">
            <tr style= "font-size: 10pt; margin: 0pt;height:18pt">
                <td
                  style= "font-size: 10pt; margin: 0pt;width:126pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style= "font-size: 10pt; margin: 0pt;padding-top: 1pt;text-indent: 0pt;text-align: left;">nome e apelidos familiar 1:
                    </p>
                </td>
                <td style= "font-size: 10pt; margin: 0pt;width:356pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                    colspan="3">
                    <p style= "font-size: 10pt; margin: 0pt;text-indent: 0pt;text-align: left;">$('#name_f_1').valueOf().value $('#surname_f_2').valueOf().value</p>
                </td>
            </tr>
            <tr style= "font-size: 10pt; margin: 0pt;height:17pt">
                <td
                  style= "font-size: 10pt; margin: 0pt;width:126pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style= "font-size: 10pt; margin: 0pt;padding-left: 2pt;text-indent: 0pt;text-align: left;">DNI familiar 1:</p>
                </td>
                <td
                  style= "font-size: 10pt; margin: 0pt;width:115pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style= "font-size: 10pt; margin: 0pt;text-indent: 0pt;text-align: left;">$('#dni_f_1').valueOf().value</p>
                </td>
                <td
                  style= "font-size: 10pt; margin: 0pt;width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style= "font-size: 10pt; margin: 0pt;padding-left: 3pt;text-indent: 0pt;text-align: left;">Teléfono familiar 1;</p>
                </td>
                <td
                  style= "font-size: 10pt; margin: 0pt;width:121pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style= "font-size: 10pt; margin: 0pt;text-indent: 0pt;text-align: left;">$('#tlf_f_1').valueOf().value</p>
                </td>
            </tr>
            <tr style= "font-size: 10pt; margin: 0pt;height:17pt">
                <td
                  style= "font-size: 10pt; margin: 0pt;width:126pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style= "font-size: 10pt; margin: 0pt;padding-left: 2pt;text-indent: 0pt;text-align: left;">Correo electrónico familiar 1:
                    </p>
                </td>
                <td style= "font-size: 10pt; margin: 0pt;width:356pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                    colspan="3">
                    <br></br>
                </td>
            </tr>
            <tr style= "font-size: 10pt; margin: 0pt;height:17pt">
                <td
                  style= "font-size: 10pt; margin: 0pt;width:126pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style= "font-size: 10pt; margin: 0pt;padding-left: 2pt;text-indent: 0pt;text-align: left;">nome e apelidos familiar 2:
                    </p>
                </td>
                <td style= "font-size: 10pt; margin: 0pt;width:356pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                    colspan="3">
                    <p style= "font-size: 10pt; margin: 0pt;text-indent: 0pt;text-align: left;">$('#name_f_2').valueOf().value $('#surname_f_2').valueOf().value</p>
                </td>
            </tr>
            <tr style= "font-size: 10pt; margin: 0pt;height:17pt">
                <td
                  style= "font-size: 10pt; margin: 0pt;width:126pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style= "font-size: 10pt; margin: 0pt;padding-left: 2pt;text-indent: 0pt;text-align: left;">DNI familiar 2:</p>
                </td>
                <td
                  style= "font-size: 10pt; margin: 0pt;width:115pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style= "font-size: 10pt; margin: 0pt;text-indent: 0pt;text-align: left;">$('#tlf_f_2').valueOf().value</p>
                </td>
                <td
                  style= "font-size: 10pt; margin: 0pt;width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style= "font-size: 10pt; margin: 0pt;padding-left: 3pt;text-indent: 0pt;text-align: left;">Teléfono familiar 2:</p>
                </td>
                <td
                  style= "font-size: 10pt; margin: 0pt;width:121pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style= "font-size: 10pt; margin: 0pt;text-indent: 0pt;text-align: left;">$('#tlf_f_2').valueOf().value</p>
                </td>
            </tr>
            <tr style= "font-size: 10pt; margin: 0pt;height:18pt">
                <td
                  style= "font-size: 10pt; margin: 0pt;width:126pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style= "font-size: 10pt; margin: 0pt;padding-left: 2pt;text-indent: 0pt;text-align: left;">Correo electrónico familiar 2:
                    </p>
                </td>
                <td style= "font-size: 10pt; margin: 0pt;width:356pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                    colspan="3">
                    <br></br>
                </td>
            </tr>
        </table>

        <br></br>
        <p style= "font-size: 10pt; margin: 0pt;padding-top: 4pt;padding-left: 25pt;text-indent: 0pt;width:35%;text-align: justify;">
                GRUPO ASOCIACIÓN SCOUT SAN JORGE 33
                trata a información que lle foi proporcionada para xestionar o rexistro dos membros do grupo scout. Os
                datos subministrados conservaranse sempre que se manteña a relación asociativa ou durante os
                anos necesarios para cumprir as obrigas legais. Os datos poderán ser transferidos á Federación de Asociacións de Scouts
                de España e á Federación de exploradores de ASDE de Galicia. Vostede ten dereito a obter confirmación sobre se estamos tratando 
                os seus datos persoais polo que ten dereito a acceder aos seus datos persoais, rectificar datos inexactos ou solicitar a súa portabilidade, 
                limitación ou eliminación cando os datos deixen de ser necesarios escribindo ao correo electrónico: 
                <a href="mailto:secretaría@sanjorge33.com" className="a" target="_blank">secretaría@sanjorge33.com</a>
                Así mesmo, e especialmente se considera que non obtivo a total satisfacción no exercicio dos seus
                dereitos, pode presentar unha reclamación á autoridade nacional de control dirixíndose á Axencia Española de
                Protección de Datos, C / Jorge Juan, 6 - 28001 Madrid.</p><br/>
                <p style= "font-size: 10pt; margin: 0pt;padding-top: 7pt;padding-left: 25pt;text-indent: 0pt;text-align: justify;"><span>
  
        
        if($('#comunications').is(":checked")){
        <input type="checkbox" checked/> 
        }else{
          <input type="checkbox"/>  
        }
 
        
        </span> Autorizo a la ASOCIACIÓN GRUPO SCOUT SAN JORGE 33 al envío de comunicaciones vía WhatsApp.</p>
        <p style= "font-size: 10pt; margin: 0pt;padding-top: 7pt;padding-left: 30pt;text-indent: -5pt;text-align: justify;width:35%;">
        
        if($('#portection').is(":checked")){
        <input type="checkbox" checked/> 
        }else{
          <input type="checkbox"/>  
        }
        Autorizo a la ASOCIACIÓN GRUPO SCOUT SAN JORGE 33 a que las imágenes del socio recogidas en los diferentes  actos e eventos puedan
              ser objeto de publicación en la página web así como en redes sociales, conforme a lo establecido en el artículo 4.3 de la Ley Orgánica 1/1996 de 
              protección jurídica del menor e según lo dispuesto en el RGPD e en la LOPD-GDD.</p>
        <br/>
        <p style= "font-size: 10pt; margin: 0pt;padding-top: 8pt;padding-left: 25pt;text-indent: 0pt;line-height: 11pt;text-align: left;width: 36%;">
            Dona <input type="text" value="" style= "font-size: 10pt; margin: 0pt;border: 1px solid white;width: 230pt;text-align: center;"></input> con
            DNI <input type="text" value="" style= "font-size: 10pt; margin: 0pt;border: 1px solid white;width: 60pt;text-align: center;"></input>
            como nai/titora legal do/a rapaz/a mencionado anteriormente AUTORIZO a súa
                inscrición como socio/a na Asociación Grupo Scout San Jorge 33 e a súa participación nas
                actividades organizadas por esta.
                </p>
        <p style= "font-size: 10pt; margin: 0pt;padding-top: 8pt; padding-left: 25pt;text-indent: 0pt;text-align: left;width: 36%;">
            D <input type="text" value="" style= "font-size: 10pt; margin: 0pt;border: 1px solid white;width: 230pt;text-align: center;"></input> con
            DNI <input type="text" value="" style= "font-size: 10pt; margin: 0pt;border: 1px solid white;width: 60pt;text-align: center;"></input> como pai/titor legal do/a rapaz/a mencionado anteriormente AUTORIZO a súa inscrición como socio/a na Asociación Grupo Scout San Jorge 33 e a súa participación nas
                actividades organizadas por esta.</p>
        <br></br>

        if($('mayor_de_edad').is(":checked")){
          console.log("no deberí hacer nada")
        }else{
          <p style= "font-size: 10pt; margin: 0pt; padding-left: 25pt;text-indent: 0pt;text-align: left; width: 36%;">
            Eu <input type="text" value="" style= "font-size: 10pt; margin: 0pt;border: 1px solid white;text-align: center;"></input> con DNI <input type="text" value="" style= "font-size: 10pt; margin: 0pt;border: 1px solid white;text-align: center;"></input> como maior de idade AUTORIZO: a miña inscrición como socio/a
                na Asociación Grupo Scout San Jorge 33 e a miña participación nas actividades organizadas por
                esta.
        </p>  
        }
        <br></br>
        <p style=" font-size: 10pt; margin: 0pt;padding-left: 25pt;text-indent: 0pt;text-align: left;"> En <input type="text" value="" style= "font-size: 10pt; margin: 0pt;border: 1px solid white;"></input> a <input type="text" value="" style=" font-size: 10pt; margin: 0pt;border: 1px solid white;width: 20pt;"></input> de <input type="text" value="" style= "font-size: 10pt; margin: 0pt;border: 1px solid white;"></input> de <input type="text" value="" style= "font-size: 10pt; margin: 0pt;border: 1px solid white;"></input></p>
        <p style=" font-size: 10pt; margin: 0pt;text-indent: 0pt;text-align: left;"><br /></p>
        <p style=" font-size: 10pt; margin: 0pt;padding-left: 45pt;text-indent: 0pt;">Firma(s):</p>
        
      </div>`;

      const pdf = new jsPDF({
        orientation: "portrait",
      });

      pdf.text(plantilla);
      pdf.save("inscripcion");
      
    };

function JoinUs() {
  return (
    <div className='scrollmenu'>
      <br></br>
        <form id='' className='form'>
          <div id='' className="relative z-0 w-full mb-6 group grid grid-cols-2 gap-6">
              <div id='name_user'>
                <input id="name" type="text" name="dni" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
              </div>
              <div id='sunrame_user'>
                <input id="surname" type="text" name="birthDate" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellidos</label>
              </div>
            </div>
            <br></br>
            <div id='' className="relative z-0 w-full mb-6 group grid grid-cols-2 gap-6">
              <div>
                <input id='DNI' type="text" name="dni" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">DNI/NIE</label>
              </div>
              <div >
                <input type="Date" name="birthDate" id='birthDate' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fecha de Nacimiento</label>
              </div>
            </div>
            <br></br>
            <div id='' className="relative z-0 w-full mb-6 group grid grid-cols-4 gap-6">
              <div id='' className='col-span-2'>
                <input type="text" id='domicile' name="last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Domicilio</label>
              </div>
              <div id=''>
                <input type="text" id='cp' name="last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Código Postal</label>
              </div>
              <div id=''>
                <input type="text" id='locale' name="last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Localidad</label>
              </div>
            </div>
            <br></br>
            <div className="relative z-0 w-full mb-6 group grid grid-cols-4 gap-6">
              <div id=''>
                <input type="number" id='tlf' name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefono</label>
              </div>
              <div id=''>
                <input type="number" id='mobile' name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Telefono móvil</label>
              </div>
              <div id=''className='col-span-2'>
                <input type="email" id='email' name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo electrónico </label>
              </div>
            </div>
            <br></br>
            
            <div>
                <input type="checkbox" id="mayor_de_edad" onChange={mayor}/><label>   Mayor de edad</label>
            </div>

            <div id='familia'>
              <br></br>
              <div id='p_1'>
                <div id='' className="relative z-0 w-full mb-6 group grid grid-cols-2 gap-6">
                  <div id='name_user'>
                    <input type="text" name="" id='name_f_1' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " mayor_de_edad/>
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Nombre familiar 1</label>
                  </div>
                  <div id='sunrame_user'>
                    <input type="text" name="surnamef1" id='surname_f_1' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " mayor_de_edad/>
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Apellidos familiar 1</label>
                  </div>
                </div>
              <br></br>
                <div id='' className="relative z-0 w-full mb-6 group grid grid-cols-4 gap-6">
                  <div >
                    <input type="text" name="" id='dni_f_1' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " mayor_de_edad/>
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >DNI/NIE  familiar 1</label>
                  </div>
                  <div >
                    <input type="text" name="" id='tlf_f_1' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " mayor_de_edad/>
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Teléfono familiar 1</label>
                  </div>
                  <div className='col-span-2'>
                    <input type="email" name="floating_email" id='email_f_1' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " mayor_de_edad/>
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo electrónico familiar 1</label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div id='p_2'>
                <div id='' className="relative z-0 w-full mb-6 group grid grid-cols-2 gap-6">
                  <div id='name_user'>
                    <input type="text" name="dni" id='name_f_2' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " mayor_de_edad/>
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre  familiar 2</label>
                  </div>
                  <div id='sunrame_user'>
                    <input type="text" name="birthDate" id='name_f_2' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " mayor_de_edad/>
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellidos familiar 2</label>
                  </div>
                </div>
                <br></br>
                <div id='' className="relative z-0 w-full mb-6 group grid grid-cols-4 gap-6">
                  <div >
                    <input type="text" name="dni" id='dni_f_2' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " mayor_de_edad/>
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">DNI/NIE  familiar 2</label>
                  </div>
                  <div >
                    <input type="text" name="dni" id='tlf_f_2' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Teléfono familiar 2</label>
                  </div>
                  <div  className='col-span-2'>
                    <input type="email" name="email_f_2" id='email_f_2' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " mayor_de_edad/>
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo electrónico  familiar 2</label>
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
                <input type="checkbox" id='comunications'/><label>   Autorizo a la ASOCIACIÓN GRUPO SCOUT SAN JORGE 33 al envío de comunicaciones vía WhatsApp.</label>
              </div>
              <br></br>
              <div>
                <input type="checkbox" id='portection'/><label>   Autorizo a la ASOCIACIÓN GRUPO SCOUT SAN JORGE 33 a que las imágenes del socio recogidas en los diferentes actos y eventos puedan ser objeto de publicación en la página web así como en redes sociales, conforme a lo establecido en el artículo 4.3 de la Ley Orgánica 1/1996 de protección jurídica del menor y según lo dispuesto en el RGPD y en la LOPD-GDD.</label>
              </div>
              
            </div>
            <br></br>
            <div id="button_pdf" className='grid grid-cols-7'>
              <div></div>
              <div></div>
              <div></div>
              <button type="submit" onClick={exportpdf} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Exportar y firmar</button>
            </div>
            
            <br></br>
            <br></br>
        </form>

    </div>
  );
}



export default JoinUs;