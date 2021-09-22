import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class B7TryCatch extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. try-catch</h1>
   <div class="lectura">
   <figure class="columnas2">
    <img src="img/try-catch.svg" alt="Diagrama de try-catch."
      style="max-width: 350px;">
    <img src="img/try-error-catch.svg"
      alt="Diagrama de try-catch con error."
      style="max-width: 350px;">
   </figure>
   <p>
    Para procesar los errores, la instrucción
    <code class="language-javascript">throw</code>
    debe ejecutarse dentro de las llaves de
    <code class="language-javascript">try</code>.
   </p>
   <p>
    Si llega al final de las llaves de
    <code class="language-javascript">try</code>
    sin lanzar ninguna excepción, la cláusula
    <code class="language-javascript">catch</code>
    y las
    <i>instrucciones para procesar la excepción</i>
    no se ejecutan, continuando con las instrucciones que
    vengan después de la estructura completa
    <code class="language-javascript">try</code>
    -
    <code class="language-javascript">catch</code>.
   </p>
   <p>
    Si se lanza una excepción dentro de las llaves de
    <code class="language-javascript">try</code>,
    las restantes instrucciones hasta cerrar llaves no se ejecutan.
    Se toma la excepción lanzada; a este proceso se le llama
    <dfn>atrapar la excepción</dfn>. La excepción atrapada se pasa
    como parámetro a la cláusula
    <code class="language-javascript">catch</code>
    el flujo normal se restablece y se ejecutan las
    <i>instrucciones para procesar la excepción</i>,
    continuando con las instrucciones que vengan después de la
    estructura completa
    <code class="language-javascript">try</code>
    -
    <code class="language-javascript">catch</code>.
   </p>
   <h2>Ejemplo</h2>
  </div>
  <div class="horizontal">
   <div>
    <h3>Salida</h3>
    <iframe src="/7_excepciones/src/2_try_catch.html"></iframe>
    <p class="noPrint">
     <a target="_blank" href="/7_excepciones/src/2_try_catch.html">Ábrelo en
      otra pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%0A%20try%20%7B%0A%20%20document.%0A%20%20%20write(%22Ejecuta%20bien.%3Cbr%3E%22)%0A%20%7D%20catch%20(e)%20%7B%0A%20%20document.%0A%20%20%20write(%22Esto%20no%20se%20hace.%3Cbr%3E%22)%0A%20%7D%0A%20document.%0A%20%20write(%22Contin%C3%BAa%20normal.%3Cbr%3E%22)%0A%20try%20%7B%0A%20%20document.%0A%20%20%20write(%22Intenta%20seguir.%3Cbr%3E%22)%0A%20%20throw%20new%20Error(%22Fallo.%22)%0A%20%20document.%0A%20%20%20write(%22Esto%20no%20se%20hace%3Cbr%3E%22)%0A%20%7D%20catch%20(e)%20%7B%0A%20%20document.write(%0A%20%20%20%22Procesa%20el%20error%3A%22%2C%20e.message%2C%0A%20%20%20%22%3Cbr%3E%22)%0A%20%7D%0A%20document.write(%22Adios.%22)%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span></div>
     <div>&nbsp;<span style="color: #af00db;">try</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Ejecuta&nbsp;bien.&lt;br&gt;"</span>)</div>
     <div>&nbsp;}&nbsp;<span style="color: #af00db;">catch</span>&nbsp;(<span
        style="color: #001080;">e</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Esto&nbsp;no&nbsp;se&nbsp;hace.&lt;br&gt;"</span>)
     </div>
     <div>&nbsp;}</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Continúa&nbsp;normal.&lt;br&gt;"</span>)</div>
     <div>&nbsp;<span style="color: #af00db;">try</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Intenta&nbsp;seguir.&lt;br&gt;"</span>)</div>
     <div>&nbsp;&nbsp;<span style="color: #af00db;">throw</span>&nbsp;<span
        style="color: #0000ff;">new</span>&nbsp;<span
        style="color: #267f99;">Error</span>(<span
        style="color: #a31515;">"Fallo."</span>)</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Esto&nbsp;no&nbsp;se&nbsp;hace&lt;br&gt;"</span>)
     </div>
     <div>&nbsp;}&nbsp;<span style="color: #af00db;">catch</span>&nbsp;(<span
        style="color: #001080;">e</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">"Procesa&nbsp;el&nbsp;error:"</span>,&nbsp;<span
        style="color: #001080;">e</span>.<span
        style="color: #001080;">message</span>,</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #a31515;">"&lt;br&gt;"</span>)
     </div>
     <div>&nbsp;}</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Adios."</span>)</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
  </div>`;
 }
}

customElements.define("b7-try-catch", B7TryCatch);