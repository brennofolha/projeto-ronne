// se nao entender o código veja o vídeo : Como construir um popup com apenas 17 linhas de JavaScript puro;

const button = document.querySelector('button') 
const popup = document.querySelector('.popup-wrapper') 
const closeButton = document.querySelector('.popup-close')

button.addEventListener('click', () => {
    popup.style.display = 'block'
}) // Quando eu clicar no botão o popup abrirá!

popup.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const shouldClosePopup = classNameOfClickedElement === 'popup-close' || classNameOfClickedElement === 'popup-wrapper' || classNameOfClickedElement === 'popup-link'  
    
    if (shouldClosePopup) {
    popup.style.display = 'none'
    
}

}) 


//todos os elementos que forem colocados dentro da "const ClassName" quando clicados fecharão o popup



// !Este comando que coloquei em comentário é para quando eu clicar no x ele vai fechar o popup!
//closeButton.addEventListener ('click', () => {
   // popup.style.display = 'none'
//}) 