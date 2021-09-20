import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a4-constructores.js";
import "./b4-sobreescritura.js";
import "./herencia-index.js";

export class HerenciaPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <herencia-index></herencia-index>
    </section>
    <section>
     <a4-constructores></a4-constructores>
    </section>
    <section>
     <b4-sobreescritura></b4-sobreescritura>
    </section>`;
 }
}

customElements.define("herencia-print", HerenciaPrint);