 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the below code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////

 (function() {
     function buildQuiz() {
         // we'll need a place to store the HTML output
         const output = [];

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // we'll want to store the list of answer choices
             const answers = [];

             // and for each available answer...
             for (letter in currentQuestion.answers) {
                 // ...add an HTML radio button
                 answers.push(
                     `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
         </label>`
                 );
             }

             // add this question and its answers to the output
             output.push(
                 `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join("")} </div>`
             );
         });

         // finally combine our output list into one string of HTML and put it on the page
         quizContainer.innerHTML = output.join("");
     }

     function showResults() {
         // gather answer containers from our quiz
         const answerContainers = quizContainer.querySelectorAll(".answers");
         answerContainers.forEach(e => e.style.color = "black");
         
         // keep track of user's answers
         let numCorrect = 0;

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // find selected answer
             const answerContainer = answerContainers[questionNumber];
             const selector = `input[name=question${questionNumber}]:checked`;
             const userAnswer = (answerContainer.querySelector(selector) || {}).value;

             // if answer is correct
             if (userAnswer === currentQuestion.correctAnswer) {
                 // add to the number of correct answers
                 numCorrect++;

                 // color the answers green
                 //answerContainers[questionNumber].style.color = "lightgreen";
             } else {
                 // if answer is wrong or blank
                 // color the answers red
                 answerContainers[questionNumber].style.color = "red";
             }
         });

         // show number of correct answers out of total
         resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
     }

     const quizContainer = document.getElementById("quiz");
     const resultsContainer = document.getElementById("results");
     const submitButton = document.getElementById("submit");


     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the above code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////






     /////////////// Write the MCQ below in the exactly same described format ///////////////


     const myQuestions = [{
            question: "1. Beam is nondispersive medium.", ///// Write the question inside double quotes
            answers: {
                a: "True", ///// Write the option 1 inside double quotes
                b: "False", ///// Write the option 2 inside double quotes
                // c: "<img src='images/pr3.png' style='height: 51px' draggable='false'>", ///// Write the option 1 inside double quotes
                // d: "<img src='images/pr4.png' style='height: 47px' draggable='false'>", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

        {
            question: "2. Phase velocity (V<sub>p</sub>) and excitation frequency (&#969;) relation.", ///// Write the question inside double quotes
            answers: {
                a: "<img src='images/q2a.png' style='height: 45px' draggable='false'>", ///// Write the option 1 inside double quotes
                b: "<img src='images/q2b.png' style='height: 45px' draggable='false'>", ///// Write the option 2 inside double quotes
                c: "<img src='images/q2c.png' style='height: 44px' draggable='false'>", ///// Write the option 1 inside double quotes
                d: "<img src='images/q2d.png' style='height: 42px' draggable='false'>", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

        {
            question: "3. Phase velocity equation in terms of wave number (k) and frequency (&#969;).", ///// Write the question inside double quotes
            answers: {
                a: "<img src='images/q3a.png' style='height: 50px' draggable='false'>", ///// Write the option 1 inside double quotes
                b: "<img src='images/q3b.png' style='height: 50px' draggable='false'>", ///// Write the option 2 inside double quotes
                c: "<img src='images/q3c.png' style='height: 58px' draggable='false'>", ///// Write the option 1 inside double quotes
                d: "<img src='images/q3d.png' style='height: 50px' draggable='false'>", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

        // {
        //     question: "4. For Clamped, fixed, or built-in edge boundary condition the deflection and slope (normal to the boundary)", ///// Write the question inside double quotes
        //     answers: {
        //         a: "must be one", ///// Write the option 1 inside double quotes
        //         b: "must be zero", ///// Write the option 2 inside double quotes
        //         c: "must be two", ///// Write the option 1 inside double quotes
        //         d: "must be five", ///// Write the option 2 inside double quotes
        //     },
        //     correctAnswer: "b" ///// Write the correct option inside double quotes
        // },

        // {
        //     question: "5. For free edge boundary condition bending moment resultant and the effective shear force resultant on the edge?", ///// Write the question inside double quotes
        //     answers: {
        //         a: "must be one", ///// Write the option 1 inside double quotes
        //         b: "must be five", ///// Write the option 2 inside double quotes
        //         c: "must be two", ///// Write the option 1 inside double quotes
        //         d: "must be zero", ///// Write the option 2 inside double quotes
        //     },
        //     correctAnswer: "d" ///// Write the correct option inside double quotes
        // },



     ];




     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the below code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////


     // display quiz right away
     buildQuiz();

     // on submit, show results
     submitButton.addEventListener("click", showResults);
 })();


 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the above code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////
