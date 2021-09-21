import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class E5ArrInst extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. Arreglos de instancias</h1>
   <div class="lectura">
    <figure>
     <img src="img/arrobjs.svg" alt="Imagina un arreglo de objetos">
    </figure>
   </div>
  <div class="horizontal">
   <div>
    <h2>Salida</h2>
    <iframe
      src="/5_arreglos/src/5_arr_inst.html"></iframe>
    <p class="noPrint">
     <a target="_blank"
       href="/5_arreglos/src/5_arr_inst.html">Ábrelo en
      otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%0A%20class%20Clao%20%7B%0A%20%20constructor(a)%20%7B%0A%20%20%20this.a%20%3D%20a%0A%20%20%7D%0A%20%7D%0A%20const%20arro1%20%3D%20%5B%0A%20%20new%20Clao(-3)%2C%0A%20%20new%20Clao(4)%2C%0A%20%20new%20Clao(8)%5D%0A%20document.write(arro1%2C%20%22%3Cbr%3E%22)%0A%20for%20(let%20ref%20of%20arro1)%20%7B%0A%20%20document.write(ref.a%2C%20%22%3Cbr%3E%22)%0A%20%7D%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;script&gt;</span></div>
   <div>&nbsp;<span style="color: #0000ff;">debugger</span></div>
   <div>&nbsp;<span style="color: #0000ff;">class</span>&nbsp;<span
      style="color: #267f99;">Clao</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;<span style="color: #0000ff;">constructor</span>(<span
      style="color: #001080;">a</span>)&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #0000ff;">this</span>.<span
      style="color: #001080;">a</span>&nbsp;=&nbsp;<span
      style="color: #001080;">a</span></div>
   <div>&nbsp;&nbsp;}</div>
   <div>&nbsp;}</div>
   <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
      style="color: #0070c1;">arro1</span>&nbsp;=&nbsp;[</div>
   <div>&nbsp;&nbsp;<span style="color: #0000ff;">new</span>&nbsp;<span
      style="color: #267f99;">Clao</span>(-<span
      style="color: #098658;">3</span>),</div>
   <div>&nbsp;&nbsp;<span style="color: #0000ff;">new</span>&nbsp;<span
      style="color: #267f99;">Clao</span>(<span
      style="color: #098658;">4</span>),</div>
   <div>&nbsp;&nbsp;<span style="color: #0000ff;">new</span>&nbsp;<span
      style="color: #267f99;">Clao</span>(<span
      style="color: #098658;">8</span>)]</div>
   <div>&nbsp;<span style="color: #001080;">document</span>.<span
      style="color: #795e26;">write</span>(<span
      style="color: #0070c1;">arro1</span>,&nbsp;<span
      style="color: #a31515;">"&lt;br&gt;"</span>)</div>
   <div>&nbsp;<span style="color: #af00db;">for</span>&nbsp;(<span
      style="color: #0000ff;">let</span>&nbsp;<span
      style="color: #001080;">ref</span>&nbsp;<span
      style="color: #0000ff;">of</span>&nbsp;<span
      style="color: #0070c1;">arro1</span>)&nbsp;{</div>
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

customElements.define("e5-arr-inst", E5ArrInst);