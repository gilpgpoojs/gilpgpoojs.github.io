import { Diapositiva } from "../../lib/Diapositiva.js";
import "./excepciones-contenido.js"

export class ExcepcionesIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <excepciones-contenido></excepciones-contenido>
    </div>`;
 }
}

customElements.define("excepciones-index", ExcepcionesIndex);