import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class D5ForEach extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. Arreglos con for-each</h1>
   <div class="horizontal">
   <div>
    <h2>Salida</h2>
    <iframe src="/5_arreglos/src/4_for_each.html"></iframe>
    <p class="noPrint">
     <a target="_blank" href="/5_arreglos/src/4_for_each.html">Ábrelo en
      otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%0A%20const%20arr1%20%3D%20%5B%22mx%22%2C%20%22my%22%2C%20%22mu%22%5D%0A%20arr1.forEach(%0A%20%20str%20%3D%3E%0A%20%20%20document.write(str%2C%20%22%3Cbr%3E%22))%0A%20document.write(%22adios%22)%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;script&gt;</span></div>
   <div>&nbsp;<span style="color: #0000ff;">debugger</span></div>
   <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
      style="color: #0070c1;">arr1</span>&nbsp;=&nbsp;[<span
      style="color: #a31515;">"mx"</span>,&nbsp;<span
      style="color: #a31515;">"my"</span>,&nbsp;<span
      style="color: #a31515;">"mu"</span>]</div>
   <div>&nbsp;<span style="color: #0070c1;">arr1</span>.<span
      style="color: #795e26;">forEach</span>(</div>
   <div>&nbsp;&nbsp;<span style="color: #001080;">str</span>&nbsp;<span
      style="color: #0000ff;">=&gt;</span></div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
      style="color: #795e26;">write</span>(<span
      style="color: #001080;">str</span>,&nbsp;<span
      style="color: #a31515;">"&lt;br&gt;"</span>))</div>
   <div>&nbsp;<span style="color: #001080;">document</span>.<span
      style="color: #795e26;">write</span>(<span
      style="color: #a31515;">"adios"</span>)</div>
   <div><span style="color: #800000;">&lt;/script&gt;</span></div>
  </div>
    </muestra-codigo>
  </div>`;
 }
}

customElements.define("d5-for-each", D5ForEach);