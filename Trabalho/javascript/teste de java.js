// Comentário: Espera o DOM (Document Object Model) estar completamente carregado antes de executar o script.
document.addEventListener('DOMContentLoaded', function() {

    // Comentário: Lógica para o formulário de contato (apenas para evitar o envio padrão).
    const contactForm = document.getElementById('form-contato');
    if (contactForm) { // Verifica se o formulário existe na página atual
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Previne o envio real do formulário.
            alert('Obrigado pelo seu contato! (Este é um formulário de demonstração).');
            // contactForm.reset(); // Descomente para limpar o formulário após o "envio"
        });
    }

    // Comentário: Atualiza o ano no rodapé automaticamente.
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Comentário Opcional: Se quisesse destacar o link ativo via JS (mais avançado, mas mais flexível)
    // Poderia ser algo como:
    /*
    const currentPage = window.location.pathname.split("/").pop(); // Pega o nome do arquivo da URL atual
    const navLinks = document.querySelectorAll('nav ul li a.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active'); // Remove active de todos
        if (link.getAttribute('href') === currentPage || (currentPage === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active'); // Adiciona active ao link da página atual
        }
    });
    */
    // Para este exercício, manter a classe 'active' diretamente no HTML de cada página é mais simples e atende.
});