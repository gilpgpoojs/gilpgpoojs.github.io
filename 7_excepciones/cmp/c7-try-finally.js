import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class C7TryFinally extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. try-finally</h1>
   <div class="lectura">
   <figure class="columnas2">
    <img src="img/try-finally.svg" alt="Diagrama de try-finally."
      style="max-width: 350px;">
    <img src="img/try-error-finally.svg"
      alt="Diagrama de try-finally con error." style="max-width: 350px;">
   </figure>
   <p>
    Las instrucciones que están dentro de
    <code class="language-javascript">finally</code>
    siempre se ejecutan.
   </p>
   <p>
    Si llega al final de las llaves de
    <code class="language-javascript">try</code>
    sin lanzar ninguna excepción, las
    <i>instrucciones que siempre se ejecutan</i>
    de la cláusula
    <code class="language-javascript">finally</code>
    se ejecutan, continuando con las instrucciones que
    vengan después de la estructura completa
    <code class="language-javascript">try</code>
    -
    <code class="language-javascript">finally</code>.
   </p>
   <p>
    Si se lanza una excepción dentro de las llaves de
    <code class="language-javascript">try</code>,
    las restantes instrucciones hasta cerrar llaves no se ejecutan.
    Las
    <i>instrucciones que siempre se ejecutan</i>
    de la cláusula
    <code class="language-javascript">finally</code>
    se ejecutan y se continúa lanzando la excepción.
   </p>
   <h2>Ejemplo</h2>
  </div>
  <div class="horizontal">
   <div>
    <h3>Salida</h3>
    <iframe src="/7_excepciones/src/3_try_finally.html"></iframe>
    <p class="noPrint">
     <a target="_blank" href="/7_excepciones/src/3_try_finally.html">Ábrelo en
      otra pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%0A%20try%20%7B%0A%20%20document.write(%22Sin%20error.%3Cbr%3E%22)%0A%20%7D%20finally%20%7B%0A%20%20document.%0A%20%20%20write(%22Si%20se%20ejecuta.%3Cbr%3E%22)%0A%20%7D%0A%20document.write(%22Continuamos%20%22%2C%0A%20%20%22porque%20no%20hay%20falla.%3Cbr%3E%22)%0A%20try%20%7B%0A%20%20throw%20new%20Error(%22A%20volar.%22)%0A%20%20document.%0A%20%20%20write(%22Esto%20no%20se%20ejecuta.%22)%0A%20%7D%20finally%20%7B%0A%20%20document.write(%22Se%20ejecuta%2C%20%22%2C%0A%20%20%20%22pero%20no%20normaliza%20el%20flujo.%22%2C%0A%20%20%20%22%3Cbr%3E%22)%0A%20%7D%0A%20document.write(%22Esta%20%22%2C%0A%20%20%22instrucci%C3%B3n%20no%20se%20realiza.%3Cbr%3E%22)%0A%3C%2Fscript%3E">
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
        style="color: #a31515;">"Sin&nbsp;error.&lt;br&gt;"</span>)</div>
     <div>&nbsp;}&nbsp;<span style="color: #af00db;">finally</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Si&nbsp;se&nbsp;ejecuta.&lt;br&gt;"</span>)
     </div>
     <div>&nbsp;}</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Continuamos&nbsp;"</span>,</div>
     <div>&nbsp;&nbsp;<span
        style="color: #a31515;">"porque&nbsp;no&nbsp;hay&nbsp;falla.&lt;br&gt;"</span>)
     </div>
     <div>&nbsp;<span style="color: #af00db;">try</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #af00db;">throw</span>&nbsp;<span
        style="color: #0000ff;">new</span>&nbsp;<span
        style="color: #267f99;">Error</span>(<span
        style="color: #a31515;">"A&nbsp;volar."</span>)</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Esto&nbsp;no&nbsp;se&nbsp;ejecuta."</span>)
     </div>
     <div>&nbsp;}&nbsp;<span style="color: #af00db;">finally</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Se&nbsp;ejecuta,&nbsp;"</span>,</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">"pero&nbsp;no&nbsp;normaliza&nbsp;el&nbsp;flujo."</span>,
     </div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #a31515;">"&lt;br&gt;"</span>)
     </div>
     <div>&nbsp;}</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Esta&nbsp;"</span>,</div>
     <div>&nbsp;&nbsp;<span
        style="color: #a31515;">"instrucción&nbsp;no&nbsp;se&nbsp;realiza.&lt;br&gt;"</span>)
     </div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
  </div>`;
 }
}

customElements.define("c7-try-finally", C7TryFinally);