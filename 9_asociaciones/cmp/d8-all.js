import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class D8All extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. Promise.all</h1>
   <muestra-codigo>
   <div>
    <div><span style="color: #800000;">&lt;script&gt;</span></div>
    <div>&nbsp;<span style="color: #0000ff;">debugger</span></div>
    <div>&nbsp;<span style="color: #795e26;">ejecuta</span>()</div>
    <div>&nbsp;<span style="color: #0000ff;">function</span></div>
    <div>&nbsp;&nbsp;<span style="color: #795e26;">prom</span>(<span
       style="color: #001080;">resultado</span>,&nbsp;<span
       style="color: #001080;">timeout</span>)&nbsp;{</div>
    <div>&nbsp;&nbsp;<span style="color: #af00db;">return</span>&nbsp;<span
       style="color: #0000ff;">new</span>&nbsp;<span
       style="color: #267f99;">Promise</span>(</div>
    <div>&nbsp;&nbsp;&nbsp;(<span
       style="color: #001080;">resolve</span>,&nbsp;<span
       style="color: #001080;">reject</span>)&nbsp;<span
       style="color: #0000ff;">=&gt;</span></div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #795e26;">setTimeout</span>(</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;()&nbsp;<span
       style="color: #0000ff;">=&gt;</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #af00db;">if</span>&nbsp;(<span
       style="color: #001080;">resultado</span>)&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #001080;">resolve</span>(</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #a31515;">&grave;Éxito[</span><span
       style="color: #0000ff;">&dollar;{</span><span
       style="color: #001080;">resultado</span><span
       style="color: #0000ff;">}</span><span style="color: #a31515;">]&grave;</span>)
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;<span
       style="color: #af00db;">else</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #001080;">reject</span>(<span
       style="color: #0000ff;">new</span>&nbsp;<span
       style="color: #267f99;">Error</span>(</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #a31515;">&grave;Falla[</span><span
       style="color: #0000ff;">&dollar;{</span><span
       style="color: #001080;">resultado</span><span
       style="color: #0000ff;">}</span><span style="color: #a31515;">]&grave;</span>))
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #001080;">timeout</span>))</div>
    <div>&nbsp;}</div>
    <div>&nbsp;<span style="color: #0000ff;">async</span>&nbsp;<span
       style="color: #0000ff;">function</span>&nbsp;<span
       style="color: #795e26;">ejecuta</span>()&nbsp;{</div>
    <div>&nbsp;&nbsp;<span style="color: #af00db;">try</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
       style="color: #0070c1;">r1</span>&nbsp;=&nbsp;<span
       style="color: #af00db;">await</span>&nbsp;<span
       style="color: #267f99;">Promise</span>.<span
       style="color: #795e26;">all</span>([</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">prom</span>(<span
       style="color: #a31515;">"a"</span>,&nbsp;<span
       style="color: #098658;">300</span>),</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">prom</span>(<span
       style="color: #a31515;">"z"</span>,&nbsp;<span
       style="color: #098658;">2000</span>),</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">prom</span>(<span
       style="color: #a31515;">"b"</span>,&nbsp;<span
       style="color: #098658;">5000</span>)])</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
       style="color: #795e26;">write</span>(</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #a31515;">&grave;Éxito&nbsp;1:&nbsp;</span><span
       style="color: #0000ff;">&dollar;{</span><span
       style="color: #0070c1;">r1</span>.<span
       style="color: #795e26;">join</span>()<span
       style="color: #0000ff;">}</span><span
       style="color: #a31515;">&lt;br&gt;&grave;</span>)</div>
    <div>&nbsp;&nbsp;}&nbsp;<span
       style="color: #af00db;">catch</span>&nbsp;(<span
       style="color: #001080;">e</span>)&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
       style="color: #795e26;">write</span>(</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #a31515;">&grave;Falló&nbsp;1:&nbsp;</span><span
       style="color: #0000ff;">&dollar;{</span><span
       style="color: #001080;">e</span>.<span
       style="color: #001080;">message</span><span
       style="color: #0000ff;">}</span><span
       style="color: #a31515;">&lt;br&gt;&grave;</span>)</div>
    <div>&nbsp;&nbsp;}</div>
    <div>&nbsp;&nbsp;<span style="color: #af00db;">try</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
       style="color: #0070c1;">r2</span>&nbsp;=&nbsp;<span
       style="color: #af00db;">await</span>&nbsp;<span
       style="color: #267f99;">Promise</span>.<span
       style="color: #795e26;">all</span>([</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">prom</span>(<span
       style="color: #a31515;">"a"</span>,&nbsp;<span
       style="color: #098658;">100</span>),</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">prom</span>(<span
       style="color: #a31515;">""</span>,&nbsp;<span
       style="color: #098658;">1000</span>),</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">prom</span>(<span
       style="color: #a31515;">"b"</span>,&nbsp;<span
       style="color: #098658;">5000</span>)])</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
       style="color: #795e26;">write</span>(<span
       style="color: #a31515;">&grave;Éxito&nbsp;2:&nbsp;</span><span
       style="color: #0000ff;">&dollar;{</span><span
       style="color: #0070c1;">r2</span><span
       style="color: #0000ff;">}</span><span style="color: #a31515;">&grave;</span>)
    </div>
    <div>&nbsp;&nbsp;}&nbsp;<span
       style="color: #af00db;">catch</span>&nbsp;(<span
       style="color: #001080;">e</span>)&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
       style="color: #795e26;">write</span>(</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #a31515;">&grave;Falló&nbsp;2:&nbsp;</span><span
       style="color: #0000ff;">&dollar;{</span><span
       style="color: #001080;">e</span>.<span
       style="color: #001080;">message</span><span
       style="color: #0000ff;">}</span><span
       style="color: #a31515;">&lt;br&gt;&grave;</span>)</div>
    <div>&nbsp;&nbsp;}</div>
    <div>&nbsp;}</div>
    <div><span style="color: #800000;">&lt;/script&gt;</span></div>
   </div>
  </muestra-codigo>
  <div class="lectura">
   <p class="noPrint">
    <a target="_blank" href="/8_promesas/src/4_promise_all.html">Ábrelo
     en otra pestaña.</a>
   </p>
   <p class="noPrint">
    <a target="_blank"
      href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%0A%20ejecuta()%0A%20function%0A%20%20prom(resultado%2C%20timeout)%20%7B%0A%20%20return%20new%20Promise(%0A%20%20%20(resolve%2C%20reject)%20%3D%3E%0A%20%20%20%20setTimeout(%0A%20%20%20%20%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20if%20(resultado)%20%7B%0A%20%20%20%20%20%20%20resolve(%0A%20%20%20%20%20%20%20%20%60%C3%89xito%5B%24%7Bresultado%7D%5D%60)%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20reject(new%20Error(%0A%20%20%20%20%20%20%20%20%60Falla%5B%24%7Bresultado%7D%5D%60))%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%7D%2C%0A%20%20%20%20%20timeout))%0A%20%7D%0A%20async%20function%20ejecuta()%20%7B%0A%20%20try%20%7B%0A%20%20%20const%20r1%20%3D%20await%20Promise.all(%5B%0A%20%20%20%20prom(%22a%22%2C%20300)%2C%0A%20%20%20%20prom(%22z%22%2C%202000)%2C%0A%20%20%20%20prom(%22b%22%2C%205000)%5D)%0A%20%20%20document.write(%0A%20%20%20%20%60%C3%89xito%201%3A%20%24%7Br1.join()%7D%3Cbr%3E%60)%0A%20%20%7D%20catch%20(e)%20%7B%0A%20%20%20document.write(%0A%20%20%20%20%60Fall%C3%B3%201%3A%20%24%7Be.message%7D%3Cbr%3E%60)%0A%20%20%7D%0A%20%20try%20%7B%0A%20%20%20const%20r2%20%3D%20await%20Promise.all(%5B%0A%20%20%20%20prom(%22a%22%2C%20100)%2C%0A%20%20%20%20prom(%22%22%2C%201000)%2C%0A%20%20%20%20prom(%22b%22%2C%205000)%5D)%0A%20%20%20document.write(%60%C3%89xito%202%3A%20%24%7Br2%7D%60)%0A%20%20%7D%20catch%20(e)%20%7B%0A%20%20%20document.write(%0A%20%20%20%20%60Fall%C3%B3%202%3A%20%24%7Be.message%7D%3Cbr%3E%60)%0A%20%20%7D%0A%20%7D%0A%3C%2Fscript%3E">
     Revísalo en gilpgedit.
    </a>
   </p>
  </div>`;
 }
}

customElements.define("d8-all", D8All);