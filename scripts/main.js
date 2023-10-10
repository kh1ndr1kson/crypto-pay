const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)
    const blockValue = blockID === 'quickStart' ? 'start' : 'center'

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: blockValue
    })
  })
}
