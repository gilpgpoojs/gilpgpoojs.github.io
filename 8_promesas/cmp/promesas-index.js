import { Diapositiva } from "../../lib/Diapositiva.js";
import "./promesas-contenido.js"

export class PromesasIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <promesas-contenido></promesas-contenido>
    </div>`;
 }
}

customElements.define("promesas-index", PromesasIndex);