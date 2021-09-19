import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class B2Literales extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Literales de objeto</h1>
   <div class="horizontal">
   <div>
    <h2>Salida</h2>
    <iframe src="/2_obj_basicos/src/2_literales.html"></iframe>
    <p class="noPrint">
     <a target="_blank"
       href="/2_obj_basicos/src/2_literales.html">Ábrelo en otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%3B%0A%20let%20tel1%20%3D%20%7B%0A%20%20saludo%3A%0A%20%20%20(nombre)%20%3D%3E%20%60Hola%20%24%7Bnombre%7D.%60%2C%0A%20%20nombre%3A%20%22pp%22%0A%20%7D%3B%0A%20document.write(tel1%2C%20%22%3Cbr%3E%22)%3B%0A%20let%20tel2%20%3D%20tel1%3B%0A%20let%20goles%20%3D%203%2C%20seg%20%3D%208%3B%0A%20tel1%20%3D%20%7B%0A%20%20goles%2C%0A%20%20desp%C3%ADdete%3A%0A%20%20%20()%20%3D%3E%20document.write(%22Bye%3Cbr%3E%22)%2C%0A%20%20seguidores%3A%20seg%0A%20%7D%3B%0A%20goles%2B%2B%3B%0A%20seg%2B%2B%3B%0A%20document.%0A%20%20write(tel2.nombre%2C%20%22%3Cbr%3E%22)%3B%0A%20tel1.desp%C3%ADdete()%3B%0A%3C%2Fscript%3E%0A">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
     <div>&nbsp;<span style="color: #0000ff;">let</span>&nbsp;<span
        style="color: #001080;">tel1</span>&nbsp;=&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">saludo:</span></div>
     <div>&nbsp;&nbsp;&nbsp;(<span
        style="color: #001080;">nombre</span>)&nbsp;<span
        style="color: #0000ff;">=&gt;</span>&nbsp;<span
        style="color: #a31515;">&grave;Hola&nbsp;</span><span
        style="color: #0000ff;">&dollar;{</span><span
        style="color: #001080;">nombre</span><span
        style="color: #0000ff;">}</span><span style="color: #a31515;">.&grave;</span>,
     </div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">nombre:</span>&nbsp;<span
        style="color: #a31515;">"pp"</span></div>
     <div>&nbsp;};</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">tel1</span>,&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>);</div>
     <div>&nbsp;<span style="color: #0000ff;">let</span>&nbsp;<span
        style="color: #001080;">tel2</span>&nbsp;=&nbsp;<span
        style="color: #001080;">tel1</span>;</div>
     <div>&nbsp;<span style="color: #0000ff;">let</span>&nbsp;<span
        style="color: #001080;">goles</span>&nbsp;=&nbsp;<span
        style="color: #098658;">3</span>,&nbsp;<span
        style="color: #001080;">seg</span>&nbsp;=&nbsp;<span
        style="color: #098658;">8</span>;</div>
     <div>&nbsp;<span style="color: #001080;">tel1</span>&nbsp;=&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">goles</span>,</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">despídete:</span></div>
     <div>&nbsp;&nbsp;&nbsp;()&nbsp;<span
        style="color: #0000ff;">=&gt;</span>&nbsp;<span
        style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Bye&lt;br&gt;"</span>),</div>
     <div>&nbsp;&nbsp;<span
        style="color: #001080;">seguidores:</span>&nbsp;<span
        style="color: #001080;">seg</span></div>
     <div>&nbsp;};</div>
     <div>&nbsp;<span style="color: #001080;">goles</span>++;</div>
     <div>&nbsp;<span style="color: #001080;">seg</span>++;</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
        style="color: #001080;">tel2</span>.<span
        style="color: #001080;">nombre</span>,&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>);</div>
     <div>&nbsp;<span style="color: #001080;">tel1</span>.<span
        style="color: #795e26;">despídete</span>();</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
  </div>
   </muestra-codigo>
  </div>`;
 }
}

customElements.define("b2-literales", B2Literales);