document.addEventListener('click', (e) => {
    const listaClasse = Array.prototype.slice.call(e.target.classList)

    if(e.target && listaClasse.includes('acessarFilme')){
       const url = e.target.dataset.url;
       window.open(url, '_blank')
    }

    if(e.target && listaClasse.includes('excluirFilme')){
    const response = confirm('Deseja remover este item ?');
     if(response){
         const id = e.target.dataset.id;
         document.getElementById(id).remove();
     }
    }
});
//apos declarar fora 
let dados = {
    titulo: '',
    categoria: '',
    ano:0,
    link: ''
}

//vamos reatribuir esses valores dentro da funcao
//pegando os dados do usuario
const atualizarDados = () => {
    dados = {
       titulo: document.getElementById('titulo').value,
       categoria: document.getElementById('categoria').value,
       ano: document.getElementById('ano').value,
       link: document.getElementById('link').value
    }

    document.querySelector('pre').innerHTML = JSON.stringify(dados);

}

//criar uma nova tr na tabela com os dados do usuario

const montaItem = () => {
    const data = new Date();
    const id = data.getTime();

    const item = `
       <tr id="${id}"> 
            <td>${dados.titulo}</td>
            <td>${dados.categoria} </td>
            <td>${dados.ano}</td>
            <td class="text-right">
                <button class="btn btn-info acessarFilme" data-url="${dados.link}"> Acessar </button>
                <button class="btn btn-danger excluirFilme" data-id="${id}"> Excluir </button>
            </td>
        </tr>
    `

        return item;
}

const cadastrar = () => {
         if(
             dados.titulo == '' ||
             dados.ano ==  0 ||
             dados.categoria == '' ||
             dados.link == ''

         ){
             alert('Preencha todos os campos')
         }

         else{
             document.getElementById('lista-filmes').insertAdjacentHTML('beforeEnd', montaItem());
             dados = {};
         }

    
};