fetch('images.json')
    .then(response => response.json())
    .then(images => {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        document.body.style.backgroundImage = `url('${randomImage}')`;
    })
    .catch(error => console.error('Error loading images:', error));