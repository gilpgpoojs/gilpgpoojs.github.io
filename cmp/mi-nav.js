/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */
import "../1_funciones/cmp/funciones-contenido.js";
class MiNav extends HTMLElement {
 connectedCallback() {
  this.innerHTML = /* html */
   `<nav>
   <h2>Contenido</h2>
    <ol type="A">
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
            <h4>Objetos básicos</h4>
          </summary>
          <ol>
            <li>
              <p>
                <a href="/2_obj_basicos/1_paso.html">Objetos paso a paso</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/2_obj_basicos/2_literales.html">Literales de
                  objeto</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/2_obj_basicos/3_string.html">Propiedades y
                  métodos de string</a>
              </p>
            </li>
          </ol>
        </details>
      </li>
      <li>
        <details>
          <summary>
            <h4>Clases</h4>
          </summary>
          <ol>
            <li><p><a href="/3_clases/1_clases.html">Clases</a></p></li>
            <li>
              <details>
                <summary>Prueba de escritorio de 1 objeto</summary>
                <ol start="0">
                  <li><p><a href="/3_clases/2_objetos/objeto0101.html">Prueba de escritorio de 1 objeto</a></p></li>
                  <li><p><a href="/3_clases/2_objetos/objeto0102.html">Inicializa</a></p></li>
                  <li><p><a href="/3_clases/2_objetos/objeto0103.html">Ejecuta <code>new Cl01(4)</code></a></p></li>
                  <li><p><a href="/3_clases/2_objetos/objeto0104.html">Congela el Stack</a></p></li>
                  <li><p><a href="/3_clases/2_objetos/objeto0105.html">Crea el registro de activación del constructor</a></p></li>
                  <li><p><a href="/3_clases/2_objetos/objeto0106.html">Ejecuta <code>this.a = b;</code></a></p></li>
                  <li><p><a href="/3_clases/2_objetos/objeto0107.html">Termina el registro de activación del constructor</a></p></li>
                  <li><p><a href="/3_clases/2_objetos/objeto0108.html">Descongela el registro del Script</a></p></li>
                  <li><p><a href="/3_clases/2_objetos/objeto0109.html">Crea la constante a</a></p></li>
                  <li><p><a href="/3_clases/2_objetos/objeto0110.html">Invoca <code>a.mensaje(2)</code></a></p></li>
                  <li><p><a href="/3_clases/2_objetos/objeto0111.html">Crea el registro de activación para <code>Cl01.mensaje</code></a></p></li>
                  <li><p><a href="/3_clases/2_objetos/objeto0112.html">Calcula <code>c + this.a</code></a></p></li>
                  <li><p><a href="/3_clases/2_objetos/objeto0113.html">Ejecuta <code>console.log(c + this.a);</code></a></p></li>
                  <li><p><a href="/3_clases/2_objetos/objeto0114.html">Elimina el registro de activación</a></p></li>
                  <li><p><a href="/3_clases/2_objetos/objeto0115.html">Descongela y termina</a></p></li>
                </ol>
              </details>
            </li>
            <li>
              <p><a href="/3_clases/3_inst_obj.html">Instancias y Objetos</a></p>
            </li>
            <li>
              <p><a href="/3_clases/4_setters.html">Setters y Getters</a></p>
            </li>
          </ol>
        </details>
      </li>
      <li>
        <details>
          <summary>
            <h4>Herencia</h4>
          </summary>
          <ol>
            <li>
              <p>
                <a href="/4_herencia/1_constructores.html">Constructores</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/4_herencia/2_sobreescritura.html">Sobrescritura de
                  métodos</a>
              </p>
            </li>
          </ol>
        </details>
      </li>
      <li>
        <details>
          <summary>
            <h4>Arreglos</h4>
          </summary>
          <ol>
            <li>
              <p><a href="/5_arreglos/1_basicos.html">Arreglos básicos</a></p>
            </li>
            <li>
              <p>
                <a href="/5_arreglos/2_objetos.html">Arreglos de objetos</a>
              </p>
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
                <a href="/6_asociaciones/1_uno.html">Asociaciones a uno</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/6_asociaciones/2_muchos.html">Asociaciones a
                  muchos</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/6_asociaciones/3_uno_a_uno.html">Asociaciones uno a
                  uno</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/6_asociaciones/4_uno_a_muchos.html">Asociaciones uno
                  a muchos</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/6_asociaciones/5_muchos_a_muchos.html">Asociaciones
                  muchos a muchos</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/6_asociaciones/6_agregacion.html">Agregación</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/6_asociaciones/7_composicion.html">Composición</a>
              </p>
            </li>
          </ol>
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
                <a href="/7_polimorfismo/1_sobreescritura.html">Sobrescritura
                  de métodos</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/7_polimorfismo/2_interfaces.html">Interfaces</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/7_polimorfismo/3_interfaces_js.html">Interfaces en
                  JavaScript</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/7_polimorfismo/4_abstractas.html">Clases
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
            <li><p><a href="/8_excepciones/1_throw.html">throw</a></p></li>
            <li>
              <p><a href="/8_excepciones/2_try-catch.html">try-catch</a></p>
            </li>
            <li>
              <p>
                <a href="/8_excepciones/3_try-finally.html">try-finally</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/8_excepciones/4_try-catch-finally.html">try-catch-finally</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/8_excepciones/5_anidado.html">Procesamiento
                  anidado</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/8_excepciones/6_formulario.html">Formulario con
                  validaciones</a>
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
                <a href="/9_patrones/1_concepto.html">Concepto de patrón de
                  diseño</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/9_patrones/2_singleton.html">Patrón Singleton</a>
              </p>
            </li>
            <li>
              <p>
                <a href="/9_patrones/3_factory.html">Patrón Abstract
                  Factory</a>
              </p>
            </li>
            <li>
              <p><a href="/9_patrones/4_proxy.html">Patrón Proxy</a></p>
            </li>
            <li><p><a href="/9_patrones/5_mvc.html">Patrón MVC</a></p></li>
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
                <a href="/10_promesas/1_original.html">Promesas originales</a>
              </p>
            </li>
            <li>
              <p><a href="/10_promesas/2_async-await.html">async-await</a></p>
            </li>
            <li>
              <p><a href="/10_promesas/3_crea.html">Creando promesas</a></p>
            </li>
            <li>
              <p><a href="/10_promesas/4_all.html">Promise.all</a></p>
            </li>
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