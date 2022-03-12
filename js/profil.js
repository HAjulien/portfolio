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
                label: "Niveau",
                data: [90, 85, 75, 75, 70,],
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
                text: 'niveau de mes compétences',
                fontSize: 42
            },
            
        },
        elements: {
            line: {
                borderWidth: 1
            }
        }
    }
    
});