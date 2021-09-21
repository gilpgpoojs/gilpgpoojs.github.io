import { Diapositiva } from "../../lib/Diapositiva.js";

export class ArreglosContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
    <li>
     <p><a href="/5_arreglos/a_arr_basico.html">Arreglos básicos</a></p>
    </li>
    <li>
     <p><a href="/5_arreglos/b_arr_cont.html">Arreglos con contadores</a></p>
    </li>
    <li>
     <p><a href="/5_arreglos/c_for_of.html">Arreglos con for-of</a></p>
    </li>
    <li>
     <p><a href="/5_arreglos/d_for_each.html">Arreglos con for-each</a></p>
    </li>
    <li>
     <p><a href="/5_arreglos/e_arr_inst.html">Arreglos de instancias</a></p>
    </li>
    <li>
     <p><a href="/5_arreglos/f_arr_lit.html">Arreglos de literales</a></p>
    </li>
    <li>
     <p>
      <a href="/5_arreglos/g_for_each_obj.html">Arreglos de objetos y
       for-each</a>
     </p>
    </li>
   </ol>`;
 }
}

customElements.define("arreglos-contenido", ArreglosContenido);