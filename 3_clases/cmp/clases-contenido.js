import { Diapositiva } from "../../lib/Diapositiva.js";

export class ClasesContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
    <li><p><a href="/3_clases/a_clases.html">Clases</a></p></li>
    <li><p><a href="/3_clases/b_objeto.html">Objetos</a></p></li>
    <li><p><a href="/3_clases/c_inst_obj.html">Instancias y Clases</a></p></li>
    <li><p><a href="/3_clases/d_setters.html">Setters y Getters</a></p></li>
   </ol>`;
 }
}

customElements.define("clases-contenido", ClasesContenido);