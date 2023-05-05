import cards from '/js/cards.js';

import '../styles/global.css';

const html = document.querySelector('html')
const cardSpace = document.querySelector('.cards')
const light = document.querySelector('.light')
const dark = document.querySelector('.dark')
const darkmode_button = document.querySelectorAll('.darkmode')



function insertCards(cards){
    return `<div class="max-w-sm self-center shadow-2xl max-h-sm m-auto h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-10">
    <a href="#">
        <img class="rounded-t-lg" src=${cards.img} alt=>
    </a>
    <div class="p-5 h-64 grid grid-cols-3 grid-rows-3">
        <a class="col-span-3" href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${cards.title}</h5>
        </a>
        <p class="mb-3 font-normal text-justify col-span-3 text-gray-700 dark:text-gray-400">${cards.content}</p>
        <a href="#" class="group inline-flex h-3/4 self-end items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           Leia mais
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1 transition group-hover:translate-x-3/4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
  </div>`

}

function switchdarkmode(){
    html.classList.toggle("dark")
    light.classList.toggle("hidden")
    dark.classList.toggle("hidden")
}

darkmode_button.forEach(button => button.addEventListener('click', function(e){ switchdarkmode()}));
cardSpace.innerHTML = cards.map((card) => insertCards(card)).join('');