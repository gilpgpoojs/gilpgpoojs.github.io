import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class E2StringNumber extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. Conversión de string a number</h1>
   <div class="horizontal">
   <div>
    <h2>Salida</h2>
    <iframe
      src="/2_obj_basicos/src/5_string_number.html"></iframe>
    <p class="noPrint">
     <a target="_blank"
       href="/2_obj_basicos/src/5_string_number.html">Ábrelo en
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
   <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
   <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
      style="color: #0070c1;">a</span>&nbsp;=&nbsp;<span
      style="color: #a31515;">"8.33"</span>;</div>
   <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
      style="color: #0070c1;">b</span>&nbsp;=&nbsp;<span
      style="color: #795e26;">parseInt</span>(<span
      style="color: #a31515;">"8.33"</span>,&nbsp;<span
      style="color: #098658;">10</span>);</div>
   <div>&nbsp;<span style="color: #001080;">document</span>.<span
      style="color: #795e26;">write</span>(<span
      style="color: #0070c1;">b</span>,&nbsp;<span
      style="color: #a31515;">"&lt;br&gt;"</span>)</div>
   <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
      style="color: #0070c1;">c</span>&nbsp;=&nbsp;<span
      style="color: #795e26;">parseInt</span>(<span
      style="color: #a31515;">"8"</span>,&nbsp;<span
      style="color: #098658;">10</span>);</div>
   <div>&nbsp;<span style="color: #001080;">document</span>.<span
      style="color: #795e26;">write</span>(<span
      style="color: #0070c1;">c</span>,&nbsp;<span
      style="color: #a31515;">"&lt;br&gt;"</span>)</div>
   <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
      style="color: #0070c1;">d</span>&nbsp;=&nbsp;<span
      style="color: #795e26;">parseInt</span>(<span
      style="color: #a31515;">"1000"</span>,&nbsp;<span
      style="color: #098658;">2</span>);</div>
   <div>&nbsp;<span style="color: #001080;">document</span>.<span
      style="color: #795e26;">write</span>(<span
      style="color: #0070c1;">d</span>,&nbsp;<span
      style="color: #a31515;">"&lt;br&gt;"</span>)</div>
   <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
      style="color: #0070c1;">e</span>&nbsp;=&nbsp;<span
      style="color: #795e26;">parseInt</span>(<span
      style="color: #a31515;">"F"</span>,&nbsp;<span
      style="color: #098658;">16</span>);</div>
   <div>&nbsp;<span style="color: #001080;">document</span>.<span
      style="color: #795e26;">write</span>(<span
      style="color: #0070c1;">e</span>,&nbsp;<span
      style="color: #a31515;">"&lt;br&gt;"</span>)</div>
   <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
      style="color: #0070c1;">f</span>&nbsp;=&nbsp;<span
      style="color: #795e26;">parseInt</span>(<span
      style="color: #a31515;">"f"</span>,&nbsp;<span
      style="color: #098658;">16</span>);</div>
   <div>&nbsp;<span style="color: #001080;">document</span>.<span
      style="color: #795e26;">write</span>(<span
      style="color: #0070c1;">f</span>,&nbsp;<span
      style="color: #a31515;">"&lt;br&gt;"</span>)</div>
   <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
      style="color: #0070c1;">g</span>&nbsp;=&nbsp;<span
      style="color: #795e26;">parseFloat</span>(<span
      style="color: #a31515;">"8.33"</span>);</div>
   <div>&nbsp;<span style="color: #001080;">document</span>.<span
      style="color: #795e26;">write</span>(<span
      style="color: #0070c1;">g</span>,&nbsp;<span
      style="color: #a31515;">"&lt;br&gt;"</span>)</div>
   <div><span style="color: #800000;">&lt;/script&gt;</span></div>
  </div>
  </muestra-codigo>
  </div>`;
 }
}

customElements.define("e2-string-number", E2StringNumber);