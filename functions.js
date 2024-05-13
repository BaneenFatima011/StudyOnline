
//Home Page//
function Open() {
  const sidebar = document.querySelector('.sidebar');
  if (window.innerWidth <= 768) {
  sidebar.classList.toggle('left-[-270px]');
}
}
//Language Pages//
var currenttab = 1;
var totalScenes = 5;
function switchScenes() {
const currentScene = document.getElementById(currenttab);

if (currentScene) {
  console.log('Hiding scene with ID:', currenttab);
  currentScene.classList.add("d-none");
}

currenttab++;

if (currenttab > totalScenes) {
  currenttab = 1;
}

const nextScene = document.getElementById(currenttab);

if (nextScene) {
  console.log('Displaying scene with ID:', currenttab);
  nextScene.classList.remove("d-none");
}

console.log('Current tab:', currenttab);
}
function prevScenes() {
const currentScene = document.getElementById(currenttab);

if (currentScene) {
  console.log('Hiding scene with ID:', currenttab);
  currentScene.classList.add("d-none");
}
currenttab--;

if(currenttab <= 0){
  currenttab = 5;
}



const nextScene = document.getElementById(currenttab);

if (nextScene) {
 
  nextScene.classList.remove("d-none");
}

console.log('Current tab:', currenttab);
}

//Quiz Page
var namee,email,options;

