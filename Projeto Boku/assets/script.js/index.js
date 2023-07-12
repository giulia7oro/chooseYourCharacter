/*
-Quando passar o mouse em cima do personagem na lista, temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e texto grande do personagem que está selecionado.

-Quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo.
    Passo 1: pegar os personagens no js para verificar quando o usuário passar o mouse em cima de um deles
    Passo 2: adicionar a classe selecionada no personagem que o usuário passar o cursor no mouse
    Passo 3: verificar se já existia um personagem selecionado, se sim, devemos remover a seleção dele.

-Quando passar o mouse em cima do personagem da listagem, trocar a imagem, nome e descrição do personagem grande.
    Passo 1: pegar o elemento do personagem grande para adicionar as informações nele
    Passo 2: alterar a imagem do personagem grande
    Passo 3: alterar o nome do personagem grande
    Passo 4: alterar a descrição do personagem grande
**/
    
const personagens = document.querySelectorAll('.personagem');

personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

       
        removerSelecaoDoPersonagem();
       
        personagem.classList.add('selecionado');

        alterarImagemPersonagemSelecionado(personagem);

        const nomePersonagem = document.getElementById('nome-personagem');
        
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        const descricaoPersonagem = document.getElementById('descricao-personagem');

        descricaoPersonagem.innerText = personagem.getAttribute('data-description');

        function alterarImagemPersonagemSelecionado(personagem) {
            const imagemPersonagemGrande = document.querySelector('.personagem-grande');

            const idPersonagem = personagem.attributes.id.value;
            imagemPersonagemGrande.src = `./assets/png/${idPersonagem}.png`;
        }
    });
})




function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}



