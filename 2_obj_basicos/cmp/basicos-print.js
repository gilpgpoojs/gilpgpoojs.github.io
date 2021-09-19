import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a2-paso.js";
import "./b2-literales.js";
import "./c2-string.js";
import "./d2-string-conversion.js";
import "./e2-string-number.js";
import "./basicos-index.js";

export class BasicosPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <basicos-index></basicos-index>
    </section>
    <section>
     <a2-paso></a2-paso>
    </section>
    <section>
     <b2-literales></b2-literales>
    </section>
    <section>
     <c2-string></c2-string>
    </section>
    <section>
     <d2-string-conversion></d2-string-conversion>
    </section>
    <section>
     <e2-string-number></e2-string-number>
    </section>`;
 }
}

customElements.define("basicos-print", BasicosPrint);