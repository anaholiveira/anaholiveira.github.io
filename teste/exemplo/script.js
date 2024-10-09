const titulo = document.querySelector('h1');
// titulo.remove();

// console.log('InnerHTML:', titulo.innerHTML)
// console.log('InnerText:', titulo.innerText)
// console.log('TextContent:', titulo.textContent)

const body = document.querySelector('body');
const ancora = document.createElement('a');
ancora.textContent = '♡ Meu link';
ancora.setAttribute('href', 'https://www.ifro.edu.br');
ancora.setAttribute('target', '_blank');
ancora.style.fontSize = '25px';
ancora.style.color = 'pink';
ancora.style.textDecoration = 'none';
ancora.style.fontWeight = 'bold';
body.prepend(ancora);