function calculateFD() {
    var principal = parseFloat(document.getElementById('principal').value);
    var rate = parseFloat(document.getElementById('rate').value);
    var years = parseFloat(document.getElementById('years').value);

    var interest = (principal * rate * years) / 100;
    var totalAmount = principal + interest;

    var resultMessage = `After ${years} years, at an interest rate of ${rate}%, your total amount will be ${totalAmount.toFixed(2)}`;
    document.getElementById('result').innerText = resultMessage;

    // Call function to update or draw the pie chart
    updatePieChart(principal, interest);
}

function updatePieChart(principal, interest) {
    var chartContainer = document.getElementById('chartContainer').getContext('2d');
    
    // Destroy previous chart if it exists
    if (window.myPieChart) {
        window.myPieChart.destroy();
    }

    // Create a new chart
    window.myPieChart = new Chart(chartContainer, {
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

