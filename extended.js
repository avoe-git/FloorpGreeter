const eventNow = 'newyear';
if (eventNow == 'default') {
  fetch("images.json")
    .then((response) => response.json())
    .then((images) => {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      document.body.style.backgroundImage = `url('${randomImage}')`;
    })
    .catch((error) => console.error("Error loading images:", error));
}
else {
  document.body.style.backgroundImage = `url('/Wallpapers/Events/wallpaper-${eventNow}.jpg')`;
  document.getElementById("eventicon").src = `/Icons/event-${eventNow}.png`;
  document.getElementById('eventButton').addEventListener("click", showEvent);
  function showEvent() {
    alert('Event: ' + eventNow);
  };
}
function ChangeImage() {
  if (eventNow == 'default') {
    fetch("images.json")
    .then((response) => response.json())
    .then((images) => {
      const newImage = images[Math.floor(Math.random() * images.length)];
      document.body.style.backgroundImage = `url('${newImage}')`;
    });
  }
}