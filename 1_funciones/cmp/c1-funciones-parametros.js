import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class C1FuncionesParametros extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. Funciones con parámetros</h1>
   <div class="horizontal">
   <div>
    <h2>Salida</h2>
    <iframe src="/1_funciones/src/3_funciones_parametros.html"></iframe>
    <p class="noPrint">
     <a target="_blank"
       href="/1_funciones/src/3_funciones_parametros.html">Ábrelo en otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%3B%0A%20document.write(%22m1%3Cbr%3E%22)%3B%0A%20fn(3%2C%20-2)%3B%0A%20function%20fn(a%2C%20b)%20%7B%0A%20%20document.write(a%20%2B%20b%2C%20%22%3Cbr%3E%22)%3B%0A%20%7D%0A%20document.write(%223%3Cbr%3E%22)%3B%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"m1&lt;br&gt;"</span>);</div>
     <div>&nbsp;<span style="color: #795e26;">fn</span>(<span
        style="color: #098658;">3</span>,&nbsp;-<span
        style="color: #098658;">2</span>);</div>
     <div>&nbsp;<span style="color: #0000ff;">function</span>&nbsp;<span
        style="color: #795e26;">fn</span>(<span
        style="color: #001080;">a</span>,&nbsp;<span
        style="color: #001080;">b</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">a</span>&nbsp;+&nbsp;<span
        style="color: #001080;">b</span>,&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>);</div>
     <div>&nbsp;}</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"3&lt;br&gt;"</span>);</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
  </div>`;
 }
}

customElements.define("c1-funciones-parametros", C1FuncionesParametros);