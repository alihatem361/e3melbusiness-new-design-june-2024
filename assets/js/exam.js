(function () {
  // Count Down

  const exam__count__down__container = document.getElementById('exam__count__down__container');
  let timeLeft = 0;
  if (exam__count__down__container) {
    timeLeft = !isNaN(Number(exam__count__down__container.getAttribute('data-count-down')))
      ? Number(exam__count__down__container.getAttribute('data-count-down'))
      : 0;
  }

  // Set the total countdown time (2 hours = 7200 seconds)

  // Update the countdown every second
  const timer = setInterval(() => {
    // Decrement time by 1 second
    timeLeft--;

    // Calculate hours, minutes, seconds
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (hoursEl) {
      hoursEl.textContent = String(hours).padStart(2, '0');
    }

    if (minutesEl) {
      minutesEl.textContent = String(minutes).padStart(2, '0');
    }

    if (secondsEl) {
      secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    // When it reaches 0, stop the timer and ensure we show 00:00:00
    if (timeLeft <= 0) {
      clearInterval(timer);
      if (hoursEl) {
        hoursEl.textContent = String(hours).padStart(0, '0');
      }

      if (minutesEl) {
        minutesEl.textContent = String(minutes).padStart(0, '0');
      }

      if (secondsEl) {
        secondsEl.textContent = String(seconds).padStart(0, '0');
      }
    }
  }, 1000);

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

  if (document.getElementById('resultChart')) {
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
  }
})();
