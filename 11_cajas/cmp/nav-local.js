/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

customElements.define("nav-local", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ol>
        <li><p><a href="index.html">Modelo de Cajas de CSS</a></p></li>
        <li><p><a href="2_contenido.html">Contenido</a></p></li>
        <li><p><a href="3_div.html">El Elemento <strong>div</strong></a></li>
        <li><p><a href="4_span.html">El Elemento <strong>span</strong></a></li>
        <li><p><a href="5_display.html">La Propiedad <strong>display</strong></a></li>
        <li><p><a href="6_ejemplo_display.html">Ejemplo de <strong>display</strong></a></li>
        <li><p><a href="7_cajas.html">Cajas</a></li>
        <li><p><a href="8_ejemplo_cajas.html">Ejemplo de Cajas</a></li>
        <li><p><a href="9_box-sizing.html">La Propiedad <strong>box-sizing</strong></a></li>
        <li><p><a href="10_ejemplo-box-sizing.html">Ejemplo de <strong>box-sizing</strong></a></li>
        <li><p><a href="11_margenes.html">Márgenes</a></li>
        <li><p><a href="12_ejemplo_margenes.html">Ejemplo de Márgenes</a></li>
        <li><p><a href="13_relleno.html">Relleno</a></li>
        <li><p><a href="14_ejemplo_relleno.html">Ejemplo de Relleno</a></li>
        <li><p><a href="15_partes_borde.html">Partes de un Borde</a></li>
        <li><p><a href="16_bordes.html">Propiedades para Bordes</a></li>
        <li><p><a href="17_esquinas_redondas.html">Esquinas Redondas</a></li>
        <li><p><a href="18_ejemplo_borde.html">Ejemplo de Borde</a></li>
      </ol>`;
  }
});