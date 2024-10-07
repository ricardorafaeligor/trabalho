function criaCartao(categoria, pergunta, resposta) { // cria a função criado 3 variaveis internas a funçaõ -  categoria, pergunta, resposta
    let container = document.getElementById('container') // cria a variavel container - e pega o elemento(classe) container do index.html
    let cartao = document.createElement('article') // cria a variavel cartao - e cria o elemento article (elemento - tag do html)
    cartao.className = 'cartao' // cria a classe cartao - que sera utilizada para definir as configurações do elemento article acima

    cartao.innerHTML = ` 
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
    </div>
    </div>
    ` // o conteudo aplicado em innerHTML e o mesmo conteudo que existiria no HTML porem recriado no javascript
      // o codigo <h3>${categoria}</h3> pega o conteudo dentro da variavel categoria eo coloca no lugar que ficaria o texto na tela
      // o mesmo e aplicado aos outros locais onde o codigo e utilizado

    let respostaEstaVisivel = false //variavel para controlar o giro do cartao 

    function viraCartao() { //cria a função vira cartão
        respostaEstaVisivel = !respostaEstaVisivel // faz o cartão virar
        cartao.classList.toggle('active', respostaEstaVisivel) // verifica se o cartao foi clicado
    }
    cartao.addEventListener('click', viraCartao) // quando o cartao for clicado ele faz ele girar


    container.appendChild(cartao) // faz com que o conteudo definido em cartao se torne parte do container

}