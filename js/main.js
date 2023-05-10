import cards from '/js/cards.js';

import '../styles/global.css';

const html = document.querySelector('html')
const cardSpace = document.querySelector('.cards')
const darkmode_button = document.querySelectorAll('.darkmode')
const titulo = document.querySelector('#text');

function insertCards(cards){
    return `<div class=" shadow-xl m-5 overflow-hidden rounded-xl bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white m-10">
            <img
              src="${cards.img}"
              alt="image"
              class="w-full"
            />
            <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
              <h3>
                <a
                  href="javascript:void(0)"
                  class="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                >
                  ${cards.title}
                </a>
              </h3>
              <p class="mb-7 text-base leading-relaxed text-body-color">
                ${cards.content}
              </p>

              <a
                href="javascript:void(0)"
                class="inline-block rounded-full border border-black py-2 px-7 text-base font-medium text-body-color transition hover:border-primary hover:bg-musgo hover:text-white hover:border-0 dark:border-white"
              >
                View Details
              </a>
            </div>
            </div>
          `
}

function switchdarkmode(){
    html.classList.toggle("dark")
}

function typeWriter() {
    const textoArray = ' Descarte!'.split('');
    titulo.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => titulo.innerHTML += letra, 250 * i);
    });
    setTimeout(() => typeWriter(), 3500);
  }

  // function typeWriter(elemento) {
  //   const textoArray = elemento.innerHTML.split('');
  //   elemento.innerHTML = '';
  //   for(let i = 0; i < textoArray.length; i++) {
  //     setTimeout(() => elemento.innerHTML += textoArray[i], 75 * i);
  //   }
  // }

  darkmode_button.forEach(button => button.addEventListener('click', function(e){ switchdarkmode()}));
  cardSpace.innerHTML = cards.map((card) => insertCards(card)).join('');
  typeWriter();
