import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class A2Paso extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Objetos paso a paso</h1>
   <div class="lectura">
   <figure>
    <img src="/2_obj_basicos/img/hormiga1.svg"
      alt="Referencia y objeto inicialmente">
    <img src="/2_obj_basicos/img/hormiga2.svg" alt="Agregamos manita a">
    <img src="/2_obj_basicos/img/hormiga3.svg" alt="Agregamos manita b">
    <img src="/2_obj_basicos/img/hormiga4.svg" alt="Aprende a saludar">
   </figure>
   <h2>Property</h2>
   <ul>
    <li>
     <p>
      Los datos y funciones asociados con un objeto en JavaScript reciben
      el nombre de <dfn>property</dfn> o <dfn>propiedad</dfn>.
     </p>
    </li>
    <li>
     <p>
      Las funciones asociadas con un objeto se llaman <dfn>método</dfn>.
     </p>
    </li>
    <li>
     <p>
      Los datos asociados con un objeto en general se llaman
      <dfn>atributo</dfn> o <dfn>campo</dfn>.
     </p>
    </li>
    <li>
     <p>
      Las propiedades de un objeto al momento de diseño deben ser
      características directas del objeto, por ejemplo <q>nombre</q>. No
      es válido que describan características de otros objetos; por
      ejemplo, si un objeto es una película, no es válido ponerle el
      atributo <del><q>nombreDelDirector</q></del>.
     </p>
    </li>
   </ul>
   <h2>Código</h2>
  </div>
  <div class="horizontal">
   <div>
    <h3>Salida</h3>
    <iframe src="/2_obj_basicos/src/1_paso.html"></iframe>
    <p class="noPrint">
     <a target="_blank" href="/2_obj_basicos/src/1_paso.html">Ábrelo en otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%3B%0A%20%2F%2F%20Crea%20un%20objeto%20usando%20%7B%7D.%0A%20%2F%2F%20Controla%20con%20la%20referencia%20tel.%0A%20let%20tel%20%3D%20%7B%7D%0A%20%2F%2F%20Le%20pone%20propiedades.%0A%20tel.nombre%20%3D%20%22pp%22%0A%20tel.color%20%3D%20%22marr%C3%B3n%22%0A%20%2F%2F%20Le%20pone%20un%20m%C3%A9todo.%0A%20tel.saluda%20%3D%0A%20%20()%20%3D%3E%20document.write(%22Hola.%3Cbr%3E%22)%0A%20tel.saluda()%0A%20document.write(tel%2C%20%22%3Cbr%3E%22)%0A%20document.write(tel.nombre%2C%20%22%3Cbr%3E%22)%0A%20document.write(tel.color%2C%20%22%3Cbr%3E%22)%0A%20tel%20%3D%20null%20%2F%2F%20Cuelga.%0A%20document.write(tel)%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
     <div>&nbsp;<span
        style="color: #008000;">//&nbsp;Crea&nbsp;un&nbsp;objeto&nbsp;usando&nbsp;{}.</span>
     </div>
     <div>&nbsp;<span
        style="color: #008000;">//&nbsp;Controla&nbsp;con&nbsp;la&nbsp;referencia&nbsp;tel.</span>
     </div>
     <div>&nbsp;<span style="color: #0000ff;">let</span>&nbsp;<span
        style="color: #001080;">tel</span>&nbsp;=&nbsp;{}</div>
     <div>&nbsp;<span
        style="color: #008000;">//&nbsp;Le&nbsp;pone&nbsp;propiedades.</span>
     </div>
     <div>&nbsp;<span style="color: #001080;">tel</span>.<span
        style="color: #001080;">nombre</span>&nbsp;=&nbsp;<span
        style="color: #a31515;">"pp"</span></div>
     <div>&nbsp;<span style="color: #001080;">tel</span>.<span
        style="color: #001080;">color</span>&nbsp;=&nbsp;<span
        style="color: #a31515;">"marrón"</span></div>
     <div>&nbsp;<span
        style="color: #008000;">//&nbsp;Le&nbsp;pone&nbsp;un&nbsp;método.</span>
     </div>
     <div>&nbsp;<span style="color: #001080;">tel</span>.<span
        style="color: #001080;">saluda</span>&nbsp;=</div>
     <div>&nbsp;&nbsp;()&nbsp;<span
        style="color: #0000ff;">=&gt;</span>&nbsp;<span
        style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Hola.&lt;br&gt;"</span>)</div>
     <div>&nbsp;<span style="color: #001080;">tel</span>.<span
        style="color: #795e26;">saluda</span>()</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">tel</span>,&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">tel</span>.<span
        style="color: #001080;">nombre</span>,&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">tel</span>.<span
        style="color: #001080;">color</span>,&nbsp;<span
        style="color: #a31515;">"&lt;br&gt;"</span>)</div>
     <div>&nbsp;<span style="color: #001080;">tel</span>&nbsp;=&nbsp;<span
        style="color: #0000ff;">null</span>&nbsp;<span
        style="color: #008000;">//&nbsp;Cuelga.</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">tel</span>)</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
  </div>`;
 }
}

customElements.define("a2-paso", A2Paso);