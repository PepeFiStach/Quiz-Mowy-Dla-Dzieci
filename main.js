let startButton = document.querySelector('.start-page-button');
let startPage = document.querySelector('.start-page');
let menuPage = document.querySelector('.menu-page');
let questionPage = document.querySelector('.question-page');

let SCORE = 0;
let leftClick = true;

let button1 = document.querySelector('.btn-1');
let button2 = document.querySelector('.btn-2');
let button3 = document.querySelector('.btn-3');
let button4 = document.querySelector('.btn-4');

startButton.addEventListener('mousedown', () => {
    if (leftClick) {
        startPage.classList.toggle('start-page-transform');
        leftClick = false;
    }
});

button1.addEventListener('mousedown', () => {
    if (leftClick) {
        question.forEach(q => {
            let question1 = new Question1(q.first.q1.note1,q.first.q2.note1,q.first.q3.note1,q.first.q4.note1,
                q.first.q5.note1,q.first.q1.replay1,q.first.q1.replay2,q.first.q1.replay3,
                q.first.q2.replay1,q.first.q2.replay2,q.first.q2.replay3,q.first.q3.replay1,
                q.first.q3.replay2,q.first.q3.replay3,q.first.q4.replay1,q.first.q4.replay2,
                q.first.q4.replay3,q.first.q5.replay1,q.first.q5.replay2,q.first.q5.replay3,
                'odp.b','odp.b','odp.a','odp.b','odp.a');
                question1.btnEvent();
        });
        menuPage.classList.toggle('menu-page-transformDown');
        questionPage.classList.toggle('question-page-transform');
    }
});

button2.addEventListener('mousedown', () => {
    if (leftClick) {
        question.forEach(q => {
            let question1 = new Question1(q.second.q1.note1, q.second.q2.note1, q.second.q3.note1, q.second.q4.note1,
                q.second.q5.note1, q.second.q1.replay1, q.second.q1.replay2, q.second.q1.replay3,
                q.second.q2.replay1, q.second.q2.replay2, q.second.q2.replay3, q.second.q3.replay1,
                q.second.q3.replay2, q.second.q3.replay3, q.second.q4.replay1, q.second.q4.replay2,
                q.second.q4.replay3, q.second.q5.replay1, q.second.q5.replay2, q.second.q5.replay3,
             'odp.a', 'odp.a', 'odp.b', 'odp.a', 'odp.a');
            question1.btnEvent();
        });
        menuPage.classList.toggle('menu-page-transformDown');
        questionPage.classList.toggle('question-page-transform');
    }
});

button3.addEventListener('mousedown', () => {
    if (leftClick) {
        question.forEach(q => {
            let question1 = new Question1(q.third.q1.note1, q.third.q2.note1, q.third.q3.note1, q.third.q4.note1,
                q.third.q5.note1, q.third.q1.replay1, q.third.q1.replay2, q.third.q1.replay3,
                q.third.q2.replay1, q.third.q2.replay2, q.third.q2.replay3, q.third.q3.replay1,
                q.third.q3.replay2, q.third.q3.replay3, q.third.q4.replay1, q.third.q4.replay2,
                q.third.q4.replay3, q.third.q5.replay1, q.third.q5.replay2, q.third.q5.replay3,
             'odp.b', 'odp.a', 'odp.c', 'odp.b', 'odp.a');
            question1.btnEvent();
        });
        menuPage.classList.toggle('menu-page-transformDown');
        questionPage.classList.toggle('question-page-transform');
    }
});

button4.addEventListener('mousedown', () => {
    if (leftClick) {
        question.forEach(q => {
            let question1 = new Question1(q.four.q1.note1, q.four.q2.note1, q.four.q3.note1, q.four.q4.note1,
                q.four.q5.note1, q.four.q1.replay1, q.four.q1.replay2, q.four.q1.replay3, 
                q.four.q2.replay1, q.four.q2.replay2, q.four.q2.replay3,  q.four.q3.replay1,
                q.four.q3.replay2, q.four.q3.replay3,  q.four.q4.replay1, q.four.q4.replay2,
                q.four.q4.replay3,  q.four.q5.replay1, q.four.q5.replay2, q.four.q5.replay3,
                 'odp.b', 'odp.b', 'odp.b', 'odp.a', 'odp.a');
            question1.btnEvent();
        });
        menuPage.classList.toggle('menu-page-transformDown');
        questionPage.classList.toggle('question-page-transform');
    }
});

menuPage.addEventListener('transitionend', () => {
    // questionPage.classList.toggle('question-page-transform');
    console.log('znika menu page');
});

startPage.addEventListener('transitionend', () => {
    menuPage.classList.toggle('menu-page-transform');
    console.log('znika pierwsza strona');
    leftClick = true;
});



