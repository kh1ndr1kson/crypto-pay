const images = document.querySelectorAll('.item');
const dots = document.getElementsByName('slide');
const step = images[0].getBoundingClientRect().height;
const currentValue = document.getElementById('slideTextCurrent')
const totalValue = document.getElementById('slideTextTotal')

totalValue.innerText = images.length < 10 ? `0${images.length}` : images.length;

dots.forEach((dot) => {
  dot.addEventListener('change', function (e) {
    dots.forEach((el, i) => {
      currentValue.innerText = e.target.value < 10
        ? `0${Number(e.target.value) + 1}`
        : Number(e.target.value) + 1;

      images[i].style.transform = `translateY(-${e.target.value * step}px)`;
    })
  })
})
