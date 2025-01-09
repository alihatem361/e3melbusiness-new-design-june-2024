(function () {
  // Count Down
  // Exam Form

  if ($('.exam__form')?.length) {
    $('.exam__form').validate({
      rules: {
        radio_1: {
          required: true,
        },
        radio_3: {
          required: true,
        },
        'check_1[]': {
          required: true,
        },
        'check_2[]': {
          required: true,
        },
        'check_3[]': {
          required: true,
        },
      },
      errorPlacement: function (error, el) {
        console.log(error);
        console.log(el);
      },
      submitHandler: function (form) {
        console.log(form);
      },
    });
  }

  const ctx = document.getElementById('resultChart').getContext('2d');

  // Example data: 50 points scored out of 100
  const scored = 50;
  const total = 100;
  const remaining = total - scored; // 50

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['النتيجة', 'الإجمالي'],
      datasets: [
        {
          data: [scored, remaining],
          backgroundColor: [
            '#01B350', // Color for scored portion
            '#E0E0E0', // Color for remaining portion
          ],
          hoverBackgroundColor: ['#01B350', '#BDBDBD'],
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: true, // Show legend with labels "Scored" and "Remaining"
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.label || '';
              const value = context.parsed;
              return label + ': ' + value;
            },
          },
        },
      },
      cutout: '70%', // Adjust thickness of the doughnut
      responsive: true,
      maintainAspectRatio: false,
    },
  });
})();
