const items = document.querySelectorAll('ul li');

items.forEach((item) => {
  item.addEventListener('click', () => {
    const section = document.querySelector('section.events');
    section.classList.remove('active');
    setTimeout(function () {
      section.classList.add('active');
      if (item.classList[0] == 'family') {
        items.forEach((item) => {
          item.classList.remove('active');
        });
        const eventBg = document.querySelector('.events .img-container');
        eventBg.style.backgroundImage =
          'url(./images/homepage/family-gathering-desktop.jpg)';
        const texth1 = document.querySelector('.events .text h3');
        texth1.innerHTML = 'Family Gathering';
        const textp = document.querySelector('.events .text p');
        textp.innerHTML =
          'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.';
        item.classList.add('active');
      } else if (item.classList[0] == 'special') {
        items.forEach((item) => {
          item.classList.remove('active');
        });
        const eventBg = document.querySelector('.events .img-container');
        eventBg.style.backgroundImage =
          'url(./images/homepage/social-events-desktop.jpg)';
        const texth1 = document.querySelector('.events .text h3');
        texth1.innerHTML = 'Special Events';
        const textp = document.querySelector('.events .text p');
        textp.innerHTML =
          'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.';
        item.classList.add('active');
      } else if (item.classList[0] == 'social') {
        items.forEach((item) => {
          item.classList.remove('active');
        });
        const eventBg = document.querySelector('.events .img-container');
        eventBg.style.backgroundImage =
          'url(./images/homepage/special-events-desktop.jpg)';
        const texth1 = document.querySelector('.events .text h3');
        texth1.innerHTML = ' Social Events';
        const textp = document.querySelector('.events .text p');
        textp.innerHTML =
          'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.';
        item.classList.add('active');
      }
    }, 10);
  });
});
