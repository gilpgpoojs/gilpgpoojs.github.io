import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a5-arr-basico.js";
import "./arreglos-index.js";
import "./b5-arr-cont.js";
import "./c5-for-of.js";
import "./d5-for-each.js";
import "./e5-arr-inst.js";
import "./f5-arr-lit.js";
import "./g5-for-each-obj.js";

export class ArreglosPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <arreglos-index></arreglos-index>
    </section>
    <section>
     <a5-arr-basico></a5-arr-basico>
    </section>
    <section>
     <b5-arr-cont></b5-arr-cont>
    </section>
    <section>
     <c5-for-of></c5-for-of>
    </section>
    <section>
     <d5-for-each></d5-for-each>
    </section>
    <section>
     <e5-arr-inst></e5-arr-inst>
    </section>
    <section>
     <f5-arr-lit></f5-arr-lit>
    </section>
    <section>
     <g5-for-each-obj></g5-for-each-obj>
    </section>`;
 }
}

customElements.define("arreglos-print", ArreglosPrint);