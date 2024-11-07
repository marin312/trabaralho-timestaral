const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.getElementById('closeBtn');

// Função para abrir o modal com conteúdo dinâmico
cards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.getAttribute('data-title');
        const content = card.getAttribute('data-content');
       
        modalTitle.textContent = title;
        modalContent.textContent = content;
       
        modal.classList.add('show-modal');
    });
});

// Fechar o modal
closeBtn.addEventListener('click', () => {
    modal.classList.remove('show-modal');
});