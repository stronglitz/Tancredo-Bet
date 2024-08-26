// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Animação de hover com brilho
    const gameCards = document.querySelectorAll('.game-card');

    gameCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.1)';
            card.style.transition = 'transform 0.3s ease-in-out';
            card.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.7)';
            card.style.borderRadius = '15px';
            card.style.backgroundColor = '#FFD700';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = 'none';
            card.style.backgroundColor = '#007BFF';
        });
    });

    // Função para carregar e exibir os jogos em um modal
    function loadGameInModal(gameUrl) {
        const modal = document.createElement('div');
        modal.classList.add('modal');

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        const closeButton = document.createElement('span');
        closeButton.classList.add('close-button');
        closeButton.innerHTML = '&times;';

        const iframe = document.createElement('iframe');
        iframe.src = gameUrl;
        iframe.width = "100%";
        iframe.height = "400px";
        iframe.frameBorder = "0";

        modalContent.appendChild(closeButton);
        modalContent.appendChild(iframe);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        // Exibir o modal com efeito de fade-in
        modal.style.display = 'block';
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.opacity = '1';
            modal.style.transition = 'opacity 0.5s ease';
        }, 10);

        // Fechar o modal
        closeButton.addEventListener('click', () => {
            modal.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(modal);
            }, 500);
        });

        // Fechar o modal ao clicar fora do conteúdo
        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                modal.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(modal);
                }, 500);
            }
        });
    }

    // Carregar o jogo no modal ao clicar em um cartão
    gameCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const gameUrl = card.getAttribute('href');
            loadGameInModal(gameUrl);
        });
    });

    // Animação de entrada para o header
    const header = document.querySelector('header');
    header.style.opacity = '0';
    setTimeout(() => {
        header.style.opacity = '1';
        header.style.transition = 'opacity 1s ease-in-out';
    }, 100);

    // Animação para o footer
    const footer = document.querySelector('footer');
    footer.style.opacity = '0';
    setTimeout(() => {
        footer.style.opacity = '1';
        footer.style.transition = 'opacity 1s ease-in-out';
    }, 500);

    // Interação com emojis aleatórios ao clicar nos cards
    gameCards.forEach(card => {
        card.addEventListener('click', () => {
            const emojis = ['🎉', '🎲', '💰', '✨', '🔥', '🍀', '🎯'];
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            const emojiElement = document.createElement('div');
            emojiElement.classList.add('emoji');
            emojiElement.innerHTML = randomEmoji;

            document.body.appendChild(emojiElement);

            // Definir a posição inicial e final do emoji
            const rect = card.getBoundingClientRect();
            emojiElement.style.left = `${rect.left + rect.width / 2}px`;
            emojiElement.style.top = `${rect.top}px`;

            // Animação do emoji subindo
            emojiElement.style.opacity = '1';
            emojiElement.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
            setTimeout(() => {
                emojiElement.style.transform = 'translateY(-100px)';
                emojiElement.style.opacity = '0';
            }, 10);

            // Remover o emoji após a animação
            setTimeout(() => {
                document.body.removeChild(emojiElement);
            }, 1000);
        });
    });
});
