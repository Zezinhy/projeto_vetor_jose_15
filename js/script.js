let vetor = [];

function adicionarValor() {
  const valor = document.getElementById('valor').value.trim();
  
  if (valor) {
    vetor.push(valor);

    const tabela = document.getElementById('tabelaValores').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();
    const celula = novaLinha.insertCell(0);
    celula.textContent = valor;

    document.getElementById('valor').value = '';
  }
}

function mostrarPalavraMaisLonga() {
  if (vetor.length === 0) {
    alert("Nenhuma palavra foi adicionada.");
    return;
  }

  let palavraMaisLonga = vetor[0];

  for (let i = 1; i < vetor.length; i++) {
    if (vetor[i].length > palavraMaisLonga.length) {
      palavraMaisLonga = vetor[i];
    }
  }

  const tabela = document.getElementById('tabelaPalavraMaisLonga').getElementsByTagName('tbody')[0];
  tabela.innerHTML = ''; // Limpa a tabela antes de adicionar novos valores
  
  const novaLinha = tabela.insertRow();
  const celula = novaLinha.insertCell(0);
  celula.textContent = palavraMaisLonga;
}
