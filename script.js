const questoes = [
    { pergunta: "Qual o operador utilizado para acessar campos de uma struct?", opcoes: ["->", ".", "*"], correta: "." },
    
    { pergunta: "O que o princípio LIFO (Pilha) significa?", opcoes: ["Last In, First Out", "First In, Last Out", "Last In, First In"], correta: "Last In, First Out" },
    
    { pergunta: "Qual a função obrigatória para liberar memória alocada com malloc?", opcoes: ["delete()", "clear()", "free()"], correta: "free()" },
    
    { pergunta: "Em C, qual é a principal característica da Fila (Queue)?", opcoes: ["LIFO", "FIFO", "Acesso randômico"], correta: "FIFO" },
    
    { pergunta: "O que o operador '*' (asterisco) faz em um ponteiro?", opcoes: ["Obtém o endereço", "Desreferencia (acessa o valor)", "Aloca memória"], correta: "Desreferencia (acessa o valor)" },
    
    { pergunta: "Qual estrutura exige memória contígua (sequencial)?", opcoes: ["Lista Encadeada", "Vetor", "Árvore"], correta: "Vetor" },
    
    { pergunta: "Como verificar se o malloc falhou ao alocar memória?", opcoes: ["Verificar se é NULL", "Verificar se é 0", "Usar free()"], correta: "Verificar se é NULL" },
    
    { pergunta: "Qual a vantagem da Lista Encadeada sobre o Vetor?", opcoes: ["Acesso mais rápido", "Tamanho flexível", "Uso de memória estática"], correta: "Tamanho flexível" },
    
    { pergunta: "O que é 'Memory Leak' em C?", opcoes: ["Acesso a índice fora do limite", "Vazamento de memória não liberada", "Erro de sintaxe"], correta: "Vazamento de memória não liberada" },
    
    { pergunta: "Na implementação estática de uma Fila, o que é 'Shifting'?", opcoes: ["Deslocar elementos após remoção", "Alocação dinâmica", "Ponteiro nulo"], correta: "Deslocar elementos após remoção" },
    
    { pergunta: "Ao realizar 'ptr++' em um ponteiro, o que acontece com o endereço?", opcoes: ["Avança 1 byte", "Avança conforme o tipo do dado", "Volta para o anterior"], correta: "Avança conforme o tipo do dado" },
    
    { pergunta: "Em uma Fila Circular, o que acontece quando o 'tail' atinge o fim do vetor?", opcoes: ["A fila para", "O elemento é inserido na posição inicial", "Ocorre erro de segmentação"], correta: "O elemento é inserido na posição inicial" },
    
    { pergunta: "Para que serve a função 'sizeof' junto com o 'malloc'?", opcoes: ["Calcular bytes necessários", "Verificar se é nulo", "Definir o valor inicial"], correta: "Calcular bytes necessários" },
    
    { pergunta: "Qual é a complexidade de tempo para inserir um nó no início de uma lista encadeada?", opcoes: ["O(n)", "O(log n)", "O(1)"], correta: "O(1)" },
    
    { pergunta: "O que significa dizer que uma Pilha é implementada em 'Stack' ou 'Heap'?", opcoes: ["Stack=estática, Heap=dinâmica", "Stack=dinâmica, Heap=estática", "Ambas são iguais"], correta: "Stack=estática, Heap=dinâmica" },
    
    { pergunta: "Ao imprimir um ponteiro com '*ptr', o que é exibido?", opcoes: ["O endereço de memória", "O valor armazenado no endereço", "O tamanho do dado"], correta: "O valor armazenado no endereço" },
    
    { pergunta: "Qual operador é usado para obter o endereço de uma variável?", opcoes: ["&", "*", "->"], correta: "&" },
    
    { pergunta: "Por que não se deve usar '&' em strings (vetores de char) no scanf?", opcoes: ["Porque o nome do vetor já é um endereço", "Porque string não usa scanf", "Porque string é ponteiro"], correta: "Porque o nome do vetor já é um endereço" },
    
    { pergunta: "Qual a diferença entre lista simples e lista dupla?", opcoes: ["Simples é circular", "Dupla tem ponteiro para o anterior", "Simples tem dois ponteiros"], correta: "Dupla tem ponteiro para o anterior" },
    
    { pergunta: "O que é 'Acesso Indevido' em ponteiros?", opcoes: ["Usar free() antes do tempo", "Acessar ponteiro antes do malloc", "Ambas estão corretas"], correta: "Ambas estão corretas" },
    
    { pergunta: "Em C, por que inicializar variáveis acumuladoras com zero é uma boa prática?", opcoes: ["Para economizar memória", "Para evitar lixo de memória", "Para acelerar o processamento"], correta: "Para evitar lixo de memória" },
    
    { pergunta: "Qual é o valor que indica o fim de uma lista encadeada?", opcoes: ["0", "-1", "NULL"], correta: "NULL" },
    
    { pergunta: "O que acontece se você tentar fazer um 'free()' duas vezes no mesmo ponteiro?", opcoes: ["Limpa a memória novamente", "Dupla liberação (erro crítico)", "O programa ignora"], correta: "Dupla liberação (erro crítico)" },
    
    { pergunta: "Em qual parte da memória vivem os vetores estáticos?", opcoes: ["Heap", "Stack (Pilha)", "Registradores"], correta: "Stack (Pilha)" },
    
    { pergunta: "Qual a principal vantagem da Fila Circular sobre a Fila Estática simples?", opcoes: ["Uso de ponteiros", "Evita o fenômeno de shifting", "É mais fácil de programar"], correta: "Evita o fenômeno de shifting" },
    
    { pergunta: "O que significa 'Passagem por Referência' em funções?", opcoes: ["Copiar o valor da variável", "Modificar a variável original via ponteiro", "Criar uma nova variável"], correta: "Modificar a variável original via ponteiro" },
    
    { pergunta: "Como você declara um ponteiro para um inteiro?", opcoes: ["int ptr;", "int *ptr;", "ptr *int;"], correta: "int *ptr;" },
    
    { pergunta: "Se você tem um vetor de structs, qual a sintaxe correta para acessar um campo?", opcoes: ["vetor.campo[i]", "vetor[i].campo", "vetor[i]->campo"], correta: "vetor[i].campo" },
    
    { pergunta: "O que ocorre se você tentar ler um ponteiro após ele ter sido liberado com free()?", opcoes: ["Comportamento imprevisível", "Erro de sintaxe", "O programa pausa"], correta: "Comportamento imprevisível" },
    
    { pergunta: "Para implementar uma Fila usando Listas Encadeadas, quais ponteiros você precisa controlar?", opcoes: ["Apenas o Head", "Apenas o Tail", "Head (início) e Tail (fim)"], correta: "Head (início) e Tail (fim)" },
    
    { pergunta: "Em C, por que o uso de 'typedef struct' é recomendado?", opcoes: ["Para alocar memória mais rápido", "Para simplificar a declaração de variáveis", "Para evitar uso de ponteiros"], correta: "Para simplificar a declaração de variáveis" },
    
    { pergunta: "Qual é a principal diferença de armazenamento entre Vetores e Listas Encadeadas?", opcoes: ["Vetores exigem memória contígua", "Listas exigem memória contígua", "Não há diferença"], correta: "Vetores exigem memória contígua" },
    
    { pergunta: "Ao implementar uma Pilha, qual é o custo (complexidade) de um 'pop' usando Lista Encadeada?", opcoes: ["O(n)", "O(log n)", "O(1)"], correta: "O(1)" },
    
    { pergunta: "O que acontece ao tentar acessar o elemento 'vetor[n]' se o vetor foi declarado como 'vetor[n-1]'?", opcoes: ["Erro de compilação", "Acesso indevido de memória", "O programa ignora"], correta: "Acesso indevido de memória" },
    
    { pergunta: "Qual é a função da biblioteca <stdlib.h> mencionada no seu resumo?", opcoes: ["Entrada e saída", "Operações matemáticas", "Alocação dinâmica (malloc/free)"], correta: "Alocação dinâmica (malloc/free)" },
    
    { pergunta: "Em uma Fila de Prioridade, a ordem de saída é decidida por quê?", opcoes: ["Tempo de chegada (FIFO)", "Um peso de importância", "Tamanho do dado"], correta: "Um peso de importância" },
    
    { pergunta: "O que é 'buffer' em sistemas computacionais?", opcoes: ["Um tipo de struct", "Gerenciamento de entrada/saída", "Um erro de memória"], correta: "Gerenciamento de entrada/saída" },
    
    { pergunta: "Em uma lista encadeada, o que cada nó deve obrigatoriamente conter?", opcoes: ["O dado e um ponteiro para o próximo", "O dado e um ponteiro para o anterior", "Apenas o dado"], correta: "O dado e um ponteiro para o próximo" },
    
    { pergunta: "Por que se deve verificar 'ptr == NULL' após o 'malloc'?", opcoes: ["Para otimizar o processador", "Para garantir que a memória foi reservada", "Para inicializar o vetor"], correta: "Para garantir que a memória foi reservada" },
    
    { pergunta: "Qual é o comportamento do 'head' e 'tail' quando uma fila estática está vazia?", opcoes: ["head == tail", "head > tail", "head != tail"], correta: "head == tail" },
    
    { pergunta: "Em C, os índices de vetores começam sempre em qual valor?", opcoes: ["1", "0", "-1"], correta: "0" },
    
    { pergunta: "Para desenhar o estado de uma Pilha, o que você deve rastrear?", opcoes: ["O índice do topo", "O tamanho total da memória", "Apenas o primeiro elemento"], correta: "O índice do topo" },
    
    { pergunta: "Em uma Lista Encadeada Dupla, o que permite o sentido bidirecional?", opcoes: ["Dois ponteiros para o próximo", "Ponteiro para próximo e para anterior", "Nenhuma das anteriores"], correta: "Ponteiro para próximo e para anterior" },
    
    { pergunta: "O que caracteriza uma 'Fila de Impressão' no sistema operacional?", opcoes: ["Princípio LIFO", "Princípio FIFO", "Ordenação por prioridade"], correta: "Princípio FIFO" },
    
    { pergunta: "O que acontece se você não liberar uma memória alocada dinamicamente?", opcoes: ["Memory leak (vazamento)", "Erro de compilação", "O programa fecha sozinho"], correta: "Memory leak (vazamento)" },
    
    { pergunta: "Qual é a principal característica da Fila Circular?", opcoes: ["Usa memória estática infinita", "Reutiliza espaço de memória", "Não precisa de ponteiros"], correta: "Reutiliza espaço de memória" },
    
    { pergunta: "Ao acessar um vetor de structs, qual a sintaxe correta para o campo?", opcoes: ["vetor->campo[i]", "vetor[i].campo", "vetor.campo->i"], correta: "vetor[i].campo" },
    
    { pergunta: "O que indica um ponteiro apontando para NULL em uma lista encadeada?", opcoes: ["O início da lista", "O fim da lista", "Um erro crítico"], correta: "O fim da lista" },
    
    { pergunta: "Por que a aritmética de ponteiros depende do tipo do dado (int, float, char)?", opcoes: ["Pelo tamanho em bytes do tipo", "Para definir o valor do ponteiro", "Por causa da biblioteca stdlib"], correta: "Pelo tamanho em bytes do tipo" },
    
    { pergunta: "Qual a melhor estratégia para aprender manipulação de ponteiros?", opcoes: ["Apenas ler a teoria", "Desenhar os ponteiros (esquema de setas)", "Copiar código pronto"], correta: "Desenhar os ponteiros (esquema de setas)" }
];

let indiceAtual = 0;

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function carregarQuestao() {
    const q = questoes[indiceAtual];
    document.getElementById('pergunta').innerText = q.pergunta;
    const divOpcoes = document.getElementById('opcoes');
    divOpcoes.innerHTML = '';

    const opcoesEmbaralhadas = [...q.opcoes];
    embaralhar(opcoesEmbaralhadas);

    opcoesEmbaralhadas.forEach((texto) => {
        const btn = document.createElement('button');
        btn.innerText = texto;
        btn.className = 'btn-opcao';
        btn.onclick = () => verificar(texto, btn);
        divOpcoes.appendChild(btn);
    });
}

function verificar(textoEscolhido, btn) {
    const correta = questoes[indiceAtual].correta;
    if (textoEscolhido === correta) {
        btn.className = 'btn-opcao correto';
        setTimeout(() => {
            indiceAtual = (indiceAtual + 1) % questoes.length;
            carregarQuestao();
        }, 1000);
    } else {
        btn.className = 'btn-opcao errado';
    }
}


embaralhar(questoes);
carregarQuestao();
