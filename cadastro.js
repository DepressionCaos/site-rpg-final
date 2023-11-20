document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cadastro-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        // Validações
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmpassword").value;

        if (password !== confirmPassword) {
            alert("As senhas não coincidem");
        } else {
            // Esse inferno precisa de ajax ou parecido
            alert("Cadastro concluído com sucesso!");
            // o alert pode ser substituido para enviar para um servidor XD
        }
        // Redirecionar
        window.location.href = "homepage.html";
    });
});
