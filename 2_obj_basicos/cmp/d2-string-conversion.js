import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class D2StringConversion extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. Conversión a string</h1>
   <div class="horizontal">
   <div>
    <h2>Salida</h2>
    <iframe
      src="/2_obj_basicos/src/4_string_conversion.html"></iframe>
    <p class="noPrint">
     <a target="_blank"
       href="/2_obj_basicos/src/4_string_conversion.html">Ábrelo en
      otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%3B%0A%20const%20A%20%3D%20true%3B%0A%20const%20B%20%3D%208%3B%0A%20document.%0A%20%20write(A.toString()%2C%20%22%3Cbr%3E%22)%0A%20document.%0A%20%20write(B.toString()%2C%20%22%3Cbr%3E%22)%0A%20document.%0A%20%20write(B.toString(2)%2C%20%22%3Cbr%3E%22)%0A%20document.%0A%20%20write(B.toFixed(2)%2C%20%22%3Cbr%3E%22)%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;script&gt;</span></div>
   <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
   <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
      style="color: #0070c1;">A</span>&nbsp;=&nbsp;<span
      style="color: #0000ff;">true</span>;</div>
   <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
      style="color: #0070c1;">B</span>&nbsp;=&nbsp;<span
      style="color: #098658;">8</span>;</div>
   <div>&nbsp;<span style="color: #001080;">document</span>.</div>
   <div>&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
      style="color: #0070c1;">A</span>.<span
      style="color: #795e26;">toString</span>(),&nbsp;<span
      style="color: #a31515;">"&lt;br&gt;"</span>)</div>
   <div>&nbsp;<span style="color: #001080;">document</span>.</div>
   <div>&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
      style="color: #0070c1;">B</span>.<span
      style="color: #795e26;">toString</span>(),&nbsp;<span
      style="color: #a31515;">"&lt;br&gt;"</span>)</div>
   <div>&nbsp;<span style="color: #001080;">document</span>.</div>
   <div>&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
      style="color: #0070c1;">B</span>.<span
      style="color: #795e26;">toString</span>(<span
      style="color: #098658;">2</span>),&nbsp;<span
      style="color: #a31515;">"&lt;br&gt;"</span>)</div>
   <div>&nbsp;<span style="color: #001080;">document</span>.</div>
   <div>&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
      style="color: #0070c1;">B</span>.<span
      style="color: #795e26;">toFixed</span>(<span
      style="color: #098658;">2</span>),&nbsp;<span
      style="color: #a31515;">"&lt;br&gt;"</span>)</div>
   <div><span style="color: #800000;">&lt;/script&gt;</span></div>
  </div>
    </muestra-codigo>
  </div>`;
 }
}

customElements.define("d2-string-conversion", D2StringConversion);