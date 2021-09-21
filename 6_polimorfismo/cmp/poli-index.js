import { Diapositiva } from "../../lib/Diapositiva.js";
import "./poli-contenido.js"

export class PoliIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <poli-contenido></poli-contenido>
    </div>`;
 }
}

customElements.define("poli-index", PoliIndex);