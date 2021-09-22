import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a6-sobreescritura.js";
import "./b6-interfaces.js";
import "./c6-interfaces-js.js";
import "./d6-abstractas.js";
import "./poli-index.js";

export class PoliPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <poli-index></poli-index>
    </section>
    <section>
     <a6-sobreescritura></a6-sobreescritura>
    </section>
    <section>
     <b6-interfaces></b6-interfaces>
    </section>
    <section>
     <c6-interfaces-js></c6-interfaces-js>
    </section>
    <section>
     <d6-abstractas></d6-abstractas>
    </section>`;
 }
}

customElements.define("poli-print", PoliPrint);