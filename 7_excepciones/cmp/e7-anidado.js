import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class E7Anidado extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. Procesamiento anidado</h1>
   <div class="horizontal">
   <div>
    <h3>Salida</h3>
    <iframe src="/7_excepciones/src/5_anidado.html"></iframe>
    <p class="noPrint">
     <a target="_blank" href="/7_excepciones/src/5_anidado.html">Ábrelo
      en
      otra pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%0A%20try%20%7B%0A%20%20document.write(%22Empezamos.%3Cbr%3E%22)%0A%20%20fallo()%0A%20%20document.write(%22No%20me%20ignores.%22)%0A%20%7D%20catch%20(e)%20%7B%0A%20%20document.write(e%2C%20%22%3Cbr%3E%22)%0A%20%7D%0A%20document.write(%22Terminamos.%22)%0A%20function%20fallo()%20%7B%0A%20%20document.%0A%20%20%20write(%22%C2%BFFallaremos%3F%3Cbr%3E%22)%0A%20%20throw%20new%20Error(%22Fallamos%22)%0A%20%20document.write(%0A%20%20%20%22Tampoco%20me%20ignores.%22)%0A%20%7D%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span></div>
     <div>&nbsp;<span style="color: #af00db;">try</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Empezamos.&lt;br&gt;"</span>)</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">fallo</span>()</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"No&nbsp;me&nbsp;ignores."</span>)</div>
     <div>&nbsp;}&nbsp;<span style="color: #af00db;">catch</span>&nbsp;(<span
        style="color: #001080;">e</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">e</span>,&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;}</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Terminamos."</span>)</div>
     <div>&nbsp;<span style="color: #0000ff;">function</span>&nbsp;<span
        style="color: #795e26;">fallo</span>()&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"¿Fallaremos?&lt;br&gt;"</span>)</div>
     <div>&nbsp;&nbsp;<span style="color: #af00db;">throw</span>&nbsp;<span
        style="color: #0000ff;">new</span>&nbsp;<span
        style="color: #267f99;">Error</span>(<span
        style="color: #a31515;">"Fallamos"</span>)</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">"Tampoco&nbsp;me&nbsp;ignores."</span>)</div>
     <div>&nbsp;}</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
  </div>`;
 }
}

customElements.define("e7-anidado", E7Anidado);