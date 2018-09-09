
class Question1 {
    constructor(q1,q2,q3,q4,q5,r11,r12,r13,r21,r22,r23,r31,r32,r33,r41,r42,r43,r51,r52,r53,
        o1,o2,o3,o4,o5) {
        this.q1 = q1;
        this.q2 = q2;
        this.q3 = q3;
        this.q4 = q4;
        this.q5 = q5;
        this.r11 = r11;
        this.r12 = r12;
        this.r13 = r13;
        this.r21 = r21;
        this.r22 = r22;
        this.r23 = r23;
        this.r31 = r31;
        this.r32 = r32;
        this.r33 = r33;
        this.r41 = r41;
        this.r42 = r42;
        this.r43 = r43;
        this.r51 = r51;
        this.r52 = r52;
        this.r53 = r53;
        this.o1 = o1;
        this.o2 = o2;
        this.o3 = o3;
        this.o4 = o4;
        this.o5 = o5;

        this.question1 = document.querySelector('.note1');
        this.replay = document.querySelectorAll('.choose-question-button');
        this.replay1 = document.querySelector('.q-11');
        this.replay2 = document.querySelector('.q-12');
        this.replay3 = document.querySelector('.q-13');
        this.questionPage = document.querySelector('.question-page');
        this.endPage = document.querySelector('.end-page');

        this.number = 0;
        this.leftClick = true;
        // this.score = 0;
        this.delay = 2000;
    }

    createReplay(number) {

        question.forEach(q => {
            switch (number) {
                case 0:
                    this.replay1.innerHTML = this.r11;
                    this.replay2.innerHTML = this.r12;
                    this.replay3.innerHTML = this.r13;
                    break;
                case 1:
                    this.replay1.innerHTML = this.r21;
                    this.replay2.innerHTML = this.r22;
                    this.replay3.innerHTML = this.r23;
                    break;
                case 2:
                    this.replay1.innerHTML = this.r31;
                    this.replay2.innerHTML = this.r32;
                    this.replay3.innerHTML = this.r33;
                    break;
                case 3:
                    this.replay1.innerHTML = this.r41;
                    this.replay2.innerHTML = this.r42;
                    this.replay3.innerHTML = this.r43;
                    break;
                case 4:
                    this.replay1.innerHTML = this.r51;
                    this.replay2.innerHTML = this.r52;
                    this.replay3.innerHTML = this.r53;
                    break;

                default:
                    break;
            } 
        });
    }

    createQuestion(number) {
        question.forEach(q => {
            switch (number) {
                case 0:
                    this.question1.innerHTML = this.q1;
                    break;
                case 1:
                    this.question1.innerHTML = this.q2;
                    break;
                case 2:
                    this.question1.innerHTML = this.q3;
                    break;
                case 3:
                    this.question1.innerHTML = this.q4;
                    break;
                case 4:
                    this.question1.innerHTML = this.q5;
                    break;

                default:
                    break;
            }
        });
    }

    btnEvent() {
        this.createQuestion(this.number);
        this.createReplay(this.number);
        this.replay.forEach(p => {
            console.log(p);
            p.addEventListener('mousedown', (event) => {
                if (this.leftClick) {
                    switch (this.number) {
                        case 0:
                            if (event.target.id === this.o1)
                                SCORE++;
                            break;
                        case 1:
                            if (event.target.id === this.o2)
                                SCORE++;
                            break;
                        case 2:
                            if (event.target.id === this.o3)
                                SCORE++;
                            break;
                        case 3:
                            if (event.target.id === this.o4)
                                SCORE++;
                            break;
                        case 4:
                            if (event.target.id === this.o5)
                                SCORE++;
                            break;

                        default:
                            break;
                    }
                    this.question1.classList.toggle('question-page-transformDown');
                    this.replay1.classList.toggle('question-change-down');
                    this.replay2.classList.toggle('question-change-down');
                    this.replay3.classList.toggle('question-change-down');
                    this.number++;
                    this.leftClick = false;
                    if (this.number === 5) {
                        this.questionPage.classList.remove('question-page-transform');
                        this.questionPage.classList.toggle('test');
                        this.endPage.classList.toggle('end-page-transform');
                    }
                }
            });
        });

        this.question1.addEventListener('transitionend', () => {
            console.log(SCORE);
            this.question1.classList.remove('question-page-transformDown');
            this.replay1.classList.remove('question-change-down');
            this.replay2.classList.remove('question-change-down');
            this.replay3.classList.remove('question-change-down');
            
            this.createQuestion(this.number);
            this.createReplay(this.number);
            
            this.replay1.classList.toggle('question-change-up');
            this.replay2.classList.toggle('question-change-up');
            this.replay3.classList.toggle('question-change-up');
            this.question1.classList.toggle('question-page-transformUp');
            setTimeout(() => {
                this.leftClick = true;
            }, this.delay);
        });
        this.endPage.addEventListener('transitionend', () => {
            this.count = 0;
            this.score = document.querySelector('.score');
            setInterval(() => {
                this.count++;
                if (this.count <= SCORE) {
                    this.score.innerHTML = this.count;
                }
            }, 800);
        });
    }
}