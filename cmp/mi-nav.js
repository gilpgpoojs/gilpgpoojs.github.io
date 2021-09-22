/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */
import "../1_funciones/cmp/funciones-contenido.js";
import "../2_obj_basicos/cmp/basicos-contenido.js";
import "../3_clases/cmp/clases-contenido.js";
import "../4_herencia/cmp/herencia-contenido.js";
import "../5_arreglos/cmp/arreglos-contenido.js";
import "../6_polimorfismo/cmp/poli-contenido.js";
import "../7_excepciones/cmp/excepciones-contenido.js";
import "../8_promesas/cmp/promesas-contenido.js";

class MiNav extends HTMLElement {
 connectedCallback() {
  this.innerHTML = /* html */
   `<nav>
   <h2>Contenido</h2>
    <ul>
     <li><p><a href="/index.html">Inicio</a></p></li>
     <li>
      <h3>Lecciones</h3>
      <ol>
       <li>
        <details>
         <summary>
          <h4><a href="/1_funciones/index.html">Funciones</a></h4>
         </summary>
         <funciones-contenido></funciones-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
         <h4><a href="/2_obj_basicos/index.html">Objetos básicos</a></h4>
         </summary>
         <basicos-contenido></basicos-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h4><a href="/3_clases/index.html">Clases</a></h4>
         </summary>
          <clases-contenido></clases-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h4><a href="/4_herencia/index.html">Herencia</a></h4>
         </summary>
         <herencia-contenido></herencia-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h4><a href="/5_arreglos/index.html">Arreglos</a></h4>
         </summary>
         <arreglos-contenido></arreglos-contenido>
        </details>
      </li>
      <li>
       <details>
        <summary>
         <h4><a href="/6_polimorfismo/index.html">Polimorfismo</a></h4>
        </summary>
        <poli-contenido></poli-contenido>
       </details>
      </li>
      <li>
       <details>
        <summary>
         <h4><a href="/7_excepciones/index.html">Excepciones</a></h4>
        </summary>
        <excepciones-contenido></excepciones-contenido>
       </details>
      </li>
      <li>
       <details>
        <summary>
         <h4><a href="/8_promesas/index.html">Promesas</a></h4>
        </summary>
        <promesas-contenido></promesas-contenido>
       </details>
      </li>
      <li>
       <details>
        <summary>
          <h4>Asociaciones</h4>
        </summary>
        <ol type="A">
         <li>
          <p>
           <a href="/9_asociaciones/a_uno.html">Asociaciones a uno</a>
          </p>
         </li>
          <li>
            <p>
              <a href="/9_asociaciones/b_muchos.html">Asociaciones a
                muchos</a>
            </p>
          </li>
          <li>
            <p>
              <a href="/9_asociaciones/c_uno_a_uno.html">Asociaciones uno a
                uno</a>
            </p>
          </li>
          <li>
            <p>
              <a href="/9_asociaciones/d_uno_a_muchos.html">Asociaciones uno
                a muchos</a>
            </p>
          </li>
          <li>
            <p>
              <a href="/9_asociaciones/e_muchos_a_muchos.html">Asociaciones
                muchos a muchos</a>
            </p>
          </li>
          <li>
            <p>
              <a href="/9_asociaciones/f_agregacion.html">Agregación</a>
            </p>
          </li>
          <li>
            <p>
              <a href="/9_asociaciones/g_composicion.html">Composición</a>
            </p>
          </li>
         </ol>
       </details>
      </li>
      <li>
        <details>
          <summary>
            <h4>Patrones de diseño</h4>
          </summary>
          <ol>
            <li>
              <p>
                <a href="/10_patrones/1_concepto.html">Concepto de patrón de
                  diseño</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/10_patrones/2_singleton.html">Patrón Singleton</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/10_patrones/3_factory.html">Patrón Abstract
                  Factory</a>
              </p>
            </li>
            <li>
              <p><a href="/10_patrones/4_proxy.html">Patrón Proxy</a></p>
            </li>
            <li><p><a href="/10_patrones/5_mvc.html">Patrón MVC</a></p></li>
          </ol>
        </details>
      </li>
    </ol>
    </li>
   </ul>
   </nav>`;
 }
}

customElements.define("mi-nav", MiNav);