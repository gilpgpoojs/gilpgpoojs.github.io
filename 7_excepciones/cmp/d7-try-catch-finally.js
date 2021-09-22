import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class D7TryChatchFinally extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. try-catch-finally</h1>
   <div class="lectura">
   <figure class="columnas2">
    <img src="img/try-catch-finally.svg"
      alt="Diagrama de try-catch-finally."
      style="max-width: 350px;">
    <img src="img/try-error-catch-finally.svg"
      alt="Diagrama de try-catch-finally con error."
      style="max-width: 350px;">
   </figure>
   <p>
    Es una combinación de las 2 anteriores. Siempre restablece el
    fujo normal y siempre se ejecutan las
    <i>instrucciones que siempre se ejecutan</i>
    de la cláusula
    <code class="language-javascript">finally</code>

   </p>
   <p>
    Si llega al final de las llaves de
    <code class="language-javascript">try</code>
    sin lanzar ninguna excepción, la cláusula
    <code class="language-javascript">catch</code>
    y las
    <i>instrucciones para procesar la excepción</i>
    no se ejecutan, continuando con las
    <i>instrucciones que siempre se ejecutan</i>
    de la cláusula
    <code class="language-javascript">finally</code>.
    Finalmente se ejecutan las instrucciones que vengan después de
    la estructura completa
    <code class="language-javascript">try</code>
    -
    <code class="language-javascript">catch</code>
    -
    <code class="language-javascript">finally</code>.
   </p>
   <p>
    Si se lanza una excepción dentro de las llaves de
    <code class="language-javascript">try</code>,
    las restantes instrucciones hasta cerrar llaves no se ejecutan.
    Se atrapa la excepción, se pasa como parámetro a la cláusula
    <code class="language-javascript">catch</code>
    y se ejecutan las
    <i>instrucciones para procesar la excepción</i>.
    El flujo normal se restablece, continuando con las
    <i>instrucciones que siempre se ejecutan</i>
    de la cláusula
    <code class="language-javascript">finally</code>. Finalmente se
    ejecutan las instrucciones que vengan después de la estructura
    completa
    <code class="language-javascript">try</code>
    -
    <code class="language-javascript">catch</code>
    -
    <code class="language-javascript">finally</code>.
   </p>
   <h2>Ejemplo</h2>
  </div>
  <div class="horizontal">
   <div>
    <h3>Salida</h3>
    <iframe src="/7_excepciones/src/4_try_catch_finaly.html"></iframe>
    <p class="noPrint">
     <a target="_blank" href="/7_excepciones/src/4_try_catch_finaly.html">Ábrelo en
      otra pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%0A%20try%20%7B%0A%20%20throw%20new%20Error(%22Ouch%22)%0A%20%7D%20catch%20(e)%20%7B%0A%20%20document.write(%22Restablece.%20%22%2C%0A%20%20%20e.message%2C%20%22%3Cbr%3E%22)%0A%20%7D%20finally%20%7B%0A%20%20document.write(%0A%20%20%20%22finally%20se%20ejecuta.%3Cbr%3E%22)%0A%20%7D%0A%20document.%0A%20%20write(%22Esto%20se%20realiza.%3Cbr%3E%22)%0A%20try%20%7B%0A%20%20document.write(%22Try%20exitoso.%22)%0A%20%7D%20catch%20(e)%20%7B%0A%20%20document.%0A%20%20%20write(%22catch%20no%20se%20hace%22)%0A%20%7D%20finally%20%7B%0A%20%20document.%0A%20%20%20write(%22finally%20se%20hace.%3Cbr%3E%22)%0A%20%7D%0A%20document.%0A%20%20write(%22Esto%20se%20hace.%3Cbr%3E%22)%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span></div>
     <div>&nbsp;<span style="color: #af00db;">try</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #af00db;">throw</span>&nbsp;<span
        style="color: #0000ff;">new</span>&nbsp;<span
        style="color: #267f99;">Error</span>(<span
        style="color: #a31515;">"Ouch"</span>)</div>
     <div>&nbsp;}&nbsp;<span style="color: #af00db;">catch</span>&nbsp;(<span
        style="color: #001080;">e</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Restablece.&nbsp;"</span>,</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">e</span>.<span
        style="color: #001080;">message</span>,&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;}&nbsp;<span style="color: #af00db;">finally</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">"finally&nbsp;se&nbsp;ejecuta.&lt;br&gt;"</span>)
     </div>
     <div>&nbsp;}</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Esto&nbsp;se&nbsp;realiza.&lt;br&gt;"</span>)
     </div>
     <div>&nbsp;<span style="color: #af00db;">try</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Try&nbsp;exitoso."</span>)</div>
     <div>&nbsp;}&nbsp;<span style="color: #af00db;">catch</span>&nbsp;(<span
        style="color: #001080;">e</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"catch&nbsp;no&nbsp;se&nbsp;hace"</span>)</div>
     <div>&nbsp;}&nbsp;<span style="color: #af00db;">finally</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"finally&nbsp;se&nbsp;hace.&lt;br&gt;"</span>)
     </div>
     <div>&nbsp;}</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Esto&nbsp;se&nbsp;hace.&lt;br&gt;"</span>)
     </div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
  </div>`;
 }
}

customElements.define("d7-try-catch-finally", D7TryChatchFinally);