import { Diapositiva } from "../../lib/Diapositiva.js";

export class ExcepcionesContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
    <li><p><a href="/7_excepciones/a_throw.html">throw</a></p></li>
    <li><p><a href="/7_excepciones/b_try-catch.html">try-catch</a></p></li>
    <li><p><a href="/7_excepciones/c_try-finally.html">try-finally</a></p></li>
    <li>
     <p>
      <a href="/7_excepciones/d_try-catch-finally.html">try-catch-finally</a>
     </p>
    </li>
    <li>
     <p><a href="/7_excepciones/e_anidado.html">Procesamiento anidado</a></p>
    </li>
    <li>
     <p>
      <a href="/7_excepciones/f_formulario.html">Formulario con validaciones</a>
     </p>
    </li>
   </ol>`;
 }
}

customElements.define("excepciones-contenido", ExcepcionesContenido);