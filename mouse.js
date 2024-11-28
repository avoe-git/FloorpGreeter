// extended.js
window.addEventListener("DOMContentLoaded", () => {
  const spotlight = document.querySelector(".spotlight");

  let spotlightSize = "transparent 50px, rgba(0, 0, 0, 0.35) 100px";

  window.addEventListener("mousemove", (e) => updateSpotlight(e));

  function updateSpotlight(e) {
    const x = (e.pageX / window.innerWidth) * 100;
    const y = (e.pageY / window.innerHeight) * 100;

    spotlight.style.backgroundImage = `radial-gradient(circle at ${x}% ${y}%, ${spotlightSize})`;
    spotlight.style.display = "block";
  }
});

const cursorRounded = document.querySelector(".rounded");

const moveCursor = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  cursorRounded.style.display = "block";
};

window.addEventListener("mousemove", moveCursor);
