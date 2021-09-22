import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a8-original.js";
import "./b8-async-await.js";
import "./c8-crea.js";
import "./d8-all.js";
import "./promesas-index.js";

export class PromesasPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <promesas-index></promesas-index>
    </section>
    <section>
     <a8-original></a8-original>
    </section>
    <section>
     <b8-async-await></b8-async-await>
    </section>
    <section>
     <c8-crea></c8-crea>
    </section>
    <section>
     <d8-all></d8-all>
    </section>`;
 }
}

customElements.define("promesas-print", PromesasPrint);