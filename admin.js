// ==========================================
// ADMIN LOGIN & SUPABASE INTEGRATION
// ==========================================

const SUPABASE_URL = 'https://pschdfopmkahuiokufzx.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_dZux-UcR_X3vyVsBbwCgCg_2GFMkKsH';

let supabase = null;
try {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} catch (e) {
    console.warn("Supabase não configurado.");
}

const loginForm = document.getElementById('login-form');
const errorMsg = document.getElementById('login-error');

// --- Verificação de Sessão ---
async function checkSession() {
    if (!supabase) return; 
    
    const { data, error } = await supabase.auth.getSession();
    
    if (data && data.session) {
        // Logado com sucesso! Redireciona!
        window.location.href = 'index.html';
    }
}

// --- Login ---
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        let email = document.getElementById('admin-email').value.trim();
        const password = document.getElementById('admin-password').value;
        const btn = document.getElementById('btn-login');
        
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
                
                // Mensagem super clara do que deu errado
                if (res.error.message.includes('Invalid login credentials')) {
                    errorMsg.textContent = "O usuário ou senha não existem no Supabase!";
                    alert("Acesso Negado: Você ainda não criou este usuário no painel do Supabase, ou a senha está errada.");
                } else if (res.error.message.includes('Email not confirmed')) {
                    errorMsg.textContent = "Você esqueceu de marcar a caixa 'Auto Confirm User' no Supabase!";
                    alert("Acesso Negado: O usuário existe, mas não está confirmado. Delete ele no Supabase e crie de novo marcando 'Auto Confirm'.");
                } else {
                    errorMsg.textContent = "Erro no Supabase: " + res.error.message;
                    alert("Erro do Supabase: " + res.error.message);
                }
                
                btn.innerHTML = 'Autenticar <i class="fa-solid fa-arrow-right-to-bracket"></i>';
                btn.disabled = false;
            } else {
                errorMsg.textContent = "Sucesso! Redirecionando...";
                errorMsg.style.color = '#1ed760';
                setTimeout(() => {
                    checkSession();
                }, 500);
            }
        } catch (err) {
            errorMsg.style.color = '#ff4d4d';
            errorMsg.textContent = "Erro na sua internet ou navegador: " + err.message;
            alert("Erro crítico: " + err.message);
            
            btn.innerHTML = 'Autenticar <i class="fa-solid fa-arrow-right-to-bracket"></i>';
            btn.disabled = false;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    checkSession();
});
