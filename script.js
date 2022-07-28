const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const pulo = () => {
    mario.classList.add('pulo');
    setTimeout(() => {
        mario.classList.remove('pulo')
    }, 500)
}

const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', "");
    if (pipePosition <= 120 && pipePosition>0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}.px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}.px`

        mario.src = './imagens/game-over.png';
        mario.style.width = '73px'
        mario.style.marginLeft = '50px'
    }
   
},10)
document.addEventListener('keydown', pulo);
