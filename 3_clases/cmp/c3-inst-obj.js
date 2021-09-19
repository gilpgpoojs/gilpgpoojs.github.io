import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class C3InstObj extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. Instancias y Clases</h1>
   <div class="horizontal">
   <div>
    <h2>Salida</h2>
    <iframe src="/3_clases/src/3_inst_obj.html"></iframe>
    <p class="noPrint">
     <a target="_blank"
       href="/3_clases/src/3_inst_obj.html">Ábrelo en otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%0A%20class%20Cl2%20%7B%0A%20%20static%20saludaClase()%20%7B%0A%20%20%20document.write(%0A%20%20%20%20%60Hola.%20Clase%20%24%7BCl2.nombre%7D.%60%2C%0A%20%20%20%20%22%3Cbr%3E%22)%0A%20%20%7D%0A%20%20saludaInstancia()%20%7B%0A%20%20%20document.write(%0A%20%20%20%20%60Hola.%20Instancia%20%24%7Bthis.nom%7D%60%2C%0A%20%20%20%20%22%3Cbr%3E%22)%0A%20%20%7D%0A%20%7D%0A%20Cl2.nombre%20%3D%20%22QK%22%0A%20const%20t1%20%3D%20new%20Cl2()%0A%20t1.nom%20%3D%20%22qkita1%22%0A%20const%20t2%20%3D%20new%20Cl2()%0A%20t2.nom%20%3D%20%22qkita2%22%0A%20Cl2.saludaClase()%0A%20t1.saludaInstancia()%0A%20t2.saludaInstancia()%0A%3C%2Fscript%3E%0A">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span></div>
     <div>&nbsp;<span style="color: #0000ff;">class</span>&nbsp;<span
        style="color: #267f99;">Cl2</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">static</span>&nbsp;<span
        style="color: #795e26;">saludaClase</span>()&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">&grave;Hola.&nbsp;Clase&nbsp;</span><span
        style="color: #0000ff;">&dollar;{</span><span
        style="color: #267f99;">Cl2</span>.<span
        style="color: #001080;">nombre</span><span
        style="color: #0000ff;">}</span><span style="color: #a31515;">.&grave;</span>,
     </div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;&nbsp;<span
        style="color: #795e26;">saludaInstancia</span>()&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">&grave;Hola.&nbsp;Instancia&nbsp;</span><span
        style="color: #0000ff;">&dollar;{</span><span
        style="color: #0000ff;">this</span>.<span
        style="color: #001080;">nom</span><span
        style="color: #0000ff;">}</span><span style="color: #a31515;">&grave;</span>,
     </div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;}</div>
     <div>&nbsp;<span style="color: #267f99;">Cl2</span>.<span
        style="color: #001080;">nombre</span>&nbsp;=&nbsp;<span
        style="color: #a31515;">"QK"</span></div>
     <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">t1</span>&nbsp;=&nbsp;<span
        style="color: #0000ff;">new</span>&nbsp;<span
        style="color: #267f99;">Cl2</span>()</div>
     <div>&nbsp;<span style="color: #0070c1;">t1</span>.<span
        style="color: #001080;">nom</span>&nbsp;=&nbsp;<span
        style="color: #a31515;">"qkita1"</span></div>
     <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">t2</span>&nbsp;=&nbsp;<span
        style="color: #0000ff;">new</span>&nbsp;<span
        style="color: #267f99;">Cl2</span>()</div>
     <div>&nbsp;<span style="color: #0070c1;">t2</span>.<span
        style="color: #001080;">nom</span>&nbsp;=&nbsp;<span
        style="color: #a31515;">"qkita2"</span></div>
     <div>&nbsp;<span style="color: #267f99;">Cl2</span>.<span
        style="color: #795e26;">saludaClase</span>()</div>
     <div>&nbsp;<span style="color: #0070c1;">t1</span>.<span
        style="color: #795e26;">saludaInstancia</span>()</div>
     <div>&nbsp;<span style="color: #0070c1;">t2</span>.<span
        style="color: #795e26;">saludaInstancia</span>()</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
  </div>`;
 }
}

customElements.define("c3-inst-obj", C3InstObj);