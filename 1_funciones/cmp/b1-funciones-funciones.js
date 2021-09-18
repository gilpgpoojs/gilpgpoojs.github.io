import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class B1FuncionesFunciones extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Funciones que invocan funciones</h1>
   <div class="horizontal">
   <div>
    <h2>Salida</h2>
    <iframe src="/1_funciones/src/2_funciones_funciones.html"></iframe>
    <p class="noPrint">
     <a target="_blank"
       href="/1_funciones/src/2_funciones_funciones.html">Ábrelo en otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%3B%0A%20function%20c1()%20%7B%0A%20%20document.write(%22c1-1%3Cbr%3E%22)%3B%0A%20%20c2()%3B%0A%20%20document.write(%22c1-2%3Cbr%3E%22)%3B%0A%20%7D%0A%20function%20c2()%20%7B%0A%20%20document.write(%22c2%3Cbr%3E%22)%3B%0A%20%7D%0A%20document.write(%22global-1%3Cbr%3E%22)%3B%0A%20c2()%3B%0A%20document.write(%22global-2%3Cbr%3E%22)%3B%0A%20c1()%3B%0A%20document.write(%22global-3%3Cbr%3E%22)%3B%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
     <div>&nbsp;<span style="color: #0000ff;">function</span>&nbsp;<span
        style="color: #795e26;">c1</span>()&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"c1-1&lt;br&gt;"</span>);</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">c2</span>();</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"c1-2&lt;br&gt;"</span>);</div>
     <div>&nbsp;}</div>
     <div>&nbsp;<span style="color: #0000ff;">function</span>&nbsp;<span
        style="color: #795e26;">c2</span>()&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"c2&lt;br&gt;"</span>);</div>
     <div>&nbsp;}</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"global-1&lt;br&gt;"</span>);</div>
     <div>&nbsp;<span style="color: #795e26;">c2</span>();</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"global-2&lt;br&gt;"</span>);</div>
     <div>&nbsp;<span style="color: #795e26;">c1</span>();</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"global-3&lt;br&gt;"</span>);</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
  </div>`;
 }
}

customElements.define("b1-funciones-funciones", B1FuncionesFunciones);