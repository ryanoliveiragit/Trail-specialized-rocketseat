//Funções aceitam qualquer tipo de dado como argumento
function imprimirDado(dado) { //o Dado [e oq vai retornar 
    console.log("Primeira tarefa")
    console.log(dado())
}
imprimirDado(function () {
    const segundaTarefa = "Segunda tarefa"
    return (
        console.log(segundaTarefa),
        console.log('Terceira tarefa')
    )
})

  