const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let image = document.querySelector('.person');
let job = document.querySelector('.job');
let name = document.querySelector('.name');
let text = document.querySelector('.paragraph');

const  TanyaData = {
    image: '/images/image-tanya.jpg',
    name: 'Tanya Sinclair',
    job: 'UX Engineer',
    text: ' “ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”'
}
const jonhData = {
    image: '/images/image-john.jpg',
    name: 'John Tarkpor',
    job: 'Junior Front-end Developer',
    text: ' “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”'
}

let currentData = TanyaData;

function updatePersonData() {
    image.src = currentData.image;
    name.textContent = currentData.name;
    job.textContent = currentData.job;
    text.textContent = currentData.text;
  }

nextButton.addEventListener("click", ()=>{
    currentData = jonhData;
    updatePersonData();
});

prevButton.addEventListener("click", ()=>{
    currentData = TanyaData;
    updatePersonData();
});

