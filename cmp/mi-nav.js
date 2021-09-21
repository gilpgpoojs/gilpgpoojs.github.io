/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */
import "../1_funciones/cmp/funciones-contenido.js";
import "../2_obj_basicos/cmp/basicos-contenido.js";
import "../3_clases/cmp/clases-contenido.js";
import "../4_herencia/cmp/herencia-contenido.js";
import "../5_arreglos/cmp/arreglos-contenido.js";

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
            <h4>Polimorfismo</h4>
          </summary>
          <ol>
            <li>
              <p>
                <a href="/6_polimorfismo/1_sobreescritura.html">Sobrescritura
                  de métodos</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/6_polimorfismo/2_interfaces.html">Interfaces</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/6_polimorfismo/3_interfaces_js.html">Interfaces en
                  JavaScript</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/6_polimorfismo/4_abstractas.html">Clases
                  abstractas</a>
              </p>
            </li>
          </ol>
        </details>
      </li>
      <li>
        <details>
          <summary>
            <h4>Excepciones</h4>
          </summary>
          <ol>
            <li><p><a href="/7_excepciones/1_throw.html">throw</a></p></li>
            <li>
              <p><a href="/7_excepciones/2_try-catch.html">try-catch</a></p>
            </li>
            <li>
              <p>
                <a href="/7_excepciones/3_try-finally.html">try-finally</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/7_excepciones/4_try-catch-finally.html">try-catch-finally</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/7_excepciones/5_anidado.html">Procesamiento
                  anidado</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/7_excepciones/6_formulario.html">Formulario con
                  validaciones</a>
              </p>
            </li>
          </ol>
        </details>
      </li>
      <li>
        <details>
          <summary>
            <h4>Promesas</h4>
          </summary>
          <ol>
            <li>
              <p>
                <a href="/8_promesas/1_original.html">Promesas originales</a>
              </p>
            </li>
            <li>
              <p><a href="/8_promesas/2_async-await.html">async-await</a></p>
            </li>
            <li>
              <p><a href="/8_promesas/3_crea.html">Creando promesas</a></p>
            </li>
            <li>
              <p><a href="/8_promesas/4_all.html">Promise.all</a></p>
            </li>
          </ol>
        </details>
      </li>
      <li>
        <details>
          <summary>
            <h4>Asociaciones</h4>
          </summary>
          <ol>
            <li>
              <p>
                <a href="/9_asociaciones/1_uno.html">Asociaciones a uno</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/9_asociaciones/2_muchos.html">Asociaciones a
                  muchos</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/9_asociaciones/3_uno_a_uno.html">Asociaciones uno a
                  uno</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/9_asociaciones/4_uno_a_muchos.html">Asociaciones uno
                  a muchos</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/9_asociaciones/5_muchos_a_muchos.html">Asociaciones
                  muchos a muchos</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/9_asociaciones/6_agregacion.html">Agregación</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/9_asociaciones/7_composicion.html">Composición</a>
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