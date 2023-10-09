/*
 * Accept a wide range of cryptocurrencies
 */
const currencyAnimation = document.getElementById('currencyContainer')

function currencyCoinsAnimation() {
  if (isStartCurrency) return

  const coinElements = document.querySelectorAll('.coin');
  let index = 0;

  const currencyInterval = setInterval(() => {
    coinElements[index].classList.add('zoomed');

    setTimeout(() => {
      coinElements[index].classList.remove('zoomed');
      index++;

      if (index === coinElements.length) {
        clearInterval(currencyInterval);
        isStartCurrency = false;
      }
    }, 175);
  }, 350);

  isStartCurrency = true;
}

let isStartCurrency = false;

currencyAnimation.addEventListener('mouseenter', currencyCoinsAnimation);

/*
 * Payment statistics
 */
const statContainer = document.getElementById('statContainer')
const statAction = document.querySelectorAll('.action')

let isStartStat = false

const data = [
  {
    statPeriod: 'all time:',
    statVolume: '$204,920',
    statInvoices: '16,256',
    statN2P: '9,353',
    statN2U: '5,606',
    statConversion: '57%'
  },
  {
    statPeriod: 'today:',
    statVolume: '$6,530',
    statInvoices: '2,569',
    statN2P: '1,253',
    statN2U: '1,606',
    statConversion: '48%'
  },
  {
    statPeriod: 'yesterday:',
    statVolume: '$8,216',
    statInvoices: '4,980',
    statN2P: '3,012',
    statN2U: '3,606',
    statConversion: '60%'
  }
]

function statAnimation() {
  if (isStartStat) return

  isStartStat = true

  setTimeout(() => {
    for (const [key, value] of Object.entries(data[1]))
      document.getElementById(key).innerText = value

    statAction[0].classList.remove('selected')
    statAction[1].classList.add('selected')
  }, 500)

  setTimeout(() => {
    for (const [key, value] of Object.entries(data[2]))
      document.getElementById(key).innerText = value

    statAction[1].classList.remove('selected')
    statAction[2].classList.add('selected')

  }, 1400);
  setTimeout(() => {
    for (const [key, value] of Object.entries(data[0]))
      document.getElementById(key).innerText = value

    statAction[2].classList.remove('selected')
    statAction[0].classList.add('selected')

    isStartStat = false
  }, 2300);
}

statContainer.addEventListener('mouseenter', statAnimation);
