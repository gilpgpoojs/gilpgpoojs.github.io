import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class G1Recursividad extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>G. Recursividad</h1>
   <h1>Recursividad</h1>
  <div class="horizontal">
   <div>
    <h2>Salida</h2>
    <iframe src="/1_funciones/src/7_recursividad.html"></iframe>
    <p class="noPrint">
     <a target="_blank"
       href="/1_funciones/src/7_recursividad.html">Ábrelo en otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%0A%20function%20fns(a%2C%20b)%20%7B%0A%20%20if%20(a%20%3C%3D%200)%20%7B%0A%20%20%20document.write(%22Devuelve%20%22%2C%20b%2C%0A%20%20%20%20%22%3Cbr%3E%22)%0A%20%20%20return%20(b)%0A%20%20%7D%20else%20%7B%0A%20%20%20document.write(%22Invoca%3A%20%22%2C%0A%20%20%20%20a%20-%201%2C%20%22%2C%20%22%2C%20b%2C%20%22%3Cbr%3E%22)%0A%20%20%20const%20ant%20%3D%20fns(a%20-%201%2C%20b)%0A%20%20%20document.write(%22Devuelve%3A%22%2C%0A%20%20%20%20ant%20%2B%201%2C%20%22%3Cbr%3E%22)%0A%20%20%20return%20(ant%20%2B%201)%0A%20%20%7D%0A%20%7D%0A%20document.write(%22Invoca%3A%202%2C%203%3Cbr%3E%22)%0A%20document.write(fns(2%2C%203))%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span></div>
     <div>&nbsp;<span style="color: #0000ff;">function</span>&nbsp;<span
        style="color: #795e26;">fns</span>(<span
        style="color: #001080;">a</span>,&nbsp;<span
        style="color: #001080;">b</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #af00db;">if</span>&nbsp;(<span
        style="color: #001080;">a</span>&nbsp;&lt;=&nbsp;<span
        style="color: #098658;">0</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Devuelve&nbsp;"</span>,&nbsp;<span
        style="color: #001080;">b</span>,</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #af00db;">return</span>&nbsp;(<span
        style="color: #001080;">b</span>)</div>
     <div>&nbsp;&nbsp;}&nbsp;<span style="color: #af00db;">else</span>&nbsp;{
     </div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Invoca:&nbsp;"</span>,</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #001080;">a</span>&nbsp;-&nbsp;<span
        style="color: #098658;">1</span>,&nbsp;<span
        style="color: #a31515;">",&nbsp;"</span>,&nbsp;<span
        style="color: #001080;">b</span>,&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">ant</span>&nbsp;=&nbsp;<span
        style="color: #795e26;">fns</span>(<span
        style="color: #001080;">a</span>&nbsp;-&nbsp;<span
        style="color: #098658;">1</span>,&nbsp;<span
        style="color: #001080;">b</span>)</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Devuelve:"</span>,</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #0070c1;">ant</span>&nbsp;+&nbsp;<span
        style="color: #098658;">1</span>,&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #af00db;">return</span>&nbsp;(<span
        style="color: #0070c1;">ant</span>&nbsp;+&nbsp;<span
        style="color: #098658;">1</span>)</div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;}</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Invoca:&nbsp;2,&nbsp;3&lt;br&gt;"</span>)</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #795e26;">fns</span>(<span
        style="color: #098658;">2</span>,&nbsp;<span
        style="color: #098658;">3</span>))</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
  </div>`;
 }
}

customElements.define("g1-recursividad", G1Recursividad);