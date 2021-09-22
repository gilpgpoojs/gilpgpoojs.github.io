import { Diapositiva } from "../../lib/Diapositiva.js";

export class PromesasContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
    <li>
     <p>
      <a href="/8_promesas/a_original.html">Promesas originales</a>
     </p>
    </li>
    <li>
     <p><a href="/8_promesas/b_async-await.html">async-await</a></p>
    </li>
    <li>
     <p><a href="/8_promesas/c_crea.html">Creando promesas</a></p>
    </li>
    <li>
     <p><a href="/8_promesas/d_all.html">Promise.all</a></p>
    </li>
   </ol>`;
 }
}

customElements.define("promesas-contenido", PromesasContenido);