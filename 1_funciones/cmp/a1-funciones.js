import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class A1Funciones extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Funciones</h1>
   <div class="lectura">
   <ul>
    <li>
     <p>
      Las
      <dfn>funciones</dfn>
      son secuencias de instrucciones que tienen asociado un nombre.
     </p>
    </li>
    <li>
     <p>El <dfn>nombre</dfn> de una función es un identificador.</p>
    </li>
    <li>
     <p>
      Una función no se ejecuta ella misma; debe usarse el nombre de la
      función seguida de paréntesis para que se ejecute. Por ejemplo, si una
      función se llama
      <code class="language-javascript">saluda</code>,
      para hacer que se ejecute hay que ejecutar la instrucción
      <code class="language-javascript">saluda()</code>
     </p>
    </li>
    <li>
     <p>
      A la instrucción que solicita la ejecución de una función, se le llama
      <dfn>invocación de función</dfn>.
     </p>
     <p>
      Antes de que una función se ejecute, se suspende lo que se estaba
      haciendo y se marca el punto donde se invocó la función.
      Posteriormente se ejecuta la función y al terminar, se regresa al
      punto de invocación y se continúa con la siguiente instrucción.
     </p>
    </li>
    <li>
     <p>
      En JavaScript, las variables declarades en el mismo espacio que una
      función, se pueden usar dentro de la función.
     </p>
    </li>
   </ul>
   <h2>Ejemplo</h2>
  </div>
  <div class="horizontal">
   <div>
    <h2>Salida</h2>
    <iframe src="/1_funciones/src/1_funciones.html"></iframe>
    <p class="noPrint">
     <a target="_blank" href="/1_funciones/src/1_funciones.html">Ábrelo en otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%3B%0A%20let%20nombre%20%3D%20%22pp%22%3B%0A%20saluda()%3B%20%2F%2F%20invoca%20a%20saluda.%0A%20%2F*%20Al%20terminar%20la%20primera%0A%20%20*%20invocaci%C3%B3n%20contin%C3%BAa%20aqu%C3%AD.%20*%2F%0A%20nombre%20%3D%20%22qk%22%3B%0A%20saluda()%3B%20%2F%2F%20invoca%20a%20saluda.%0A%20%2F*%20Al%20terminar%20la%20segunda%0A%20%20*%20invocaci%C3%B3n%20contin%C3%BAa%20aqu%C3%AD.%20*%2F%0A%20document.write(%22adios%22)%3B%0A%20%2F*%20Declaraci%C3%B3n%20de%20function%20saluda.%0A%20%20*%20Primero%20va%20la%20palabra%20function.%0A%20%20*%20Sigue%20el%20nombre.%0A%20%20*%20Siguen%20los%20par%C3%A9ntesis.%0A%20%20*%20Finalmente%2C%20entre%20llaves%20(%7B%7D)%0A%20%20*%20van%20las%20instrucciones.%20*%2F%0A%20function%20saluda()%20%7B%0A%20%20document.write(nombre%2C%20%22%3Cbr%3E%22)%3B%0A%20%7D%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;script&gt;</span></div>
   <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
   <div>&nbsp;<span style="color: #0000ff;">let</span>&nbsp;<span
      style="color: #001080;">nombre</span>&nbsp;=&nbsp;<span
      style="color: #a31515;">"pp"</span>;</div>
   <div>&nbsp;<span style="color: #795e26;">saluda</span>();&nbsp;<span
      style="color: #008000;">//&nbsp;invoca&nbsp;a&nbsp;saluda.</span></div>
   <div>&nbsp;<span
      style="color: #008000;">/*&nbsp;Al&nbsp;terminar&nbsp;la&nbsp;primera</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;*&nbsp;invocación&nbsp;continúa&nbsp;aquí.&nbsp;*/</span>
   </div>
   <div>&nbsp;<span style="color: #001080;">nombre</span>&nbsp;=&nbsp;<span
      style="color: #a31515;">"qk"</span>;</div>
   <div>&nbsp;<span style="color: #795e26;">saluda</span>();&nbsp;<span
      style="color: #008000;">//&nbsp;invoca&nbsp;a&nbsp;saluda.</span></div>
   <div>&nbsp;<span
      style="color: #008000;">/*&nbsp;Al&nbsp;terminar&nbsp;la&nbsp;segunda</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;*&nbsp;invocación&nbsp;continúa&nbsp;aquí.&nbsp;*/</span>
   </div>
   <div>&nbsp;<span style="color: #001080;">document</span>.<span
      style="color: #795e26;">write</span>(<span
      style="color: #a31515;">"adios"</span>);</div>
   <div>&nbsp;<span
      style="color: #008000;">/*&nbsp;Declaración&nbsp;de&nbsp;function&nbsp;saluda.</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;*&nbsp;Primero&nbsp;va&nbsp;la&nbsp;palabra&nbsp;function.</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;*&nbsp;Sigue&nbsp;el&nbsp;nombre.</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;*&nbsp;Siguen&nbsp;los&nbsp;paréntesis.</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;*&nbsp;Finalmente,&nbsp;entre&nbsp;llaves&nbsp;({})</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;*&nbsp;van&nbsp;las&nbsp;instrucciones.&nbsp;*/</span>
   </div>
   <div>&nbsp;<span style="color: #0000ff;">function</span>&nbsp;<span
      style="color: #795e26;">saluda</span>()&nbsp;{</div>
   <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
      style="color: #795e26;">write</span>(<span
      style="color: #001080;">nombre</span>,&nbsp;<span
      style="color: #a31515;">"&lt;br&gt;"</span>);</div>
   <div>&nbsp;}</div>
   <div><span style="color: #800000;">&lt;/script&gt;</span></div>
  </div>
   </muestra-codigo>
  </div>`;
 }
}

customElements.define("a1-funciones", A1Funciones);