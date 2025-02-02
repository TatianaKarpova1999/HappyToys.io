const aboutButton = document.querySelector('.header__link-about')
const contactsButton = document.querySelector('.header__link-contacts')
const contactsButtonHero = document.querySelector('.hero__button-contacts')
const aboutButtonFooter = document.querySelector('.footer__link-about');
const contactsButtonFooter = document.querySelector('.footer__link-contacts');

const contactsBlock = document.querySelector('.contacts');
const aboutBlock = document.querySelector('.about');

const servicesButton = document.querySelectorAll('.services__item-link');

if (aboutButton) {
    aboutButton.addEventListener('click', () => {
        aboutBlock.scrollIntoView(
            {behavior: "smooth", block: "start", inline: "start"}
        ) 
    })
}

if (aboutButtonFooter) {
    aboutButtonFooter.addEventListener('click', () => {
        aboutBlock.scrollIntoView(
            {behavior: "smooth", block: "start", inline: "start"}
        ) 
    })
}


if (contactsButton) {
    contactsButton.addEventListener('click', () => {
        contactsBlock.scrollIntoView(
            {behavior: "smooth", block: "start", inline: "start"}
        ) 
    })    
}

if (contactsButtonHero) {
    contactsButtonHero.addEventListener('click', () => {
        contactsBlock.scrollIntoView(
            {behavior: "smooth", block: "start", inline: "start"}
        ) 
    })
}

if (contactsButtonFooter) {
    contactsButtonFooter.addEventListener('click', () => {
        contactsBlock.scrollIntoView(
            {behavior: "smooth", block: "start", inline: "start"}
        ) 
    })
    
}


if (servicesButton) {
    servicesButton.forEach((evt) => {
        evt.addEventListener('click', () => {
            contactsBlock.scrollIntoView(
                {behavior: "smooth", block: "start", inline: "start"}
            ) 
        })
    })
}


function onEntry(entry) {
    entry.forEach(change => {
        console.log(change)
      if (change.isIntersecting) {
       change.target.classList.add('element-appearance');
      }
    });
}
  
  let options = {threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('section');
  let blockCatalog = document.querySelectorAll('.catalog__item');

  for (let block of blockCatalog) {
    observer.observe(block);
  }
  
  for (let elm of elements) {
    observer.observe(elm);
  }