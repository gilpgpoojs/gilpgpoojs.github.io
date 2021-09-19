import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a3-clases.js";
import "./b3-objeto.js";
import "./c3-inst-obj.js";
import "./d3-setters.js";
import "./clases-index.js";

export class ClasesPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <clases-index></clases-index>
    </section>
    <section>
     <a3-clases></a3-clases>
    </section>
    <section>
     <b3-objeto></b3-objeto>
    </section>
    <section>
     <c3-inst-obj></c3-inst-obj>
    </section>
    <section>
     <d3-setters></d3-setters>
    </section>`;
 }
}

customElements.define("clases-print", ClasesPrint);