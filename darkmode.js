if (localStorage.getItem("darkmode") === "true"){ //for igual a true então está marcado
    dark.checked = true; // marcando o input

    alterarCores();
}

function alterarCores(){
    if (dark.checked){
        document.body.classList.add("bg-dark");
        document.body.classList.add("text-white");
        tabela.classList.add("table-dark");
    }else{
        document.body.classList.remove("bg-dark");
        document.body.classList.remove("text-white");
        tabela.classList.remove("table-dark");
    }
}
    

function ativarDarkmode(){
    if (dark.checked){
        localStorage.setItem("darkmode", true);

    }else{
        localStorage.setItem("darkmode", false);
    }    
    alterarCores();
}