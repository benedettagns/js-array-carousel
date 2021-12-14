//array titolo 
const titleText = [
    'Notre-Dame in fiamme',
    'Uscita nuovo smartphone',
    'La terra è rotonda',
];

//array testo 
const slideTexts = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolor dolores error, beatae amet nesciunt distinctio ducimus aut iusto voluptas dicta qui. Vero nulla doloribus nihil assumenda eligendi, dolorum sequi!',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut harum labore rem ratione omnis asperiores magni ipsa delectus adipisci quam, consectetur fuga dolorem, sed impedit dolores, ad pariatur porro expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolores necessitatibus qui, similique expedita, praesentium, perspiciatis aliquam corrupti aperiam quisquam esse obcaecati voluptatum pariatur eaque dolor nisi ipsa maxime ducimus!',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis consectetur quidem eius. Reprehenderit doloribus similique doloremque aperiam, nesciunt consectetur sit fugit culpa exercitationem optio quis voluptates unde labore vel aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea mollitia est nam impedit provident! Ut obcaecati tempore impedit qui error molestiae a laborum doloribus repellendus, modi est quam nulla iure. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam commodi iste nisi consectetur ratione corrupti doloribus at maxime.',
];

let currentIndex = 0;

const titleSlider = document.querySelector('.title');
const textSlider = document.querySelector('.text');

titleSlider.innerHTML = titleText[0];
textSlider.innerHTML = slideTexts[0];

//button
const nextTitle = document.getElementById('next');
const prevTitle = document.getElementById('prev');

nextTitle.addEventListener('click', function () {
    currentIndex++;

    if (currentIndex > titleText.length - 1) {
        currentIndex = 0;
    }

    titleSlider.innerHTML = titleText[currentIndex];
})

prevTitle.addEventListener('click', function () {
    currentIndex--;

    if (currentIndex > titleText.length - 1) {
        currentIndex = 0;
    }
    titleSlider.innerHTML = titleText[currentIndex];
})