const  listImage = document.querySelector('.list-images')
const imgs = document.getElementsByClassName('slide__img')
const length = imgs.length
const btnL = document.querySelector('.btn-left')
const btnR = document.querySelector('.btn-right')

let cur = 0, prev = 0

const handleChangeSlide = () => {
    if(cur == length - 1){
        prev = 1
        cur = 0
    }
    else if (cur == 1 && prev == 1){
        prev = 0
        cur = -1
    }
    cur++
    let width = imgs[0].offsetWidth
    listImage.style.transform = `translateX(${width * -1 * cur}px)`
    document.querySelector('.index-active').classList.remove('index-active')
    document.querySelector('.index-item-' + cur).classList.add('index-active')
}

// setInterval(handleChangeSlide, 4000)

let handleEventChangeSlide = setInterval(handleChangeSlide, 5000)

btnR.addEventListener('click', () => {
    clearInterval(handleEventChangeSlide)
    if(cur == length - 1){
        cur = -1
    }
    cur++
    let width = imgs[0].offsetWidth
    listImage.style.transform = `translateX(${width * -1 * cur}px)`
    handleEventChangeSlide = setInterval(handleChangeSlide, 5000)
    document.querySelector('.index-active').classList.remove('index-active')
    document.querySelector('.index-item-' + cur).classList.add('index-active')
})

btnL.addEventListener('click', () => {
    clearInterval(handleEventChangeSlide)
    if(cur == 0) cur = length
    cur--
    let width = imgs[0].offsetWidth
    listImage.style.transform = `translateX(${width * -1 * cur}px)`
    handleEventChangeSlide = setInterval(handleChangeSlide, 5000)
    document.querySelector('.index-active').classList.remove('index-active')
    document.querySelector('.index-item-' + cur).classList.add('index-active')
})

