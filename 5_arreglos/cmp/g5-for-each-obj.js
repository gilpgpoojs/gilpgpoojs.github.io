import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class G5ForEachObj extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>G. Arreglos de objetos y for-each</h1>
   <div class="horizontal">
   <div>
    <h2>Salida</h2>
    <iframe
      src="/5_arreglos/src/7_for_each_obj.html"></iframe>
    <p class="noPrint">
     <a target="_blank"
       href="/5_arreglos/src/7_for_each_obj.html">Ábrelo en
      otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%0A%20const%20arro3%20%3D%20%5B%0A%20%20%7B%20a%3A%20-3%20%7D%2C%0A%20%20%7B%20a%3A%204%20%7D%2C%0A%20%20%7B%20a%3A%208%20%7D%5D%0A%20arro3.forEach(%0A%20%20n%20%3D%3E%20document.write(n.a%2C%20%22%3Cbr%3E%22))%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;script&gt;</span></div>
   <div>&nbsp;<span style="color: #0000ff;">debugger</span></div>
   <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
      style="color: #0070c1;">arro3</span>&nbsp;=&nbsp;[</div>
   <div>&nbsp;&nbsp;{&nbsp;<span style="color: #001080;">a:</span>&nbsp;-<span
      style="color: #098658;">3</span>&nbsp;},</div>
   <div>&nbsp;&nbsp;{&nbsp;<span style="color: #001080;">a:</span>&nbsp;<span
      style="color: #098658;">4</span>&nbsp;},</div>
   <div>&nbsp;&nbsp;{&nbsp;<span style="color: #001080;">a:</span>&nbsp;<span
      style="color: #098658;">8</span>&nbsp;}]</div>
   <div>&nbsp;<span style="color: #0070c1;">arro3</span>.<span
      style="color: #795e26;">forEach</span>(</div>
   <div>&nbsp;&nbsp;<span style="color: #001080;">n</span>&nbsp;<span
      style="color: #0000ff;">=&gt;</span>&nbsp;<span
      style="color: #001080;">document</span>.<span
      style="color: #795e26;">write</span>(<span
      style="color: #001080;">n</span>.<span
      style="color: #001080;">a</span>,&nbsp;<span
      style="color: #a31515;">"&lt;br&gt;"</span>))</div>
   <div><span style="color: #800000;">&lt;/script&gt;</span></div>
  </div>
  </muestra-codigo>
  </div>`;
 }
}

customElements.define("g5-for-each-obj", G5ForEachObj);