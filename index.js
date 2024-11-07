const popup = document.querySelector('.popup')
const openPopup = document.querySelector('#open-popup')
const closePopup = document.querySelector('.close-btn')
const casinoList = document.querySelector('.casino-list')
const btnCopy = document.querySelector('.promo-code')
const copySuccessful = document.querySelector('.copy-successful ')
const btnLoadMore = document.querySelector('.btn-load-more')
const moreCard = document.querySelector('.more-casinos')

function generateRandomCode(length = 8) {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
	let result = ''
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length))
	}
	return result
}

openPopup.addEventListener('click', () => {  
	popup.style.display = 'block' 
})

closePopup.addEventListener('click', () => {  
	popup.style.display = 'none' 
})

btnCopy.addEventListener('click', () => {
  const randomCode = generateRandomCode();    
  navigator.clipboard.writeText(randomCode).then(() => {
    copySuccessful.style.display === 'flex' ? copySuccessful.style.display = 'none' : copySuccessful.style.display = 'flex'
  }).catch(err => {
    console.error(err);
  });
})

btnLoadMore.addEventListener('click', () => {
  moreCard.style.display = 'flex' 
  btnLoadMore.style.display = 'none'
})