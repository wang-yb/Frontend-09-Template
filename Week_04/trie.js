//构建字典树
let $ = Symbol("$");
class Trie {
  constructor() {
    this.root = Object.create(null);
  }
  insert(word) {
    let node = this.root;
    for (let p of word) {
      if (!node[p]) {
        node[p] = Object.create(null);
      }
      node = node[p];
    }
    if (!node[$]) {
        node[$] = 0;
    }
    node[$]++;
  }
  most() {
    let maxCount = 0;
    let maxWord = null;
    function visit(node, word) {
      if (node[$] && node[$] > maxCount) {
        maxCount = node[$];
        maxWord = word;
      }
      for (let p in node) {
        visit(node[p], word + p);
      }
    }
    visit(this.root, "");
    console.log(maxCount, maxWord);
  }
}
function randomWord(length) {
  var s = "";
  for (let i = 0; i < length; i++) {
    s += String.fromCodePoint(Math.floor(Math.random()*26) + "a".codePointAt(0));
  }
  return s;
}
let trie = new Trie();
for (let i=0; i < 10000; i++) {
  trie.insert(randomWord(4));
}
trie.most();