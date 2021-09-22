import { Diapositiva } from "../../lib/Diapositiva.js";

export class PoliContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
    <li>
     <p>
      <a href="/6_polimorfismo/a_sobreescritura.html">Sobrescritura de
       métodos</a>
     </p>
    </li>
    <li>
     <p>
      <a href="/6_polimorfismo/b_interfaces.html">Interfaces</a>
     </p>
    </li>
    <li>
     <p>
      <a href="/6_polimorfismo/c_interfaces_js.html">Interfaces en
       JavaScript</a>
     </p>
    </li>
    <li>
     <p>
      <a href="/6_polimorfismo/d_abstractas.html">Clases abstractas</a>
     </p>
    </li>
   </ol>`;
 }
}

customElements.define("poli-contenido", PoliContenido);