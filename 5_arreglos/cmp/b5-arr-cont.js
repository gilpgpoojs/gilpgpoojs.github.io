import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class B5ArrCont extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Arreglos con contadores</h1>
   <div class="horizontal">
    <div>
     <h2>Salida</h2>
     <iframe src="/5_arreglos/src/2_arr_cont.html"></iframe>
     <p class="noPrint">
      <a target="_blank" href="/5_arreglos/src/2_arr_cont.html">Ábrelo en otra
       pestaña.</a>
     </p>
     <p class="noPrint">
      <a target="_blank"
        href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%0A%20const%20arr1%20%3D%20%5B%22mx%22%2C%20%22my%22%2C%20%22mu%22%5D%0A%20for%20(let%20i%20%3D%200%2C%0A%20%20len%20%3D%20arr1.length%3B%0A%20%20i%20%3C%20len%3B%0A%20%20i%2B%2B)%20%7B%0A%20%20const%20str%20%3D%20arr1%5Bi%5D%0A%20%20document.write(str%2C%20%22%3Cbr%3E%22)%0A%20%7D%0A%20document.write(%22adios%22)%0A%3C%2Fscript%3E">
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
      <div>&nbsp;<span style="color: #af00db;">for</span>&nbsp;(<span
         style="color: #0000ff;">let</span>&nbsp;<span
         style="color: #001080;">i</span>&nbsp;=&nbsp;<span
         style="color: #098658;">0</span>,</div>
      <div>&nbsp;&nbsp;<span style="color: #001080;">len</span>&nbsp;=&nbsp;<span
         style="color: #0070c1;">arr1</span>.<span
         style="color: #001080;">length</span>;</div>
      <div>&nbsp;&nbsp;<span
         style="color: #001080;">i</span>&nbsp;&lt;&nbsp;<span
         style="color: #001080;">len</span>;</div>
      <div>&nbsp;&nbsp;<span style="color: #001080;">i</span>++)&nbsp;{</div>
      <div>&nbsp;&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
         style="color: #0070c1;">str</span>&nbsp;=&nbsp;<span
         style="color: #0070c1;">arr1</span>[<span
         style="color: #001080;">i</span>]</div>
      <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #0070c1;">str</span>,&nbsp;<span
         style="color: #a31515;">"&lt;br&gt;"</span>)</div>
      <div>&nbsp;}</div>
      <div>&nbsp;<span style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #a31515;">"adios"</span>)</div>
      <div><span style="color: #800000;">&lt;/script&gt;</span></div>
     </div>
    </muestra-codigo>
   </div>`;
 }
}

customElements.define("b5-arr-cont", B5ArrCont);