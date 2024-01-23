function updatePieChart(principal, interest) {
    var chartContainer = document.getElementById('chartContainer');
    
    // Destroy previous chart if it exists
    if (window.myPieChart) {
        window.myPieChart.destroy();
    }

    // Create a new chart
    var ctx = chartContainer.getContext('2d');
    window.myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Principal', 'Interest'],
            datasets: [{
                data: [principal, interest],
                backgroundColor: ['#36a2eb', '#ff6384']
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Principal vs Interest'
            }
        }
    });
}
