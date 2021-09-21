import { Diapositiva } from "../../lib/Diapositiva.js";
import "./arreglos-contenido.js"

export class ArreglosIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <arreglos-contenido></arreglos-contenido>
    </div>`;
 }
}

customElements.define("arreglos-index", ArreglosIndex);