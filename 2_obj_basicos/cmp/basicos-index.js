import { Diapositiva } from "../../lib/Diapositiva.js";
import "./basicos-contenido.js"

export class BasicosIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <basicos-contenido></basicos-contenido>
    </div>`;
 }
}

customElements.define("basicos-index", BasicosIndex);