import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class B4Sobreescritura extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Sobrescritura de métodos</h1>
   <div class="horizontal">
   <div>
    <h2>Salida</h2>
    <iframe src="/4_herencia/src/2_sobreescritura.html"></iframe>
    <p class="noPrint">
     <a target="_blank"
       href="/4_herencia/src/2_sobreescritura.html">Ábrelo en otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%0A%20class%20ClM2%20%7B%0A%20%20muestra()%20%7B%0A%20%20%20document.write(%22Hola.%22)%3B%0A%20%20%7D%0A%20%7D%0A%20class%20ClH2%20extends%20ClM2%20%7B%0A%20%20%2F**%20%40override%20*%2F%0A%20%20muestra()%20%7B%0A%20%20%20super.muestra()%3B%0A%20%20%20document.write(%22Consola.%22)%3B%0A%20%20%7D%0A%20%7D%0A%20const%20tm2%20%3D%20new%20ClM2()%3B%0A%20tm2.muestra()%3B%0A%20const%20th2%20%3D%20new%20ClH2()%3B%0A%20th2.muestra()%3B%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;script&gt;</span></div>
   <div>&nbsp;<span style="color: #0000ff;">debugger</span></div>
   <div>&nbsp;<span style="color: #0000ff;">class</span>&nbsp;<span
      style="color: #267f99;">ClM2</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;<span style="color: #795e26;">muestra</span>()&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
      style="color: #795e26;">write</span>(<span
      style="color: #a31515;">"Hola."</span>);</div>
   <div>&nbsp;&nbsp;}</div>
   <div>&nbsp;}</div>
   <div>&nbsp;<span style="color: #0000ff;">class</span>&nbsp;<span
      style="color: #267f99;">ClH2</span>&nbsp;<span
      style="color: #0000ff;">extends</span>&nbsp;<span
      style="color: #267f99;">ClM2</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;<span style="color: #008000;">/**&nbsp;</span><span
      style="color: #0000ff;">@override</span><span
      style="color: #008000;">&nbsp;*/</span></div>
   <div>&nbsp;&nbsp;<span style="color: #795e26;">muestra</span>()&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #0000ff;">super</span>.<span
      style="color: #795e26;">muestra</span>();</div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
      style="color: #795e26;">write</span>(<span
      style="color: #a31515;">"Consola."</span>);</div>
   <div>&nbsp;&nbsp;}</div>
   <div>&nbsp;}</div>
   <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
      style="color: #0070c1;">tm2</span>&nbsp;=&nbsp;<span
      style="color: #0000ff;">new</span>&nbsp;<span
      style="color: #267f99;">ClM2</span>();</div>
   <div>&nbsp;<span style="color: #0070c1;">tm2</span>.<span
      style="color: #795e26;">muestra</span>();</div>
   <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
      style="color: #0070c1;">th2</span>&nbsp;=&nbsp;<span
      style="color: #0000ff;">new</span>&nbsp;<span
      style="color: #267f99;">ClH2</span>();</div>
   <div>&nbsp;<span style="color: #0070c1;">th2</span>.<span
      style="color: #795e26;">muestra</span>();</div>
   <div><span style="color: #800000;">&lt;/script&gt;</span></div>
  </div>
   </muestra-codigo>
  </div>`;
 }
}

customElements.define("b4-sobreescritura", B4Sobreescritura);