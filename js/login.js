document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    console.log(email);
    let password = document.getElementById('password').value;
    console.log(password);

    if(email === 'pedro@gmail.com' && password === '123'){
        let url = "usuario_logueado.html?email=" + email;
        console.log(url)    
        window.location.href = url;
        
    }
    else {
        alert("Usuario o Contrasena invalidos");
    }
});