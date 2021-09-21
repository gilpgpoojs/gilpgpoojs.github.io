import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class B6Interfaces extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Interfaces</h1>
   <div class="horizontal">
   <div>
    <h2>Salida</h2>
    <iframe src="/6_polimorfismo/src/2_interfaces.html"></iframe>
    <p class="noPrint">
     <a target="_blank" href="/6_polimorfismo/src/2_interfaces.html">Ábrelo en
      otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%0A%0A%20%2F**%20%40interface%20*%2F%0A%20class%20IMensaje%20%7B%0A%20%20saludo()%20%7B%0A%20%20%20throw%20new%20Error(%22Interfaz%22)%0A%20%20%7D%0A%20%7D%0A%0A%20%2F**%20%40implements%20%7BIMensaje%7D%20*%2F%0A%20class%20MensajeIng%20%7B%0A%20%20%2F**%20%40override%20*%2F%0A%20%20saludo()%20%7B%0A%20%20%20document.write(%22Hi%3Cbr%3E%22)%0A%20%20%7D%0A%20%7D%0A%0A%20%2F**%20%40implements%20%7BIMensaje%7D%20*%2F%0A%20class%20MensajeEsp%20%7B%0A%20%20%2F**%20%40override%20*%2F%0A%20%20saludo()%20%7B%0A%20%20%20document.write(%22Hola%3Cbr%3E%22)%0A%20%20%7D%0A%20%7D%0A%0A%20const%20imensajes%20%3D%20%5B%0A%20%20new%20MensajeEsp()%2C%0A%20%20new%20MensajeIng()%5D%0A%20for%20(var%20mens%20of%20imensajes)%20%7B%0A%20%20mens.saludo()%0A%20%7D%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span></div><br>
     <div>&nbsp;<span style="color: #008000;">/**&nbsp;@interface&nbsp;*/</span>
     </div>
     <div>&nbsp;<span style="color: #0000ff;">class</span>&nbsp;<span
        style="color: #267f99;">IMensaje</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">saludo</span>()&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #af00db;">throw</span>&nbsp;<span
        style="color: #0000ff;">new</span>&nbsp;<span
        style="color: #267f99;">Error</span>(<span
        style="color: #a31515;">"Interfaz"</span>)</div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;}</div><br>
     <div>&nbsp;<span
        style="color: #008000;">/**&nbsp;@implements&nbsp;{IMensaje}&nbsp;*/</span>
     </div>
     <div>&nbsp;<span style="color: #0000ff;">class</span>&nbsp;<span
        style="color: #267f99;">MensajeIng</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #008000;">/**&nbsp;</span><span
        style="color: #0000ff;">@override</span><span
        style="color: #008000;">&nbsp;*/</span></div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">saludo</span>()&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Hi&lt;br&gt;"</span>)</div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;}</div><br>
     <div>&nbsp;<span
        style="color: #008000;">/**&nbsp;@implements&nbsp;{IMensaje}&nbsp;*/</span>
     </div>
     <div>&nbsp;<span style="color: #0000ff;">class</span>&nbsp;<span
        style="color: #267f99;">MensajeEsp</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #008000;">/**&nbsp;</span><span
        style="color: #0000ff;">@override</span><span
        style="color: #008000;">&nbsp;*/</span></div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">saludo</span>()&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Hola&lt;br&gt;"</span>)</div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;}</div><br>
     <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">imensajes</span>&nbsp;=&nbsp;[</div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">new</span>&nbsp;<span
        style="color: #267f99;">MensajeEsp</span>(),</div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">new</span>&nbsp;<span
        style="color: #267f99;">MensajeIng</span>()]</div>
     <div>&nbsp;<span style="color: #af00db;">for</span>&nbsp;(<span
        style="color: #0000ff;">var</span>&nbsp;<span
        style="color: #001080;">mens</span>&nbsp;<span
        style="color: #0000ff;">of</span>&nbsp;<span
        style="color: #0070c1;">imensajes</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">mens</span>.<span
        style="color: #795e26;">saludo</span>()</div>
     <div>&nbsp;}</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
  </div>`;
 }
}

customElements.define("b6-interfaces", B6Interfaces);