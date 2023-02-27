function alterarNome() {
    nome.classList.remove("is-invalid");

    if (nome.value.length > 2) {
    nome.classList.add("is-valid");
    } else {
        nome.classList.add("is-invalid");
    }
}

function alterarEmail() {
    email.classList.remove("is-invalid");

}

function alterarTelefone() {
    telefone.classList.remove("is-invalid");
}

function alterarCidade() {
    cidade.classList.remove("is-invalid");
}


function validar() {
    //faz com que o formulário não seja enviado
    event.preventDefault();

    if ( document.getElementById("nome").value === '' ) {
        
        nome.classList.add("is-invalid");
    }

    if ( document.getElementById("email").value === '' ) {
          
            email.classList.add("is-invalid");
    }

    if ( document.getElementById("telefone").value === '' ) {
        
        telefone.classList.add("is-invalid");
    }

    if ( document.getElementById("cidade").value === '' ) {
    
        cidade.classList.add("is-invalid");
    }
}