const toggleButton = document.getElementById('modeHandler')
const iphone = document.getElementById('iphone')

function setDarkTheme () {
  document.body.setAttribute('dark', '')
  toggleButton.setAttribute('value', 'dark')

  /* save current theme */
  localStorage.setItem('theme', 'dark')

  /* feat DOM elements */
  iphone.setAttribute('src', './assets/hero-block/phone__dark.webp')
  document.querySelectorAll('.button.secondary').forEach((el) => {
    el.classList.remove('secondary')
    el.classList.add('dark')
  })
}

function setLightTheme () {
  document.body.removeAttribute('dark')
  toggleButton.setAttribute('value', 'light')

  /* save current theme */
  localStorage.setItem('theme', 'light')

  /* feat DOM elements */
  iphone.setAttribute('src', './assets/hero-block/phone.webp')
  document.querySelectorAll('.button.dark').forEach((el) => {
    el.classList.remove('dark')
    el.classList.add('secondary')
  })
}

if (localStorage.getItem('theme') === null) {
  window.matchMedia('(prefers-color-scheme: dark)').matches
    ? setDarkTheme()
    : setLightTheme()
} else {
  localStorage.getItem('theme') === 'dark'
    ? setDarkTheme()
    : setLightTheme()
}

toggleButton.addEventListener('click', function (e) {
  e.target.value === 'light'
    ? setDarkTheme()
    : setLightTheme()
})
