// 3. Cria uma função para contar a quantidade de clicks em um botão e atualizar no HTML

let clickCount = 0

document.querySelector('button').addEventListener('click', () => {
  document.querySelector('#viewCount').value = ++clickCount
})
