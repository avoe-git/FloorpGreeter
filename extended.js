fetch("images.json")
  .then((response) => response.json())
  .then((images) => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = `url('${randomImage}')`;
  })
  .catch((error) => console.error("Error loading images:", error));
function ChangeImage() {
  fetch("images.json")
    .then((response) => response.json())
    .then((images) => {
      const newImage = images[Math.floor(Math.random() * images.length)];
      document.body.style.backgroundImage = `url('${newImage}')`;
    });
}

function BlurMode() {
  if (isBlurred === True) {
  }
}
