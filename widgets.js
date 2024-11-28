function fetchMediaInfo() {
  fetch("data.txt")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("media-info").innerText = data;
    })
    .catch((error) => {
      console.error("Error fetching media info:", error);
    });
}

// Fetch the media info every second
setInterval(fetchMediaInfo, 10000);
