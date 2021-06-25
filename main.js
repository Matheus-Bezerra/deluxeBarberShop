/* Abre e fechamento do menu dos icones: */
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show') //Se tiver na lista do nav um show ele vai tirar quando der um click
    }) 
}

/* Quando clicar em umitem do menu, esconder o menu!*/
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}


/*Mudar o header(add sombra) da página quando der scroll */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
    if(window.scrollY >= navHeight) {
        //scroll é maior que a altura do header
        header.classList.add('scroll')
    } else {
        //mennor que a altura do header
        header.classList.remove('scroll')
    }
})

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    Keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
  });

/*ScrollReveal: Mostrar elementos quando da scroll na página*/
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .text, #home .image,
    #about .image, #about .text h2, #about .text p,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #portifolio .text, #portifolio img,
    #contact .text, #contact .links
    footer .brand, footer .social
    `,
    { interval: 100 }
)
/* Menu ativo conforme a seção vísivel na página*/

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {

    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for(const section of sections ) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart 	&& checkpointEnd) {
            document
            .querySelector('nav ul li a[href*=]' + sectionId + ']')
            .classList.add('active')
        } else {
            document
            .querySelector('nav ul li a[href*=]' + sectionId + ']')
            .classList.remove('active')
        }
    }
}

/*Botão voltar para o topo */

const backToTopButton = document.querySelector('#back-to-top')
window.addEventListener('scroll', function() {
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
})

