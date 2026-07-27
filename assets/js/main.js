
    (() => {
      const docs = Array.from(document.querySelectorAll('.doc'));
      const lightbox = document.getElementById('docLightbox');
      if (!docs.length || !lightbox) return;

      const image = lightbox.querySelector('.lightbox-img');
      const count = lightbox.querySelector('.lightbox-count');
      const closeBtn = lightbox.querySelector('.lightbox-close');
      const prevBtn = lightbox.querySelector('.lightbox-prev');
      const nextBtn = lightbox.querySelector('.lightbox-next');

      const sources = docs.map((doc) => {
        const href = doc.getAttribute('href');
        const preview = doc.querySelector('img');
        return href || (preview ? preview.getAttribute('src') : '');
      });

      let current = 0;

      function show(index) {
        current = (index + sources.length) % sources.length;
        image.src = sources[current];
        if (count) count.textContent = `${current + 1} / ${sources.length}`;
      }

      function open(index) {
        show(index);
        lightbox.classList.add('is-open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }

      function close() {
        lightbox.classList.remove('is-open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        image.removeAttribute('src');
      }

      docs.forEach((doc, index) => {
        doc.addEventListener('click', (event) => {
          event.preventDefault();
          event.stopPropagation();
          open(index);
        });
      });

      closeBtn?.addEventListener('click', close);
      prevBtn?.addEventListener('click', () => show(current - 1));
      nextBtn?.addEventListener('click', () => show(current + 1));

      lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) close();
      });

      document.addEventListener('keydown', (event) => {
        if (!lightbox.classList.contains('is-open')) return;
        if (event.key === 'Escape') close();
        if (event.key === 'ArrowLeft') show(current - 1);
        if (event.key === 'ArrowRight') show(current + 1);
      });
    })();
  


    (() => {
      const gears = Array.from(document.querySelectorAll('.side-gear'));
      if (!gears.length) return;

      let lastY = window.scrollY || 0;
      let rotation = lastY;
      let ticking = false;

      function render() {
        gears.forEach((gear) => {
          const direction = Number(gear.dataset.dir || 1);
          const speed = Number(gear.dataset.speed || 0.12);
          const angle = rotation * speed * direction;
          gear.style.transform = `rotate(${angle}deg)`;
        });
        ticking = false;
      }

      function onScroll() {
        const currentY = window.scrollY || 0;
        const delta = currentY - lastY;
        rotation += delta;
        lastY = currentY;

        if (!ticking) {
          window.requestAnimationFrame(render);
          ticking = true;
        }
      }

      render();
      window.addEventListener('scroll', onScroll, { passive: true });
    })();
  


(() => {
  const header = document.querySelector('.topbar');
  const courseCards = Array.from(document.querySelectorAll('details.course-card'));
  const teamCards = Array.from(document.querySelectorAll('details.team-card'));

  function scrollCardIntoComfortableView(card) {
    window.setTimeout(() => {
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      const rect = card.getBoundingClientRect();
      const availableHeight = window.innerHeight - headerHeight - 24;
      const fits = rect.height <= availableHeight;
      const extraSpace = fits ? Math.max(12, (availableHeight - rect.height) / 2) : 12;
      const targetY = window.scrollY + rect.top - headerHeight - extraSpace;
      window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
    }, 70);
  }

  courseCards.forEach((card) => {
    card.addEventListener('toggle', () => {
      if (!card.open) return;
      courseCards.forEach((other) => {
        if (other !== card) other.open = false;
      });
      scrollCardIntoComfortableView(card);
    });
  });

  teamCards.forEach((card) => {
    card.addEventListener('toggle', () => {
      if (!card.open) return;
      teamCards.forEach((other) => {
        if (other !== card) other.open = false;
      });
      scrollCardIntoComfortableView(card);
    });
  });

  const direction = document.getElementById('direction');
  document.querySelectorAll('.course-cta[data-direction]').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (direction) direction.value = link.dataset.direction || '';
      if (link.closest('summary')) {
        event.preventDefault();
        event.stopPropagation();
        const contact = document.getElementById('contact');
        if (contact) contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const form = document.getElementById('prototypeForm');
  const status = document.getElementById('demoFormStatus');
  if (form && status) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      status.textContent = 'Это тестовый прототип: форма выглядит и проверяет обязательные поля, но пока не отправляет данные.';
      status.classList.add('is-visible');
    });
  }
})();
