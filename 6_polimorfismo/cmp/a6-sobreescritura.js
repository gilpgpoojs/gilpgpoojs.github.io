import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class A6Sobreescritura extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Sobrescritura de métodos</h1>
   <div class="lectura">
   <p>
    En este ejemplo no se invoca el método en super, aunque es recomendable
    invocarlo, todo depende de estudiar bien la lógica del programa.
   </p>
  </div>
  <div class="horizontal">
   <div>
    <h3>Salida</h3>
    <iframe src="/6_polimorfismo/src/1_sobreescritura.html"></iframe>
    <p class="noPrint">
     <a target="_blank" href="/6_polimorfismo/src/1_sobreescritura.html">Ábrelo
      en otra pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%0A%0A%20class%20Despedida%20%7B%0A%20%20desp%C3%ADdete()%20%7B%0A%20%20%20document.write(%22Adios.%3Cbr%3E%22)%0A%20%20%7D%0A%20%7D%0A%0A%20class%20DespedidaEnIngl%C3%A9s%0A%20%20extends%20Despedida%20%7B%0A%20%20%2F**%20%40override%20*%2F%0A%20%20desp%C3%ADdete()%20%7B%0A%20%20%20document.write(%22Bye%3Cbr%3E%22)%0A%20%20%7D%0A%20%7D%0A%0A%20const%20despedidas%20%3D%20%5B%0A%20%20new%20Despedida()%2C%0A%20%20new%20DespedidaEnIngl%C3%A9s()%5D%0A%20for%20(var%20d%20of%20despedidas)%20%7B%0A%20%20d.desp%C3%ADdete()%0A%20%7D%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span></div><br>
     <div>&nbsp;<span style="color: #0000ff;">class</span>&nbsp;<span
        style="color: #267f99;">Despedida</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">despídete</span>()&nbsp;{
     </div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Adios.&lt;br&gt;"</span>)</div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;}</div><br>
     <div>&nbsp;<span style="color: #0000ff;">class</span>&nbsp;<span
        style="color: #267f99;">DespedidaEnInglés</span></div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">extends</span>&nbsp;<span
        style="color: #267f99;">Despedida</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #008000;">/**&nbsp;</span><span
        style="color: #0000ff;">@override</span><span
        style="color: #008000;">&nbsp;*/</span></div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">despídete</span>()&nbsp;{
     </div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Bye&lt;br&gt;"</span>)</div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;}</div><br>
     <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">despedidas</span>&nbsp;=&nbsp;[</div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">new</span>&nbsp;<span
        style="color: #267f99;">Despedida</span>(),</div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">new</span>&nbsp;<span
        style="color: #267f99;">DespedidaEnInglés</span>()]</div>
     <div>&nbsp;<span style="color: #af00db;">for</span>&nbsp;(<span
        style="color: #0000ff;">var</span>&nbsp;<span
        style="color: #001080;">d</span>&nbsp;<span
        style="color: #0000ff;">of</span>&nbsp;<span
        style="color: #0070c1;">despedidas</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">d</span>.<span
        style="color: #795e26;">despídete</span>()</div>
     <div>&nbsp;}</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
  </div>`;
 }
}

customElements.define("a6-sobreescritura", A6Sobreescritura);