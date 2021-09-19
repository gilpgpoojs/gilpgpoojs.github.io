import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class C2String extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. Propiedades y métodos de string</h1>
   <div class="horizontal">
   <div>
    <h2>Salida</h2>
    <iframe src="/2_obj_basicos/src/3_string.html" height="300"></iframe>
    <p class="noPrint">
     <a target="_blank"
       href="/2_obj_basicos/src/3_string.html">Ábrelo en otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%3B%0A%20const%20A%20%3D%20%22Hola%20Mundo%22%0A%20const%20B%20%3D%20%22%20%20Ajua%20%20%22%0A%20document.write(A.length%2C%20%22%3Cbr%3E%22)%0A%20document.%0A%20%20write(A.charAt(%221%22)%2C%20%22%3Cbr%3E%22)%0A%20document.%0A%20%20write(A.endsWith(%22do%22)%2C%20%22%3Cbr%3E%22)%0A%20document.%0A%20%20write(A.indexOf(%22l%22)%2C%20%22%3Cbr%3E%22)%0A%20document.%0A%20%20write(A.indexOf(%22Mu%22)%2C%20%22%3Cbr%3E%22)%0A%20document.%0A%20%20write(A.toUpperCase()%2C%20%22%3Cbr%3E%22)%0A%20document.%0A%20%20write(A.toLowerCase()%2C%20%22%3Cbr%3E%22)%0A%20document.%0A%20%20write(A.substr(2%2C%204)%2C%20%22%3Cbr%3E%22)%0A%20document.%0A%20%20write(A.substring(2%2C%206)%2C%20%22%3Cbr%3E%22)%0A%20document.%0A%20%20write(A.substring(2)%2C%20%22%3Cbr%3E%22)%0A%20document.write(%22h%22%2B%20B%20%2B%20A%2C%20%22%3Cbr%3E%22)%0A%20document.%0A%20%20write(%22h%22%2B%20B.trim()%20%2B%20A%2C%20%22%3Cbr%3E%22)%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
     <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">A</span>&nbsp;=&nbsp;<span
        style="color: #a31515;">"Hola&nbsp;Mundo"</span></div>
     <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">B</span>&nbsp;=&nbsp;<span
        style="color: #a31515;">"&nbsp;&nbsp;Ajua&nbsp;&nbsp;"</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #0070c1;">A</span>.<span
        style="color: #0070c1;">length</span>,&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
        style="color: #0070c1;">A</span>.<span
        style="color: #795e26;">charAt</span>(<span
        style="color: #a31515;">"1"</span>),&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
        style="color: #0070c1;">A</span>.<span
        style="color: #795e26;">endsWith</span>(<span
        style="color: #a31515;">"do"</span>),&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
        style="color: #0070c1;">A</span>.<span
        style="color: #795e26;">indexOf</span>(<span
        style="color: #a31515;">"l"</span>),&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
        style="color: #0070c1;">A</span>.<span
        style="color: #795e26;">indexOf</span>(<span
        style="color: #a31515;">"Mu"</span>),&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
        style="color: #0070c1;">A</span>.<span
        style="color: #795e26;">toUpperCase</span>(),&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
        style="color: #0070c1;">A</span>.<span
        style="color: #795e26;">toLowerCase</span>(),&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
        style="color: #0070c1;">A</span>.<span
        style="color: #795e26;">substr</span>(<span
        style="color: #098658;">2</span>,&nbsp;<span
        style="color: #098658;">4</span>),&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
        style="color: #0070c1;">A</span>.<span
        style="color: #795e26;">substring</span>(<span
        style="color: #098658;">2</span>,&nbsp;<span
        style="color: #098658;">6</span>),&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
        style="color: #0070c1;">A</span>.<span
        style="color: #795e26;">substring</span>(<span
        style="color: #098658;">2</span>),&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"h"</span>+&nbsp;<span
        style="color: #0070c1;">B</span>&nbsp;+&nbsp;<span
        style="color: #0070c1;">A</span>,&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"h"</span>+&nbsp;<span
        style="color: #0070c1;">B</span>.<span
        style="color: #795e26;">trim</span>()&nbsp;+&nbsp;<span
        style="color: #0070c1;">A</span>,&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
  </div>
  </muestra-codigo>
  </div>
   </muestra-codigo>
  </div>`;
 }
}

customElements.define("c2-string", C2String);