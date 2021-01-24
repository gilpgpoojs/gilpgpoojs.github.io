 /** Datos de un usuario
 * @typedef {Object} User
 * @property {string} email
 * @property {string} displayName
 * @property {string} photoURL
 */
/** https://firebase.google.com/docs/reference/js/firebase.auth.AuthProvider
 *  @typedef {Object} AuthProvider
 */
/** https://firebase.google.com/docs/reference/js/firebase.auth.GoogleAuthProvider
 * @typedef {Object} GoogleAuthProvider
 * @property {(p:Object)=>AuthProvider} setCustomParameters
 */
/** https://firebase.google.com/docs/reference/js/firebase.auth.Auth
 * @typedef {Object} Auth
 * @property {(Object)=>void} setCustomParameters
 * @property {(provider:AuthProvider)=>Promise<void>} signInWithRedirect
 * @property {()=>Promise<void>} signOut
 * @property {(n:(user: User)=>void, e:(e:Error)=>void)=>void} onAuthStateChanged
 */
/** https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentSnapshot
 * @typedef {Object} DocumentSnapshot
 * @property {boolean} exists
 * @property {string} id
 * @property {()=>Object} data
 *  */
/**  https://firebase.google.com/docs/reference/js/firebase.firestore.CollectionReference
 * @typedef {Object} DocumentReference
 * @property {()=>Promise<DocumentSnapshot>} get
 * @property {(o:Object)=>Promise<void>} set
 * @property {()=>Promise<void>} delete
 *  */
/** https://firebase.google.com/docs/reference/js/firebase.firestore.QuerySnapshot
 * @typedef {Object} 	QuerySnapshot
 * @property {number} size 
 * @property {(f:(d:DocumentSnapshot)=>any)=>void} forEach 
 *  */
/** https://firebase.google.com/docs/reference/js/firebase.firestore.Query
 * @typedef {Object} Query
 * @property {(n:(snap: QuerySnapshot)=>void, e:(e:Error)=>void)=>void} onSnapshot 
 *  */
/** https://firebase.google.com/docs/reference/js/firebase.firestore.CollectionReference
 * @typedef {Object} CollectionReference
 * @property {(ruta:string)=>DocumentReference} doc
 * @property {(campo:string, orden?:string)=>Query} orderBy
 * @property {(n:(snap: QuerySnapshot)=>void, e:(e:Error)=>void)=>void} onSnapshot 
 * @property {(o:Object)=>Promise<void>} add
 *  */
/** https://firebase.google.com/docs/reference/js/firebase.firestore.Firestore
 * @typedef {Object} Firestore
 * @property {(ruta:string)=>CollectionReference} collection
 */
/** https://firebase.google.com/docs/reference/js/firebase.storage.Reference
 * @typedef {Object} 	Reference
 * @property {(datos:FormDataEntryValue)=>Promise<void>} put
 * @property {()=>Promise<string>} getDownloadURL
 * @property {()=>Promise<void>} delete
 */
/** https://firebase.google.com/docs/reference/js/firebase.storage.Storage
 * @typedef {Object} Storage
 * @property {(ruta:string)=>	Reference} ref
 */

export const __tipos = 0;