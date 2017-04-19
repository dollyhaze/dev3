var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'donut',
options: { title: { display:true, text:'test'}},
  data: {
    labels: ["i hate ", "evertyhing", "W"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
      ],
      data: [33, 33, 33]
    }]
  }
});