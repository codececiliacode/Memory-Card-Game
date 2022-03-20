'use strict'

const section = document.querySelector('section');
let playerLives = document.querySelector('span');
let playerLivesCount = 6;


playerLives.textContent = playerLivesCount;

// Generating the data
const getData = () => [
    {imgsrc: './images/aglow.jpg', name: 'aglow'},
    {imgsrc: './images/freak.jpg', name: 'freak'},
    {imgsrc: './images/gurll.jpg', name: 'gurll'},
    {imgsrc: './images/hand.jpg', name: 'hand'},
    {imgsrc: './images/heart.jpg', name: 'heart'},
    {imgsrc: './images/kitturn.jpg', name: 'kitturn'},
    {imgsrc: './images/meow.jpg', name: 'meow'},
    {imgsrc: './images/yuep.jpg', name: 'yuep'},
    {imgsrc: './images/aglow.jpg', name: 'aglow'},
    {imgsrc: './images/freak.jpg', name: 'freak'},
    {imgsrc: './images/gurll.jpg', name: 'gurll'},
    {imgsrc: './images/hand.jpg', name: 'hand'},
    {imgsrc: './images/heart.jpg', name: 'heart'},
    {imgsrc: './images/kitturn.jpg', name: 'kitturn'},
    {imgsrc: './images/meow.jpg', name: 'meow'},
    {imgsrc: './images/yuep.jpg', name: 'yuep'},
];

const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    console.log(cardData);
    return cardData;
}
randomize();

// Card generator 
const cardGenerator = () => {
    const cardData = randomize();

    const selectedCards = document.querySelectorAll('.card');

    cardData.forEach((item, index) => {
        console.log(item);
        console.log(cardData);
    const card = document.createElement('div');
    const face = document.createElement('img');
    const back = document.createElement('div');
    card.classList = 'card';
    face.classList = 'face';
    back.classList = 'back';
    face.src = item.imgsrc;
    card.setAttribute('name', item.name);
    // selectedCards[index].setAttribute('name', item.name);
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener('click', (e) => {
        card.classList.toggle('toggle');
        checkCards(e);
    });
    });
};

// Check cards
const checkCards = (e) => {
    const clickedCard = e.target
    clickedCard.classList.add('flipped');
    const flippedCard = document.querySelectorAll('.flipped');
    console.log(clickedCard);
    if (flippedCard.length === 2) {
        if (flippedCard[0].getAttribute('name') === 
        flippedCard[1].getAttribute('name')) {
            console.log('we have a match');
            flippedCard.forEach((card) => {
                card.classList.remove('flipped');
                card.style.pointerEvents = "none";
            })
        }
        else {
            console.log('BOINK');
            flippedCard.forEach((card) => {
                card.classList.remove('flipped');
                setTimeout(() => card.classList.remove('toggle'), 1200);
             });
             playerLivesCount--;
             playerLives.textContent = playerLivesCount;
             if (playerLivesCount === 0) {
                 restartGame();
             };
            };
        };
    };
    
    const restartGame = () => {
            let cardData = randomize();
            let faces = document.querySelectorAll('.face');
            let cards = document.querySelectorAll('.card');
            cardData.forEach((item, index) => {
                cards[index].classList.remove('toggle');
                cards[index].style.pointerEvents = 'all';
                faces[index].src = item.imgsrc;
                cards[index].setAttribute('name', item.name);
            });
            playerLivesCount = 6;
            playerLives.textContent = playerLivesCount;
        }
    
// restartGame


cardGenerator();