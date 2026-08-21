function bSearch(lista, alvo, b = 0, a = lista.length - 1) {
  if (b > a) {
    return -1;
  }
  let meio = Math.floor((b + a) / 2);
  if (lista[meio] === alvo) {
    return meio;
  }
  if (lista[meio] < alvo) {
    return bSearch(lista, alvo, meio + 1, a);
  }
  if (lista[meio] > alvo) {
    return bSearch(lista, alvo, b, meio - 1);
  }
}

let lista = [10, 20, 30, 40],
  alvo = 30;
console.log(bSearch(lista, alvo));
