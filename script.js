
// ==========================================
// DADOS DOS JOGOS (Catálogo Completo)
// ==========================================
let gamesData = {
    ps5: [
        { id: 'ps5-1', title: "God of War Ragnarök", price: "R$ 174,95", oldPrice: "R$ 349,90", promo: true, discount: "-50%", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2322010/library_600x900.jpg", platform: "PS5", videoUrl: "x6oF3Jxu7X0" },
        { id: 'ps5-2', title: "Marvel's Spider-Man 2", price: "R$ 244,93", oldPrice: "R$ 349,90", promo: true, discount: "-30%", image: "https://cdn2.steamgriddb.com/grid/adda5a42ecb35e33fb04e4007f3be44a.png", platform: "PS5", videoUrl: "bgqGdIoa52s" },
        { id: 'ps5-3', title: "Horizon Forbidden West", price: "R$ 299,90", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2420110/library_600x900.jpg", platform: "PS5", videoUrl: "LqXp6z6yv3k" },
        { id: 'ps5-4', title: "Ratchet & Clank", price: "R$ 349,90", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1895880/library_600x900.jpg", platform: "PS5", videoUrl: "ai3o0Xtr6V8" },
        { id: 'ps5-5', title: "Elden Ring", price: "R$ 299,90", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/library_600x900.jpg", platform: "PS5", videoUrl: "E3Huyq7Z_3Y" },
        { id: 'ps5-6', title: "Demon's Souls", price: "R$ 349,90", image: "https://cdn2.steamgriddb.com/grid/7f260734198733fb642f90df1d2b580a.jpg", platform: "PS5", videoUrl: "2TMs2E6cms4" },
        { id: 'ps5-7', title: "Gran Turismo 7", price: "R$ 349,90", image: "https://cdn2.steamgriddb.com/grid/76c059e958407c8e2210f2abb45467a3.png", platform: "PS5", videoUrl: "1ps2n1u6Y_g" },
        { id: 'ps5-8', title: "Resident Evil 4", price: "R$ 249,90", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2050650/library_600x900.jpg", platform: "PS5", videoUrl: "7R69zID5uMA" },
        { id: 'ps5-9', title: "Final Fantasy VII Rebirth", price: "R$ 299,90", oldPrice: "R$ 349,90", promo: true, discount: "-15%", image: "https://cdn2.steamgriddb.com/grid/6c9cee5c24216db635d3b21c25b364d2.png", platform: "PS5", videoUrl: "KOhs9ZLImgE" },
        { id: 'ps5-10', title: "Baldur's Gate 3", price: "R$ 299,90", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/library_600x900.jpg", platform: "PS5", videoUrl: "1TerO3uK7_U" },
        { id: 'ps5-11', title: "Tekken 8", price: "R$ 349,90", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1778820/library_600x900.jpg", platform: "PS5", videoUrl: "vH_u_6Z26Z4" },
        { id: 'ps5-12', title: "Alan Wake 2", price: "R$ 270,00", image: "https://cdn2.steamgriddb.com/grid/a7147fd59ab64d16e49e819733ad2187.png", platform: "PS5", videoUrl: "dlQ3Fe7Apx4" }
    ],
    ps4: [
        { id: 'ps4-1', title: "Bloodborne", price: "R$ 99,90", image: "https://cdn2.steamgriddb.com/grid/12eac4fff4ce43481560396cab0ae0a4.png", platform: "PS4", videoUrl: "G203e1HhixY" },
        { id: 'ps4-2', title: "Ghost of Tsushima", price: "R$ 199,90", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2215430/library_600x900.jpg", platform: "PS4", videoUrl: "m_Yf_79j71o" },
        { id: 'ps4-3', title: "The Last of Us Part II", price: "R$ 199,90", image: "https://cdn2.steamgriddb.com/grid/a6d671b12c0442bae38f1fd6fafe3d6d.png", platform: "PS4", videoUrl: "II5UsqP2JAk" },
        { id: 'ps4-4', title: "God of War (2018)", price: "R$ 99,90", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1593500/library_600x900.jpg", platform: "PS4", videoUrl: "K0u_k-6vRtg" },
        { id: 'ps4-5', title: "Horizon Zero Dawn", price: "R$ 99,90", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1151640/library_600x900.jpg", platform: "PS4", videoUrl: "RRQDqurZJNk" },
        { id: 'ps4-6', title: "Red Dead Redemption 2", price: "R$ 249,90", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/library_600x900.jpg", platform: "PS4", videoUrl: "eaW0tYpxn0k" },
        { id: 'ps4-7', title: "Marvel's Spider-Man", price: "R$ 149,90", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817070/library_600x900.jpg", platform: "PS4", videoUrl: "q4GdJVvdxko" },
        { id: 'ps4-8', title: "Uncharted 4", price: "R$ 99,90", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1659420/library_600x900.jpg", platform: "PS4", videoUrl: "y1Re0P_LKyw" },
        { id: 'ps4-9', title: "The Witcher 3", price: "R$ 149,90", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/library_600x900.jpg", platform: "PS4", videoUrl: "XHrskkBa9ls" },
        { id: 'ps4-10', title: "Sekiro", price: "R$ 199,90", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/814380/library_600x900.jpg", platform: "PS4", videoUrl: "rXMX4YJ7Lks" },
        { id: 'ps4-11', title: "Cyberpunk 2077", price: "R$ 249,90", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/library_600x900.jpg", platform: "PS4", videoUrl: "8X2kIfS6fb8" },
        { id: 'ps4-12', title: "FIFA 23", price: "R$ 199,90", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1811260/library_600x900.jpg", platform: "PS4", videoUrl: "o3V-GvvzjE4" }
    ],
    xbox: [
        { id: 'xb-1', title: "Halo Infinite", price: "R$ 299,00", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1240440/library_600x900.jpg", platform: "Xbox Series X|S", videoUrl: "PyMlV5_K6Wk" },
        { id: 'xb-2', title: "Forza Horizon 5", price: "R$ 149,50", oldPrice: "R$ 299,00", promo: true, discount: "-50%", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1551360/library_600x900.jpg", platform: "Xbox Series X|S", videoUrl: "FYH9n37B7Yw" },
        { id: 'xb-3', title: "Starfield", price: "R$ 279,20", oldPrice: "R$ 349,00", promo: true, discount: "-20%", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1716740/library_600x900.jpg", platform: "Xbox Series X|S", videoUrl: "kfYEiTdsyas" },
        { id: 'xb-4', title: "Sea of Thieves", price: "R$ 199,00", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1172620/library_600x900.jpg", platform: "Xbox Series X|S", videoUrl: "h70XNf8tVvM" },
        { id: 'xb-5', title: "Gears 5", price: "R$ 199,00", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1097840/library_600x900.jpg", platform: "Xbox One", videoUrl: "kSeY_at7R70" },
        { id: 'xb-6', title: "Psychonauts 2", price: "R$ 249,00", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/607080/library_600x900.jpg", platform: "Xbox Series X|S", videoUrl: "Z8fD_C0Z3hI" },
        { id: 'xb-7', title: "Hi-Fi RUSH", price: "R$ 149,00", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817230/library_600x900.jpg", platform: "Xbox Series X|S", videoUrl: "pgd4aU56K_0" },
        { id: 'xb-8', title: "Flight Simulator", price: "R$ 299,00", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1250410/library_600x900.jpg", platform: "Xbox Series X|S", videoUrl: "TYqJALlYmO0" },
        { id: 'xb-9', title: "Hellblade II", price: "R$ 183,20", oldPrice: "R$ 229,00", promo: true, discount: "-20%", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1271310/library_600x900.jpg", platform: "Xbox Series X|S", videoUrl: "2TR0gaG01do" },
        { id: 'xb-10', title: "Grounded", price: "R$ 149,00", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/962130/library_600x900.jpg", platform: "Xbox Series X|S", videoUrl: "Z2ZpE0m2S6k" },
        { id: 'xb-11', title: "Cuphead", price: "R$ 36,99", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/268910/library_600x900.jpg", platform: "Xbox One", videoUrl: "H_I_0v-o9_s" },
        { id: 'xb-12', title: "Ori", price: "R$ 129,00", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1057090/library_600x900.jpg", platform: "Xbox One", videoUrl: "knXpT9K_E_E" }
    ]
};

// ==========================================
// SLIDES DE OFERTA (Banner Principal)
// ==========================================
const psOfferSlides = [
    {
        gameId: 'ps5-1',
        promoTitle: "OFERTA DA SEMANA",
        title: "God of War Ragnarök",
        desc: "O Fimbulwinter se aproxima. Kratos e Atreus devem viajar pelos Nove Reinos em busca de respostas.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2322010/library_600x900.jpg",
        originalPrice: "R$ 349,90",
        promoPrice: "R$ 174,95",
        discount: "-50%",
        platform: "PS5",
        platformClass: "ps5",
        icon: "fa-playstation",
        videoUrl: "https://www.youtube.com/embed/x6oF3Jxu7X0?autoplay=1&mute=1&loop=1&playlist=x6oF3Jxu7X0&controls=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1",
        videoType: "youtube"
    },
    {
        gameId: 'ps5-2',
        promoTitle: "PROMOÇÃO FLASH",
        title: "Marvel's Spider-Man 2",
        desc: "Os Spiders Peter Parker e Miles Morales retornam para uma nova aventura épica na Nova York da Marvel.",
        image: "https://cdn2.steamgriddb.com/grid/adda5a42ecb35e33fb04e4007f3be44a.png",
        originalPrice: "R$ 349,90",
        promoPrice: "R$ 244,93",
        discount: "-30%",
        platform: "PS5",
        platformClass: "ps5",
        icon: "fa-playstation",
        videoUrl: "https://www.youtube.com/embed/bgqGdIoa52s?autoplay=1&mute=1&loop=1&playlist=bgqGdIoa52s&controls=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1",
        videoType: "youtube"
    },
    {
        gameId: 'ps5-9',
        promoTitle: "NOVIDADE",
        title: "FF VII Rebirth",
        desc: "A jornada rumo ao desconhecido continua. Cloud e seus amigos deixam Midgar para trás.",
        image: "https://cdn2.steamgriddb.com/grid/6c9cee5c24216db635d3b21c25b364d2.png",
        originalPrice: "R$ 349,90",
        promoPrice: "R$ 299,90",
        discount: "-15%",
        platform: "PS5",
        platformClass: "ps5",
        icon: "fa-playstation",
        videoUrl: "https://www.youtube.com/embed/KOhs9ZLImgE?autoplay=1&mute=1&loop=1&playlist=KOhs9ZLImgE&controls=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1",
        videoType: "youtube"
    }
];

const xboxOfferSlides = [
    {
        gameId: 'xb-2',
        promoTitle: "OFERTA ESPECIAL",
        title: "Forza Horizon 5",
        desc: "Sua aventura Horizon definitiva aguarda! Explore as paisagens vibrantes do México.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1551360/page_bg_generated_v6b.jpg",
        originalPrice: "R$ 299,00",
        promoPrice: "R$ 149,50",
        discount: "-50%",
        platform: "Xbox Series X|S",
        platformClass: "xbox",
        icon: "fa-xbox",
        videoUrl: "https://www.youtube.com/embed/FYH9n37B7Yw?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=FYH9n37B7Yw&disablekb=1&modestbranding=1",
        videoType: "youtube"
    },
    {
        gameId: 'xb-3',
        promoTitle: "LANÇAMENTO",
        title: "Starfield",
        desc: "Neste RPG de próxima geração ambientado entre as estrelas, crie qualquer personagem que desejar.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1716740/page_bg_generated_v6b.jpg",
        originalPrice: "R$ 349,00",
        promoPrice: "R$ 279,20",
        discount: "-20%",
        platform: "Xbox Series X|S",
        platformClass: "xbox",
        icon: "fa-xbox",
        videoUrl: "https://www.youtube.com/embed/kfYEiTdsyas?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=kfYEiTdsyas&disablekb=1&modestbranding=1",
        videoType: "youtube"
    },
    {
        gameId: 'xb-9',
        promoTitle: "Destaque Game Pass",
        title: "Hellblade II",
        desc: "Uma jornada brutal de sobrevivência em meio ao mito e tormento da Islândia viking.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1271310/page_bg_generated_v6b.jpg",
        originalPrice: "R$ 229,00",
        promoPrice: "R$ 183,20",
        discount: "-20%",
        platform: "Xbox Series X|S",
        platformClass: "xbox",
        icon: "fa-xbox",
        videoUrl: "https://www.youtube.com/embed/2TR0gaG01do?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=2TR0gaG01do&disablekb=1&modestbranding=1",
        videoType: "youtube"
    }
];

// ==========================================
// FUNÇÕES DE RENDERIZAÇÃO
// ==========================================
function createGameCard(game) {
    const isPromo = game.promo === true;
    return `
        <a href="game-details.html?id=${game.id}" class="game-card ${isPromo ? 'promo-card' : ''}">
            <div class="card-image-wrapper">
                <img src="${game.image}" alt="${game.title}" class="card-image">
                ${isPromo ? `<div class="promo-badge">${game.discount}</div>` : ''}
                <div class="card-overlay">
                    <div class="card-info">
                        <div class="card-platform">
                            <i class="fa-brands ${game.platform.includes('PS') ? 'fa-playstation' : 'fa-xbox'}"></i>
                            ${game.platform}
                        </div>
                        <h3 class="card-title">${game.title}</h3>
                        <div class="card-price-container">
                            ${isPromo ? `<span class="old-price-card">${game.oldPrice}</span>` : ''}
                            <div class="card-price">${game.price}</div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    `;
}

function renderGames() {
    const gridPlaystation = document.getElementById('grid-playstation');
    const gridXbox = document.getElementById('grid-xbox');

    if (gridPlaystation) {
        // Unificar PS4 e PS5, removendo duplicatas visuais por título
        const seenTitles = new Set();
        const unifiedPS = [];
        
        // Ordenar promoções primeiro
        const allGames = [...gamesData.ps5, ...gamesData.ps4].sort((a, b) => {
            if (a.promo && !b.promo) return -1;
            if (!a.promo && b.promo) return 1;
            return 0;
        });

        allGames.forEach(game => {
            if (!seenTitles.has(game.title)) {
                seenTitles.add(game.title);
                unifiedPS.push(game);
            }
        });
        
        gridPlaystation.innerHTML = unifiedPS.map(createGameCard).join('');
    }
    
    if (gridXbox) gridXbox.innerHTML = gamesData.xbox.map(createGameCard).join('');
}

window.filterByCategory = function(category, btn) {
    // UI Update
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    const grid = document.getElementById('grid-playstation');
    if (!grid) return;

    const seenTitles = new Set();
    const allGames = [...gamesData.ps5, ...gamesData.ps4].sort((a, b) => (a.promo ? -1 : 1));
    
    let filtered = [];
    allGames.forEach(game => {
        if (!seenTitles.has(game.title)) {
            let match = false;
            if (category === 'all') match = true;
            else if (category === 'promo') match = game.promo === true;
            else if (category === 'ps5') match = game.platform === 'PS5';

            if (match) {
                seenTitles.add(game.title);
                filtered.push(game);
            }
        }
    });

    grid.innerHTML = filtered.map(createGameCard).join('');
    // Animar a entrada dos novos cards
    grid.querySelectorAll('.game-card').forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, i * 30);
    });
};

function initHeroSlider() {
    const slidesContainer = document.querySelector('.slides-container');
    const controlsContainer = document.querySelector('.slider-controls');
    
    if (!slidesContainer || !controlsContainer) return;

    let activeSlides = [];
    if (document.getElementById('grid-playstation')) {
        console.log("Slider: Carregando PlayStation slides");
        activeSlides = psOfferSlides;
    } else if (document.getElementById('grid-xbox')) {
        console.log("Slider: Carregando Xbox slides");
        activeSlides = xboxOfferSlides;
    } else {
        return;
    }

    slidesContainer.innerHTML = activeSlides.map((slide, index) => {
        const bgMedia = slide.videoType === 'youtube'
            ? `<iframe class="slide-video-bg" src="${slide.videoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            : `<video class="slide-video-bg" autoplay loop muted playsinline><source src="${slide.videoUrl}" type="video/mp4"></video>`;
        
        return `
        <div class="slide ${index === 0 ? 'active' : ''}">
            ${bgMedia}
            <div class="slide-content">
                <div class="offer-badge-main">
                    <span class="promo-label">${slide.promoTitle}</span>
                    <span class="discount-tag">${slide.discount}</span>
                </div>
                <h1 class="slide-title">${slide.title}</h1>
                <p class="slide-desc">${slide.desc}</p>
                <div class="offer-price-container">
                    <span class="old-price">${slide.originalPrice}</span>
                    <span class="new-price">${slide.promoPrice}</span>
                </div>
                <div class="slide-actions">
                    <button class="btn btn-primary" onclick="window.location.href='game-details.html?id=${slide.gameId}'">
                        Aproveitar Oferta
                    </button>
                </div>
            </div>
        </div>
    `}).join('');

    controlsContainer.innerHTML = activeSlides.map((_, index) => `
        <div class="dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
    `).join('');

    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;

    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() { goToSlide((currentSlide + 1) % slides.length); }
    function startSlider() { slideInterval = setInterval(nextSlide, 5000); }
    function resetSlider() { clearInterval(slideInterval); startSlider(); }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetSlider();
        });
    });

    startSlider();
}

// =============================================
// PORTAL HOME — Cinematic Animation Engine
// =============================================
function createParticleSystem(canvas, options) {
    if (!canvas) return { start: () => {}, stop: () => {} };
    let ctx;
    try {
        ctx = canvas.getContext('2d');
    } catch (e) {
        return { start: () => {}, stop: () => {} };
    }
    if (!ctx) return { start: () => {}, stop: () => {} };
    let particles = [];
    let animId;
    let W, H;

    function resize() {
        W = canvas.width = canvas.offsetWidth;
        H = canvas.height = canvas.offsetHeight;
    }

    function randomBetween(a, b) { return a + Math.random() * (b - a); }

    function spawnParticle() {
        return {
            x: randomBetween(0, W),
            y: randomBetween(0, H),
            r: randomBetween(options.minR || 1, options.maxR || 3),
            vx: randomBetween(-options.speed, options.speed),
            vy: randomBetween(-options.speed, options.speed),
            alpha: randomBetween(0.1, options.maxAlpha || 0.7),
            color: options.colors[Math.floor(Math.random() * options.colors.length)],
            life: 0,
            maxLife: randomBetween(120, 360),
            glow: options.glow || false
        };
    }

    function init() {
        resize();
        for (let i = 0; i < options.count; i++) particles.push(spawnParticle());
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);
        particles.forEach((p, i) => {
            p.life++;
            if (p.life > p.maxLife) { particles[i] = spawnParticle(); return; }
            const progress = p.life / p.maxLife;
            const fadeAlpha = progress < 0.1 ? progress / 0.1 : progress > 0.8 ? (1 - progress) / 0.2 : 1;
            const alpha = p.alpha * fadeAlpha;
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
            if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
            ctx.save();
            if (p.glow) { ctx.shadowBlur = 12; ctx.shadowColor = p.color; }
            ctx.globalAlpha = alpha;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        });
        animId = requestAnimationFrame(draw);
    }

    function start() { init(); draw(); }
    function stop() { cancelAnimationFrame(animId); }
    window.addEventListener('resize', () => { resize(); });
    return { start, stop };
}

function isTouchDevice() {
    return window.matchMedia('(hover: none) and (pointer: coarse)').matches || ('ontouchstart' in window);
}

function initCustomCursor() {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor || isTouchDevice()) { if(cursor) cursor.style.display = 'none'; return; }

    const ring = cursor.querySelector('.cursor-ring');
    const dot = cursor.querySelector('.cursor-dot');
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX; mouseY = e.clientY;
        dot.style.left = mouseX + 'px'; dot.style.top = mouseY + 'px';
    });

    function animateRing() {
        ringX += (mouseX - ringX) * 0.12;
        ringY += (mouseY - ringY) * 0.12;
        ring.style.left = ringX + 'px'; ring.style.top = ringY + 'px';
        requestAnimationFrame(animateRing);
    }
    animateRing();

    const psHalf = document.getElementById('ps-half'), xboxHalf = document.getElementById('xbox-half');
    if (psHalf) {
        psHalf.addEventListener('mouseenter', () => { cursor.classList.add('hovering', 'ps-cursor'); cursor.classList.remove('xbox-cursor'); });
        psHalf.addEventListener('mouseleave', () => { cursor.classList.remove('hovering', 'ps-cursor'); });
    }
    if (xboxHalf) {
        xboxHalf.addEventListener('mouseenter', () => { cursor.classList.add('hovering', 'xbox-cursor'); cursor.classList.remove('ps-cursor'); });
        xboxHalf.addEventListener('mouseleave', () => { cursor.classList.remove('hovering', 'xbox-cursor'); });
    }
    document.querySelectorAll('.enter-btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
        btn.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
    });
}

function navigateWithEffect(url) {
    const flash = document.getElementById('exit-flash');
    if (!flash) { window.location.href = url; return; }
    flash.style.transition = 'none'; flash.style.opacity = '0'; flash.style.pointerEvents = 'all';
    requestAnimationFrame(() => {
        flash.style.transition = 'opacity 0.35s ease'; flash.style.opacity = '1';
        setTimeout(() => { window.location.href = url; }, 380);
    });
}

function initPortal() {
    const introScreen = document.getElementById('intro-screen'), platformSelector = document.getElementById('platform-selector');
    if (!introScreen || !platformSelector) return;
    const isTouch = isTouchDevice();
    // Partículas (opcional, não trava se falhar)
    try {
        const introParticles = createParticleSystem(document.getElementById('intro-canvas'), {
            count: isTouch ? 25 : 60, speed: 0.4, minR: 0.5, maxR: 2.5, maxAlpha: 0.5, glow: !isTouch,
            colors: ['#0070d1', '#00bfff', '#159b15', '#52d45c', '#ffffff', '#a0c4ff']
        });
        introParticles.start();
        window.introParticlesRef = introParticles;
    } catch(e) { console.warn("Erro ao iniciar partículas da intro"); }

    // Reduzi para 1200ms para ser quase imediato após o carregamento
    const introDuration = 1200; 

    setTimeout(() => {
        // Usar estilo direto em vez de classe CSS para evitar problemas de cache
        introScreen.style.transition = 'opacity 0.8s ease, visibility 0.8s';
        introScreen.style.opacity = '0';
        introScreen.style.visibility = 'hidden';

        setTimeout(() => {
            introScreen.style.display = 'none'; 
            if (window.introParticlesRef) window.introParticlesRef.stop();
            
            platformSelector.classList.remove('hidden');
            platformSelector.style.display = 'flex'; 

            setTimeout(() => {
                const psHalf = document.getElementById('ps-half');
                const xboxHalf = document.getElementById('xbox-half');
                if (psHalf) psHalf.classList.add('revealed');
                setTimeout(() => { 
                    if (xboxHalf) xboxHalf.classList.add('revealed'); 
                }, 150);
            }, 80);

            // Partículas das metades (opcional)
            setTimeout(() => {
                try {
                    const psCanvas = document.getElementById('ps-canvas');
                    const xboxCanvas = document.getElementById('xbox-canvas');
                    if (psCanvas) createParticleSystem(psCanvas, { count: isTouch ? 28 : 55, speed: 0.5, minR: 0.5, maxR: 2.5, maxAlpha: 0.6, glow: !isTouch, colors: ['#0070d1', '#00aaff', '#00c6ff', '#ffffff', '#cce8ff'] }).start();
                    if (xboxCanvas) createParticleSystem(xboxCanvas, { count: isTouch ? 28 : 55, speed: 0.5, minR: 0.5, maxR: 2.5, maxAlpha: 0.6, glow: !isTouch, colors: ['#159b15', '#52d45c', '#7fff7f', '#ffffff', '#c8ffd4'] }).start();
                } catch(e) {}
            }, 600);
        }, 800);
    }, introDuration);

    const psBtn = document.getElementById('ps-enter-btn'), xboxBtn = document.getElementById('xbox-enter-btn');
    if (!isTouch) {
        if (psBtn) psBtn.addEventListener('click', (e) => { e.preventDefault(); navigateWithEffect('playstation.html'); });
        if (xboxBtn) xboxBtn.addEventListener('click', (e) => { e.preventDefault(); navigateWithEffect('xbox.html'); });
        document.getElementById('ps-half')?.addEventListener('click', (e) => { if (!e.target.closest('.enter-btn')) navigateWithEffect('playstation.html'); });
        document.getElementById('xbox-half')?.addEventListener('click', (e) => { if (!e.target.closest('.enter-btn')) navigateWithEffect('xbox.html'); });
    }
}

function initSearchBar() {
    const searchInput = document.getElementById('search-input'), searchClear = document.getElementById('search-clear');
    if (!searchInput) return;
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();
        if (searchClear) searchClear.style.display = query.length > 0 ? 'flex' : 'none';
        document.querySelectorAll('.game-card').forEach(card => {
            const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
            const match = query === '' || title.includes(query);
            card.style.display = match ? '' : 'none';
        });
        document.querySelectorAll('.category-section').forEach(section => {
            const grid = section.querySelector('.games-grid');
            if (!grid) return;
            const hasVisible = Array.from(grid.children).some(c => c.style.display !== 'none');
            section.style.display = hasVisible ? '' : 'none';
        });
    });
    if (searchClear) searchClear.addEventListener('click', () => { searchInput.value = ''; searchInput.dispatchEvent(new Event('input')); searchInput.focus(); });
}

// Inicializar com segurança total
function safeInit() {
    console.log("Iniciando SafeInit...");
    // 1. Prioridade máxima: Portal/Intro
    try { 
        initPortal(); 
    } catch(e) { 
        console.error("Erro initPortal:", e);
        const intro = document.getElementById('intro-screen');
        if (intro) intro.style.display = 'none';
        const selector = document.getElementById('platform-selector');
        if (selector) selector.classList.remove('hidden');
    }
    
    // 2. Renderização de Jogos (Crucial para as páginas internas)
    try { 
        console.log("Renderizando jogos...");
        renderGames(); 
        // Forçar renderização secundária após pequeno delay (garante que o DOM está pronto)
        setTimeout(renderGames, 100);
        setTimeout(renderGames, 500);
    } catch(e) { console.error("Erro renderGames:", e); }

    try { initHeroSlider(); } catch(e) { console.error("Erro initHeroSlider:", e); }
    try { initGameDetails(); } catch(e) { console.error("Erro initGameDetails:", e); }
    try { initSearchBar(); } catch(e) { console.error("Erro initSearchBar:", e); }
    try { initCustomCursor(); } catch(e) { console.error("Erro initCustomCursor:", e); }
}

document.addEventListener('DOMContentLoaded', safeInit);

// Fallback de emergência caso o DOMContentLoaded demore ou falhe
window.addEventListener('load', () => {
    setTimeout(() => {
        const intro = document.getElementById('intro-screen');
        if (intro && window.getComputedStyle(intro).display !== 'none') {
            console.warn("Segurança: Removendo tela de intro via fallback.");
            intro.style.display = 'none';
            const selector = document.getElementById('platform-selector');
            if (selector) {
                selector.classList.remove('hidden');
                selector.style.display = 'flex';
                // Revela as metades caso não tenham sido reveladas
                document.getElementById('ps-half')?.classList.add('revealed');
                document.getElementById('xbox-half')?.classList.add('revealed');
            }
        }
    }, 2000); // Se em 2 segundos após o 'load' total ainda estiver lá, remove.
});

function initGameDetails() {
    const detailsContainer = document.getElementById('details-container');
    if (!detailsContainer) return;
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('id');
    if (!gameId) { detailsContainer.innerHTML = "<h1 style='color:white'>Jogo não encontrado.</h1>"; return; }
    
    let foundGame = null;
    let availablePlatforms = [];
    
    // Encontrar o jogo base
    for (const platform in gamesData) {
        const game = gamesData[platform].find(g => g.id === gameId);
        if (game) { foundGame = game; break; }
    }
    
    if (!foundGame) { detailsContainer.innerHTML = "<h1 style='color:white'>Jogo não encontrado.</h1>"; return; }

    // Buscar todas as plataformas reais onde este título existe
    for (const plat in gamesData) {
        if (gamesData[plat].some(g => g.title === foundGame.title)) {
            availablePlatforms.push(plat.toUpperCase());
        }
    }
    
    const isPS = foundGame.platform.includes('PS');
    const colorClass = isPS ? 'var(--ps-blue)' : 'var(--xbox-green)';
    const iconClass = isPS ? 'fa-playstation' : 'fa-xbox';
    
    // Injetar Background Imersivo
    const bgImage = document.getElementById('details-bg-image');
    const bgVideo = document.getElementById('details-bg-video');
    
    if (bgImage) {
        bgImage.style.backgroundImage = `url('${foundGame.image}')`;
    }

    
    // Lógica de compatibilidade
    let compatibilityHtml = '';
    if (isPS) {
        if (foundGame.platform === 'PS4') {
            compatibilityHtml = `
                <div class="compatibility-note">
                    <i class="fa-solid fa-circle-check"></i>
                    <span><strong>Compatibilidade:</strong> Esta versão de PS4 funciona perfeitamente no <strong>PS4</strong> e também no <strong>PS5</strong> via retrocompatibilidade.</span>
                </div>`;
        } else {
            compatibilityHtml = `
                <div class="compatibility-note">
                    <i class="fa-solid fa-bolt"></i>
                    <span><strong>Desempenho:</strong> Versão otimizada para <strong>PS5</strong>. Carregamentos ultra-rápidos e Ray Tracing.</span>
                </div>`;
        }
    }

    // Seletor de plataforma para PlayStation
    let platformSelectorHtml = '';
    if (isPS && (availablePlatforms.includes('PS4') || availablePlatforms.includes('PS5'))) {
        platformSelectorHtml = `
            <div class="platform-selector-group">
                <div class="platform-selector-label">Escolha sua Plataforma:</div>
                <div class="platform-options">
                    ${availablePlatforms.includes('PS5') ? `
                        <div class="platform-opt ps-opt ${foundGame.platform === 'PS5' ? 'active' : ''}" onclick="selectPlatform('PS5', '${foundGame.title}')">
                            <i class="fa-brands fa-playstation"></i>
                            <span>PS5</span>
                        </div>` : ''}
                    ${availablePlatforms.includes('PS4') ? `
                        <div class="platform-opt ps-opt ${foundGame.platform === 'PS4' ? 'active' : ''}" onclick="selectPlatform('PS4', '${foundGame.title}')">
                            <i class="fa-brands fa-playstation"></i>
                            <span>PS4</span>
                        </div>` : ''}
                </div>
            </div>
        `;
    }

    detailsContainer.innerHTML = `
        <div class="details-hero-section">
            <div class="details-hero-bg" id="hero-bg" style="background-image: url('${foundGame.image}')"></div>
            <div class="details-hero-overlay"></div>
            
            <div class="details-main-content">
                <div class="details-poster-area">
                    <img src="${foundGame.image}" alt="${foundGame.title}" class="details-poster-img">
                </div>
                <div class="details-text-area">
                    <div class="details-badge">
                        <i class="fa-brands ${iconClass}"></i> ${foundGame.platform}
                    </div>
                    <h1 class="details-main-title">${foundGame.title}</h1>
                    <div class="details-main-price">${foundGame.price}</div>
                    
                    <div class="details-main-description">
                        Mergulhe no universo de ${foundGame.title}. Desfrute de gráficos de última geração, 
                        tempos de resposta imediatos e uma imersão sonora sem precedentes. 
                        A versão definitiva para ${foundGame.platform} espera por você.
                    </div>

                    <div class="details-selectors">
                        ${platformSelectorHtml}
                        ${compatibilityHtml}
                    </div>

                    <div class="details-main-actions">
                        <button class="action-buy-btn" onclick="buyGame('${foundGame.title}', '${foundGame.platform}')">
                            <i class="fa-solid fa-cart-shopping"></i> Comprar Agora
                        </button>
                        <button class="action-wish-btn"><i class="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

window.selectPlatform = function(platform, title) {
    const platKey = platform.toLowerCase();
    const game = gamesData[platKey].find(g => g.title === title);
    if (game) {
        window.location.href = `game-details.html?id=${game.id}`;
    }
};

function createModalContainer() {
    let modal = document.getElementById('global-modal');
    if (!modal) {
        modal = document.createElement('div'); modal.id = 'global-modal'; modal.className = 'modal-overlay';
        modal.innerHTML = `<div class="modal-content"><button class="modal-close" onclick="closeModal()"><i class="fa-solid fa-xmark"></i></button><div id="modal-body"></div></div>`;
        document.body.appendChild(modal);
        modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    }
    return modal;
}

window.closeModal = function() {
    const modal = document.getElementById('global-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => { document.getElementById('modal-body').innerHTML = ''; }, 300);
    }
};

// ==========================================
// FUNÇÃO DE COMPRA VIA WHATSAPP
// ==========================================
function buyGame(gameTitle, platform) {
    const phone = "5594991149412";
    const message = encodeURIComponent(`Olá, Gostaria de comprar "${gameTitle}" para ${platform || 'minha plataforma'}`);
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
    
    console.log(`Iniciando compra de: ${gameTitle} (${platform})`);
    window.open(whatsappUrl, '_blank');
}
