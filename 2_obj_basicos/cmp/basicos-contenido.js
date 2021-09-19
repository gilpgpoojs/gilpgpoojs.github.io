import { Diapositiva } from "../../lib/Diapositiva.js";

export class BasicosContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
    <li>
     <p><a href="/2_obj_basicos/a_paso.html">Objetos paso a paso</a></p>
    </li>
    <li>
     <p><a href="/2_obj_basicos/b_literales.html">Literales de objeto</a></p>
    </li>
    <li>
     <p>
      <a href="/2_obj_basicos/c_string.html">Propiedades y métodos de string</a>
     </p>
    </li>
    <li>
     <p>
      <a href="/2_obj_basicos/d_string_conversion.html">Conversión a string</a>
     </p>
    </li>
    <li>
     <p>
      <a href="/2_obj_basicos/e_string_number.html">Conversión de string a
       number</a>
     </p>
    </li>
   </ol>`;
 }
}

customElements.define("basicos-contenido", BasicosContenido);