// ====== CONTROLE DO MODO CLARO / ESCURO ======
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = 'light';
    
    if (currentTheme === 'light') {
        newTheme = 'dark';
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
    
    document.documentElement.setAttribute('data-theme', newTheme);
});

// ====== CONTROLE DO MODAL DE LOGIN ======
const modal = document.getElementById('loginModal');

function openLoginModal() {
    modal.style.display = 'flex';
}

function closeLoginModal() {
    modal.style.display = 'none';
}

function simulateGoogleLogin() {
    alert('Conexão via API do Google simulada com sucesso para a banca!');
    closeLoginModal();
}

// Fechar se clicar fora do modal
window.onclick = function(event) {
    if (event.target == modal) {
        closeLoginModal();
    }
}

// ====== INICIALIZAÇÃO DOS GRÁFICOS (CHART.JS) ======
document.addEventListener("DOMContentLoaded", () => {
    
    // Gráfico 1: Recuperação Judicial (Fictício focado no PR)
    const ctxRJ = document.getElementById('chartRJ').getContext('2d');
    new Chart(ctxRJ, {
        type: 'line',
        data: {
            labels: ['2022', '2023', '2024', '2025', '2026 (Projeção)'],
            datasets: [{
                label: 'Pedidos de RJ no Paraná',
                data: [15, 38, 89, 142, 190],
                borderColor: '#ef4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Gráfico 2: Dependência de Insumos Importados
    const ctxInsumos = document.getElementById('chartInsumos').getContext('2d');
    new Chart(ctxInsumos, {
        type: 'doughnut',
        data: {
            labels: ['Importado (Rússia/China/Bielorrússia)', 'Produção Nacional'],
            datasets: [{
                data: [85, 15],
                backgroundColor: ['#10b981', '#334155'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});