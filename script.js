// ==========================================
// SUPABASE INITIALIZATION
// ==========================================
const SUPABASE_URL = 'https://slqtismrpgoichwaaeiw.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_hmFi_wFeAy5hHZZbLqEtZw_WZ8gHRpE';

let supabase = null;
if (window.supabase) {
    try {
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    } catch (e) {
        console.warn("Erro ao inicializar Supabase:", e);
    }
} else {
    console.warn("Supabase SDK não encontrado.");
}

// ==========================================
// DADOS DOS JOGOS (Catálogo Completo)
// ==========================================
let gamesData = {
    ps5: [
        { id: 'ps5-1', title: "God of War Ragnarök", price: "R$ 349,90", image: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/679C9NfX98sTpxWIn6K8566S.png", platform: "PS5" },
        { id: 'ps5-2', title: "Marvel's Spider-Man 2", price: "R$ 349,90", image: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/6027b23547076a08418f43501306eb189047918a22a333d9.png", platform: "PS5" },
        { id: 'ps5-3', title: "Horizon Forbidden West", price: "R$ 299,90", image: "https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/1pIny0ZfvxvC9P6S3vA278u3.png", platform: "PS5" },
        { id: 'ps5-4', title: "Ratchet & Clank: Em Outra Dimensão", price: "R$ 349,90", image: "https://image.api.playstation.com/vulcan/ap/rnd/202102/1117/3990S57s018oJ5vM8fS1q6S.png", platform: "PS5" },
        { id: 'ps5-5', title: "Elden Ring", price: "R$ 299,90", image: "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/7697D6fX98sTpxWIn6K8566S.png", platform: "PS5" },
        { id: 'ps5-6', title: "Demon's Souls", price: "R$ 349,90", image: "https://image.api.playstation.com/vulcan/ap/rnd/202009/2517/6027b23547076a08418f43501306eb189047918a22a333d9.png", platform: "PS5" },
        { id: 'ps5-7', title: "Gran Turismo 7", price: "R$ 349,90", image: "https://image.api.playstation.com/vulcan/ap/rnd/202109/1321/6027b23547076a08418f43501306eb189047918a22a333d9.png", platform: "PS5" },
        { id: 'ps5-8', title: "Resident Evil 4", price: "R$ 249,90", image: "https://image.api.playstation.com/vulcan/ap/rnd/202210/0712/679C9NfX98sTpxWIn6K8566S.png", platform: "PS5" }
    ],
    ps4: [
        { id: 'ps4-1', title: "Bloodborne", price: "R$ 99,90", image: "https://image.api.playstation.com/vulcan/img/rnd/202010/2614/679C9NfX98sTpxWIn6K8566S.png", platform: "PS4" },
        { id: 'ps4-2', title: "Ghost of Tsushima", price: "R$ 199,90", image: "https://image.api.playstation.com/vulcan/ap/rnd/202106/2321/6027b23547076a08418f43501306eb189047918a22a333d9.png", platform: "PS4" },
        { id: 'ps4-3', title: "The Last of Us Part II", price: "R$ 199,90", image: "https://image.api.playstation.com/vulcan/img/rnd/202010/2618/679C9NfX98sTpxWIn6K8566S.png", platform: "PS4" },
        { id: 'ps4-4', title: "God of War (2018)", price: "R$ 99,90", image: "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/679C9NfX98sTpxWIn6K8566S.png", platform: "PS4" },
        { id: 'ps4-5', title: "Horizon Zero Dawn", price: "R$ 99,90", image: "https://image.api.playstation.com/vulcan/img/rnd/202010/2614/679C9NfX98sTpxWIn6K8566S.png", platform: "PS4" },
        { id: 'ps4-6', title: "Red Dead Redemption 2", price: "R$ 249,90", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/library_600x900.jpg", platform: "PS4" },
        { id: 'ps4-7', title: "Marvel's Spider-Man", price: "R$ 149,90", image: "https://image.api.playstation.com/vulcan/img/rnd/202010/2614/679C9NfX98sTpxWIn6K8566S.png", platform: "PS4" },
        { id: 'ps4-8', title: "Uncharted 4: A Thief's End", price: "R$ 99,90", image: "https://image.api.playstation.com/vulcan/img/rnd/202010/2614/679C9NfX98sTpxWIn6K8566S.png", platform: "PS4" }
    ],
    xbox: [
        { id: 'xb-1', title: "Halo Infinite", price: "R$ 299,00", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1240440/library_600x900.jpg", platform: "Xbox Series X|S" },
        { id: 'xb-2', title: "Forza Horizon 5", price: "R$ 299,00", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1551360/library_600x900.jpg", platform: "Xbox Series X|S" },
        { id: 'xb-3', title: "Starfield", price: "R$ 349,00", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1716740/library_600x900.jpg", platform: "Xbox Series X|S" },
        { id: 'xb-4', title: "Sea of Thieves", price: "R$ 199,00", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1172620/library_600x900.jpg", platform: "Xbox Series X|S" },
        { id: 'xb-5', title: "Gears 5", price: "R$ 199,00", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1097840/library_600x900.jpg", platform: "Xbox One" },
        { id: 'xb-6', title: "Psychonauts 2", price: "R$ 249,00", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/607080/library_600x900.jpg", platform: "Xbox Series X|S" },
        { id: 'xb-7', title: "Hi-Fi RUSH", price: "R$ 149,00", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817230/library_600x900.jpg", platform: "Xbox Series X|S" },
        { id: 'xb-8', title: "Microsoft Flight Simulator", price: "R$ 299,00", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1250410/library_600x900.jpg", platform: "Xbox Series X|S" }
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
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/679C9NfX98sTpxWIn6K8566S.png",
        originalPrice: "R$ 349,90",
        promoPrice: "R$ 174,95",
        discount: "-50%",
        platform: "PS5",
        platformClass: "ps5",
        icon: "fa-playstation",
        videoUrl: "https://www.youtube.com/embed/hfJ4Km46A-0?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=hfJ4Km46A-0&disablekb=1&modestbranding=1",
        videoType: "youtube"
    },
    {
        gameId: 'ps5-2',
        promoTitle: "PROMOÇÃO FLASH",
        title: "Marvel's Spider-Man 2",
        desc: "Os Spiders Peter Parker e Miles Morales retornam para uma nova aventura épica na Nova York da Marvel.",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/6027b23547076a08418f43501306eb189047918a22a333d9.png",
        originalPrice: "R$ 349,90",
        promoPrice: "R$ 244,93",
        discount: "-30%",
        platform: "PS5",
        platformClass: "ps5",
        icon: "fa-playstation",
        videoUrl: "https://www.youtube.com/embed/9fX2T_6W4Is?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=9fX2T_6W4Is&disablekb=1&modestbranding=1",
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
        promoTitle: "LANÇAMENTO EM OFERTA",
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
    }
];

// ==========================================
// FUNÇÕES DE RENDERIZAÇÃO
// ==========================================
function createGameCard(game) {
    return `
        <a href="game-details.html?id=${game.id}" class="game-card">
            <div class="card-image-wrapper">
                <img src="${game.image}" alt="${game.title}" class="card-image">
                <div class="card-overlay">
                    <div class="card-info">
                        <div class="card-platform">
                            <i class="fa-brands ${game.platform.includes('PS') ? 'fa-playstation' : 'fa-xbox'}"></i>
                            ${game.platform}
                        </div>
                        <h3 class="card-title">${game.title}</h3>
                        <div class="card-price">${game.price}</div>
                    </div>
                </div>
            </div>
        </a>
    `;
}

function renderGames() {
    const gridPs5 = document.getElementById('grid-ps5');
    const gridPs4 = document.getElementById('grid-ps4');
    const gridXbox = document.getElementById('grid-xbox');

    if (gridPs5) gridPs5.innerHTML = gamesData.ps5.map(createGameCard).join('');
    if (gridPs4) gridPs4.innerHTML = gamesData.ps4.map(createGameCard).join('');
    if (gridXbox) gridXbox.innerHTML = gamesData.xbox.map(createGameCard).join('');
}

function initHeroSlider() {
    const slidesContainer = document.querySelector('.slides-container');
    const controlsContainer = document.querySelector('.slider-controls');
    
    if (!slidesContainer || !controlsContainer) return;

    let activeSlides = [];
    if (document.getElementById('grid-ps5')) {
        activeSlides = psOfferSlides;
    } else if (document.getElementById('grid-xbox')) {
        activeSlides = xboxOfferSlides;
    } else {
        return;
    }

    slidesContainer.innerHTML = activeSlides.map((slide, index) => {
        const bgMedia = slide.videoType === 'youtube'
            ? `<iframe class="slide-video-bg" src="${slide.videoUrl}&origin=http://localhost:8765" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
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
    // 1. Prioridade máxima: Portal/Intro (para não travar a tela)
    try { 
        initPortal(); 
    } catch(e) { 
        console.error("Erro initPortal:", e);
        // Fallback imediato se o portal falhar
        const intro = document.getElementById('intro-screen');
        if (intro) intro.style.display = 'none';
        const selector = document.getElementById('platform-selector');
        if (selector) selector.classList.remove('hidden');
    }
    
    // 2. Outros componentes (podem falhar individualmente sem travar o resto)
    try { renderGames(); } catch(e) { console.error("Erro renderGames:", e); }
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
    for (const platform in gamesData) {
        const game = gamesData[platform].find(g => g.id === gameId);
        if (game) { foundGame = game; break; }
    }
    if (!foundGame) { detailsContainer.innerHTML = "<h1 style='color:white'>Jogo não encontrado.</h1>"; return; }
    const isPS = foundGame.platform.includes('PS'), colorClass = isPS ? 'var(--ps-blue)' : 'var(--xbox-green)', iconClass = isPS ? 'fa-playstation' : 'fa-xbox';
    const bgBlur = document.getElementById('details-bg-blur');
    if (bgBlur) bgBlur.style.backgroundImage = `url('${foundGame.image}')`;
    detailsContainer.innerHTML = `
        <div class="details-layout">
            <div class="details-image-container">
                <img src="${foundGame.image}" alt="${foundGame.title}" class="details-image">
            </div>
            <div class="details-info">
                <div class="details-platform" style="color: ${colorClass};">
                    <i class="fa-brands ${iconClass}"></i> ${foundGame.platform}
                </div>
                <h1 class="details-title">${foundGame.title}</h1>
                <p class="details-desc">Experimente a emoção de ${foundGame.title}. Disponível para ${foundGame.platform}.</p>
                <div class="details-price-box">
                    <div class="details-price">${foundGame.price}</div>
                    <button class="buy-btn-huge" style="background: ${isPS ? 'linear-gradient(135deg, var(--ps-blue-light), #00bfff)' : 'linear-gradient(135deg, var(--xbox-green-light), #1ed760)'};">
                        <i class="fa-solid fa-cart-shopping"></i> Comprar Agora
                    </button>
                </div>
            </div>
        </div>
    `;
}

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
