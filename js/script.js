
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
    const item = document.createElement('tr');
    const data = new Date();
    const id = data.getTime();

    item.insertAdjacentHTML('beforeEnd',
    `
        <td>${dados.titulo}</td>
        <td>${dados.categoria} </td>
        <td>${dados.ano}</td>
        <td class="text-right">
            <button class="btn btn-info" data-url="${dados.link}"> Acessar </button>
            <button class="btn btn-danger" data-id="${id}"> Excluir </button>
        </td>
    `
        );

        return item;
}

const cadastrar = () => {
    document.getElementById('lista-filmes').appendChild(montaItem());
    dados = {};
}