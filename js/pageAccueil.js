const titreSpans = document.querySelectorAll('h1 span');
const recherche = document.querySelector('.recherche');
const button = document.querySelector('.button');
const media = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const competences = document.querySelector('.competences')


window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titreSpans, 1, {top: -50, opacity:0, ease: "power2.out"}, 0.3)
    .from(recherche, 1, {left: -200, opacity:0, ease:"power2.out"}, 1.3)
    .from(button, 1, { opacity:0, ease: "power0"},'-=1')
    .from(l1, 1, { width: 0, ease: "power2.out"}, '-=2')
    .from(l2, 1, { width: 0, ease: "power2.out"}, '-=2')
    .staggerFrom(media, 0.7, {right:-200, ease: "power2.out"}, 0.3, '-=2');

    TL.play();   
    
});

window.addEventListener('load', () => {

    new Typewriter(competences, {
        deleteSpeed:15,
        delay: 40,
    })
    .pauseFor(2500)
    .typeString("Actuellement à la recherche d'une alternance pour un Bac+3 , J'ai appris comme language ")
    .pauseFor(500)
    .typeString('<strong style="color: #F16529">le HTML </strong> ')
    .pauseFor(300)
    .typeString('et le <strong style="color: #2965F1">CSS</strong> !')
    .pauseFor(1000)
    .deleteChars(21)
    .typeString(' le <strong style="color: #ff6910">JavaScript</strong> ')
    .pauseFor(300)
    .typeString('ainsi que le <strong style="color: #9300ff ">PHP</strong> !')
    .pauseFor(500)
    .typeString(' J\'ai également travaillé sur les framework <strong style="color: #3FB27F ">VueJS</strong> et <strong style="color: #2c40d8 ">Symfony</strong> !')

    .start()


});





    