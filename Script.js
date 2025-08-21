document.addEventListener("DOMContentLoaded", () => {
    const openButton = document.getElementById('open-button');
    const openingGimmick = document.getElementById('opening-gimmick');
    const mainContainer = document.getElementById('main-content');
    const invitationCard = document.querySelector('.invitation-card');
    
    // --- Bagian 1: Logika Pembuka Undangan & Efek Ketikan ---
    const titleElement = document.getElementById('typing-title');
    const titleText = "Faruq & Lia";
    let i = 0;

    function typeWriter() {
        if (i < titleText.length) {
            titleElement.innerHTML += titleText.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        } else {
            titleElement.style.borderRight = "none"; // Hapus kursor setelah selesai
        }
    }

    typeWriter(); // Mulai efek ketikan saat halaman dimuat

    openButton.addEventListener('click', () => {
        openingGimmick.classList.add('hidden');
        mainContainer.style.opacity = '1';
        document.body.style.overflow = 'auto'; // Aktifkan scroll
        
        setTimeout(() => {
            invitationCard.classList.add('visible');
            playMusic();
        }, 500);
    });

    // --- Bagian 2: Animasi Polaroid ---
    const polaroidContainer = document.querySelector('.polaroid-container');
    // Ganti dengan link gambar Anda sendiri

const images = [
    './_GSD1544.jpg',
    './_GSD1784.jpg',
    './_GSD1791.jpg',
    './_GSD2106.jpg',
    './_GSD1223.jpg'
];



    function createPolaroid(imageUrl) {
        const polaroid = document.createElement('div');
        polaroid.className = 'polaroid';
        
        const img = document.createElement('img');
        img.src = imageUrl;
        
        polaroid.appendChild(img);
        polaroidContainer.appendChild(polaroid);

        // Atur posisi dan animasi acak
        polaroid.style.left = `${Math.random() * 90}vw`;
        polaroid.style.animationDuration = `${Math.random() * 15 + 15}s`;
        polaroid.style.animationDelay = `${Math.random() * 5}s`;
    }

    images.forEach(createPolaroid);

    // --- Bagian 3: Kontrol Musik ---
    const music = document.getElementById('background-music');
    const playBtn = document.getElementById('play-pause-btn');

    function playMusic() {
        if (music.paused) {
            music.play();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            music.pause();
            playBtn.innerHTML = '<i class="fas fa-music"></i>';
        }
    }

    playBtn.addEventListener('click', playMusic);
});
