import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class F5ArrLit extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>F. Arreglos de literales</h1>
   <div class="horizontal">
   <div>
    <h2>Salida</h2>
    <iframe
      src="/5_arreglos/src/6_arr_lit.html"></iframe>
    <p class="noPrint">
     <a target="_blank"
       href="/5_arreglos/src/6_arr_lit.html">Ábrelo en
      otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%3B%0A%20const%20a%20%3D%20%228.33%22%3B%0A%20const%20b%20%3D%20parseInt(%228.33%22%2C%2010)%3B%0A%20document.write(b%2C%20%22%3Cbr%3E%22)%0A%20const%20c%20%3D%20parseInt(%228%22%2C%2010)%3B%0A%20document.write(c%2C%20%22%3Cbr%3E%22)%0A%20const%20d%20%3D%20parseInt(%221000%22%2C%202)%3B%0A%20document.write(d%2C%20%22%3Cbr%3E%22)%0A%20const%20e%20%3D%20parseInt(%22F%22%2C%2016)%3B%0A%20document.write(e%2C%20%22%3Cbr%3E%22)%0A%20const%20f%20%3D%20parseInt(%22f%22%2C%2016)%3B%0A%20document.write(f%2C%20%22%3Cbr%3E%22)%0A%20const%20g%20%3D%20parseFloat(%228.33%22)%3B%0A%20document.write(g%2C%20%22%3Cbr%3E%22)%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
   <div>
    <div><span style="color: #800000;">&lt;script&gt;</span></div>
    <div>&nbsp;<span style="color: #0000ff;">debugger</span></div>
    <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
       style="color: #0070c1;">arro2</span>&nbsp;=&nbsp;[</div>
    <div>&nbsp;&nbsp;{&nbsp;<span style="color: #001080;">a:</span>&nbsp;-<span
       style="color: #098658;">3</span>&nbsp;},</div>
    <div>&nbsp;&nbsp;{&nbsp;<span style="color: #001080;">a:</span>&nbsp;<span
       style="color: #098658;">4</span>&nbsp;},</div>
    <div>&nbsp;&nbsp;{&nbsp;<span style="color: #001080;">a:</span>&nbsp;<span
       style="color: #098658;">8</span>&nbsp;}]</div>
    <div>&nbsp;<span style="color: #001080;">document</span>.<span
       style="color: #795e26;">write</span>(<span
       style="color: #0070c1;">arro2</span>,&nbsp;<span
       style="color: #a31515;">"&lt;br&gt;"</span>)</div>
    <div>&nbsp;<span style="color: #af00db;">for</span>&nbsp;(<span
       style="color: #0000ff;">let</span>&nbsp;<span
       style="color: #001080;">ref</span>&nbsp;<span
       style="color: #0000ff;">of</span>&nbsp;<span
       style="color: #0070c1;">arro2</span>)&nbsp;{</div>
    <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
       style="color: #795e26;">write</span>(<span
       style="color: #001080;">ref</span>.<span
       style="color: #001080;">a</span>,&nbsp;<span
       style="color: #a31515;">"&lt;br&gt;"</span>)</div>
    <div>&nbsp;}</div>
    <div><span style="color: #800000;">&lt;/script&gt;</span></div>
   </div>
   </muestra-codigo>
   </div>`;
 }
}

customElements.define("f5-arr-lit", F5ArrLit);