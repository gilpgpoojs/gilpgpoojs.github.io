import { Diapositiva } from "../lib/Diapositiva.js";

export class GilPGPOOJSIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
   <h2>por Gilberto Paheco Gallegos</h2>
   <p>
    Este sitio es la continuación de
    <a href="https://gilpgijs.github.io"
     target="_blank">https://gilpgijs.github.io</a>.
   </p>
   <p>
    Los temas de HTML, CSS, bases de datos y animaciones se han movido al
    sitio
    <a href="https://gilpgiw.github.io"
     target="_blank">https://gilpgiw.github.io</a>.
   </p>
    <mi-nav open></mi-nav>
   </div>`;
 }
}

customElements.define("gilpgpoojs-index", GilPGPOOJSIndex);