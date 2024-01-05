function logar() {

    var login;
    var senha;

    //login = document.getElementById('login').value;
    //senha = document.getElementById('senha').value;

login = document.formLogin.txtLogin.value;
senha = document.formLogin.txtSenha.value;

   //window.alert(senha + ' e ' + login);


    if (login == 'jeff' && senha == 'jeff123') {
        location.href = 'pagina.html';
        window.alert('Logado com sucesso!');

    } else {
        window.alert('Login e senha inválida.')
    }
    

}