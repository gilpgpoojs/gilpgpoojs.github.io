// @ts-nocheck
/* Espera 11 minutos después de hacer los cambios en tu sitio, para depués
 * actualizar este archivo. */
const CACHE = "gilpgpoojs-1.13";

/**  Archivos requeridos para que la aplicación funcione fuera de línea. */
const ARCHIVOS = [
  "3_funciones/cmp/ctrl-diapositiva.js",
  "3_funciones/cmp/nav-local.js",
  "3_funciones/2_contenido.html",
  "3_funciones/3_flecha.html",
  "3_funciones/4_recursividad.html",
  "3_funciones/index.html",
  "4_obj_basicos/cmp/ctrl-diapositiva.js",
  "4_obj_basicos/cmp/nav-local.js",
  "4_obj_basicos/img/hormiga1.svg",
  "4_obj_basicos/img/hormiga2.svg",
  "4_obj_basicos/img/hormiga3.svg",
  "4_obj_basicos/img/hormiga4.svg",
  "4_obj_basicos/2_contenido.html",
  "4_obj_basicos/3_paso.html",
  "4_obj_basicos/4_literales.html",
  "4_obj_basicos/5_string.html",
  "4_obj_basicos/index.html",
  "5_clases/cmp/ctrl-diapositiva.js",
  "5_clases/cmp/nav-local.js",
  "5_clases/img/reina.svg",
  "5_clases/2_contenido.html",
  "5_clases/3_clases.html",
  "5_clases/4_instancias.html",
  "5_clases/5_constructor.html",
  "5_clases/6_setters.html",
  "5_clases/index.html",
  "6_herencia/cmp/ctrl-diapositiva.js",
  "6_herencia/cmp/nav-local.js",
  "6_herencia/src/1_custom.html",
  "6_herencia/2_contenido.html",
  "6_herencia/3_constructores.html",
  "6_herencia/4_sobreescritura.html",
  "6_herencia/5_custom.html",
  "6_herencia/index.html",
  "7_arreglos/cmp/ctrl-diapositiva.js",
  "7_arreglos/cmp/nav-local.js",
  "7_arreglos/img/arreglos.svg",
  "7_arreglos/img/arrobjs.svg",
  "7_arreglos/2_contenido.html",
  "7_arreglos/3_basicos.html",
  "7_arreglos/4_objetos.html",
  "7_arreglos/index.html",
  "8_asociaciones/cmp/ctrl-diapositiva.js",
  "8_asociaciones/cmp/nav-local.js",
  "8_asociaciones/img/a_muchos.svg",
  "8_asociaciones/img/a_uno.svg",
  "8_asociaciones/img/agregacion.svg",
  "8_asociaciones/img/clases_a_muchos.svg",
  "8_asociaciones/img/clases_a_uno.svg",
  "8_asociaciones/img/clases_muchos_a_muchos.svg",
  "8_asociaciones/img/clases_uno_a_muchos.svg",
  "8_asociaciones/img/clases_uno_a_uno_flechas.svg",
  "8_asociaciones/img/clases_uno_a_uno.svg",
  "8_asociaciones/img/composicion.svg",
  "8_asociaciones/img/muchos_a_muchos.svg",
  "8_asociaciones/img/uno_a_muchos.svg",
  "8_asociaciones/img/uno_a_uno.svg",
  "8_asociaciones/src/1_asociaciones.html",
  "8_asociaciones/2_contenido.html",
  "8_asociaciones/3_uno.html",
  "8_asociaciones/4_muchos.html",
  "8_asociaciones/5_uno_a_uno.html",
  "8_asociaciones/6_uno_a_muchos.html",
  "8_asociaciones/7_muchos_a_muchos.html",
  "8_asociaciones/8_agregacion.html",
  "8_asociaciones/9_composicion.html",
  "8_asociaciones/10_ejemplo.html",
  "8_asociaciones/index.html",
  "9_polimorfismo/cmp/ctrl-diapositiva.js",
  "9_polimorfismo/cmp/nav-local.js",
  "9_polimorfismo/src/1_polimorfismo.html",
  "9_polimorfismo/2_contenido.html",
  "9_polimorfismo/3_sobreescritura.html",
  "9_polimorfismo/4_interfaces.html",
  "9_polimorfismo/5_abstractas.html",
  "9_polimorfismo/6_ejemplo.html",
  "9_polimorfismo/index.html",
  "10_excepciones/cmp/ctrl-diapositiva.js",
  "10_excepciones/cmp/nav-local.js",
  "10_excepciones/img/throw.svg",
  "10_excepciones/img/try-catch-finally.svg",
  "10_excepciones/img/try-catch.svg",
  "10_excepciones/img/try-error-catch-finally.svg",
  "10_excepciones/img/try-error-catch.svg",
  "10_excepciones/img/try-error-finally.svg",
  "10_excepciones/img/try-finally.svg",
  "10_excepciones/src/1_try-finally.html",
  "10_excepciones/src/2_anidado.html",
  "10_excepciones/src/3_formulario.html",
  "10_excepciones/2_contenido.html",
  "10_excepciones/3_throw.html",
  "10_excepciones/4_try-catch.html",
  "10_excepciones/5_try-finally.html",
  "10_excepciones/6_try-catch-finally.html",
  "10_excepciones/7_anidado.html",
  "10_excepciones/8_formulario.html",
  "10_excepciones/index.html",
  "11_cajas/cmp/ctrl-diapositiva.js",
  "11_cajas/cmp/nav-local.js",
  "11_cajas/src/1_display.html",
  "11_cajas/src/2_cajas.html",
  "11_cajas/src/3_box-sizing.html",
  "11_cajas/src/4_margenes.html",
  "11_cajas/src/5_relleno.html",
  "11_cajas/src/6_borde.html",
  "11_cajas/2_contenido.html",
  "11_cajas/3_div.html",
  "11_cajas/4_span.html",
  "11_cajas/5_display.html",
  "11_cajas/6_ejemplo_display.html",
  "11_cajas/7_cajas.html",
  "11_cajas/8_ejemplo_cajas.html",
  "11_cajas/9_box-sizing.html",
  "11_cajas/10_ejemplo-box-sizing.html",
  "11_cajas/11_margenes.html",
  "11_cajas/12_ejemplo_margenes.html",
  "11_cajas/13_relleno.html",
  "11_cajas/14_ejemplo_relleno.html",
  "11_cajas/15_partes_borde.html",
  "11_cajas/16_bordes.html",
  "11_cajas/17_esquinas_redondas.html",
  "11_cajas/18_ejemplo_borde.html",
  "11_cajas/index.html",
  "12_promesas/cmp/ctrl-diapositiva.js",
  "12_promesas/cmp/nav-local.js",
  "12_promesas/src/1_promesas1.html",
  "12_promesas/src/2_async.html",
  "12_promesas/src/3_crea_promesa.html",
  "12_promesas/src/4_promise_all.html",
  "12_promesas/2_contenido.html",
  "12_promesas/3_original.html",
  "12_promesas/4_async-await.html",
  "12_promesas/5_crea.html",
  "12_promesas/6_all.html",
  "12_promesas/index.html",
  "13_posicionamiento/cmp/ctrl-diapositiva.js",
  "13_posicionamiento/cmp/nav-local.js",
  "13_posicionamiento/src/1_fixed.html",
  "13_posicionamiento/src/2_relative.html",
  "13_posicionamiento/src/3_absolute.html",
  "13_posicionamiento/src/4_sticky.html",
  "13_posicionamiento/2_contenido.html",
  "13_posicionamiento/3_propiedades.html",
  "13_posicionamiento/4_position.html",
  "13_posicionamiento/5_ejemplo_fixed.html",
  "13_posicionamiento/6_ejemplo_relative.html",
  "13_posicionamiento/7_ejemplo_absolute.html",
  "13_posicionamiento/8_ejemplo_sticky.html",
  "13_posicionamiento/index.html",
  "14_patrones/cmp/ctrl-diapositiva.js",
  "14_patrones/cmp/nav-local.js",
  "14_patrones/src/1_mvc.html",
  "14_patrones/2_contenido.html",
  "14_patrones/3_concepto.html",
  "14_patrones/4_singleton.html",
  "14_patrones/5_factory.html",
  "14_patrones/6_proxy.html",
  "14_patrones/7_mvc.html",
  "14_patrones/index.html",
  "15_mas_css/cmp/ctrl-diapositiva.js",
  "15_mas_css/cmp/nav-local.js",
  "15_mas_css/src/1_trans.html",
  "15_mas_css/src/2_todos.html",
  "15_mas_css/src/3_id.html",
  "15_mas_css/src/4_class.html",
  "15_mas_css/src/5_hijo.html",
  "15_mas_css/src/6_descendiente.html",
  "15_mas_css/src/7_siguiente.html",
  "15_mas_css/src/8_posterior.html",
  "15_mas_css/src/9_lista.html",
  "15_mas_css/src/10_active.html",
  "15_mas_css/src/11_focus.html",
  "15_mas_css/src/12_custom.html",
  "15_mas_css/2_contenido.html",
  "15_mas_css/3_trans.html",
  "15_mas_css/4_ej_trans.html",
  "15_mas_css/5_todos.html",
  "15_mas_css/6_id.html",
  "15_mas_css/7_class.html",
  "15_mas_css/8_hijo.html",
  "15_mas_css/9_descendiente.html",
  "15_mas_css/10_siguiente.html",
  "15_mas_css/11_posterior.html",
  "15_mas_css/12_lista.html",
  "15_mas_css/13_active.html",
  "15_mas_css/14_focus.html",
  "15_mas_css/15_custom.html",
  "15_mas_css/index.html",
  "16_bd/cmp/ctrl-diapositiva.js",
  "16_bd/cmp/nav-local.js",
  "16_bd/img/casos_bd.svg",
  "16_bd/img/entidad_relacion.svg",
  "16_bd/img/favicon.ico",
  "16_bd/img/no_sql.svg",
  "16_bd/img/pp.gif",
  "16_bd/img/qk.gif",
  "16_bd/src/init.js",
  "16_bd/src/LICENSE.html",
  "16_bd/2_contenido.html",
  "16_bd/3_casos.html",
  "16_bd/4_er.html",
  "16_bd/5_no_rel.html",
  "16_bd/6_ejemplo.html",
  "16_bd/7_instrucciones.html",
  "16_bd/8_archivos.html",
  "16_bd/9_footer.html",
  "16_bd/10_progreso.html",
  "16_bd/11_tipos.html",
  "16_bd/12_util.html",
  "16_bd/13_init.html",
  "16_bd/14_index.html",
  "16_bd/15_CtrlSesion.html",
  "16_bd/16_fabrica.html",
  "16_bd/17_seguridad.html",
  "16_bd/18_nav.html",
  "16_bd/19_chat.html",
  "16_bd/20_CtrlChat.html",
  "16_bd/21_pasatiempos.html",
  "16_bd/22_CtrlPasatiempos.html",
  "16_bd/23_pasatiempoNuevo.html",
  "16_bd/24_CtrlPasatiempoNuevo.html",
  "16_bd/25_navegacion.html",
  "16_bd/26_pasatiempo.html",
  "16_bd/27_CtrlPasatiempo.html",
  "16_bd/28_usuarios.html",
  "16_bd/29_CtrlUsuarios.html",
  "16_bd/30_usuarioNuevo.html",
  "16_bd/31_CtrlUsuarioNuevo.html",
  "16_bd/32_usuario.html",
  "16_bd/33_CtrlUsuario.html",
  "16_bd/34_js_usuarios.html",
  "16_bd/35_storage.html",
  "16_bd/36_tiposFire.html",
  "16_bd/37_estilos.html",
  "16_bd/38_listas.html",
  "16_bd/39_nav_css.html",
  "16_bd/40_favicon.html",
  "16_bd/41_README.html",
  "16_bd/42_LICENSE.html",
  "16_bd/index.html",
  "cmp/base.js",
  "cmp/mi-footer.js",
  "cmp/mi-nav.js",
  "css/estilos.css",
  "css/gentium-book-basic-v11-latin-700.woff",
  "css/gentium-book-basic-v11-latin-700.woff2",
  "css/gentium-book-basic-v11-latin-700italic.woff",
  "css/gentium-book-basic-v11-latin-700italic.woff2",
  "css/gentium-book-basic-v11-latin-italic.woff",
  "css/gentium-book-basic-v11-latin-italic.woff2",
  "css/gentium-book-basic-v11-latin-regular.woff",
  "css/gentium-book-basic-v11-latin-regular.woff2",
  "css/gentium-book-basic.css",
  "css/material-icons.css",
  "css/MaterialIcons-Regular.codepoints",
  "css/MaterialIcons-Regular.ttf",
  "css/mi-footer.css",
  "css/ubuntu-mono-v10-latin-700.woff",
  "css/ubuntu-mono-v10-latin-700.woff2",
  "css/ubuntu-mono-v10-latin-700italic.woff",
  "css/ubuntu-mono-v10-latin-700italic.woff2",
  "css/ubuntu-mono-v10-latin-italic.woff",
  "css/ubuntu-mono-v10-latin-italic.woff2",
  "css/ubuntu-mono-v10-latin-regular.woff",
  "css/ubuntu-mono-v10-latin-regular.woff2",
  "css/ubuntu-mono.css",
  "css/ubuntu-v15-latin-700.woff",
  "css/ubuntu-v15-latin-700.woff2",
  "css/ubuntu-v15-latin-700italic.woff",
  "css/ubuntu-v15-latin-700italic.woff2",
  "css/ubuntu-v15-latin-italic.woff",
  "css/ubuntu-v15-latin-italic.woff2",
  "css/ubuntu-v15-latin-regular.woff",
  "css/ubuntu-v15-latin-regular.woff2",
  "css/ubuntu.css",
  "img/icono256.png",
  "img/icono1024.png",
  "img/icono2048.png",
  "js/registraServiceWorker.js",
  "js/title.js",
  "lib/comun.js",
  "lib/ctrl-diapositiva.css",
  "lib/CtrlDiapositiva.js",
  "lib/layout-cajon_shadow.js",
  "lib/layout-cajon.js",
  "lib/muestra-codigo_shadow.js",
  "lib/muestra-codigo.js",
  "lib/utilHtml.js",
  "2_sw.html",
  "favicon.ico",
  "index.html",
  "LICENSE",
  "manifest.json",
  "README.md",
  '/'
];

self.addEventListener("install", evt => {
  console.log("Service Worker instalado.");
  evt.waitUntil(cargaCache());
});

self.addEventListener("fetch", evt => {
  if (evt.request.method === "GET") {
    evt.respondWith(usaCache(evt));
  }
});

self.addEventListener("activate", () => console.log("Service Worker activo."));

async function cargaCache() {
  console.log("Intentando cargar cache: " + CACHE);
  const cache = await caches.open(CACHE);
  await cache.addAll(ARCHIVOS);
  console.log("Cache cargado: " + CACHE);
}

async function usaCache(evt) {
  const cache = await caches.open(CACHE);
  const response = await cache.match(evt.request, { ignoreSearch: true });
  if (response) {
    return response;
  } else {
    return fetch(evt.request);
  }
}