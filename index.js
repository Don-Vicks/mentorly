
      // Initialize icons
      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
        }
      });

      // Current year
      (function () {
        const el = document.getElementById('year');
        if (el) el.textContent = new Date().getFullYear();
      })();

      // Chart.js: Weekly mastery by topic
      (function () {
        const canvas = document.getElementById('progressChart');
        if (!canvas || typeof Chart === 'undefined') return;

        const ctx = canvas.getContext('2d');

        const data = {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              label: 'Math',
              data: [72, 74, 76, 78, 80, 81, 82],
              borderColor: 'rgb(96, 165, 250)', // blue-400
              backgroundColor: 'rgba(96, 165, 250, 0.25)',
              tension: 0.35,
              borderWidth: 2,
              pointRadius: 2.5,
              fill: true
            },
            {
              label: 'Reading',
              data: [68, 69, 71, 73, 75, 77, 79],
              borderColor: 'rgb(52, 211, 153)', // emerald-400
              backgroundColor: 'rgba(52, 211, 153, 0.22)',
              tension: 0.35,
              borderWidth: 2,
              pointRadius: 2.5,
              fill: true
            },
            {
              label: 'Science',
              data: [60, 62, 64, 66, 69, 72, 74],
              borderColor: 'rgb(167, 139, 250)', // violet-400
              backgroundColor: 'rgba(167, 139, 250, 0.22)',
              tension: 0.35,
              borderWidth: 2,
              pointRadius: 2.5,
              fill: true
            }
          ]
        };

        const gridColor = 'rgba(226, 232, 240, 0.08)'; // slate-200/opacity
        const tickColor = 'rgba(148, 163, 184, 0.6)';  // slate-400

        new Chart(ctx, {
          type: 'line',
          data,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                titleColor: '#e2e8f0',
                bodyColor: '#cbd5e1',
                borderColor: 'rgba(255,255,255,0.08)',
                borderWidth: 1
              }
            },
            interaction: {
              mode: 'nearest',
              intersect: false
            },
            scales: {
              x: {
                grid: { color: gridColor, drawBorder: false },
                ticks: { color: tickColor, font: { size: 10 } }
              },
              y: {
                suggestedMin: 50,
                suggestedMax: 100,
                grid: { color: gridColor, drawBorder: false },
                ticks: {
                  color: tickColor,
                  font: { size: 10 },
                  callback: (val) => val + '%'
                }
              }
            }
          }
        });
      })();

      // CTA form handler (demo-only)
      (function () {
        const form = document.querySelector('section#cta form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const btn = form.querySelector('button[type="submit"]');
          if (btn) {
            btn.disabled = true;
            btn.classList.add('opacity-75', 'cursor-not-allowed');
            btn.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i> Request received';
            if (window.lucide) window.lucide.createIcons();
          }
        });
      })();