import { tools } from './tools.js';
import { experiences } from './experience.js';
import { projects } from './projects.js';
import { services } from './services.js';

const grid = document.getElementById("toolsgrid");
const exp_grid = document.getElementById("exp_grid");
const projects_grid = document.getElementById("projects_grid")
const servicesbox = document.getElementById("servicesbox")

tools.forEach((item) => {
  const card = document.createElement("div");
  card.className = `
    flex flex-col items-center gap-3 p-5 rounded-2xl border
    bg-gray-800/50 border-gray-700
    hover:scale-[1.02] shadow hover:shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300
     cursor-pointer data-aos="fade-right"
  `;

  card.innerHTML = `
    <div class="text-3xl text-indigo-400">${item.icon}</div>
    <h2 class="text-base font-semibold text-white">${item.title}</h2>
    <a href="${item.link}" target="_blank"
       class="text-xs text-indigo-400 hover:underline">
      See More →
    </a>
  `;

  grid.appendChild(card);
});

experiences.forEach((elt) => {
  const card = document.createElement("div");
  card.className = `
    flex flex-col items-start gap-3 p-5 rounded-2xl border
    bg-gray-800/50 border-gray-700
    hover:scale-[1.02] shadow hover:shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300
     cursor-pointer md:w-1/3 data-aos="slide-down"
  `;

  card.innerHTML = `
    <h2 class="text-base font-bold text-2xl text-white">${elt.post}</h2>
    <h3 class="text-lg">${elt.year}</h3>
    <h3 class="text-xl font-semibold">${elt.company}</h3>
    <ul class="list-disc ml-5 space-y-1">
      ${elt.tasks.map(task => `<li class="text-gray-400">${task}</li>`).join('')}
    </ul>
  `;

  exp_grid.appendChild(card)
})

projects.forEach((it) => {
  const card = document.createElement("div");
  card.className = `
    card bg-base-100 w-96 shadow-xl rounded-2xl border
    bg-gray-800/50 border-gray-700 md:w-1/3 hover:scale-[1.02] hover:shadow-2xl
    transition-all duration-200 cursor-pointer
  `;

  card.innerHTML = `
    <figure>
      <img src=${it.image} alt=${it.title} class="h-64 w-full"/>
    </figure>
    <div class="card-body">
      <h2 class="card-title">${it.title}</h2>
      <p>${it.description}</p>
      <div class="card-actions justify-start">
        <a href=${it.link} target="_blank" class="btn btn-neutral">See Project</a>
      </div>
    </div>
  `;

  projects_grid.appendChild(card)
})

services.forEach((element) => {
  const card = document.createElement('div')
  card.className = `
    card bg-base-100 shadow-2xl rounded-2xl border flex flex-col gap-4
    bg-gray-800/50 border-gray-700 hover:scale-[1.02] hover:shadow-2xl
    transition-all duration-200 cursor-pointer items-start p-6
  `
  card.innerHTML = `
    <div class="p-4 rounded-xl bg-neutral hover:transition-transform duration-300 hover:rotate-180">${element.icon}</div>
    <h2 class="text-2xl font-bold uppercase text-white">${element.name}</h2>
    <p>${element.description}</p>

  `
  servicesbox.appendChild(card)
})

