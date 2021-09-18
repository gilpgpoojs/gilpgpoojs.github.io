import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class E1FuncionesReturn extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. Funciones con valor de regreso</h1>
   <div class="horizontal">
   <div>
    <h2>Salida</h2>
    <iframe
      src="/1_funciones/src/5_funciones_return.html"></iframe>
    <p class="noPrint">
     <a target="_blank"
       href="/1_funciones/src/5_funciones_return.html">Ábrelo en
      otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%3B%0A%20const%20x%20%3D%20fna(8%2C%205)%3B%0A%20document.write(fna(4%2C%201)%2C%20%22%3Cbr%3E%22)%3B%0A%20document.write(x%2C%20%22%3Cbr%3E%22)%3B%0A%20function%20fna(t%2C%20bc)%20%7B%0A%20%20document.%0A%20%20%20write(t%20%2B%20bc%20*%202%2C%20%22%3Cbr%3E%22)%3B%0A%20%20return%201%20%2B%20t%20*%208%3B%0A%20%7D%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;script&gt;</span></div>
   <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
   <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
      style="color: #0070c1;">x</span>&nbsp;=&nbsp;<span
      style="color: #795e26;">fna</span>(<span
      style="color: #098658;">8</span>,&nbsp;<span
      style="color: #098658;">5</span>);</div>
   <div>&nbsp;<span style="color: #001080;">document</span>.<span
      style="color: #795e26;">write</span>(<span
      style="color: #795e26;">fna</span>(<span
      style="color: #098658;">4</span>,&nbsp;<span
      style="color: #098658;">1</span>),&nbsp;<span
      style="color: #a31515;">"&lt;br&gt;"</span>);</div>
   <div>&nbsp;<span style="color: #001080;">document</span>.<span
      style="color: #795e26;">write</span>(<span
      style="color: #0070c1;">x</span>,&nbsp;<span
      style="color: #a31515;">"&lt;br&gt;"</span>);</div>
   <div>&nbsp;<span style="color: #0000ff;">function</span>&nbsp;<span
      style="color: #795e26;">fna</span>(<span
      style="color: #001080;">t</span>,&nbsp;<span
      style="color: #001080;">bc</span>)&nbsp;{</div>
   <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.</div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
      style="color: #001080;">t</span>&nbsp;+&nbsp;<span
      style="color: #001080;">bc</span>&nbsp;*&nbsp;<span
      style="color: #098658;">2</span>,&nbsp;<span
      style="color: #a31515;">"&lt;br&gt;"</span>);</div>
   <div>&nbsp;&nbsp;<span style="color: #af00db;">return</span>&nbsp;(<span
      style="color: #098658;">1</span>&nbsp;+&nbsp;<span
      style="color: #001080;">t</span>&nbsp;*&nbsp;<span
      style="color: #098658;">8</span>);</div>
   <div>&nbsp;}</div>
   <div><span style="color: #800000;">&lt;/script&gt;</span></div>
  </div>
    </muestra-codigo>
  </div>
  <div class="lectura">
   <p>
    La palabra reservada
    <code class="language-javascript">return</code>
    y el paréntesis que le sigue, <strong>siempre</strong> deben ir en el mismo renglón.
   </p>
  </div>`;
 }
}

customElements.define("e1-funciones-return", E1FuncionesReturn);