var typed = new Typed(".text",{
    strings:["Developer", "Musician", "Learner"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop:true
});

let currentExperience = 0;
const experienceCards = document.querySelectorAll('.experience');
const experienceContainer = document.querySelector('.experience-container');

function showExperience(index) {
    experienceCards.forEach((card, i) => {
        if (i === index) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function nextExperience() {
    currentExperience = (currentExperience + 1) % experienceCards.length;
    showExperience(currentExperience);
}

showExperience(currentExperience);

