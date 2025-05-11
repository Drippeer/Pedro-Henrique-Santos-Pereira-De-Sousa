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

    
});
