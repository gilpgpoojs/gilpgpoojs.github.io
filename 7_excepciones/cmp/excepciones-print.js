import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a7-throw.js";
import "./b7-try-catch.js";
import "./c7-try-finally.js";
import "./d7-try-catch-finally.js";
import "./e7-anidado.js";
import "./excepciones-index.js";
import "./f7-formulario.js";

export class ExcepcionesPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <poli-index></poli-index>
    </section>
    <section>
     <a7-throw></a7-throw>
    </section>
    <section>
     <b7-try-catch></b7-try-catch>
    </section>
    <section>
     <c7-try-finally></c7-try-finally>
    </section>
    <section>
     <d7-try-catch-finally></d7-try-catch-finally>
    </section>
    <section>
     <e7-anidado></e7-anidado>
    </section>
    <section>
     <f7-formulario></f7-formulario>
    </section>`;
 }
}

customElements.define("excepciones-print", ExcepcionesPrint);