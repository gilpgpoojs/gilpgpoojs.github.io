/* Espera 11 minutos después de hacer los cambios en tu sitio, para depués
 * actualizar este archivo. */
const CACHE = "gilpoojs-1.03";

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
  "5_clases/src/1_privado_bien.html",
  "5_clases/src/2_privado_mal.html",
  "5_clases/2_contenido.html",
  "5_clases/3_clases.html",
  "5_clases/4_instancias.html",
  "5_clases/5_constructor.html",
  "5_clases/6_privado.html",
  "5_clases/7_setters.html",
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
  "cmp/base.js",
  "cmp/mi-footer.js",
  "cmp/mi-nav.js",
  "css/estilos.css",
  "css/material-icons.css",
  "css/MaterialIcons-Regular.codepoints",
  "css/MaterialIcons-Regular.ttf",
  "css/mi-footer.css",
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
  "manifest.json",
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