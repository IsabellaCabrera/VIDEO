const socket = io("http://localhost:5050", { path: "/rea-time" });

document.getElementById("get-btn").addEventListener("click", getUsers);

function getUsers() {
  fetch("http://localhost:5050/users")
    .then((response) => response.json())
    .then((data) => console.log("get response", data))
    .catch((error) => console.error("Error:", error));
}

//Se envia el endpoint a la ruta /notify
const sendCoordenates = async () => {
  // socket.emit("coordenadas", { x: 123, y: 432 });
  let response = await fetch("/notify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: "Hola"})
  });

  response = await response.json();
  
  console.log(response);
};

document.getElementById("event-btn").addEventListener("click", sendCoordenates);
