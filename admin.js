// ==========================================
// ADMIN DASHBOARD & SUPABASE INTEGRATION
// ==========================================

// IMPORTANTE: O usuário precisará substituir as chaves abaixo 
// pelas chaves reais do projeto Supabase dele.
const SUPABASE_URL = 'https://pschdfopmkahuiokufzx.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_dZux-UcR_X3vyVsBbwCgCg_2GFMkKsH';

// Inicializa o cliente Supabase (só funciona se as chaves forem válidas)
let supabase = null;
try {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} catch (e) {
    console.warn("Supabase não configurado ainda.");
}

// Elementos da UI
const loginSection = document.getElementById('login-section');
const dashboardSection = document.getElementById('dashboard-section');
const loginForm = document.getElementById('login-form');
const btnLogout = document.getElementById('btn-logout');
const errorMsg = document.getElementById('login-error');

// --- Verificação de Sessão ---
async function checkSession() {
    if (!supabase) return; 
    
    const { data, error } = await supabase.auth.getSession();
    
    if (data && data.session) {
        // Usuário logado -> Redireciona para a tela inicial (index.html)
        window.location.href = 'index.html';
    } else {
        // Não logado
        showLogin();
    }
}

// --- Login ---
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (SUPABASE_URL === 'COLOQUE_A_URL_DO_SEU_SUPABASE_AQUI') {
            errorMsg.innerHTML = "⚠️ Você precisa criar sua conta no Supabase e colocar as chaves no arquivo admin.js primeiro!";
            return;
        }

        let email = document.getElementById('admin-email').value.trim();
        const password = document.getElementById('admin-password').value;
        const btn = document.getElementById('btn-login');
        
        // Se o usuário digitou apenas "playgames", transforma em email pro Supabase aceitar
        if (!email.includes('@')) {
            email = email + '@playgames.com';
        }
        
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Entrando...';
        btn.disabled = true;

        try {
            let res = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });

            if (res.error) {
                errorMsg.style.color = '#ff4d4d';
                // Verifica se o erro é de credencial inválida e traduz para o usuário
                if (res.error.message.includes('Invalid login credentials')) {
                    errorMsg.textContent = "Usuário ou senha incorretos.";
                } else {
                    errorMsg.textContent = "Erro: " + res.error.message;
                }
                
                btn.innerHTML = 'Autenticar <i class="fa-solid fa-arrow-right-to-bracket"></i>';
                btn.disabled = false;
            } else {
                errorMsg.textContent = "";
                checkSession();
            }
        } catch (err) {
            errorMsg.style.color = '#ff4d4d';
            errorMsg.textContent = "Erro crítico do sistema: " + err.message;
            btn.innerHTML = 'Autenticar <i class="fa-solid fa-arrow-right-to-bracket"></i>';
            btn.disabled = false;
        }
    });
}

// --- Logout ---
if (btnLogout) {
    btnLogout.addEventListener('click', async () => {
        if (!supabase) return;
        await supabase.auth.signOut();
        showLogin();
    });
}

// --- Navegação entre Telas ---
function showDashboard() {
    loginSection.classList.remove('active');
    dashboardSection.classList.add('active');
}

function showLogin() {
    dashboardSection.classList.remove('active');
    loginSection.classList.add('active');
}

// --- Gestão de Jogos (CRUD) ---
async function loadGames() {
    const tbody = document.getElementById('games-table-body');
    
    if (!supabase) return;

    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; padding: 40px;">Carregando jogos... <i class="fa-solid fa-spinner fa-spin"></i></td></tr>';

    const { data: games, error } = await supabase.from('games').select('*').order('created_at', { ascending: false });
    
    if (error) {
        console.error(error);
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 40px; color: #ff4d4d;">Erro ao carregar banco de dados. Verifique suas chaves e o SQL.</td></tr>`;
        return;
    }

    if (games.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; padding: 40px;">Nenhum jogo cadastrado ainda. Clique em "Novo Jogo" para adicionar!</td></tr>';
        return;
    }

    tbody.innerHTML = games.map(game => `
        <tr>
            <td><img src="${game.image}" class="table-img" alt="${game.title}"></td>
            <td><strong>${game.title}</strong></td>
            <td><span class="badge" style="background: ${game.platform.includes('PS') ? 'var(--ps-blue)' : 'var(--xbox-green)'}">${game.platform}</span></td>
            <td>${game.price}</td>
            <td>
                <button class="action-btn edit" onclick="openGameModal('${game.id}')" title="Editar"><i class="fa-solid fa-pen"></i></button>
                <button class="action-btn delete" onclick="deleteGame('${game.id}')" title="Excluir"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    `).join('');
    
    // Guardar lista globalmente para edição rápida
    window.loadedGames = games;
}

// --- Modal Controls & Salvar ---
function openGameModal(gameId = null) {
    const modal = document.getElementById('game-modal');
    const form = document.getElementById('game-form');
    
    if (gameId) {
        document.getElementById('modal-title').textContent = "Editar Jogo";
        const game = window.loadedGames.find(g => g.id === gameId);
        if (game) {
            document.getElementById('game-id').value = game.id;
            document.getElementById('game-title').value = game.title;
            document.getElementById('game-platform').value = game.platform;
            document.getElementById('game-price').value = game.price;
            document.getElementById('game-image').value = game.image;
            document.getElementById('game-trailer').value = game.trailer_url || '';
        }
    } else {
        document.getElementById('modal-title').textContent = "Adicionar Novo Jogo";
        form.reset();
        document.getElementById('game-id').value = '';
    }
    
    modal.classList.add('active');
}

function closeGameModal() {
    document.getElementById('game-modal').classList.remove('active');
}

// Salvar jogo (Insert ou Update)
document.getElementById('game-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const btnSave = document.getElementById('btn-save-game');
    btnSave.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Salvando...';
    btnSave.disabled = true;

    const gameId = document.getElementById('game-id').value;
    const gameData = {
        title: document.getElementById('game-title').value,
        platform: document.getElementById('game-platform').value,
        price: document.getElementById('game-price').value,
        image: document.getElementById('game-image').value,
        trailer_url: document.getElementById('game-trailer').value,
        game_id: 'db-' + Date.now() // Simple generic ID
    };

    let error;
    if (gameId) {
        // Edit
        const res = await supabase.from('games').update(gameData).eq('id', gameId);
        error = res.error;
    } else {
        // Insert
        const res = await supabase.from('games').insert([gameData]);
        error = res.error;
    }

    btnSave.innerHTML = 'Salvar Jogo';
    btnSave.disabled = false;

    if (error) {
        alert("Erro ao salvar: " + error.message);
    } else {
        closeGameModal();
        loadGames(); // Recarrega a tabela
    }
});

// Deletar jogo
window.deleteGame = async function(id) {
    if (confirm("Tem certeza que deseja excluir este jogo da loja?")) {
        const { error } = await supabase.from('games').delete().eq('id', id);
        if (error) {
            alert("Erro ao excluir: " + error.message);
        } else {
            loadGames();
        }
    }
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    checkSession();
});
