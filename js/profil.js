const tableau = document.getElementById('tableau').getContext('2d');

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

    }
    
});