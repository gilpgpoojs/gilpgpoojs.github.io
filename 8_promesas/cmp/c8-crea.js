import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class C8Crea extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. Creando promesas</h1>
   <muestra-codigo>
   <div>
    <div><span style="color: #800000;">&lt;script&gt;</span></div>
    <div>&nbsp;<span style="color: #0000ff;">debugger</span></div>
    <div>&nbsp;<span style="color: #795e26;">ejecuta</span>()</div>
    <div>&nbsp;<span style="color: #0000ff;">function</span></div>
    <div>&nbsp;&nbsp;<span style="color: #795e26;">fnExito</span>(<span
       style="color: #001080;">resolve</span>,&nbsp;<span
       style="color: #001080;">reject</span>)&nbsp;{</div>
    <div>&nbsp;&nbsp;<span style="color: #795e26;">setTimeout</span>(</div>
    <div>&nbsp;&nbsp;&nbsp;()&nbsp;<span
       style="color: #0000ff;">=&gt;</span>&nbsp;<span
       style="color: #001080;">resolve</span>(<span
       style="color: #a31515;">"Hola"</span>),</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #098658;">5000</span>)</div>
    <div>&nbsp;}</div>
    <div>&nbsp;<span style="color: #0000ff;">function</span></div>
    <div>&nbsp;&nbsp;<span style="color: #795e26;">fnFalla</span>(<span
       style="color: #001080;">resolve</span>,&nbsp;<span
       style="color: #001080;">reject</span>)&nbsp;{</div>
    <div>&nbsp;&nbsp;<span style="color: #795e26;">setTimeout</span>(</div>
    <div>&nbsp;&nbsp;&nbsp;()&nbsp;<span
       style="color: #0000ff;">=&gt;</span>&nbsp;<span
       style="color: #001080;">reject</span>(<span
       style="color: #0000ff;">new</span>&nbsp;<span
       style="color: #267f99;">Error</span>(<span
       style="color: #a31515;">"ouch"</span>)),</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #098658;">5000</span>)</div>
    <div>&nbsp;}</div>
    <div>&nbsp;<span style="color: #0000ff;">async</span>&nbsp;<span
       style="color: #0000ff;">function</span>&nbsp;<span
       style="color: #795e26;">ejecuta</span>()&nbsp;{</div>
    <div>&nbsp;&nbsp;<span style="color: #af00db;">try</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
       style="color: #0070c1;">r1</span>&nbsp;=</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #af00db;">await</span>&nbsp;<span
       style="color: #0000ff;">new</span>&nbsp;<span
       style="color: #267f99;">Promise</span>(<span
       style="color: #795e26;">fnExito</span>)</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
       style="color: #795e26;">write</span>(</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #a31515;">&grave;Éxito&nbsp;1&nbsp;</span><span
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
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
       style="color: #0070c1;">r2</span>&nbsp;=</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #af00db;">await</span>&nbsp;<span
       style="color: #0000ff;">new</span>&nbsp;<span
       style="color: #267f99;">Promise</span>(<span
       style="color: #795e26;">fnFalla</span>)</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
       style="color: #795e26;">write</span>(</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #a31515;">&grave;Éxito&nbsp;2:&nbsp;</span><span
       style="color: #0000ff;">&dollar;{</span><span
       style="color: #0070c1;">r2</span><span
       style="color: #0000ff;">}</span><span
       style="color: #a31515;">&lt;br&gt;&grave;</span>)</div>
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
  <div class="lectura">
   <p class="noPrint">
    <a target="_blank" href="/8_promesas/src/3_crea_promesa.html">Ábrelo
     en otra pestaña.</a>
   </p>
   <p class="noPrint">
    <a target="_blank"
      href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%0A%20ejecuta()%0A%20function%0A%20%20fnExito(resolve%2C%20reject)%20%7B%0A%20%20setTimeout(%0A%20%20%20()%20%3D%3E%20resolve(%22Hola%22)%2C%0A%20%20%205000)%0A%20%7D%0A%20function%0A%20%20fnFalla(resolve%2C%20reject)%20%7B%0A%20%20setTimeout(%0A%20%20%20()%20%3D%3E%20reject(new%20Error(%22ouch%22))%2C%0A%20%20%205000)%0A%20%7D%0A%20async%20function%20ejecuta()%20%7B%0A%20%20try%20%7B%0A%20%20%20const%20r1%20%3D%0A%20%20%20%20await%20new%20Promise(fnExito)%0A%20%20%20document.write(%0A%20%20%20%20%60%C3%89xito%201%20%24%7Br1%7D%3Cbr%3E%60)%0A%20%20%7D%20catch%20(e)%20%7B%0A%20%20%20document.write(%0A%20%20%20%20%60Fall%C3%B3%201%3A%20%24%7Be.message%7D%3Cbr%3E%60)%0A%20%20%7D%0A%20%20try%20%7B%0A%20%20%20const%20r2%20%3D%0A%20%20%20%20await%20new%20Promise(fnFalla)%0A%20%20%20document.write(%0A%20%20%20%20%60%C3%89xito%202%3A%20%24%7Br2%7D%3Cbr%3E%60)%0A%20%20%7D%20catch%20(e)%20%7B%0A%20%20%20document.write(%0A%20%20%20%20%60Fall%C3%B3%202%3A%20%24%7Be.message%7D%3Cbr%3E%60)%0A%20%20%7D%0A%20%7D%0A%3C%2Fscript%3E">
     Revísalo en gilpgedit.
    </a>
   </p>
  </div>`;
 }
}

customElements.define("c8-crea", C8Crea);