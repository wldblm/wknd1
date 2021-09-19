import './style.css'

const div = document.getElementById('app');
const array = [
  '/img_1.jpg',
  '/img_2.jpg',
  '/img_3.jpg',
  '/img_4.jpg',
  '/img_5.jpg',
  '/img_6.jpg',
]




window.addEventListener('click', () => {
  let random = Math.floor(Math.random() * array.length);
  console.log(array[random]);
  changeImage(array[random]);
})

function changeImage(img) {
  div.style.backgroundImage = `url('${img}')`;
}