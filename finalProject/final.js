function Question(text, options, answer) {
    this.text = text;
    this.options = options;
    this.answer = answer;
}

let questions = [
    new Question("What quiz is the best quiz?", ['The "What flavor doughnut are you?" Quiz', "Pre-Calculus Pop Quiz", 'The "Which Hogwarts House do you belong to?" Quiz', "The Quiz" ], "The Quiz"),
    new Question("Why are we here?", ["Love", "God", "Science", "The Quiz"], "The Quiz"),
    new Question("Do you love The Quiz?", ["Yes", "Yes", "Yes", "Yes"], "Yes"),
    new Question("What will you give The Quiz?", ["My life", "My sanity", "My strength", "Everything."], "Everything."),
    new Question("Will you ever take another quiz after taking The Quiz??", ["Yes", "No", "Maybe", "Never. I vow to only take The Quiz until I die."], "Never. I vow to only take The Quiz until I die.")
];

let button0 = document.getElementById('guess0');
let button1 = document.getElementById('guess1');
let button2 = document.getElementById('guess2');
let button3 = document.getElementById('guess3');

let score = 0
let questionNumber = 0

NextQuestion()

function NextQuestion() {
    document.getElementById('question').textContent = "Question: " + questions[questionNumber].text;

    for (let i = 0; i < 4; i++) {
        document.getElementById('choice' + i).textContent = questions[questionNumber].options[i];
    }

    document.getElementById('progress').textContent = "Question " + (questionNumber + 1) + " of 5"
}

function AddScore(buttonNum) {
    if (questionNumber == 0) {
        if (buttonNum == 3) {
            score += 1
        }
    }

    else if (questionNumber == 1) {
        if (buttonNum == 3) {
            score += 1
        }
    }

    else if (questionNumber == 2) {
        score += 1
    }

    else if (questionNumber == 3) {
        if (buttonNum == 3) {
            score += 1
        }
    }

    else if (questionNumber == 4) {
        if (buttonNum == 3) {
            score += 1
        }
        window.alert("Thank you for taking The Quiz! Your score: " + score + " out of 5.")
    }

    if (questionNumber <= 4) {
        questionNumber += 1
        console.log('Score: ' + score)
        NextQuestion()
    }
}

button0.addEventListener ('click', () => {AddScore(0)})
button1.addEventListener ('click', () => {AddScore(1)})
button2.addEventListener ('click', () => {AddScore(2)})
button3.addEventListener ("click", () => {AddScore(3)})
