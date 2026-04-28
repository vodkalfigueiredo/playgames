// ==========================================
// SUPABASE INITIALIZATION
// ==========================================
const SUPABASE_URL = 'https://pschdfopmkahuiokufzx.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_dZux-UcR_X3vyVsBbwCgCg_2GFMkKsH';

let supabase = null;
try {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} catch (e) {
    console.warn("Supabase não carregado no frontend.");
}

// ==========================================
// DADOS DOS JOGOS (Fallback)
// ==========================================
let gamesData = {
    ps5: [
        { id: 'ps5-1', title: "God of War", price: "R$ 199,90", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1593500/library_600x900.jpg", platform: "PS5" },
        { id: 'ps5-2', title: "Marvel's Spider-Man", price: "R$ 249,90", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817070/library_600x900.jpg", platform: "PS5" },
        { id: 'ps5-3', title: "The Last of Us Part I", price: "R$ 349,90", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1888930/library_600x900.jpg", platform: "PS5" },
        { id: 'ps5-4', title: "Marvel's Spider-Man: Miles Morales", price: "R$ 199,90", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817190/library_600x900.jpg", platform: "PS5" },
        { id: 'ps5-5', title: "Returnal", price: "R$ 299,90", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1649240/library_600x900.jpg", platform: "PS5" }
    ],
    ps4: [
        { id: 'ps4-1', title: "Horizon Zero Dawn", price: "R$ 99,50", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1151640/library_600x900.jpg", platform: "PS4" },
        { id: 'ps4-2', title: "Days Gone", price: "R$ 99,50", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1259420/library_600x900.jpg", platform: "PS4" },
        { id: 'ps4-3', title: "Detroit: Become Human", price: "R$ 139,50", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1222140/library_600x900.jpg", platform: "PS4" },
        { id: 'ps4-4', title: "Uncharted: Legacy of Thieves", price: "R$ 199,50", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1659420/library_600x900.jpg", platform: "PS4" },
        { id: 'ps4-5', title: "Red Dead Redemption 2", price: "R$ 249,00", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/library_600x900.jpg", platform: "PS4" }
    ],
    xbox: [
        { id: 'xb-1', title: "Halo Infinite", price: "R$ 299,00", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1240440/library_600x900.jpg", platform: "Xbox Series X|S" },
        { id: 'xb-2', title: "Forza Horizon 5", price: "R$ 299,00", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1551360/library_600x900.jpg", platform: "Xbox Series X|S" },
        { id: 'xb-3', title: "Starfield", price: "R$ 349,00", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1716740/library_600x900.jpg", platform: "Xbox Series X|S" },
        { id: 'xb-4', title: "Gears 5", price: "R$ 199,00", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1097840/library_600x900.jpg", platform: "Xbox One" },
        { id: 'xb-5', title: "Sea of Thieves", price: "R$ 199,00", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1172620/library_600x900.jpg", platform: "Xbox Series X|S" }
    ]
};

const psHeroSlides = [
    {
        gameId: 'ps5-2',
        title: "Marvel's Spider-Man Remastered",
        desc: "Jogue como Peter Parker e lute contra grandes vilões da Marvel em Nova York.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817070/page_bg_generated_v6b.jpg",
        platform: "PS5",
        platformClass: "ps5",
        icon: "fa-playstation",
        videoUrl: "https://www.youtube.com/embed/K-2wZ810GFA?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=K-2wZ810GFA&disablekb=1&modestbranding=1",
        videoType: "youtube",
        specs: "Desenvolvedora: Insomniac Games<br>Gênero: Ação e Aventura<br>Lançamento: 2022"
    },
    {
        gameId: 'ps5-1',
        title: "God of War",
        desc: "Acompanhe Kratos e Atreus em uma jornada épica pela mitologia nórdica.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1593500/page_bg_generated_v6b.jpg",
        platform: "PS5",
        platformClass: "ps5",
        icon: "fa-playstation",
        videoUrl: "https://www.youtube.com/embed/HqQMh_tij0c?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=HqQMh_tij0c&disablekb=1&modestbranding=1",
        videoType: "youtube",
        specs: "Desenvolvedora: Santa Monica Studio<br>Gênero: Ação / Hack and Slash<br>Lançamento: 2018"
    },
    {
        gameId: 'ps5-3',
        title: "The Last of Us Part I",
        desc: "Vivencie a narrativa emocionante e os personagens inesquecíveis de Joel e Ellie.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1888930/page_bg_generated_v6b.jpg",
        platform: "PS5",
        platformClass: "ps5",
        icon: "fa-playstation",
        videoUrl: "https://www.youtube.com/embed/R91k34bK4o0?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=R91k34bK4o0&disablekb=1&modestbranding=1",
        videoType: "youtube",
        specs: "Desenvolvedora: Naughty Dog<br>Gênero: Ação / Sobrevivência<br>Lançamento: 2022"
    }
];

const xboxHeroSlides = [
    {
        gameId: 'xb-1',
        title: "Halo Infinite",
        desc: "A lendária série Halo retorna com a maior campanha do Master Chief já feita.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1240440/page_bg_generated_v6b.jpg",
        platform: "Xbox Series X|S",
        platformClass: "xbox",
        icon: "fa-xbox",
        videoUrl: "https://www.youtube.com/embed/PyMlV5_HRWk?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=PyMlV5_HRWk&disablekb=1&modestbranding=1",
        videoType: "youtube",
        specs: "Desenvolvedora: 343 Industries<br>Gênero: Tiro em Primeira Pessoa (FPS)<br>Lançamento: 2021"
    },
    {
        gameId: 'xb-2',
        title: "Forza Horizon 5",
        desc: "Explore as paisagens vibrantes do México nos melhores carros do mundo.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1551360/page_bg_generated_v6b.jpg",
        platform: "Xbox Series X|S",
        platformClass: "xbox",
        icon: "fa-xbox",
        videoUrl: "https://www.youtube.com/embed/FYH9n37B7Yw?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=FYH9n37B7Yw&disablekb=1&modestbranding=1",
        videoType: "youtube",
        specs: "Desenvolvedora: Playground Games<br>Gênero: Corrida / Mundo Aberto<br>Lançamento: 2021"
    },
    {
        gameId: 'xb-3',
        title: "Starfield",
        desc: "O primeiro novo universo em 25 anos da Bethesda Game Studios.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1716740/page_bg_generated_v6b.jpg",
        platform: "Xbox Series X|S",
        platformClass: "xbox",
        icon: "fa-xbox",
        videoUrl: "https://www.youtube.com/embed/kfYEiTdsyas?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=kfYEiTdsyas&disablekb=1&modestbranding=1",
        videoType: "youtube",
        specs: "Desenvolvedora: Bethesda Game Studios<br>Gênero: RPG Espacial<br>Lançamento: 2023"
    }
];

// Funções de Renderização
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
    
    if (!slidesContainer || !controlsContainer) return; // Só inicializa se existir

    // Detectar qual página está ativa
    let activeSlides = [];
    if (document.getElementById('grid-ps5')) {
        activeSlides = psHeroSlides;
    } else if (document.getElementById('grid-xbox')) {
        activeSlides = xboxHeroSlides;
    } else {
        return; // Não inicializar se não for página de console
    }

    // Gerar slides HTML
    slidesContainer.innerHTML = activeSlides.map((slide, index) => {
        const bgMedia = slide.videoType === 'youtube'
            ? `<iframe class="slide-video-bg" src="${slide.videoUrl}&origin=http://localhost:8765" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            : `<video class="slide-video-bg" autoplay loop muted playsinline><source src="${slide.videoUrl}" type="video/mp4"></video>`;
        return `
        <div class="slide ${index === 0 ? 'active' : ''}">
            ${bgMedia}
            <div class="slide-content">
                <span class="platform-badge ${slide.platformClass}">
                    <i class="fa-brands ${slide.icon}"></i> ${slide.platform}
                </span>
                <h1 class="slide-title">${slide.title}</h1>
                <p class="slide-desc">${slide.desc}</p>
                <div class="slide-actions">
                    <button class="btn btn-primary" onclick="window.location.href='game-details.html?id=${slide.gameId}'">
                        Comprar agora
                    </button>
                    <button class="btn btn-secondary" onclick="openSpecsModal('${encodeURIComponent(slide.title)}', '${encodeURIComponent(slide.specs)}')">
                        Saiba mais
                    </button>
                </div>
            </div>
        </div>
    `}).join('');

    // Gerar dots HTML
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

    function nextSlide() {
        goToSlide((currentSlide + 1) % slides.length);
    }

    function startSlider() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function resetSlider() {
        clearInterval(slideInterval);
        startSlider();
    }

    // Event listeners para dots
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

/** Mini particle system (no external libs) */
function createParticleSystem(canvas, options) {
    const ctx = canvas.getContext('2d');
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
            if (p.glow) {
                ctx.shadowBlur = 12;
                ctx.shadowColor = p.color;
            }
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

/** Detect touch/mobile device */
function isTouchDevice() {
    return window.matchMedia('(hover: none) and (pointer: coarse)').matches
        || ('ontouchstart' in window);
}

/** Custom cursor logic — desktop only */
function initCustomCursor() {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    // Skip entirely on touch devices
    if (isTouchDevice()) {
        cursor.style.display = 'none';
        return;
    }

    const ring = cursor.querySelector('.cursor-ring');
    const dot = cursor.querySelector('.cursor-dot');

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = mouseX + 'px';
        dot.style.top  = mouseY + 'px';
    });

    function animateRing() {
        ringX += (mouseX - ringX) * 0.12;
        ringY += (mouseY - ringY) * 0.12;
        ring.style.left = ringX + 'px';
        ring.style.top  = ringY + 'px';
        requestAnimationFrame(animateRing);
    }
    animateRing();

    // Platform hover feedback
    const psHalf   = document.getElementById('ps-half');
    const xboxHalf = document.getElementById('xbox-half');

    if (psHalf) {
        psHalf.addEventListener('mouseenter', () => {
            cursor.classList.add('hovering', 'ps-cursor');
            cursor.classList.remove('xbox-cursor');
        });
        psHalf.addEventListener('mouseleave', () => {
            cursor.classList.remove('hovering', 'ps-cursor');
        });
    }
    if (xboxHalf) {
        xboxHalf.addEventListener('mouseenter', () => {
            cursor.classList.add('hovering', 'xbox-cursor');
            cursor.classList.remove('ps-cursor');
        });
        xboxHalf.addEventListener('mouseleave', () => {
            cursor.classList.remove('hovering', 'xbox-cursor');
        });
    }

    // Hovering interactive elements
    document.querySelectorAll('.enter-btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
        btn.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
    });
}

/** Exit animation before navigating */
function navigateWithEffect(url) {
    const flash = document.getElementById('exit-flash');
    if (!flash) { window.location.href = url; return; }

    flash.style.transition = 'none';
    flash.style.opacity = '0';
    flash.style.pointerEvents = 'all';

    requestAnimationFrame(() => {
        flash.style.transition = 'opacity 0.35s ease';
        flash.style.opacity = '1';
        setTimeout(() => {
            window.location.href = url;
        }, 380);
    });
}

/** Main portal initialization */
function initPortal() {
    const introScreen      = document.getElementById('intro-screen');
    const platformSelector = document.getElementById('platform-selector');
    const psHalf           = document.getElementById('ps-half');
    const xboxHalf         = document.getElementById('xbox-half');

    if (!introScreen || !platformSelector) return; // Not on portal page

    const isTouch = isTouchDevice();

    // Reduce particle count on mobile for performance
    const introCount = isTouch ? 25 : 60;
    const halfCount  = isTouch ? 28 : 55;

    // --- Intro canvas particles ---
    const introCanvas = document.getElementById('intro-canvas');
    const introParticles = createParticleSystem(introCanvas, {
        count: introCount,
        speed: 0.4,
        minR: 0.5, maxR: 2.5,
        maxAlpha: 0.5,
        glow: !isTouch, // disable glow shadow on mobile (perf)
        colors: ['#0070d1', '#00bfff', '#159b15', '#52d45c', '#ffffff', '#a0c4ff']
    });
    introParticles.start();

    // --- Animation sequence ---
    setTimeout(() => {
        introScreen.classList.add('fade-out');

        setTimeout(() => {
            introScreen.style.display = 'none';
            introParticles.stop();

            platformSelector.classList.remove('hidden');

            // Staggered reveal
            setTimeout(() => {
                if (psHalf)   psHalf.classList.add('revealed');
                setTimeout(() => {
                    if (xboxHalf) xboxHalf.classList.add('revealed');
                }, 150);
            }, 80);

            // Start particles after reveal
            setTimeout(() => { startHalfParticles(); }, 600);

            // Setup touch interaction after reveal
            if (isTouch) setupTouchExpansion();

        }, 800);
    }, 2800);

    // --- Platform half particles ---
    function startHalfParticles() {
        const psCanvas   = document.getElementById('ps-canvas');
        const xboxCanvas = document.getElementById('xbox-canvas');

        if (psCanvas) {
            createParticleSystem(psCanvas, {
                count: halfCount,
                speed: 0.5,
                minR: 0.5, maxR: 2.5,
                maxAlpha: 0.6,
                glow: !isTouch,
                colors: ['#0070d1', '#00aaff', '#00c6ff', '#ffffff', '#cce8ff']
            }).start();
        }
        if (xboxCanvas) {
            createParticleSystem(xboxCanvas, {
                count: halfCount,
                speed: 0.5,
                minR: 0.5, maxR: 2.5,
                maxAlpha: 0.6,
                glow: !isTouch,
                colors: ['#159b15', '#52d45c', '#7fff7f', '#ffffff', '#c8ffd4']
            }).start();
        }
    }

    // --- Touch tap-to-expand logic ---
    // First tap: expand that half (shows it's selected)
    // Second tap on same half: navigate
    function setupTouchExpansion() {
        let activePlatform = null; // 'ps' | 'xbox' | null
        let tapTimer = null;

        function setActive(platform) {
            activePlatform = platform;
            if (platform === 'ps') {
                psHalf.classList.add('touch-active');
                psHalf.classList.remove('touch-inactive');
                xboxHalf.classList.add('touch-inactive');
                xboxHalf.classList.remove('touch-active');
            } else {
                xboxHalf.classList.add('touch-active');
                xboxHalf.classList.remove('touch-inactive');
                psHalf.classList.add('touch-inactive');
                psHalf.classList.remove('touch-active');
            }
        }

        function clearActive() {
            activePlatform = null;
            [psHalf, xboxHalf].forEach(h => {
                h.classList.remove('touch-active', 'touch-inactive');
            });
        }

        function handleTap(half, platform, url, e) {
            // If tapping the enter-btn directly — always navigate immediately
            if (e.target.closest('.enter-btn')) {
                e.preventDefault();
                navigateWithEffect(url);
                return;
            }

            if (activePlatform === platform) {
                // Second tap on already-active half — navigate
                navigateWithEffect(url);
            } else {
                // First tap — expand this half
                setActive(platform);
                // Auto-reset if user taps elsewhere (touchstart on body)
                clearTimeout(tapTimer);
                tapTimer = setTimeout(clearActive, 6000);
            }
        }

        if (psHalf) {
            psHalf.addEventListener('touchend', (e) => {
                handleTap(psHalf, 'ps', 'playstation.html', e);
            }, { passive: false });
        }
        if (xboxHalf) {
            xboxHalf.addEventListener('touchend', (e) => {
                handleTap(xboxHalf, 'xbox', 'xbox.html', e);
            }, { passive: false });
        }

        // Tap outside both halves — reset
        document.addEventListener('touchstart', (e) => {
            if (!e.target.closest('.platform-half')) clearActive();
        }, { passive: true });
    }

    // --- Desktop click navigation ---
    const psBtn   = document.getElementById('ps-enter-btn');
    const xboxBtn = document.getElementById('xbox-enter-btn');

    if (!isTouch) {
        if (psBtn) {
            psBtn.addEventListener('click', (e) => {
                e.preventDefault();
                navigateWithEffect('playstation.html');
            });
        }
        if (xboxBtn) {
            xboxBtn.addEventListener('click', (e) => {
                e.preventDefault();
                navigateWithEffect('xbox.html');
            });
        }

        // Click anywhere on the half (except enter-btn) also navigates
        if (psHalf) {
            psHalf.addEventListener('click', (e) => {
                if (!e.target.closest('.enter-btn')) navigateWithEffect('playstation.html');
            });
        }
        if (xboxHalf) {
            xboxHalf.addEventListener('click', (e) => {
                if (!e.target.closest('.enter-btn')) navigateWithEffect('xbox.html');
            });
        }
    }
}

// =============================================
// SEARCH BAR — Filtro de jogos por nome
// =============================================
function initSearchBar() {
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');
    if (!searchInput) return;

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();
        
        // Show/hide clear button
        if (searchClear) {
            searchClear.style.display = query.length > 0 ? 'flex' : 'none';
        }

        // Filter all game cards
        document.querySelectorAll('.game-card').forEach(card => {
            const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
            const match = query === '' || title.includes(query);
            card.style.display = match ? '' : 'none';
            card.style.opacity = match ? '1' : '0';
        });

        // Show/hide section headers when no games visible
        document.querySelectorAll('.category-section').forEach(section => {
            const grid = section.querySelector('.games-grid');
            if (!grid) return;
            const visibleCards = grid.querySelectorAll('.game-card[style=""], .game-card:not([style*="display: none"])');
            const hasVisible = Array.from(grid.children).some(c => c.style.display !== 'none');
            section.style.display = hasVisible ? '' : 'none';
        });
    });

    if (searchClear) {
        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
            searchInput.focus();
        });
    }
}

// --- Fetch Dinâmico do Banco de Dados ---
async function fetchGamesFromDB() {
    if (!supabase) return;
    try {
        const { data, error } = await supabase.from('games').select('*');
        if (!error && data && data.length > 0) {
            // Limpa o fallback e popula com dados reais do banco
            gamesData = { ps5: [], ps4: [], xbox: [] };
            data.forEach(game => {
                // Ensure IDs match the expected format for gameDetails
                game.id = game.id; // DB UUID
                
                if (game.platform.includes('PS5')) {
                    gamesData.ps5.push(game);
                } else if (game.platform.includes('PS4')) {
                    gamesData.ps4.push(game);
                } else if (game.platform.includes('Xbox')) {
                    gamesData.xbox.push(game);
                }
            });
            console.log("Jogos carregados do Banco de Dados!");
        } else {
            console.log("Banco vazio ou erro. Usando dados locais (fallback).");
        }
    } catch (e) {
        console.error("Erro ao buscar no Supabase:", e);
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', async () => {
    await fetchGamesFromDB(); // Espera buscar do banco primeiro
    
    renderGames();
    initHeroSlider();
    initGameDetails();
    initSearchBar();

    // Portal-specific initialization
    initPortal();
    initCustomCursor();
});


// Lógica da página de detalhes do jogo
function initGameDetails() {
    const detailsContainer = document.getElementById('details-container');
    if (!detailsContainer) return; // Não estamos na página de detalhes

    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('id');

    if (!gameId) {
        detailsContainer.innerHTML = "<h1 style='color:white'>Jogo não encontrado.</h1>";
        return;
    }

    // Buscar o jogo no gamesData
    let foundGame = null;
    for (const platform in gamesData) {
        const game = gamesData[platform].find(g => g.id === gameId);
        if (game) {
            foundGame = game;
            break;
        }
    }

    if (!foundGame) {
        detailsContainer.innerHTML = "<h1 style='color:white'>Jogo não encontrado.</h1>";
        return;
    }

    // Configurar a cor de fundo (azul para PS, verde para Xbox)
    const isPS = foundGame.platform.includes('PS');
    const colorClass = isPS ? 'var(--ps-blue)' : 'var(--xbox-green)';
    const iconClass = isPS ? 'fa-playstation' : 'fa-xbox';

    // Configurar background blur com a imagem do jogo
    const bgBlur = document.getElementById('details-bg-blur');
    if (bgBlur) {
        bgBlur.style.backgroundImage = `url('${foundGame.image}')`;
    }

    // Injetar HTML do jogo
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
                <p class="details-desc">Experimente a emoção de ${foundGame.title}. Mergulhe em visuais incríveis de próxima geração, jogabilidade imersiva e uma história inesquecível disponível para ${foundGame.platform}.</p>
                
                <div class="details-price-box">
                    <div class="details-price">${foundGame.price}</div>
                    <button class="buy-btn-huge" style="background: ${isPS ? 'linear-gradient(135deg, var(--ps-blue-light), #00bfff)' : 'linear-gradient(135deg, var(--xbox-green-light), #1ed760)'}; box-shadow: 0 10px 30px ${isPS ? 'rgba(0,112,209,0.4)' : 'rgba(21,155,21,0.4)'};">
                        <i class="fa-solid fa-cart-shopping"></i> Comprar Agora
                    </button>
                </div>
            </div>
        </div>
    `;
}

// --- Modal Logic ---
function createModalContainer() {
    let modal = document.getElementById('global-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'global-modal';
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close" onclick="closeModal()"><i class="fa-solid fa-xmark"></i></button>
                <div id="modal-body"></div>
            </div>
        `;
        document.body.appendChild(modal);

        // Fechar ao clicar fora
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }
    return modal;
}

window.openTrailerModal = function(videoUrl) {
    const modal = createModalContainer();
    const modalBody = document.getElementById('modal-body');
    
    let mediaHtml = '';
    if (videoUrl.includes('youtube.com/embed')) {
        mediaHtml = `<iframe width="100%" height="100%" src="${videoUrl}&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="aspect-ratio: 16/9;"></iframe>`;
    } else {
        mediaHtml = `
            <video class="custom-player" controls autoplay name="media">
                <source src="${videoUrl}" type="video/mp4">
            </video>`;
    }
    
    modalBody.innerHTML = `
        <div class="video-container" style="width: 100%; max-width: 900px; aspect-ratio: 16/9; margin: 0 auto; background: #000; border-radius: 12px; overflow: hidden;">
            ${mediaHtml}
        </div>
    `;
    modal.classList.add('active');
};

window.openSpecsModal = function(encodedTitle, encodedSpecs) {
    const modal = createModalContainer();
    const modalBody = document.getElementById('modal-body');
    const title = decodeURIComponent(encodedTitle);
    const specs = decodeURIComponent(encodedSpecs);
    
    modalBody.innerHTML = `
        <div class="specs-container">
            <h2>${title}</h2>
            <div class="specs-content">
                ${specs}
            </div>
        </div>
    `;
    modal.classList.add('active');
};

window.closeModal = function() {
    const modal = document.getElementById('global-modal');
    if (modal) {
        modal.classList.remove('active');
        // Limpar o conteúdo para parar o vídeo
        setTimeout(() => {
            document.getElementById('modal-body').innerHTML = '';
        }, 300);
    }
};
