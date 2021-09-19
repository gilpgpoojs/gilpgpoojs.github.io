import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class B3Objeto extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Objetos</h1>
   <div class="horizontal">
   <div>
    <h2>Salida</h2>
    <iframe src="/3_clases/src/2_objeto.html"></iframe>
    <p class="noPrint">
     <a target="_blank"
       href="/3_clases/src/2_objeto.html">Ábrelo en otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%0A%20class%20Cl01%20%7B%0A%20%20constructor(b)%20%7B%0A%20%20%20document.write(b%2C%20%22%3Cbr%3E%22)%0A%20%20%20this.a%20%3D%20b%0A%20%20%7D%0A%20%20mensaje(c)%20%7B%0A%20%20%20document.write(c%20%2B%20this.a%2C%0A%20%20%20%20%22%3Cbr%3E%22)%0A%20%20%7D%0A%20%7D%0A%20const%20a%20%3D%20new%20Cl01(4)%0A%20a.mensaje(2)%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span></div>
     <div>&nbsp;<span style="color: #0000ff;">class</span>&nbsp;<span
        style="color: #267f99;">Cl01</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">constructor</span>(<span
        style="color: #001080;">b</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">b</span>,&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #0000ff;">this</span>.<span
        style="color: #001080;">a</span>&nbsp;=&nbsp;<span
        style="color: #001080;">b</span></div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">mensaje</span>(<span
        style="color: #001080;">c</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">c</span>&nbsp;+&nbsp;<span
        style="color: #0000ff;">this</span>.<span
        style="color: #001080;">a</span>,</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;}</div>
     <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">a</span>&nbsp;=&nbsp;<span
        style="color: #0000ff;">new</span>&nbsp;<span
        style="color: #267f99;">Cl01</span>(<span
        style="color: #098658;">4</span>)</div>
     <div>&nbsp;<span style="color: #0070c1;">a</span>.<span
        style="color: #795e26;">mensaje</span>(<span
        style="color: #098658;">2</span>)</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
  </div>`;
 }
}

customElements.define("b3-objeto", B3Objeto);