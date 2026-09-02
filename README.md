# Algorithms

Estudos de algoritmos e estruturas de dados, com foco em entrevistas técnicas.

## Conteúdo

- [LeetCode — Top Interview 150](leetcode/README.md): resolução dos exercícios do study plan, organizados por categoria (Array/String, Two Pointers, Hashmap, Linked List, Binary Tree, DP, etc.).
- Algoritmos clássicos implementados em JavaScript:
  - [Busca binária](b-search.js) — recursiva, `O(log n)`.
  - [Merge sort](merge-sort.js) — `O(n log n)`.

## Como rodar

Os arquivos são executáveis diretamente com Node.js:

```bash
node b-search.js
node merge-sort.js
node leetcode/two-pointers/valid-palindrome.js
```

## Estrutura

```
algorithms/
├── b-search.js
├── merge-sort.js
└── leetcode/
    ├── README.md        # progresso do Top Interview 150
    └── <categoria>/     # soluções por tópico
```

## Progresso

Veja o progresso detalhado no [README do LeetCode](leetcode/README.md).