function addDetails(event) {
  event.preventDefault();
    namee = document.getElementById('name').value;
    email = document.getElementById('email').value;
    options = document.getElementById('selection').value;
document.getElementById('div1').classList.add('d-none');
document.getElementById('div2').classList.remove('d-none');
   Displayed(namee);
   startquiz(options); 
}
//To display the Name on Page
function Displayed(namee) {
 var something = document.getElementById('anything');
    if (something) {
        something.innerText = "Welcome " + namee;
        something.style.color = 'black';
    }
  } 

  //Functions for iterating through the quiz
      function startquiz(options) {
        let choice = options;
        currentQuestionIndex = 0;

        switch (choice) {
            case 'java':
                displayQuestion(currentQuestionIndex);
                break;
            case 'css':
               
                displayQuestion(currentQuestionIndex);
                break;
            case 'c':
            
                displayQuestion(currentQuestionIndex);
                break;
            case 'ajax':
             
                displayQuestion(currentQuestionIndex);
                break;
            case 'html':
            
                displayQuestion(currentQuestionIndex);
                break;
            default:
                console.log('Invalid choice');
        }
    }
    
    var currentQuestionIndex = 0;
    var timerId;
    var result=0;
    var values;
    var answer;
    
    function displayQuestion(questionIndex) {
        var currentQuestion;
       
        if(options=='java'){
            
         currentQuestion = javaQuestions[questionIndex];
         values='javaQuestions';
        }
        else if(options=='ajax'){
             currentQuestion = ajaxQuestions[questionIndex];
             values='ajaxQuestions';
        }
        else if(options=='c'){
            currentQuestion = cSharpQuestions[questionIndex];
            values='cSharpQuestions';
       }
       else if(options=='html'){
        currentQuestion = htmlQuestions[questionIndex];
        values='htmlQuestions';
   }
   else if(options=='css'){
    currentQuestion = cssQuestions[questionIndex];
    values='cssQuestions';
}


        document.getElementById('question').innerText = currentQuestion.question;
    
        document.getElementById('lbl1').innerText = currentQuestion.options[0];
        document.getElementById('option1').value = currentQuestion.options[0];
    
        document.getElementById('lbl2').innerText = currentQuestion.options[1];
        document.getElementById('option2').value = currentQuestion.options[1];

        document.getElementById('lbl3').innerText = currentQuestion.options[2];
        document.getElementById('option3').value = currentQuestion.options[2];

        let timerValue = 20;
   answer=currentQuestion.correctAnswer;
   
        timerId = setInterval(function () {
            document.getElementById('timer').innerText = "Time remaining: " + timerValue + " seconds";
    
            timerValue--;
    
            if (timerValue < 0) {
                clearInterval(timerId);
                nextQuestion(); 
            }
        }, 1000);
    }
    
    function nextQuestion() {
        clearInterval(timerId);
        const selectedOption = document.querySelector('input[name="Option"]:checked');
       
        if (selectedOption) {
            const userAnswer = selectedOption.value;
            if (userAnswer == answer ) { 
  result++;
            } }
    
    
        currentQuestionIndex++;
    
        if (currentQuestionIndex < 5) {
            displayQuestion(currentQuestionIndex);
        } else {
            document.getElementById('question').innerHTML = 'Quiz completed!';
            document.getElementById('lbl1').innerHTML = '';
            document.getElementById('lbl2').innerHTML = '';
            document.getElementById('lbl3').innerHTML = '';
            document.getElementById('timer').innerText = '';
    
            document.getElementById('option1').classList.add('d-none');
            document.getElementById('option2').classList.add('d-none');
            document.getElementById('option3').classList.add('d-none');
    
            document.getElementById('result').innerHTML = 'Obtained Marks: ' + result;
    
            const submitBtn = document.getElementById('submitBtn');
            submitBtn.innerHTML = 'Restart Quiz';
            submitBtn.onclick = restore;
        }
    }
    //function to restore the quiz page
    function restore() {
        document.getElementById('div2').classList.add('d-none');
        document.getElementById('div1').classList.remove('d-none');
        currentQuestionIndex = 0;
        result = 0;
        values = null;
        document.getElementById('result').innerHTML = '';
        
    
        document.getElementById('option1').classList.remove('d-none');
        document.getElementById('option2').classList.remove('d-none');
        document.getElementById('option3').classList.remove('d-none');
        const submitBtn = document.getElementById('submitBtn');
        submitBtn.innerHTML = 'Next';
        submitBtn.onclick = nextQuestion;
    }
    //Questions
    const ajaxQuestions = [
        {
            question: 'What does JSON stand for in the context of AJAX?',
            options: ['JavaScript Object Notation', 'JavaScript Oriented Networking', 'JavaScript Online Network'],
            correctAnswer: 'JavaScript Object Notation'
        },
        {
            question: 'Which HTTP method is often used for AJAX requests?',
            options: ['GET', 'POST', 'PUT', 'DELETE'],
            correctAnswer: 'GET'
        },
        {
            question: 'What is CORS in the context of AJAX?',
            options: ['Cross-Origin Request Sharing', 'Cross-Origin Resource Sharing', 'Cross-Origin Request Security'],
            correctAnswer: 'Cross-Origin Resource Sharing'
        },
        {
            question: 'What is the purpose of the XMLHttpRequest object in AJAX?',
            options: ['To create animations', 'To make asynchronous requests to a server', 'To handle form submissions'],
            correctAnswer: 'To make asynchronous requests to a server'
        },
        {
            question: 'Which method is used to handle asynchronous requests in AJAX?',
            options: ['fetch()', 'asyncRequest()', 'ajax()'],
            correctAnswer: 'fetch()'
        }
    ];
    
    const cSharpQuestions = [
        {
            question: 'What is the purpose of the using statement in C#?',
            options: ['For exception handling', 'For resource management', 'For loop iteration'],
            correctAnswer: 'For resource management'
        },
        {
            question: 'Which of the following is a value type in C#?',
            options: ['string', 'int',  'interface'],
            correctAnswer: 'int'
        },
        {
            question: 'What is a lambda expression in C#?',
            options: ['A type of exception', 'A concise way to represent anonymous methods', 'A way to declare variables'],
            correctAnswer: 'A concise way to represent anonymous methods'
        },
        {
            question: 'What is the purpose of the "var" keyword in C#?',
            options: ['To declare a variable with an inferred type', 'To declare a global variable', 'To create a new instance of a class'],
            correctAnswer: 'To declare a variable with an inferred type'
        },
        {
            question: 'In C#, what does the "static" keyword indicate?',
            options: ['A variable is static', 'A method is static', 'A class is static'],
            correctAnswer: 'A method is static'
        }
    ];
    
    const htmlQuestions = [
        {
            question: 'What is the purpose of the <meta charset="UTF-8"> tag in HTML?',
            options: ['Define character set for the document', 'Create a meta description', 'Set document title'],
            correctAnswer: 'Define character set for the document'
        },
        {
            question: 'What does the acronym HTML stand for?',
            options: ['Hypertext Markup Language', 'Hyperlink and Text Markup Language', 'High-Level Text Markup Language'],
            correctAnswer: 'Hypertext Markup Language'
        },
        {
            question: 'What is the purpose of the <div> element in HTML?',
            options: ['To create a hyperlink', 'To define a division or a section', 'To format text'],
            correctAnswer: 'To define a division or a section'
        },
        {
            question: 'Which HTML tag is used to create an ordered list?',
            options: ['<ul>', '<li>', '<ol>'],
            correctAnswer: '<ol>'
        },
        {
            question: 'What is the role of the <head> section in an HTML document?',
            options: ['To define the main content of the document', 'To link external resources', 'To contain metadata about the document'],
            correctAnswer: 'To contain metadata about the document'
        }
    ];
    
    const cssQuestions = [
        {
            question: 'Which CSS property is used to control the space between elements?',
            options: ['margin', 'padding', 'border'],
            correctAnswer: 'margin'
        },
        {
            question: 'What does the acronym CSS stand for?',
            options: ['Cascading Style Sheet', 'Computer Style Sheet', 'Colorful Style Sheet'],
            correctAnswer: 'Cascading Style Sheet'
        },
        {
            question: 'How can you select all elements with a specific class in CSS?',
            options: ['.classname', '#classname', '*classname'],
            correctAnswer: '.classname'
        },
        {
            question: 'What is the purpose of the CSS property "box-sizing: border-box;"?',
            options: ['To add a border around the box', 'To include the padding and border in the box dimensions', 'To make the box invisible'],
            correctAnswer: 'To include the padding and border in the box dimensions'
        },
        {
            question: 'In CSS, what does the "z-index" property control?',
            options: ['Text alignment order, and padding', 'The stacking order of elements with a position value other than static', 'The rotation of an element'],
            correctAnswer: 'The stacking order of elements with a position value other than static'
            }
            ];
            const javaQuestions = [
              {
                  question: 'What is the main purpose of the "public static void main(String[] args)" method in Java?',
                  options: ['To declare variables', 'To define a class', 'To serve as the entry point for a Java program'],
                  correctAnswer: 'To serve as the entry point for a Java program'
              },
              {
                  question: 'Which keyword is used to define a constant in Java?',
                  options: ['final', 'const', 'static'],
                  correctAnswer: 'final'
              },
              {
                  question: 'What is the difference between "=="" and ".equals()" when comparing strings in Java?',
                  options: ['They are interchangeable', '== compares object references, .equals() compares the content', '.equals() compares object references, == compares the content'],
                  correctAnswer: '== compares object references, .equals() compares the content'
              },
              {
                  question: 'In Java, what is the purpose of the "super" keyword?',
                  options: [ 'To access the superclass fields and methods', 'To create an instance of a class', 'To declare a static method'],
                  correctAnswer: 'To access the superclass fields and methods'
              },
              {
                  question: 'What is the significance of the "try", "catch", and "finally" blocks in exception handling?',
                  options: ['They define loops in Java', 'They are used for file input/output', 'They handle runtime errors and exceptions'],
                  correctAnswer: 'They handle runtime errors and exceptions'
              }
          ];