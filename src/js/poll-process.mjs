export function pokemonVotingPoll() {
    return `<div class="poll">
                <div class="questions"></div>
            </div>;`
}
//display poll question and options
let poll = {
    question: "What's your favorite starter pokemon from the 1st generation?",
    answers:["Bulbasaur", "Charmander", "Squirtle", "Pikachu"],
    pollCount: 20,
    answersWeight: [4, 4, 2, 10],
    selectedAnswer: +1
};

let pollDom = {
    question:document.querySelector(".poll . question"),
    answers:document.querySelector(".poll .answers"),
};

pollDom.question.innerText = poll.question;
poll.answers.map(function(answer, i) {
    return (

        `<div class="answer" onClick="markAnswer('${i}')">
        ${answer}
        <span class="percentage-bar"></span>
        <span class="percentage-value"></span>
        </div`
    );
}).join("");

//mark selected answer
function markAnswer(i){
    poll.selectedAnswer = +i;
    try {
        document.querySelector(".poll . answers .answer .selected"). classList.remove("selected")
    } catch(msg){}
    document.querySelectorAll(".poll . answers .answer"). classList.add("selected")
    showResults();
}
//display poll results
function showResults (){
    let answers = document.querySelector(".poll .answers .answer");
    for(let i=0;1<answers.length;i++){
        let percentage = 0;
        if (i== poll.selectedAnswer){
            percentage = Math.round(
                (poll.answersWeight[i]+1) * 100 / (poll.pollCount+1)
            );
        } else {
            percentage = Math.round(
                (poll.answersWeight[i]+1) * 100 / (poll.pollCount+1)
            );
        }

        answers[i].querySelector(".percentage-bar").style.width = percentage + "%";
        answers[i].querySelector(".percentage-value").innerText = percentage + "%";
    }
}


//Comment Section
export function addComment() {
    return `<div class ="comments">
            <h2>Leave Your Comments</h2>
            <form id=comment-form>
                <label for="fullName">Name:</label>
                <input type="fullName" name="fullName" id="fullName" required>
                <label for="email">E-mail:</label>
                <input type="email" name="email" id="email" required>
                <textarea placeholder='Add Your Comment'></textarea>
                <div class="button">
                    input type="submit" value="Comment">
                    <button>Cancel</button>
                </div>
            </form>
            </div>`;
}