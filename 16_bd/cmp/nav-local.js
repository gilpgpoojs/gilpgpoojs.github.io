/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

customElements.define("nav-local", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ol>
        <li><p><a href="index.html">Más CSS y HTML</a></p></li>
        <li><p><a href="2_contenido.html">Contenido</a></p></li>
        <li><p><a href="3_trans.html">Colores con Transparencia</a></p></li>
        <li><p><a href="4_ej_trans.html">Ejemplo de Colores con Transparencia</a></p></li>
        <li><p><a href="5_todos.html">Selector <strong>*</strong></a></p></li>
        <li><p><a href="6_id.html">Selector <strong>#</strong>identificador</a></p></li>
        <li><p><a href="7_class.html">Selector <strong>.</strong>clase</a></p></li>
        <li><p><a href="8_hijo.html">Selector <em>sel1</em> <strong>&gt;</strong> <em>sel2</em></a></p></li>
        <li><p><a href="9_descendiente.html">Selector con Descendientes</a> <em>sel1</em> <em>sel2</em></a></p></li>
        <li><p><a href="10_siguiente.html">Selector <em>sel1</em> <strong>+</strong> <em>sel2</em></a></p></li>
        <li><p><a href="11_posterior.html">Selector <em>sel1</em> <strong>~</strong> <em>sel2</em></a></p></li>
        <li><p><a href="12_lista.html">Lista de Selectores <em>sel1</em> <strong>,</strong> <em>sel2</em></a></p></li>
        <li><p><a href="13_active.html">Selector <strong>:active</strong></a></p></li>
        <li><p><a href="14_focus.html">Selector <strong>:focus</strong></a></p></li>
        <li><p><a href="15_custom.html">Customm Properties</a></p></li>
      </ol>`;
  }
});