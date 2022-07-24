function abrirMenu() {
    let navBar = document.querySelector(".menu");
    navBar.classList.toggle("mostrarMenu");
}

$(document).ready(function () {
    $(".btn-mod").click(function () {
        alert("Necessario se cadastrar !")
    });
});

$(document).ready(function () {
    $("#cpf").mask("000.000.000-00");
    $("#telefone").mask("(00) 00000-0000");
    

    $(".salvar").click(function () {
        let login = $("#login").val();
        let cpf = $("#cpf").val();
        let telefone = $("#telefone").val();
        let email = $("#email").val();
        let senha = $("#senha").val();

        if (login.trim() == "" || cpf.trim() == "" || telefone.trim() == "" || email.trim() == "" || senha == "") {
            $(".alertas").text("Favor preencher todos os campos !");
        } else {
            $(".alertas").text("Dados Cadastrados!");
        }
    });
});

$(document).ready(function () {
    $(".lupa").click(function () {
        let login = $("#login").val();
        let senha = $("#senha").val();

        if (login.trim() == "" || senha.trim() == "") {
            $(".alertas").text("Forneca seus dados!");
        } else {
            $(".alertas").text("Verificando credenciais!");
        }
    });
});



