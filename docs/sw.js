/* Espera 11 minutos después de hacer los cambios en tu sitio, para depués
 * actualizar este archivo. */

/**
 * @typedef {Object} ExtendableEvent
 * @property {(promise: Promise) => any} waitUntil
 */

/**
 * @typedef {Object} FetchEvent
 * @property {Request} request
 * @property {(promise: Promise) => any} respondWith
 */

const CACHE = "cache"

const VERSION = "4.1"

const ARCHIVOS = [
  "/favicon.ico",
   "/img/icono/160x30.png",
   "/img/icono/160x30.webp",
   "/img/icono/80x15.png",
   "/img/icono/icono1024.png",
   "/img/icono/icono2048.png",
   "/img/icono/icono256.png",
   "/img/icono/maskable_icon.png",
   "/img/icono/maskable_icon2730.png",
   "/img/icono/maskable_icon_x128.png",
   "/img/icono/maskable_icon_x192.png",
   "/img/icono/maskable_icon_x384.png",
   "/img/icono/maskable_icon_x48.png",
   "/img/icono/maskable_icon_x512.png",
   "/img/icono/maskable_icon_x72.png",
   "/img/icono/maskable_icon_x96.png",
   "/img/m02objsBasicos/hormiga1.svg",
   "/img/m02objsBasicos/hormiga2.svg",
   "/img/m02objsBasicos/hormiga3.svg",
   "/img/m02objsBasicos/hormiga4.svg",
   "/img/m03clases/reina.svg",
   "/img/m05arreglos/arreglos.svg",
   "/img/m05arreglos/arrobjs.svg",
   "/img/m07excepciones/throw.svg",
   "/img/m07excepciones/try-catch-finally.svg",
   "/img/m07excepciones/try-catch.svg",
   "/img/m07excepciones/try-error-catch-finally.svg",
   "/img/m07excepciones/try-error-catch.svg",
   "/img/m07excepciones/try-error-finally.svg",
   "/img/m07excepciones/try-finally.svg",
   "/img/m09asociaciones/agregacion.svg",
   "/img/m09asociaciones/a_muchos.svg",
   "/img/m09asociaciones/a_uno.svg",
   "/img/m09asociaciones/clases_a_muchos.svg",
   "/img/m09asociaciones/clases_a_uno.svg",
   "/img/m09asociaciones/clases_muchos_a_muchos.svg",
   "/img/m09asociaciones/clases_uno_a_muchos.svg",
   "/img/m09asociaciones/clases_uno_a_uno.svg",
   "/img/m09asociaciones/clases_uno_a_uno_flechas.svg",
   "/img/m09asociaciones/composicion.svg",
   "/img/m09asociaciones/muchos_a_muchos.svg",
   "/img/m09asociaciones/uno_a_muchos.svg",
   "/img/m09asociaciones/uno_a_uno.svg",
   "/index.html",
   "/js/muestra-codigo.js",
   "/m01funciones/index.html",
   "/m01funciones/mAfunciones.html",
   "/m01funciones/mBInvocaciones.html",
   "/m01funciones/mCfuncionesFunciones.html",
   "/m01funciones/mDfuncionesParametros.html",
   "/m01funciones/mEfuncionesParametrosExpresiones.html",
   "/m01funciones/mFfuncionesReturn.html",
   "/m01funciones/mGfuncionesFlecha.html",
   "/m01funciones/mHrecursividad.html",
   "/m01funciones/mIresumen.html",
   "/m01funciones/print.html",
   "/m02objsBasicos/index.html",
   "/m02objsBasicos/mApaso.html",
   "/m02objsBasicos/mBliterales.html",
   "/m02objsBasicos/mCstring.html",
   "/m02objsBasicos/mDstringConversion.html",
   "/m02objsBasicos/mEstringNumber.html",
   "/m02objsBasicos/mFresumen.html",
   "/m02objsBasicos/print.html",
   "/m03clases/index.html",
   "/m03clases/mAclass.html",
   "/m03clases/mBobjeto/index.html",
   "/m03clases/mBobjeto/m01.html",
   "/m03clases/mBobjeto/m02.html",
   "/m03clases/mBobjeto/m03.html",
   "/m03clases/mBobjeto/m04.html",
   "/m03clases/mBobjeto/m05.html",
   "/m03clases/mBobjeto/m06.html",
   "/m03clases/mBobjeto/m07.html",
   "/m03clases/mBobjeto/m08.html",
   "/m03clases/mBobjeto/m09.html",
   "/m03clases/mBobjeto/m10.html",
   "/m03clases/mBobjeto/m11.html",
   "/m03clases/mBobjeto/m12.html",
   "/m03clases/mBobjeto/m13.html",
   "/m03clases/mBobjeto/m14.html",
   "/m03clases/mBobjeto/m15depura.html",
   "/m03clases/mBobjeto/print.html",
   "/m03clases/mCinstObj.html",
   "/m03clases/mDgetters.html",
   "/m03clases/mEresumen.html",
   "/m03clases/print.html",
   "/m04herencia/index.html",
   "/m04herencia/mAconstructores.html",
   "/m04herencia/mBsobrescritura.html",
   "/m04herencia/mCresumen.html",
   "/m04herencia/print.html",
   "/m05arreglos/index.html",
   "/m05arreglos/mAarrBasico.html",
   "/m05arreglos/mBarrCont.html",
   "/m05arreglos/mCforOf.html",
   "/m05arreglos/mDforEach.html",
   "/m05arreglos/mEarrInst.html",
   "/m05arreglos/mFarrLit.html",
   "/m05arreglos/mGforEachObj.html",
   "/m05arreglos/mHresumen.html",
   "/m05arreglos/print.html",
   "/m06polimorfismo/index.html",
   "/m06polimorfismo/mAsobrescritura.html",
   "/m06polimorfismo/mBInterfaces.html",
   "/m06polimorfismo/mCInterfacesJs.html",
   "/m06polimorfismo/mDabstractas.html",
   "/m06polimorfismo/mEresumen.html",
   "/m06polimorfismo/print.html",
   "/m07excepciones/index.html",
   "/m07excepciones/mAthrow.html",
   "/m07excepciones/mBtryCatch.html",
   "/m07excepciones/mCtryFinally.html",
   "/m07excepciones/mDtryCatchFinally.html",
   "/m07excepciones/mEtryAnidado.html",
   "/m07excepciones/mFformulario.html",
   "/m07excepciones/mGresumen.html",
   "/m07excepciones/print.html",
   "/m08promesas/index.html",
   "/m08promesas/mApromesasOriginales.html",
   "/m08promesas/mBasyncAwait.html",
   "/m08promesas/mCcreaPromesa.html",
   "/m08promesas/mDpromiseAll.html",
   "/m08promesas/mEresumen.html",
   "/m08promesas/print.html",
   "/m09asociaciones/index.html",
   "/m09asociaciones/mAaUno.html",
   "/m09asociaciones/mBaMuchos.html",
   "/m09asociaciones/mCunoAuno.html",
   "/m09asociaciones/mDunoAmuchos.html",
   "/m09asociaciones/mEmuchosAmuchos.html",
   "/m09asociaciones/mFagregacion.html",
   "/m09asociaciones/mGcomposicion.html",
   "/m09asociaciones/mHresumen.html",
   "/m09asociaciones/print.html",
   "/m10patrones/index.html",
   "/m10patrones/mAdefinicion.html",
   "/m10patrones/mBsingleton.html",
   "/m10patrones/mCfactory.html",
   "/m10patrones/mDproxy.html",
   "/m10patrones/mEmvc.html",
   "/m10patrones/mFresumen.html",
   "/m10patrones/print.html",
   "/print.html",
   "/site.webmanifest",
   "/src/m03vistas/Aformulario.html",
   "/src/m03vistas/Bapp.html",
   "/src/m03vistas/Ccampos.html",
   "/src/m03vistas/Dbotones.html",
   "/src/m03vistas/Einterruptor.html",
   "/src/m03vistas/Fgps.html",
   "/src/m03vistas/Garchivos.html",
    "/"]

// @ts-ignore
addEventListener("install", installListener)
// @ts-ignore
addEventListener("fetch", fetchListener)
addEventListener("activate", () => console.log("Service Worker activo."))

/**
 * @param {ExtendableEvent} evt
 */
function installListener(evt) {
 console.log("Service Worker instalando.")
 evt.waitUntil(cargaCache());
}

/**
 * @param {FetchEvent} evt
 */
function fetchListener(evt) {
 if (evt.request.method === "GET") {
  evt.respondWith(usaCache(evt))
 }
}

async function cargaCache() {
 console.log("Intentando cargar cache:", CACHE)
 const keys = await caches.keys()
 for (const key of keys) {
  await caches.delete(key)
 }
 const cache = await caches.open(CACHE)
 await cache.addAll(ARCHIVOS)
 console.log("Cache cargado:", CACHE)
 console.log("Versión:", VERSION)
}

/**
 * @param {FetchEvent} evt
 */
async function usaCache(evt) {
 const cache = await caches.open(CACHE)
 const response = await cache.match(evt.request, { ignoreSearch: true })
 if (response) {
  return response
 } else {
  return fetch(evt.request)
 }
}