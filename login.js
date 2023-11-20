
        document.addEventListener("DOMContentLoaded", function () {
            const form = document.getElementById("cadastro-form");

            form.addEventListener("submit", function (event) {
                let valid = true;

                // Validar o campo de e-mail
                const email = document.getElementById("email");
                if (!validateEmail(email.value)) {
                    valid = false;
                    email.classList.add("invalid");
                } else {
                    email.classList.remove("invalid");
                }

                // Validar o campo de senha
                const password = document.getElementById("password");
                if (password.value.length < 6) {
                    valid = false;
                    password.classList.add("invalid");
                } else {
                    password.classListremove("invalid");
                }

                if (!valid) {
                    event.preventDefault();
                }
            });

            // Função de validação de e-mail simples
            function validateEmail(email) {
                const re = /\S+@\S+\.\S+/;
                return re.test(email);
            }

            // Redirecionar ao clicar no botão "Continuar"
            const continuarButton = document.getElementById("continuar-button");
            continuarButton.addEventListener("click", function () {
    
                window.location.href = "homepage.html";
            });
        });