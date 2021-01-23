/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<h2>Contenido</h2>
      <ol>
        <li><p><a href="/index.html">Inicio</a></p></li>
        <li><p><a href="/2_sw.html">Software a Instalar</a></p></li>
        <li><p><a href="/3_funciones">Funciones Mejoradas</a></p></li>
        <li><p><a href="/4_obj_basicos">Objetos Básicos</a></p></li>
        <li><p><a href="/5_clases">Clases</a></p></li>
        <li><p><a href="/6_herencia">Herencia</a></p></li>
        <li><p><a href="/7_arreglos">Arreglos</a></p></li>
        <li><p><a href="/8_asociaciones">Asociaciones</a></p></li>
        <li><p><a href="/9_polimorfismo">Polimorfismo</a></p></li>
        <li><p><a href="/10_excepciones">Excepciones</a></p></li>
        <li><p><a href="/11_cajas">Modelo de Cajas de CSS</a></p></li>
        <li><p><a href="/12_promesas">Promesas</a></p></li>
        <li><p><a href="/13_posicionamiento">Posicionamiento con CSS3</a></p></li>
        <li><p><a href="/14_patrones">Patrones de Diseño</a></p></li>
      </ol>`;
  }
}

customElements.define("mi-nav", MiNav);