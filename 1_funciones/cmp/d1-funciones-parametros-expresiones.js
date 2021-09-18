import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class D1FuncionesParametrosExpresiones extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. Funciones con expresiones en los parámetros</h1>
   <div class="horizontal">
   <div>
    <h2>Salida</h2>
    <iframe
      src="/1_funciones/src/4_funciones_parametros_expresiones.html"></iframe>
    <p class="noPrint">
     <a target="_blank"
       href="/1_funciones/src/4_funciones_parametros_expresiones.html">Ábrelo en
      otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%3B%0A%20function%20fn(a%2C%20b%2C%20c)%20%7B%0A%20%20document.write(a%20%2B%20b%20*%20c%2C%20%22%3Cbr%3E%22)%3B%0A%20%7D%0A%20const%20a%20%3D%203%3B%0A%20fn(3%20-%208%2C%20a%2C%20a%20*%202)%3B%0A%20document.write(%22ggg%3Cbr%3E%22)%3B%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
     <div>&nbsp;<span style="color: #0000ff;">function</span>&nbsp;<span
        style="color: #795e26;">fn</span>(<span
        style="color: #001080;">a</span>,&nbsp;<span
        style="color: #001080;">b</span>,&nbsp;<span
        style="color: #001080;">c</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">a</span>&nbsp;+&nbsp;<span
        style="color: #001080;">b</span>&nbsp;*&nbsp;<span
        style="color: #001080;">c</span>,&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>);</div>
     <div>&nbsp;}</div>
     <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">a</span>&nbsp;=&nbsp;<span
        style="color: #098658;">3</span>;</div>
     <div>&nbsp;<span style="color: #795e26;">fn</span>(<span
        style="color: #098658;">3</span>&nbsp;-&nbsp;<span
        style="color: #098658;">8</span>,&nbsp;<span
        style="color: #0070c1;">a</span>,&nbsp;<span
        style="color: #0070c1;">a</span>&nbsp;*&nbsp;<span
        style="color: #098658;">2</span>);</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"ggg&lt;br&gt;"</span>);</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
  </div>`;
 }
}

customElements.define("d1-funciones-parametros-expresiones",
 D1FuncionesParametrosExpresiones);