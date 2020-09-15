// WebSocket is part of the web API and is provided by the browser so no need for a require.
const connection = new WebSocket("ws://localhost:3000");
const logWindow = document.querySelector("#log-window");

connection.onopen = () => {
    connection.send("Hello from the client!");
};

connection.onmessage = (event) => {
    logWindow.innerHTML = event.data
}
