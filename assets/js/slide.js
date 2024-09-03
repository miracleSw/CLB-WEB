const imgs = document.querySelectorAll('.slide__img');
const length = imgs.length;
const btnL = document.querySelector('.btn-left');
const btnR = document.querySelector('.btn-right');
let cur = 0;

const showSlide = (index) => {
    imgs.forEach((img, i) => {
        img.style.display = (i === index) ? 'block' : 'none';
    });
    document.querySelector('.index-active').classList.remove('index-active');
    document.querySelector('.index-item-' + index).classList.add('index-active');
};

const handleChangeSlide = () => {
    cur = (cur + 1) % length;
    showSlide(cur);
};

const handlePrevSlide = () => {
    cur = (cur - 1 + length) % length;
    showSlide(cur);
};

let handleEventChangeSlide = setInterval(handleChangeSlide, 5000);

btnR.addEventListener('click', () => {
    clearInterval(handleEventChangeSlide);
    handleChangeSlide();
    handleEventChangeSlide = setInterval(handleChangeSlide, 5000);
});

btnL.addEventListener('click', () => {
    clearInterval(handleEventChangeSlide);
    handlePrevSlide();
    handleEventChangeSlide = setInterval(handleChangeSlide, 5000);
});

showSlide(cur);
