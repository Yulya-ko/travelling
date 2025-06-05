document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide('.offers__container-slider', {
    type     : 'loop',
    perPage  : 3,
    perMove  : 1,
    gap      : '73px',
    pagination: false,
    breakpoints: {
  1024: { perPage: 2 },
  768: { perPage: 1, gap: '24px', focus: 'center'},
  480: { perPage: 1, gap: '16px', focus: 'center',},
},
  });

  splide.mount();
  
  // Фіксуємо перший слайд після завантаження сторінки
  splide.go(0); // Встановлюємо перший слайд активним
});
