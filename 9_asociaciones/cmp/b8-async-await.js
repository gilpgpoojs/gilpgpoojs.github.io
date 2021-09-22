import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class B8AsyncAwait extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. async-await</h1>
   <div class="horizontal">
   <div>
    <h2>Salida</h2>
    <iframe src="/8_promesas/src/2_async.html"></iframe>
    <p class="noPrint">
     <a target="_blank" href="/8_promesas/src/2_async.html">Ábrelo en
      otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%0A%20ejecuta()%3B%0A%20async%20function%20ejecuta()%20%7B%0A%20%20try%20%7B%0A%20%20%20const%20r1%20%3D%0A%20%20%20%20await%20Promise.resolve(%22Hola%22)%0A%20%20%20document.write(%0A%20%20%20%20%60%C3%89xito%201%3A%20%24%7Br1%7D%3Cbr%3E%60)%0A%20%20%7D%20catch%20(e)%20%7B%0A%20%20%20document.write(%0A%20%20%20%20%60Fall%C3%B3%201%3A%20%24%7Be.message%7D%3Cbr%3E%60)%0A%20%20%7D%0A%20%20try%20%7B%0A%20%20%20const%20r2%20%3D%20await%20Promise.reject(%0A%20%20%20%20new%20Error(%22ouch%22))%0A%20%20%20document.write(%60%C3%89xito%202%20%24%7Br2%7D%60)%0A%20%20%7D%20catch%20(e)%20%7B%0A%20%20%20document.write(%0A%20%20%20%20%60Fall%C3%B3%202%3A%20%24%7Be.message%7D%3Cbr%3E%60)%0A%20%20%7D%0A%20%7D%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span></div>
     <div>&nbsp;<span style="color: #795e26;">ejecuta</span>();</div>
     <div>&nbsp;<span style="color: #0000ff;">async</span>&nbsp;<span
        style="color: #0000ff;">function</span>&nbsp;<span
        style="color: #795e26;">ejecuta</span>()&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #af00db;">try</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">r1</span>&nbsp;=</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #af00db;">await</span>&nbsp;<span
        style="color: #267f99;">Promise</span>.<span
        style="color: #795e26;">resolve</span>(<span
        style="color: #a31515;">"Hola"</span>)</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">&grave;Éxito&nbsp;1:&nbsp;</span><span
        style="color: #0000ff;">&dollar;{</span><span
        style="color: #0070c1;">r1</span><span
        style="color: #0000ff;">}</span><span
        style="color: #a31515;">&lt;br&gt;&grave;</span>)</div>
     <div>&nbsp;&nbsp;}&nbsp;<span
        style="color: #af00db;">catch</span>&nbsp;(<span
        style="color: #001080;">e</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">&grave;Falló&nbsp;1:&nbsp;</span><span
        style="color: #0000ff;">&dollar;{</span><span
        style="color: #001080;">e</span>.<span
        style="color: #001080;">message</span><span
        style="color: #0000ff;">}</span><span
        style="color: #a31515;">&lt;br&gt;&grave;</span>)</div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;&nbsp;<span style="color: #af00db;">try</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">r2</span>&nbsp;=&nbsp;<span
        style="color: #af00db;">await</span>&nbsp;<span
        style="color: #267f99;">Promise</span>.<span
        style="color: #795e26;">reject</span>(</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #0000ff;">new</span>&nbsp;<span
        style="color: #267f99;">Error</span>(<span
        style="color: #a31515;">"ouch"</span>))</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">&grave;Éxito&nbsp;2&nbsp;</span><span
        style="color: #0000ff;">&dollar;{</span><span
        style="color: #0070c1;">r2</span><span
        style="color: #0000ff;">}</span><span style="color: #a31515;">&grave;</span>)
     </div>
     <div>&nbsp;&nbsp;}&nbsp;<span
        style="color: #af00db;">catch</span>&nbsp;(<span
        style="color: #001080;">e</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">&grave;Falló&nbsp;2:&nbsp;</span><span
        style="color: #0000ff;">&dollar;{</span><span
        style="color: #001080;">e</span>.<span
        style="color: #001080;">message</span><span
        style="color: #0000ff;">}</span><span
        style="color: #a31515;">&lt;br&gt;&grave;</span>)</div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;}</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
  </div>`;
 }
}

customElements.define("b8-async-await", B8AsyncAwait);