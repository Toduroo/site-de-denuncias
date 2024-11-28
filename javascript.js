document.addEventListener("click", function () {
    document.getElementById("loading").style.display = "block"; // Exibe o carregamento
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutButton = document.querySelector('a[href="#about"]');

    aboutButton.addEventListener("click", function (event) {
        event.preventDefault(); // Evita o comportamento padrão do link

        const targetSection = document.querySelector("#about");
        const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY;

        // Rolagem suave
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    });

    // Trocar tema (claro/escuro)
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
    });

    // Contador regressivo
    const countdownElement = document.getElementById("countdown");
    const countdownDate = new Date("2024-12-31T00:00:00").getTime(); // Data final
    const countdownInterval = setInterval(function () {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        // Cálculo de dias, horas, minutos e segundos
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Exibir o resultado no elemento de contagem
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // Se a contagem terminar, exibir uma mensagem
        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "Tempo esgotado!";
        }
    }, 1000);

    // Animação nas imagens
    const images = document.querySelectorAll('.side-image');
    images.forEach(image => {
        image.classList.add('fade-in'); // Adiciona a classe de animação
    });
});
