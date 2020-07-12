const slider = document.querySelector('#slider')
const productImage = document.querySelector('#productImage')
slider.addEventListener('input', handleInputSlider)
const images = []
window.addEventListener('load', pageLoaded)
function pageLoaded() {
  for (let i = 1; i <= 36; i += 1) {
    const number = i.toString().padStart(2, '00')
    const url = `https://stockx-360.imgix.net/Nike-Air-Force-1-Low-Off-White-Black-White/Images/Nike-Air-Force-1-Low-Off-White-Black-White/Lv2/img${number}.jpg?auto=format,compress&q=90&updated_at=1546755764&w=1000`
    const image = new Image()
    image.src = url
    image.addEventListener('load', () => {
      images[i] = image
      if (i === 1) {
        loadImage(i)
      }
    })
  }
}
function loadImage(index) {
  productImage.src = images[index].src
}
function handleInputSlider() {
  loadImage(this.value)
}