import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class F7Formulario extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>F. Formulario con validaciones</h1>
   <muestra-codigo>
   <div>
    <div><span style="color: #800000;">&lt;script&gt;</span></div>
    <div>&nbsp;<span style="color: #0000ff;">debugger</span></div>
    <div>&nbsp;<span style="color: #af00db;">try</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
       style="color: #0070c1;">a</span>&nbsp;=&nbsp;<span
       style="color: #795e26;">leeA</span>()</div>
    <div>&nbsp;&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
       style="color: #0070c1;">b</span>&nbsp;=&nbsp;<span
       style="color: #795e26;">leeB</span>()</div>
    <div>&nbsp;&nbsp;<span
       style="color: #008000;">/*&nbsp;Debe&nbsp;cumplirse&nbsp;que&nbsp;a&nbsp;sea&nbsp;un</span>
    </div>
    <div><span
       style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;número.&nbsp;*/</span>
    </div>
    <div>&nbsp;&nbsp;<span style="color: #af00db;">if</span>&nbsp;(<span
       style="color: #795e26;">isNaN</span>(<span
       style="color: #0070c1;">a</span>))&nbsp;<span
       style="color: #af00db;">throw</span>&nbsp;<span
       style="color: #0000ff;">new</span>&nbsp;<span
       style="color: #267f99;">Error</span>(</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #a31515;">"El&nbsp;valor&nbsp;de&nbsp;a&nbsp;debe&nbsp;ser&nbsp;un&nbsp;"</span>&nbsp;+
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #a31515;">"número."</span>)</div>
    <div>&nbsp;&nbsp;<span
       style="color: #008000;">/*&nbsp;Debe&nbsp;cumplirse&nbsp;que&nbsp;a&nbsp;sea&nbsp;un</span>
    </div>
    <div><span
       style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;número.&nbsp;*/</span>
    </div>
    <div>&nbsp;&nbsp;<span style="color: #af00db;">if</span>&nbsp;(<span
       style="color: #795e26;">isNaN</span>(<span
       style="color: #0070c1;">b</span>))&nbsp;<span
       style="color: #af00db;">throw</span>&nbsp;<span
       style="color: #0000ff;">new</span>&nbsp;<span
       style="color: #267f99;">Error</span>(</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #a31515;">"El&nbsp;valor&nbsp;de&nbsp;b&nbsp;debe&nbsp;ser&nbsp;un&nbsp;"</span>&nbsp;+
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #a31515;">"número."</span>)</div>
    <div>&nbsp;&nbsp;<span
       style="color: #008000;">/*&nbsp;Debe&nbsp;cumplirse&nbsp;que&nbsp;b&nbsp;sea</span>
    </div>
    <div><span
       style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;diferente&nbsp;de&nbsp;0.&nbsp;*/</span>
    </div>
    <div>&nbsp;&nbsp;<span style="color: #af00db;">if</span>&nbsp;(<span
       style="color: #0070c1;">b</span>&nbsp;===&nbsp;<span
       style="color: #098658;">0</span>)&nbsp;<span
       style="color: #af00db;">throw</span>&nbsp;<span
       style="color: #0000ff;">new</span>&nbsp;<span
       style="color: #267f99;">Error</span>(</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #a31515;">"El&nbsp;valor&nbsp;de&nbsp;b&nbsp;no&nbsp;puede&nbsp;ser&nbsp;0."</span>)
    </div>
    <div>&nbsp;&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
       style="color: #0070c1;">resultado</span>&nbsp;=&nbsp;<span
       style="color: #795e26;">procesa</span>(<span
       style="color: #0070c1;">a</span>,&nbsp;<span
       style="color: #0070c1;">b</span>)</div>
    <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
       style="color: #795e26;">write</span>(</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #a31515;">"El&nbsp;resultado&nbsp;es:&nbsp;"</span>,&nbsp;<span
       style="color: #0070c1;">resultado</span>,</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #a31515;">"&lt;br&gt;"</span>)
    </div>
    <div>&nbsp;}&nbsp;<span style="color: #af00db;">catch</span>&nbsp;(<span
       style="color: #001080;">e</span>)&nbsp;{</div>
    <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
       style="color: #795e26;">write</span>(<span
       style="color: #001080;">e</span>.<span
       style="color: #001080;">message</span>,&nbsp;<span
       style="color: #a31515;">"&lt;br&gt;"</span>)</div>
    <div>&nbsp;}</div><br>
    <div>&nbsp;<span style="color: #0000ff;">function</span>&nbsp;<span
       style="color: #795e26;">leeA</span>()&nbsp;{</div>
    <div>&nbsp;&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
       style="color: #0070c1;">strA</span>&nbsp;=&nbsp;<span
       style="color: #795e26;">prompt</span>(</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #a31515;">"Introduce&nbsp;el&nbsp;valor&nbsp;de&nbsp;a:&nbsp;"</span>)
    </div>
    <div>&nbsp;&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
       style="color: #0070c1;">a</span>&nbsp;=&nbsp;<span
       style="color: #795e26;">parseFloat</span>(<span
       style="color: #0070c1;">strA</span>)</div>
    <div>&nbsp;&nbsp;<span style="color: #af00db;">return</span>&nbsp;<span
       style="color: #0070c1;">a</span></div>
    <div>&nbsp;}</div><br>
    <div>&nbsp;<span style="color: #0000ff;">function</span>&nbsp;<span
       style="color: #795e26;">leeB</span>()&nbsp;{</div>
    <div>&nbsp;&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
       style="color: #0070c1;">strB</span>&nbsp;=&nbsp;<span
       style="color: #795e26;">prompt</span>(</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #a31515;">"Introduce&nbsp;el&nbsp;valor&nbsp;de&nbsp;b:&nbsp;"</span>)
    </div>
    <div>&nbsp;&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
       style="color: #0070c1;">b</span>&nbsp;=&nbsp;<span
       style="color: #795e26;">parseFloat</span>(<span
       style="color: #0070c1;">strB</span>)</div>
    <div>&nbsp;&nbsp;<span style="color: #af00db;">return</span>&nbsp;<span
       style="color: #0070c1;">b</span></div>
    <div>&nbsp;}</div><br>
    <div>&nbsp;<span
       style="color: #008000;">/**&nbsp;Calcula&nbsp;el&nbsp;resultado</span>
    </div>
    <div><span
       style="color: #008000;">&nbsp;&nbsp;*&nbsp;@param&nbsp;{number}&nbsp;a&nbsp;el&nbsp;dividendo.</span>
    </div>
    <div><span
       style="color: #008000;">&nbsp;&nbsp;*&nbsp;@param&nbsp;{number}&nbsp;b&nbsp;el&nbsp;divisor.</span>
    </div>
    <div><span style="color: #008000;">&nbsp;&nbsp;*/</span></div>
    <div>&nbsp;<span style="color: #0000ff;">function</span>&nbsp;<span
       style="color: #795e26;">procesa</span>(<span
       style="color: #001080;">a</span>,&nbsp;<span
       style="color: #001080;">b</span>)&nbsp;{</div>
    <div>&nbsp;&nbsp;<span style="color: #af00db;">return</span>&nbsp;<span
       style="color: #001080;">a</span>&nbsp;/&nbsp;<span
       style="color: #001080;">b</span></div>
    <div>&nbsp;}</div>
    <div><span style="color: #800000;">&lt;/script&gt;</span></div>
   </div>
  </muestra-codigo>
  <div class="noPrint lectura">
   <p>
    <a target="_blank"
      href="/7_excepciones/src/6_formulario.html">Ábrelo en
     otra
     pestaña.</a>
   </p>
   <p>
    <a target="_blank"
      href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%0A%20try%20%7B%0A%20%20const%20a%20%3D%20leeA()%0A%20%20const%20b%20%3D%20leeB()%0A%20%20%2F*%20Debe%20cumplirse%20que%20a%20sea%20un%0A%20%20%20*%20n%C3%BAmero.%20*%2F%0A%20%20if%20(isNaN(a))%20throw%20new%20Error(%0A%20%20%20%22El%20valor%20de%20a%20debe%20ser%20un%20%22%20%2B%0A%20%20%20%22n%C3%BAmero.%22)%0A%20%20%2F*%20Debe%20cumplirse%20que%20a%20sea%20un%0A%20%20%20*%20n%C3%BAmero.%20*%2F%0A%20%20if%20(isNaN(b))%20throw%20new%20Error(%0A%20%20%20%22El%20valor%20de%20b%20debe%20ser%20un%20%22%20%2B%0A%20%20%20%22n%C3%BAmero.%22)%0A%20%20%2F*%20Debe%20cumplirse%20que%20b%20sea%0A%20%20%20*%20diferente%20de%200.%20*%2F%0A%20%20if%20(b%20%3D%3D%3D%200)%20throw%20new%20Error(%0A%20%20%20%22El%20valor%20de%20b%20no%20puede%20ser%200.%22)%0A%20%20const%20resultado%20%3D%20procesa(a%2C%20b)%0A%20%20document.write(%0A%20%20%20%22El%20resultado%20es%3A%20%22%2C%20resultado%2C%0A%20%20%20%22%3Cbr%3E%22)%0A%20%7D%20catch%20(e)%20%7B%0A%20%20document.write(e.message%2C%20%22%3Cbr%3E%22)%0A%20%7D%0A%0A%20function%20leeA()%20%7B%0A%20%20const%20strA%20%3D%20prompt(%0A%20%20%20%22Introduce%20el%20valor%20de%20a%3A%20%22)%0A%20%20const%20a%20%3D%20parseFloat(strA)%0A%20%20return%20a%0A%20%7D%0A%0A%20function%20leeB()%20%7B%0A%20%20const%20strB%20%3D%20prompt(%0A%20%20%20%22Introduce%20el%20valor%20de%20b%3A%20%22)%0A%20%20const%20b%20%3D%20parseFloat(strB)%0A%20%20return%20b%0A%20%7D%0A%0A%20%2F**%20Calcula%20el%20resultado%0A%20%20*%20%40param%20%7Bnumber%7D%20a%20el%20dividendo.%0A%20%20*%20%40param%20%7Bnumber%7D%20b%20el%20divisor.%0A%20%20*%2F%0A%20function%20procesa(a%2C%20b)%20%7B%0A%20%20return%20a%20%2F%20b%0A%20%7D%0A%3C%2Fscript%3E">
     Revísalo en gilpgedit.
    </a>
   </p>
  </div>`;
 }
}

customElements.define("f7-formulario", F7Formulario);