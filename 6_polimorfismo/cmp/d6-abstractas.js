import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class D6Abstractas extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. Clases abstractas</h1>
   <div class="horizontal">
   <div>
    <h2>Salida</h2>
    <iframe src="/6_polimorfismo/src/4_abstractas.html"></iframe>
    <p class="noPrint">
     <a target="_blank" href="/6_polimorfismo/src/4_abstractas.html">Ábrelo en
      otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%0A%0A%20class%20Deportista%20%7B%0A%20%20constructor(nombre)%20%7B%0A%20%20%20this.nombre%20%3D%20nombre%0A%20%20%7D%0A%20%20pres%C3%A9ntate()%20%7B%0A%20%20%20document.write(%0A%20%20%20%20%60Soy%20%24%7Bthis.nombre%7D.%3Cbr%3E%60)%0A%20%20%7D%0A%20%20%2F**%20%40abstract%20*%2F%0A%20%20anota()%20%7B%0A%20%20%20throw%20new%20Error(%22abstract%22)%0A%20%20%7D%0A%20%7D%0A%0A%20class%20Basketbolista%0A%20%20extends%20Deportista%20%7B%0A%20%20constructor(nombre)%20%7B%0A%20%20%20super(nombre)%0A%20%20%7D%0A%20%20%2F**%20%40override%20*%2F%0A%20%20anota()%20%7B%0A%20%20%20document.write(%22Encesto.%3Cbr%3E%22)%0A%20%20%7D%0A%20%7D%0A%0A%20class%20Futbolista%0A%20%20extends%20Deportista%20%7B%0A%20%20constructor(nombre)%20%7B%0A%20%20%20super(nombre)%0A%20%20%7D%0A%20%20%2F**%20%40override%20*%2F%0A%20%20anota()%20%7B%0A%20%20%20document.write(%22Anoto%20gol.%3Cbr%3E%22)%0A%20%20%7D%0A%20%7D%0A%0A%20const%20deportistas%20%3D%20%5B%0A%20%20new%20Basketbolista(%22LeBron%22)%2C%0A%20%20new%20Futbolista(%22Lionel%22)%5D%0A%20for%20(var%20dep%20of%20deportistas)%20%7B%0A%20%20dep.pres%C3%A9ntate()%0A%20%20dep.anota()%0A%20%7D%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span></div><br>
     <div>&nbsp;<span style="color: #0000ff;">class</span>&nbsp;<span
        style="color: #267f99;">Deportista</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">constructor</span>(<span
        style="color: #001080;">nombre</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #0000ff;">this</span>.<span
        style="color: #001080;">nombre</span>&nbsp;=&nbsp;<span
        style="color: #001080;">nombre</span></div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">preséntate</span>()&nbsp;{
     </div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">&grave;Soy&nbsp;</span><span
        style="color: #0000ff;">&dollar;{</span><span
        style="color: #0000ff;">this</span>.<span
        style="color: #001080;">nombre</span><span
        style="color: #0000ff;">}</span><span
        style="color: #a31515;">.&lt;br&gt;&grave;</span>)</div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;&nbsp;<span style="color: #008000;">/**&nbsp;</span><span
        style="color: #0000ff;">@abstract</span><span
        style="color: #008000;">&nbsp;*/</span></div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">anota</span>()&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #af00db;">throw</span>&nbsp;<span
        style="color: #0000ff;">new</span>&nbsp;<span
        style="color: #267f99;">Error</span>(<span
        style="color: #a31515;">"abstract"</span>)</div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;}</div><br>
     <div>&nbsp;<span style="color: #0000ff;">class</span>&nbsp;<span
        style="color: #267f99;">Basketbolista</span></div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">extends</span>&nbsp;<span
        style="color: #267f99;">Deportista</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">constructor</span>(<span
        style="color: #001080;">nombre</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #0000ff;">super</span>(<span
        style="color: #001080;">nombre</span>)</div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;&nbsp;<span style="color: #008000;">/**&nbsp;</span><span
        style="color: #0000ff;">@override</span><span
        style="color: #008000;">&nbsp;*/</span></div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">anota</span>()&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Encesto.&lt;br&gt;"</span>)</div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;}</div><br>
     <div>&nbsp;<span style="color: #0000ff;">class</span>&nbsp;<span
        style="color: #267f99;">Futbolista</span></div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">extends</span>&nbsp;<span
        style="color: #267f99;">Deportista</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">constructor</span>(<span
        style="color: #001080;">nombre</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #0000ff;">super</span>(<span
        style="color: #001080;">nombre</span>)</div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;&nbsp;<span style="color: #008000;">/**&nbsp;</span><span
        style="color: #0000ff;">@override</span><span
        style="color: #008000;">&nbsp;*/</span></div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">anota</span>()&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Anoto&nbsp;gol.&lt;br&gt;"</span>)</div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;}</div><br>
     <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">deportistas</span>&nbsp;=&nbsp;[</div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">new</span>&nbsp;<span
        style="color: #267f99;">Basketbolista</span>(<span
        style="color: #a31515;">"LeBron"</span>),</div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">new</span>&nbsp;<span
        style="color: #267f99;">Futbolista</span>(<span
        style="color: #a31515;">"Lionel"</span>)]</div>
     <div>&nbsp;<span style="color: #af00db;">for</span>&nbsp;(<span
        style="color: #0000ff;">var</span>&nbsp;<span
        style="color: #001080;">dep</span>&nbsp;<span
        style="color: #0000ff;">of</span>&nbsp;<span
        style="color: #0070c1;">deportistas</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">dep</span>.<span
        style="color: #795e26;">preséntate</span>()</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">dep</span>.<span
        style="color: #795e26;">anota</span>()</div>
     <div>&nbsp;}</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
  </div>`;
 }
}

customElements.define("d6-abstractas", D6Abstractas);