// CORK POCHETTE • CRAFTSMANSHIP TELEMETRY & DRAWER LOGIC
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('drawer-toggle');
  const drawer = document.getElementById('mobile-drawer');

  if (toggle && drawer) {
    toggle.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.innerHTML = isOpen ? '&times;' : '&#9776;';
    });

    document.addEventListener('click', (e) => {
      if (!drawer.contains(e.target) && !toggle.contains(e.target) && drawer.classList.contains('open')) {
        drawer.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerHTML = '&#9776;';
      }
    });
  }

  // Interactive Bespoke Pochette Customizer Simulator
  const configBtn = document.getElementById('config-pochette-btn');
  const configResult = document.getElementById('config-pochette-result');
  if (configBtn && configResult) {
    configBtn.addEventListener('click', () => {
      const model = document.getElementById('model-select').value;
      const grain = document.getElementById('grain-select').value;
      const thread = document.getElementById('thread-select').value;
      const hardware = document.getElementById('hardware-select').value;

      const specs = {
        'envelope': { dim: '24.5 x 16.0 x 3.5 cm', weight: '185 grams', hours: '16 hand-hours' },
        'clutch': { dim: '28.0 x 18.5 x 4.0 cm', weight: '220 grams', hours: '22 hand-hours' },
        'structured': { dim: '31.0 x 20.0 x 5.5 cm', weight: '290 grams', hours: '28 hand-hours' }
      };

      const selected = specs[model];

      configResult.innerHTML = `
        <div style="margin-top:1.25rem; padding:1.35rem; background:var(--bg-card); border:1px solid var(--border-glow); border-radius:4px;">
          <h4 style="color:var(--accent-brass); margin-bottom:0.6rem; font-family:var(--font-heading);">Commission Atelier Telemetry</h4>
          <p style="font-size:0.95rem; margin-bottom:0.25rem;"><strong>Model Geometry:</strong> ${model.toUpperCase()} (${selected.dim})</p>
          <p style="font-size:0.95rem; margin-bottom:0.25rem;"><strong>Bark Grain Selection:</strong> ${grain}</p>
          <p style="font-size:0.95rem; margin-bottom:0.25rem;"><strong>Saddle-Stitch Thread:</strong> ${thread} French Waxed Linen</p>
          <p style="font-size:0.95rem; margin-bottom:0.25rem;"><strong>Solid Metal Hardware:</strong> ${hardware}</p>
          <p style="font-size:0.95rem; margin-top:0.5rem; color:var(--accent-terracotta); font-family:var(--font-mono);">
            Crafting Duration: ${selected.hours} &bull; Net Weight: ${selected.weight}
          </p>
        </div>
      `;
    });
  }
});
