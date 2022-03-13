const controller = new ScrollMagic.Controller();

// pour effet section competence
const logo = document.querySelectorAll('.logo');
const champs = document.querySelectorAll('.champs');

// pour scrolltriger et gsap effet sur section parcours
const allRonds = document.querySelectorAll('.rond');
const allBoxes = document.querySelectorAll('.box');

// pour effet section points fort et faibles
const allFort = document.querySelectorAll('.boxFort');
const allFaible = document.querySelectorAll('.boxFaible');

// pour effect section fin
const github = document.querySelector('.github');
const contact = document.querySelector('.contact');
const appel = document.querySelector('.appel');

// tableau chart dans competences
const tableau = document.getElementById('tableau').getContext('2d');

let myChart = new Chart(tableau, {

    type:"radar",
    data: {
        labels: [
            'HTML',
            'CSS',
            'PHP',
            'JavaScript',
            'VueJS',
        ],
        datasets: [
            {
                label: "Niveau /100 ",
                data: [90, 90, 70, 85, 85,],
                fill: true,
                backgroundColor: 'rgba(226, 238, 246, 0.7)',
                borderColor: 'rgb(000, 99, 132)',

            }
        ],
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'niveau de mes compétences sur 100',
            },
            
        },
        elements: {
            line: {
                borderWidth: 1
            }
        },
        scales: {
            r: {
              pointLabels: {
                font: {
                  size: 15
                }
              },
              
            }
          }

    }
    
});

//animation civil
window.addEventListener('load', () => {

const etatcivil = gsap.timeline({paused: true});

etatcivil.staggerFrom(champs, 1, {opacity:0, x:-200, ease: "power2.out"}, 0.5);

etatcivil.play()

});


// animation des logo
    const outil = gsap.timeline();
    outil.staggerFrom(logo, 1, {opacity:0, ease: "power2.out"}, 0.1);
    let scene = new ScrollMagic.Scene({
        triggerElement: logo,
        reverse: false
    })  
    .setTween(outil)
    // .addIndicators()
    .addTo(controller)

    
// effet gsap et scrolltriger sur parcours

allBoxes.forEach(box => {
    for (i = 0; i< allRonds.length; i++){

        if(allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')){
            let tween = gsap.from(box, {y: -50, opacity: 0, duration: 0.5})

            new ScrollMagic.Scene({
                triggerElement: allRonds[i],
                reverse: false
            })
            .setTween(tween)
            //.addIndicators()
            .addTo(controller)
        }
    }
})


allFort.forEach(boxFort => {
    for (i = 0; i< allFort.length; i++){

        if(allFort[i].getAttribute('data-anim') === boxFort.getAttribute('data-anim')){
            let Tween = gsap.from(boxFort, {x: -200, opacity: 0, duration: 0.5})

            new ScrollMagic.Scene({
                triggerElement: allFort[i],
                reverse: false
            })
            .setTween(Tween)
            //.addIndicators()
            .addTo(controller)
        }
    }
})

allFaible.forEach(boxFaible => {
    for (i = 0; i< allFaible.length; i++){

        if(allFaible[i].getAttribute('data-anim') === boxFaible.getAttribute('data-anim')){
            let Tween = gsap.from(boxFaible, {x: 200, opacity: 0, duration: 0.5})

            new ScrollMagic.Scene({
                triggerElement: allFaible[i],
                reverse: false
            })
            .setTween(Tween)
            //.addIndicators()
            .addTo(controller)
        }
    }
})


const git = gsap.timeline();
git.from(github, 1, {opacity:0, y:-100, ease: "power2.out"}, 0.1);
    new ScrollMagic.Scene({
    triggerElement: github,
    triggerHook: 0.8,
    reverse: false
})  
.setTween(git)
// .addIndicators()
.addTo(controller)

const cont = gsap.timeline();
cont.from(contact, 1, {opacity:0, y:100, ease: "power2.out"}, 0.1);
    new ScrollMagic.Scene({
    triggerElement: github,
    triggerHook: 0.8,
    reverse: false
})  
.setTween(cont)
// .addIndicators()
.addTo(controller)

const lien = gsap.timeline();
lien.from(appel, 3, {opacity:0, ease: "power2.out"});
    new ScrollMagic.Scene({
    triggerElement: github,
    triggerHook: 0.8,
    reverse: false
})  
.setTween(lien)
// .addIndicators()
.addTo(controller)