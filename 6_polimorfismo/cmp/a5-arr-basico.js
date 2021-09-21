import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class A5ArrBasico extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Arreglos básicos</h1>
   <div class="lectura">
   <figure>
    <img src="img/arreglos.svg" alt="Imagina un arreglo">
   </figure>
  </div>
  <div class="horizontal">
   <div>
    <h3>Salida</h3>
    <iframe src="/5_arreglos/src/1_arr_basico.html"></iframe>
    <p class="noPrint">
     <a target="_blank" href="/5_arreglos/src/1_arr_basico.html">Ábrelo en otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%0A%20const%20arr%20%3D%20%5B%22mx%22%2C%20%22my%22%2C%20%22mu%22%5D%0A%20document.write(arr%2C%20%22%3Cbr%3E%22)%0A%20document.write(arr.length%2C%20%22%3Cbr%3E%22)%0A%20document.write(arr%5B0%5D%2C%20%22%3Cbr%3E%22)%3B%0A%20document.write(arr%5B1%5D%2C%20%22%3Cbr%3E%22)%3B%0A%20document.write(arr%5B2%5D%2C%20%22%3Cbr%3E%22)%3B%0A%20arr%5B2%5D%20%3D%20%22hi%22%3B%0A%20const%20i%20%3D%200%3B%0A%20document.write(arr%5Bi%5D%2C%20%22%3Cbr%3E%22)%3B%0A%20arr%5Bi%5D%20%3D%20%22ho%22%3B%0A%20document.write(arr%5Bi%5D)%3B%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span></div>
     <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">arr</span>&nbsp;=&nbsp;[<span
        style="color: #a31515;">"mx"</span>,&nbsp;<span
        style="color: #a31515;">"my"</span>,&nbsp;<span
        style="color: #a31515;">"mu"</span>]</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #0070c1;">arr</span>,&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #0070c1;">arr</span>.<span
        style="color: #001080;">length</span>,&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #0070c1;">arr</span>[<span
        style="color: #098658;">0</span>],&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>);</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #0070c1;">arr</span>[<span
        style="color: #098658;">1</span>],&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>);</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #0070c1;">arr</span>[<span
        style="color: #098658;">2</span>],&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>);</div>
     <div>&nbsp;<span style="color: #0070c1;">arr</span>[<span
        style="color: #098658;">2</span>]&nbsp;=&nbsp;<span
        style="color: #a31515;">"hi"</span>;</div>
     <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">i</span>&nbsp;=&nbsp;<span
        style="color: #098658;">0</span>;</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #0070c1;">arr</span>[<span
        style="color: #0070c1;">i</span>],&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>);</div>
     <div>&nbsp;<span style="color: #0070c1;">arr</span>[<span
        style="color: #0070c1;">i</span>]&nbsp;=&nbsp;<span
        style="color: #a31515;">"ho"</span>;</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #0070c1;">arr</span>[<span
        style="color: #0070c1;">i</span>]);</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
  </div>`;
 }
}

customElements.define("a5-arr-basico", A5ArrBasico);