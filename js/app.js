const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {
    popup.style.display = 'block'
})

popup.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper', 'popup-link']

         if(classNameOfClickedElement === 'popup-close' || classNameOfClickedElement === 'popup-link' || classNameOfClickedElement === 'popup-wrapper') {
            popup.style.display = 'none'
         }
})
