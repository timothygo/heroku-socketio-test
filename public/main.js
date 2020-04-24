window.addEventListener("load", () => {
  const socket = io();
  const viewerCountDOM = document.querySelector("#viewerCount");
  socket.on("viewers_count", count => {
    viewerCountDOM.innerHTML = count;
  });
});
