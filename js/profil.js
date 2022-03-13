const tableau = document.getElementById('tableau').getContext('2d');

// pour effet competance
const logo = document.querySelectorAll('.logo');
const champs = document.querySelectorAll('.champs');

// pour scrolltriger et gsap effet sur section parcours
const allRonds = document.querySelectorAll('.rond');
const allBoxes = document.querySelectorAll('.box');
const controller = new ScrollMagic.Controller();


// tableau chart dans competences

let myChart = new Chart(tableau, {

    type:"radar",
    data: {
        labels: [
            'HTML',
            'CSS',
            'PHP',
            'JavaScript',
            'Vuejs',
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
    outil.staggerFrom(logo, 1, {opacity:0, ease: "power2.out"}, 0.2);
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

            let scene2 = new ScrollMagic.Scene({
                triggerElement: allRonds[i],
                reverse: false
            })
            .setTween(tween)
            // .addIndicators()
            .addTo(controller)
        }
    }
})