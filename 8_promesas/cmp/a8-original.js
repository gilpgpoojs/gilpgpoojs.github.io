import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class A8Original extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Promesas originales</h1>
   <div class="horizontal">
   <div>
    <h2>Salida</h2>
    <iframe src="/8_promesas/src/1_promesas1.html"></iframe>
    <p class="noPrint">
     <a target="_blank" href="/8_promesas/src/1_promesas1.html">Ábrelo
      en otra pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%0A%20Promise.resolve(%22Hola%22).%0A%20%20then(s%20%3D%3E%20document.write(%0A%20%20%20%60%C3%89xito%201%3A%20%24%7Bs%7D%3Cbr%3E%60)).%0A%20%20catch(e%20%3D%3E%20document.write(%0A%20%20%20%60Fallo%201%3A%20%24%7Be.message%7D%3Cbr%3E%60))%0A%20Promise.reject(new%20Error(%22ouch%22)).%0A%20%20then(s%20%3D%3E%20document.write(%0A%20%20%20%60%C3%89xito%202%3A%20%24%7Bs%7D%3Cbr%3E%60)).%0A%20%20catch(e%20%3D%3E%20document.write(%0A%20%20%20%60Fallo%202%3A%20%24%7Be.message%7D%3Cbr%3E%60))%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span></div>
     <div>&nbsp;<span style="color: #267f99;">Promise</span>.<span
        style="color: #795e26;">resolve</span>(<span
        style="color: #a31515;">"Hola"</span>).</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">then</span>(<span
        style="color: #001080;">s</span>&nbsp;<span
        style="color: #0000ff;">=&gt;</span>&nbsp;<span
        style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">&grave;Éxito&nbsp;1:&nbsp;</span><span
        style="color: #0000ff;">&dollar;{</span><span
        style="color: #001080;">s</span><span
        style="color: #0000ff;">}</span><span
        style="color: #a31515;">&lt;br&gt;&grave;</span>)).</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">catch</span>(<span
        style="color: #001080;">e</span>&nbsp;<span
        style="color: #0000ff;">=&gt;</span>&nbsp;<span
        style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">&grave;Fallo&nbsp;1:&nbsp;</span><span
        style="color: #0000ff;">&dollar;{</span><span
        style="color: #001080;">e</span>.<span
        style="color: #001080;">message</span><span
        style="color: #0000ff;">}</span><span
        style="color: #a31515;">&lt;br&gt;&grave;</span>))</div>
     <div>&nbsp;<span style="color: #267f99;">Promise</span>.<span
        style="color: #795e26;">reject</span>(<span
        style="color: #0000ff;">new</span>&nbsp;<span
        style="color: #267f99;">Error</span>(<span
        style="color: #a31515;">"ouch"</span>)).</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">then</span>(<span
        style="color: #001080;">s</span>&nbsp;<span
        style="color: #0000ff;">=&gt;</span>&nbsp;<span
        style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">&grave;Éxito&nbsp;2:&nbsp;</span><span
        style="color: #0000ff;">&dollar;{</span><span
        style="color: #001080;">s</span><span
        style="color: #0000ff;">}</span><span
        style="color: #a31515;">&lt;br&gt;&grave;</span>)).</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">catch</span>(<span
        style="color: #001080;">e</span>&nbsp;<span
        style="color: #0000ff;">=&gt;</span>&nbsp;<span
        style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">&grave;Fallo&nbsp;2:&nbsp;</span><span
        style="color: #0000ff;">&dollar;{</span><span
        style="color: #001080;">e</span>.<span
        style="color: #001080;">message</span><span
        style="color: #0000ff;">}</span><span
        style="color: #a31515;">&lt;br&gt;&grave;</span>))</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
  </div>`;
 }
}

customElements.define("a8-original", A8Original);