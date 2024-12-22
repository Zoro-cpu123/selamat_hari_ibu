document.addEventListener('DOMContentLoaded', function () {
    const petalContainer = document.getElementById('petal-container');
    const flipButton = document.querySelector('.flip-button');
    const linkmp3 = document.getElementById("linkmp3");
    let isFlipping = false;
    const audio = new Audio(linkmp3.src);

    function createPetal() {
        const petal = document.createElement('div');
        petal.className = 'petal';
        audio.play();

        // Random size between 10px and 20px
        const size = Math.random() * 10 + 10;
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;

        // Random starting position
        petal.style.left = `${Math.random() * 100}vw`;

        // Random animation duration between 4s and 8s
        const duration = Math.random() * 4 + 4;
        petal.style.animationDuration = `${duration}s`;

        // Random opacity
        petal.style.opacity = Math.random() * 0.5 + 0.3;

        petalContainer.appendChild(petal);

        // Remove petal after animation
        setTimeout(() => {
            petal.remove();
        }, duration * 1000);
    }

    // Create new petals periodically
    setInterval(createPetal, 300);

    let currentPageIndex = 0;
    const pages = [
        document.querySelector('.current-page'),
        document.querySelector('.next-page'),
        document.querySelector('.gallery-page')
    ];

    // Handle page flipping
    flipButton.addEventListener('click', () => {
        if (isFlipping) return;
        isFlipping = true;

        const currentPage = pages[currentPageIndex];
        const nextPage = pages[currentPageIndex + 1];

        // Start flipping animation
        currentPage.style.zIndex = '3';
        nextPage.style.zIndex = '1';

        if (currentPageIndex < pages.length - 1) {
            // Start flipping animation
            currentPage.style.zIndex = '3';
            nextPage.style.zIndex = '1';

            requestAnimationFrame(() => {
                currentPage.classList.add('flipped');

                // After the flip animation completes
                setTimeout(() => {
                    currentPage.style.zIndex = '1';
                    nextPage.style.zIndex = '2';
                    isFlipping = false;
                    currentPageIndex++;

                    // Hide flip button on last page
                    if (currentPageIndex === pages.length - 1) {
                        flipButton.style.display = 'none';
                    }
                }, 1500);
            });
        }
    });

    const text = `Untuk semua cinta dan pengorbananmu, Meski engkau telah meninggalkan dunia ini, ibu cintamu tetap menjadi cahaya dalam hidupku.`;

    const messageElement = document.getElementById("message")
    const photoElement = document.getElementById("photo");
    let index = 0;

    function typeText() {
        if (index < text.length) {
            messageElement.innerHTML += text[index] === "\n" ? "<br>" : text[index];
            index++;
            setTimeout(typeText, 50); // Kecepatan pengetikan
        } else {
            showPhoto(); // Panggil fungsi untuk menampilkan foto
        }
    }


    function showPhoto() {
        photoElement.style.display = "block"; // Tampilkan gambar
        setTimeout(() => {
            photoElement.style.opacity = 1; // Efek fade-in
        }, 50);
    }

    typeText();
});
