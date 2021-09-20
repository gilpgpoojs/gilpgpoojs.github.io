import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class A4Constructores extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Constructores</h1>
   <div class="horizontal">
   <div>
    <h3>Salida</h3>
    <iframe src="/4_herencia/src/1_constructores.html"></iframe>
    <p class="noPrint">
     <a target="_blank" href="/4_herencia/src/1_constructores.html">Ábrelo en
      otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%0A%20class%20ClM1%20%7B%0A%20%20constructor(p)%20%7B%0A%20%20%20document.write(p%2C%20%22%3Cbr%3E%22)%0A%20%20%20this.m%20%3D%20p%0A%20%20%7D%0A%20%7D%0A%20class%20ClH1%20extends%20ClM1%20%7B%0A%20%20constructor(b%2C%20c)%20%7B%0A%20%20%20super(b)%0A%20%20%20document.write(c%2C%20%22%3Cbr%3E%22)%0A%20%20%20this.h%20%3D%20c%0A%20%20%7D%0A%20%7D%0A%20const%20th1%20%3D%20new%20ClH1(4%2C%20-2)%0A%20document.write(th1.m%2C%20%22%3Cbr%3E%22)%0A%20document.write(th1.h%2C%20%22%3Cbr%3E%22)%0A%20const%20tm1%20%3D%20new%20ClM1(8)%0A%20document.write(tm1.m%2C%20%22%3Cbr%3E%22)%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span></div>
     <div>&nbsp;<span style="color: #0000ff;">class</span>&nbsp;<span
        style="color: #267f99;">ClM1</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">constructor</span>(<span
        style="color: #001080;">p</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">p</span>,&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #0000ff;">this</span>.<span
        style="color: #001080;">m</span>&nbsp;=&nbsp;<span
        style="color: #001080;">p</span></div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;}</div>
     <div>&nbsp;<span style="color: #0000ff;">class</span>&nbsp;<span
        style="color: #267f99;">ClH1</span>&nbsp;<span
        style="color: #0000ff;">extends</span>&nbsp;<span
        style="color: #267f99;">ClM1</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">constructor</span>(<span
        style="color: #001080;">b</span>,&nbsp;<span
        style="color: #001080;">c</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #0000ff;">super</span>(<span
        style="color: #001080;">b</span>)</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">c</span>,&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #0000ff;">this</span>.<span
        style="color: #001080;">h</span>&nbsp;=&nbsp;<span
        style="color: #001080;">c</span></div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;}</div>
     <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">th1</span>&nbsp;=&nbsp;<span
        style="color: #0000ff;">new</span>&nbsp;<span
        style="color: #267f99;">ClH1</span>(<span
        style="color: #098658;">4</span>,&nbsp;-<span
        style="color: #098658;">2</span>)</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #0070c1;">th1</span>.<span
        style="color: #001080;">m</span>,&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #0070c1;">th1</span>.<span
        style="color: #001080;">h</span>,&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">tm1</span>&nbsp;=&nbsp;<span
        style="color: #0000ff;">new</span>&nbsp;<span
        style="color: #267f99;">ClM1</span>(<span
        style="color: #098658;">8</span>)</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #0070c1;">tm1</span>.<span
        style="color: #001080;">m</span>,&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
  </div>`;
 }
}

customElements.define("a4-constructores", A4Constructores);