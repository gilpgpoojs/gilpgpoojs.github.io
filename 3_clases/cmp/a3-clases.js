import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class A3Clases extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Clases</h1>
   <div class="lectura">
   <figure>
    <img src="img/reina.svg" alt="Hormiga reina">
   </figure>
  </div>
  <div class="horizontal">
   <div>
    <h3>Salida</h3>
    <iframe src="/3_clases/src/1_clases.html"></iframe>
    <p class="noPrint">
     <a target="_blank" href="/3_clases/src/1_clases.html">Ábrelo en otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%0A%20class%20Cl1%20%7B%0A%20%20static%20saluda()%20%7B%0A%20%20%20document.write(%0A%20%20%20%20%60Hola.%20Soy%20%24%7BCl1.nombre%7D.%3Cbr%3E%60)%0A%20%20%7D%0A%20%7D%0A%20Cl1.nombre%20%3D%20%22vl%22%0A%20Cl1.seguidores%20%3D%203000%0A%20Cl1.saluda()%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span></div>
     <div>&nbsp;<span style="color: #0000ff;">class</span>&nbsp;<span
        style="color: #267f99;">Cl1</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">static</span>&nbsp;<span
        style="color: #795e26;">saluda</span>()&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">&grave;Hola.&nbsp;Soy&nbsp;</span><span
        style="color: #0000ff;">&dollar;{</span><span
        style="color: #267f99;">Cl1</span>.<span
        style="color: #001080;">nombre</span><span
        style="color: #0000ff;">}</span><span
        style="color: #a31515;">.&lt;br&gt;&grave;</span>)</div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;}</div>
     <div>&nbsp;<span style="color: #267f99;">Cl1</span>.<span
        style="color: #001080;">nombre</span>&nbsp;=&nbsp;<span
        style="color: #a31515;">"vl"</span></div>
     <div>&nbsp;<span style="color: #267f99;">Cl1</span>.<span
        style="color: #001080;">seguidores</span>&nbsp;=&nbsp;<span
        style="color: #098658;">3000</span></div>
     <div>&nbsp;<span style="color: #267f99;">Cl1</span>.<span
        style="color: #795e26;">saluda</span>()</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
  </div>`;
 }
}

customElements.define("a3-clases", A3Clases);