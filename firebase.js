// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Función para enviar pedidos
export function enviarPedido(pedido) {
  push(ref(db, "pedidos"), pedido);
}

// Función para escuchar pedidos
export function escucharPedidos(callback) {
  onChildAdded(ref(db, "pedidos"), (snapshot) => {
    callback(snapshot.val());
  });
}
