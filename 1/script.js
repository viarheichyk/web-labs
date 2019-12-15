let registrationBlock;
let testingBlock;
let resultBlock;
let user;

class User {
    constructor(surname, 
        name, 
        gender, 
        age, 
        login, 
        password, 
        email, 
        phone, 
        position) {
        this.surname = surname;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.login = login;
        this.password = password,
        this.email = email;
        this.phone = phone;
        this.position = position;
    } 
}

class Quiz {
    constructor() {
        this.i = 0;
        this.answers = new Array(QUESTIONS.questions.length);
    }

    next() {
        if (this.checkAnswer()) {
            if (++this.i <= QUESTIONS.questions.length - 1) {
                this.showQuiz();
            } else {
                this.showResult();
            }
        } else {
            alert ('Error! Set answer');
        }
    }

    prev() {
        this.i--;
        this.showQuiz();
    }

    checkAnswer() {
        const answer = document.querySelector('input[name="answer"]:checked');
        
        if (answer) {
            this.answers[this.i] = Number(answer.value);

            return true;
        }

        return false;
    }

    showQuiz() {
        const question = document.querySelector('.question');
        question.innerHTML = '<div class="question">' + QUESTIONS.questions[this.i].text + '<div>';

        let fragment = document.createDocumentFragment();

        QUESTIONS.questions[this.i].answers.forEach((answer) => {
            const div = document.createElement('div');
            const input = document.createElement('input');
            input.type = 'radio';
            input.value = answer.point;
            input.name = 'answer';

            const span = document.createElement('span');
            span.innerHTML = answer.text;

            div.appendChild(input);
            div.appendChild(span);
            fragment.appendChild(div);
        });
        question.appendChild(fragment);
    }

    showResult() {
        let div = document.createElement('div');
        div.classList.add('user-info');

        div.innerHTML += `<div>Фамилия: ${ user.surname }</div>`;
        div.innerHTML += `<div>Имя: ${ user.name }</div>`;
        div.innerHTML += `<div>Пол: ${ user.gender }</div>`;
        div.innerHTML += `<div>Возраст: ${ user.age }</div>`;
        div.innerHTML += `<div>Логин: ${ user.login }</div>`;
        div.innerHTML += `<div>Email: ${ user.email }</div>`;
        div.innerHTML += `<div>Телефон: ${ user.surname }</div>`;
        div.innerHTML += `<div>Должность: ${ user.position }</div>`;

        let table = document.createElement('table');
        table.classList.add('result__table')
        table.innerHTML = '<tr><th>Вопрос</th><th>Баллы</th></tr>';

        QUESTIONS.questions.forEach((question, index) => {
            table.innerHTML += `<tr><td>${ question.text }</td><td>${ this.answers[index] }</td></tr>`;
        });

        const resultSum = this.answers.reduce((sum, item) => {
            return sum + item;
        });

        const resultText = QUESTIONS.results.filter((result) => {
            return (resultSum >= result.min && resultSum <= result.max);
        })[0].text;

        table.innerHTML += `<tr><td>Всего баллов</td><td>${ resultSum }</td></tr>`;
        resultBlock.appendChild(div);
        resultBlock.appendChild(table);
        resultBlock.innerHTML += 'Результат: ' + resultText;

        testingBlock.style.display = 'none';
        resultBlock.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    registrationBlock = document.querySelector('#registration');
    testingBlock = document.querySelector('#test');
    resultBlock = document.querySelector('#result');
    testingBlock.style.display = 'none';
    resultBlock.style.display = 'none';
    const registrationForm = document.querySelector('.registration-form');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        registrationBlock.style.display = 'none';
        testingBlock.style.display = 'block';

        user = new User(
            this.querySelector('#surname').value,
            this.querySelector('#name').value,
            this.querySelector('#gender').value,
            this.querySelector('#age').value,
            this.querySelector('#login').value,
            this.querySelector('#password').value,
            this.querySelector('#email').value,
            this.querySelector('#phone').value,
            this.querySelector('#position').value
        );

        let test = new Quiz();

        const answerNextButton = document.querySelector('#answer_next');
        const answerPrevButton = document.querySelector('#answer_prev');

        answerNextButton.addEventListener('click', () => {
            test.next();
        });

        answerPrevButton.addEventListener('click', () => {
            test.prev();
        });

        test.showQuiz();
    });
});