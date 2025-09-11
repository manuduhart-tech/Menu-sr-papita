// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCdLdvJG1M3t8FgL985ExGwnjsALwZ5JVg",
  authDomain: "menu-sr-papita.firebaseapp.com",
  databaseURL: "https://menu-sr-papita-default-rtdb.firebaseio.com",
  projectId: "menu-sr-papita",
  storageBucket: "menu-sr-papita.appspot.com",
  messagingSenderId: "396377207044",
  appId: "1:396377207044:web:908a094deac37f15762051"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Función para enviar un pedido
export function enviarPedido(pedido) {
  push(ref(db, "pedidos"), pedido);
}

// Función para escuchar pedidos
export function escucharPedidos(callback) {
  onChildAdded(ref(db, "pedidos"), (snapshot) => {
    callback(snapshot.val());
  });
}
