import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class A7Throw extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. throw</h1>
   <div class="lectura">
   <p>
    Cuando una instrucción no puede completarse por algún error, debe
    abortar usando la instrucción<br>
    <code class="language-javascript">throw new Error(mensaje);</code>
   </p>
   <p>A este proceso se le llama <dfn>Lanzar una excepción.</dfn></p>
   <figure>
    <img src="img/throw.svg" alt="Diagrama de throw."
      style="max-width: 350px;">
   </figure>
   <h2>Ejemplo</h2>
  </div>
  <div class="horizontal">
   <div>
    <h3>Salida</h3>
    <iframe src="/7_excepciones/src/1_throw.html"></iframe>
    <p class="noPrint">
     <a target="_blank" href="/7_excepciones/src/1_throw.html">Ábrelo
      en otra pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%0A%20document.write(%22En%20este%20ejemplo%20%22%2C%0A%20%20%22la%20instruci%C3%B3n%22)%0A%20throw%20new%20Error(%0A%20%20%22throw%20aborta%20el%20programa.%22)%0A%20document.write(%22Estas%20l%C3%ADneas%22)%0A%20document.write(%22no%20se%20ejecutan%22)%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"En&nbsp;este&nbsp;ejemplo&nbsp;"</span>,</div>
     <div>&nbsp;&nbsp;<span style="color: #a31515;">"la&nbsp;instrución"</span>)
     </div>
     <div>&nbsp;<span style="color: #af00db;">throw</span>&nbsp;<span
        style="color: #0000ff;">new</span>&nbsp;<span
        style="color: #267f99;">Error</span>(</div>
     <div>&nbsp;&nbsp;<span
        style="color: #a31515;">"throw&nbsp;aborta&nbsp;el&nbsp;programa."</span>)
     </div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Estas&nbsp;líneas"</span>)</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"no&nbsp;se&nbsp;ejecutan"</span>)</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
  </div>
  <div class="lectura">
   <p>
    Los errores generados por la instrucción
    <code class="language-javascript">throw</code>
    pueden procesarse de varias formas que se verán a continuación.
   </p>
  </div>`;
 }
}

customElements.define("a7-throw", A7Throw);