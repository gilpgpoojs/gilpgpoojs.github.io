import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class D3Setters extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. Setters y Getters</h1>
   <div class="lectura">
   <p>
    En JavaScript por el momento todos los miembros de una clase son
    públicos, pero se pueden usar convenciones para indicar niveles de
    acceso.
   </p>
   <p>
    Como hay varias convenciones, usaremos las del compilador de
    TypeScript, que Visual Studio Code puede usar para validar el acceso.
   </p>
   <dl>
    <dt><code class="language-javascript">@public</code></dt>
    <dd>
     <p>
      Es el valor predefinido e indica que el miembro puede usarse desde
      cualquier parte del código.
     </p>
    </dd>
    <dt><code class="language-javascript">@private</code></dt>
    <dt><code class="language-javascript">_miembro</code></dt>
    <dd>
     <p>El miembro solo debe usarse dentro de la clase que lo define.</p>
    </dd>
    <dt><code class="language-javascript">@protected</code></dt>
    <dd>
     <p>
      El miembro solo debe usarse dentro de la clase que lo define y
      subclases.
     </p>
    </dd>
   </dl>
   <h2>Ejemplo</h2>
  </div>
  <div class="horizontal">
   <div>
    <h3>Salida</h3>
    <iframe
      src="/3_clases/src/4_getters.html"></iframe>
    <p class="noPrint">
     <a target="_blank"
       href="/3_clases/src/4_getters.html">Ábrelo en
      otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%0A%20class%20ClX%20%7B%0A%20%20constructor()%20%7B%0A%20%20%20%2F**%20%40private%20*%2F%0A%20%20%20this._nombre%20%3D%20%22%22%0A%20%20%7D%0A%20%20get%20nombre()%20%7B%0A%20%20%20return%20(this._nombre)%0A%20%20%7D%0A%20%20set%20nombre(nombre)%20%7B%0A%20%20%20this._nombre%20%3D%20nombre%0A%20%20%7D%0A%20%20%2F**%20%40public%20*%2F%0A%20%20get%20juega()%20%7B%0A%20%20%20return%20(%60%24%7Bthis.nombre%7D%20juega%60)%0A%20%20%7D%0A%20%7D%0A%20const%20tt1%20%3D%20new%20ClX()%0A%20tt1.nombre%20%3D%20%22pp%22%0A%20document.write(tt1.nombre%2C%20%22%3Cbr%3E%22)%0A%20document.write(tt1.juega)%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span></div>
     <div>&nbsp;<span style="color: #0000ff;">class</span>&nbsp;<span
        style="color: #267f99;">ClX</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">constructor</span>()&nbsp;{
     </div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #008000;">/**&nbsp;</span><span
        style="color: #0000ff;">@private</span><span
        style="color: #008000;">&nbsp;*/</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #0000ff;">this</span>.<span
        style="color: #001080;">_nombre</span>&nbsp;=&nbsp;<span
        style="color: #a31515;">""</span></div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">get</span>&nbsp;<span
        style="color: #001080;">nombre</span>()&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #af00db;">return</span>&nbsp;(<span
        style="color: #0000ff;">this</span>.<span
        style="color: #001080;">_nombre</span>)</div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">set</span>&nbsp;<span
        style="color: #001080;">nombre</span>(<span
        style="color: #001080;">nombre</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #0000ff;">this</span>.<span
        style="color: #001080;">_nombre</span>&nbsp;=&nbsp;<span
        style="color: #001080;">nombre</span></div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;&nbsp;<span style="color: #008000;">/**&nbsp;</span><span
        style="color: #0000ff;">@public</span><span
        style="color: #008000;">&nbsp;*/</span></div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">get</span>&nbsp;<span
        style="color: #001080;">juega</span>()&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #af00db;">return</span>&nbsp;(<span
        style="color: #a31515;">&grave;</span><span
        style="color: #0000ff;">&dollar;{</span><span
        style="color: #0000ff;">this</span>.<span
        style="color: #001080;">nombre</span><span
        style="color: #0000ff;">}</span><span
        style="color: #a31515;">&nbsp;juega&grave;</span>)</div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;}</div>
     <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">tt1</span>&nbsp;=&nbsp;<span
        style="color: #0000ff;">new</span>&nbsp;<span
        style="color: #267f99;">ClX</span>()</div>
     <div>&nbsp;<span style="color: #0070c1;">tt1</span>.<span
        style="color: #001080;">nombre</span>&nbsp;=&nbsp;<span
        style="color: #a31515;">"pp"</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #0070c1;">tt1</span>.<span
        style="color: #001080;">nombre</span>,&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #0070c1;">tt1</span>.<span
        style="color: #001080;">juega</span>)</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
  </div>`;
 }
}

customElements.define("d3-setters", D3Setters);