import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class F1Flecha extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>F. Funciones flecha</h1>
   <div class="horizontal">
   <div>
    <h2>Salida</h2>
    <iframe
      src="/1_funciones/src/6_funciones_flecha.html"></iframe>
    <p class="noPrint">
     <a target="_blank"
       href="/1_funciones/src/6_funciones_flecha.html">Ábrelo en otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%3B%0A%20const%20fx%20%3D%0A%20%20()%20%3D%3E%20document.write(%22hola%3Cbr%3E%22)%0A%20const%20fy%20%3D%0A%20%20(f)%20%3D%3E%20document.write(f%2C%20%22%3Cbr%3E%22)%0A%20const%20fz%20%3D%20(a%2C%20b)%20%3D%3E%20%7B%0A%20%20document.write(a%20%2B%20b%2C%20%22%3Cbr%3E%22)%0A%20%20return%20(a%20*%20b)%0A%20%7D%0A%20const%20fw%20%3D%20g%20%3D%3E%20g%20%2B%201%0A%20fx()%0A%20document.write(fz(4%2C%20-15)%2C%20%22%3Cbr%3E%22)%0A%20fy(%22mx%22)%0A%20document.write(fw(3)%2C%20%22%3Cbr%3E%22)%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
     <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">fx</span>&nbsp;=</div>
     <div>&nbsp;&nbsp;()&nbsp;<span
        style="color: #0000ff;">=&gt;</span>&nbsp;<span
        style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"hola&lt;br&gt;"</span>)</div>
     <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">fy</span>&nbsp;=</div>
     <div>&nbsp;&nbsp;(<span style="color: #001080;">f</span>)&nbsp;<span
        style="color: #0000ff;">=&gt;</span>&nbsp;<span
        style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">f</span>,&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">fz</span>&nbsp;=&nbsp;(<span
        style="color: #001080;">a</span>,&nbsp;<span
        style="color: #001080;">b</span>)&nbsp;<span
        style="color: #0000ff;">=&gt;</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">a</span>&nbsp;+&nbsp;<span
        style="color: #001080;">b</span>,&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;&nbsp;<span style="color: #af00db;">return</span>&nbsp;(<span
        style="color: #001080;">a</span>&nbsp;*&nbsp;<span
        style="color: #001080;">b</span>)</div>
     <div>&nbsp;}</div>
     <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">fw</span>&nbsp;=&nbsp;<span
        style="color: #001080;">g</span>&nbsp;<span
        style="color: #0000ff;">=&gt;</span>&nbsp;<span
        style="color: #001080;">g</span>&nbsp;+&nbsp;<span
        style="color: #098658;">1</span></div>
     <div>&nbsp;<span style="color: #0070c1;">fx</span>()</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #0070c1;">fz</span>(<span
        style="color: #098658;">4</span>,&nbsp;-<span
        style="color: #098658;">15</span>),&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;<span style="color: #0070c1;">fy</span>(<span
        style="color: #a31515;">"mx"</span>)</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #0070c1;">fw</span>(<span
        style="color: #098658;">3</span>),&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>`;
 }
}

customElements.define("f1-flecha", F1Flecha);