// ******************************** gsap animation ****************************

gsap.from('.mein-cointainer,.heading,.question-box', {
    y: -900,
    duration: 1.5,
    stagger: 0.1,
});


gsap.to('.answer', {
    delay: 1.5,
    duration: 0.5,
    stagger: 0.3,
    opacity: 1,
});

gsap.from('last-row,.total-wrong,.total-right,#next-que', {
    delay: 2.5,
    duration: .5,
    stagger: 0.5,
    opacity: 0,

})



// ******************** question data ******************

const questionData = [

    {
        "question": `What is the purpose of the HTML meta tag?`,
        "options": [
            "To provide information about the HTML document",
            "To define the structure of the HTML document",
            "To style the HTML document",
            "To add JavaScript code to the HTML document"
        ],
        "correct_option": "To provide information about the HTML document"
    },
    {
        "question": "Which HTML tag is used to create a link to another website?",
        "options": [
            "<a>",
            "<link>",
            "<href>",
            "<url>"
        ],
        "correct_option": "<a>"
    },
    {
        "question": "What is the purpose of the CSS `border` property?",
        "options": [
            "To change the color of an element",
            "To add a border to an element",
            "To change the size of an element",
            "To change the font of an element"
        ],
        "correct_option": "To add a border to an element"
    },
    {
        "question": "Which CSS property is used to change the width of an element?",
        "options": [
            "width",
            "height",
            "size",
            "length"
        ],
        "correct_option": "width"
    },
    {
        "question": "What is the purpose of the JavaScript `if` statement?",
        "options": [
            "To execute a block of code if a condition is true",
            "To execute a block of code if a condition is false",
            "To loop through a collection of data",
            "To handle user input"
        ],
        "correct_option": "To execute a block of code if a condition is true"
    },
    {
        "question": "Which JavaScript loop is used to iterate over an array of items?",
        "options": [
            "for",
            "while",
            "do-while",
            "for-each"
        ],
        "correct_option": "for"
    },

    {
        "question": "What does HTML stand for?",
        "options": [
            "HyperText Markup Language",
            "High-level Text Markup Language",
            "Hyper Transfer Markup Language",
            "Hyperlink and Text Markup Language"
        ],
        "correct_option": "HyperText Markup Language"
    },
    {
        "question": "Which HTML tag is used to define the structure of an HTML document?",
        "options": [
            "<head>",
            "<body>",
            "<html>",
            "<DOCTYPE html>"
        ],
        "correct_option": "<html>"
    },
    {
        "question": "What does CSS stand for?",
        "options": [
            "Counter Style Sheet",
            "Computer Style Sheet",
            "Creative Style Sheet",
            "Cascading Style Sheet"
        ],
        "correct_option": "Cascading Style Sheet"
    },
    {
        "question": "Which CSS property is used to change the text color of an element?",
        "options": [
            "color",
            "text-color",
            "font-color",
            "style-color"
        ],
        "correct_option": "color"
    },
    {
        "question": "What is the purpose of the JavaScript 'typeof' operator?",
        "options": [
            "To check the type of a variable",
            "To create a new variable",
            "To perform a type conversion",
            "To define a new type"
        ],
        "correct_option": "To check the type of a variable"
    },
    {
        "question": "What is the correct HTML syntax to create a hyperlink?",
        "options": [
            "<a href='link'>Link Text</a>",
            "<a>Link Text</a>",
            "<link href='link'>",
            "<link>Link Text</link>"
        ],
        "correct_option": "<a href='link'>Link Text</a>"
    },
    {
        "question": "Which HTML tag is used to define a paragraph?",
        "options": [
            "<p>",
            "<div>",
            "<span>",
            "<h1>"
        ],
        "correct_option": "<p>"
    },
    {
        "question": "What is the correct CSS syntax to set the background color of an element?",
        "options": [
            "background-color: #000000;",
            "background: #000000;",
            "bgcolor: #000000;",
            "color: #000000;"
        ],
        "correct_option": "background-color: #000000;"
    },
    {
        "question": "Which CSS property is used to set the width of an element?",
        "options": [
            "width:",
            "height:",
            "padding:",
            "margin:"
        ],
        "correct_option": "width:"
    },
    {
        "question": "What is the purpose of the JavaScript 'Math.pow()' function?",
        "options": [
            "To calculate the power of a number",
            "To calculate the square root of a number",
            "To calculate the absolute value of a number",
            "To calculate the factorial of a number"
        ],
        "correct_option": "To calculate the power of a number"
    },
    {
        "question": "What is the correct JavaScript syntax to declare a variable?",
        "options": [
            "var name = 'John Doe';",
            "let name = 'John Doe';",
            "const name = 'John Doe';",
            "function name = 'John Doe';"
        ],
        "correct_option": "var name = 'John Doe';",
        "correct_option": "let name = 'John Doe';",
        "correct_option": "const name = 'John Doe';"
    },
    {
        "question": "What is the purpose of the JavaScript 'for' loop?",
        "options": [
            "To execute a block of code repeatedly",
            "To check the condition of a statement",
            "To perform a type conversion",
            "To define a new function"
        ],
        "correct_option": "To execute"
    },


    {
        "question": "What does HTML stand for?",
        "options": [
            "HyperText Markup Language",
            "High-level Text Markup Language",
            "Hyper Transfer Markup Language",
            "Hyperlink and Text Markup Language"
        ],
        "correct_option": "HyperText Markup Language"
    },
    {
        "question": "Which HTML tag is used to define the structure of an HTML document?",
        "options": [
            "<head>",
            "<body>",
            "<html>",
            "<DOCTYPE html>"
        ],
        "correct_option": "<html>"
    },
    {
        "question": "What does CSS stand for?",
        "options": [
            "Counter Style Sheet",
            "Computer Style Sheet",
            "Creative Style Sheet",
            "Cascading Style Sheet"
        ],
        "correct_option": "Cascading Style Sheet"
    },
    {
        "question": "Which CSS property is used to change the text color of an element?",
        "options": [
            "color",
            "text-color",
            "font-color",
            "style-color"
        ],
        "correct_option": "color"
    },
    {
        "question": "What is the purpose of the JavaScript 'typeof' operator?",
        "options": [
            "To check the type of a variable",
            "To create a new variable",
            "To perform a type conversion",
            "To define a new type"
        ],
        "correct_option": "To check the type of a variable"
    },
    {
        "question": "What is the correct HTML tag for adding a comment?",
        "options": [
            "",
            "<comment>",
            "# comment",
            "/* comment */"
        ],
        "correct_option": ""
    },
    {
        "question": "Which HTML tag is used to define a heading?",
        "options": [
            "<h1>",
            "<h2>",
            "<h3>",
            "<h4>"
        ],
        "correct_option": "<h1>"
    },
    {
        "question": "Which HTML tag is used to create a list of items?",
        "options": [
            "<ul>",
            "<ol>",
            "<dl>",
            "<dt>"
        ],
        "correct_option": "<ul>"
    },
    {
        "question": "Which HTML tag is used to create a hyperlink?",
        "options": [
            "<a>",
            "<link>",
            "<href>",
            "<url>"
        ],
        "correct_option": "<a>"
    },
    {
        "question": "Which HTML tag is used to embed an image?",
        "options": [
            "<img>",
            "<image>",
            "<picture>",
            "<src>"
        ],
        "correct_option": "<img>"
    },
    {
        "question": "What is the correct CSS syntax for setting a font family?",
        "options": [
            "font-family: Arial, sans-serif;",
            "font-family: 'Arial', 'sans-serif';",
            "font-family: Arial; sans-serif;",
            "font-family: Arial; 'sans-serif';"
        ],
        "correct_option": "font-family: Arial, sans-serif;"
    },
    {
        "question": "Which CSS property is used to set the width of an element?",
        "options": [
            "width:",
            "height:",
            "size:",
            "length:"
        ],
        "correct_option": "width:"
    },
    {
        "question": "Which CSS property is used to set the background color of an element?",
        "options": [
            "background-color:",
            "background:",
            "color:",
            "bg-color:"
        ],
        "correct_option": "background-color:"
    },
    {
        "question": "Which CSS property is used to set the border of an element?",
        "options": [
            "border:",
            "border-style:",
            "border-width:",
            "border-color:"
        ],
        "correct_option": "border:"
    },
    {
        "question": "What does HTML stand for?",
        "options": [
            "HyperText Markup Language",
            "High-level Text Markup Language",
            "Hyper Transfer Markup Language",
            "Hyperlink and Text Markup Language"
        ],
        "correct_option": "HyperText Markup Language"
    },
    {
        "question": "Which HTML tag is used to define the structure of an HTML document?",
        "options": [
            "<head>",
            "<body>",
            "<html>",
            "<DOCTYPE html>"
        ],
        "correct_option": "<html>"
    },
    {
        "question": "What does CSS stand for?",
        "options": [
            "Counter Style Sheet",
            "Computer Style Sheet",
            "Creative Style Sheet",
            "Cascading Style Sheet"
        ],
        "correct_option": "Cascading Style Sheet"
    },
    {
        "question": "Which CSS property is used to change the text color of an element?",
        "options": [
            "color",
            "text-color",
            "font-color",
            "style-color"
        ],
        "correct_option": "color"
    },
    {
        "question": "What is the purpose of the JavaScript 'typeof' operator?",
        "options": [
            "To check the type of a variable",
            "To create a new variable",
            "To perform a type conversion",
            "To define a new type"
        ],
        "correct_option": "To check the type of a variable"
    },
    {
        "question": "What is the correct HTML syntax to create a hyperlink?",
        "options": [
            "<a href='link'>Link Text</a>",
            "<a>Link Text</a>",
            "<link href='link'>",
            "<link>Link Text</link>"
        ],
        "correct_option": "<a href='link'>Link Text</a>"
    },
    {
        "question": "Which HTML tag is used to define an image?",
        "options": [
            "<image>",
            "<img>",
            "<picture>",
            "<src>"
        ],
        "correct_option": "<img>"
    },
    {
        "question": "What is the correct CSS syntax to change the font size of an element?",
        "options": [
            "font-size: 12px;",
            "size: 12px;",
            "font: 12px;",
            "text-size: 12px;"
        ],
        "correct_option": "font-size: 12px;"
    },
    {
        "question": "Which CSS property is used to set the background color of an element?",
        "options": [
            "background-color: #000;",
            "color: #000;",
            "background: #000;",
            "bg-color: #000;"
        ],
        "correct_option": "background-color: #000;"
    },
    {
        "question": "What is the correct JavaScript syntax to declare a variable?",
        "options": [
            "var name = 'John';",
            "let name = 'John';",
            "const name = 'John';",
            "name = 'John';"
        ],
        "correct_option": "var name = 'John';",
        "correct_option": "let name = 'John';",
        "correct_option": "const name = 'John';"
    },
    {
        "question": "What does HTML stand for?",
        "options": [
            "HyperText Markup Language",
            "High-level Text Markup Language",
            "Hyper Transfer Markup Language",
            "Hyperlink and Text Markup Language"
        ],
        "correct_option": "HyperText Markup Language"
    },
    {
        "question": "Which HTML tag is used to define the structure of an HTML document?",
        "options": [
            "<head>",
            "<body>",
            "<html>",
            "<DOCTYPE html>"
        ],
        "correct_option": "<html>"
    },
    {
        "question": "What does CSS stand for?",
        "options": [
            "Counter Style Sheet",
            "Computer Style Sheet",
            "Creative Style Sheet",
            "Cascading Style Sheet"
        ],
        "correct_option": "Cascading Style Sheet"
    },
    {
        "question": "Which CSS property is used to change the text color of an element?",
        "options": [
            "color",
            "text-color",
            "font-color",
            "style-color"
        ],
        "correct_option": "color"
    },
    {
        "question": "What is the purpose of the JavaScript 'typeof' operator?",
        "options": [
            "To check the type of a variable",
            "To create a new variable",
            "To perform a type conversion",
            "To define a new type"
        ],
        "correct_option": "To check the type of a variable"
    },
    {
        "question": "How do you add comments in HTML?",
        "options": [
            "",
            "<comment>comment</comment>",
            "/# comment",
            "* comment *"
        ],
        "correct_option": ""
    },
    {
        "question": "Which HTML tag is used to create a list?",
        "options": [
            "<list>",
            "<ul>",
            "<ol>",
            "<dl>"
        ],
        "correct_option": "<ul>",
        "correct_option": "<ol>",
        "correct_option": "<dl>"
    },
    {
        "question": "What is the correct CSS syntax to change the background color of an element to blue?",
        "options": [
            "background-color: blue;",
            "color: blue;",
            "background: blue;",
            "bg-color: blue;"
        ],
        "correct_option": "background-color: blue;"
    },
    {
        "question": "What is the correct JavaScript syntax to add an event listener to an element?",
        "options": [
            "element.addEventListener('event', function() { // code });",
            "element.addEvent('event', function() { // code });",
            "element.listen('event', function() { // code });",
            "element.on('event', function() { // code });"
        ],
        "correct_option": "element.addEventListener('event', function() { // code });"
    },
    {
        "question": "What is the correct JavaScript syntax to create a function?",
        "options": [
            "function functionName(parameters) { // code }",
            "var functionName = function(parameters) { // code };",
            "let functionName = function(parameters) { // code };",
            "const functionName = function(parameters) { // code };"
        ],
        "correct_option": "function functionName(parameters) { // code }",
        "correct_option": "var functionName = function(parameters) { // code };",
        "correct_option": "let functionName = function(parameters) { // code };"
    },


    {
        "question": "What does HTML stand for?",
        "options": [
            "HyperText Markup Language",
            "High-level Text Markup Language",
            "Hyper Transfer Markup Language",
            "Hyperlink and Text Markup Language"
        ],
        "correct_option": "HyperText Markup Language"
    },
    {
        "question": "Which HTML tag is used to define the structure of an HTML document?",
        "options": [
            "<head>",
            "<body>",
            "<html>",
            "<DOCTYPE html>"
        ],
        "correct_option": "<html>"
    },
    {
        "question": "What does CSS stand for?",
        "options": [
            "Counter Style Sheet",
            "Computer Style Sheet",
            "Creative Style Sheet",
            "Cascading Style Sheet"
        ],
        "correct_option": "Cascading Style Sheet"
    },
    {
        "question": "Which CSS property is used to change the text color of an element?",
        "options": [
            "color",
            "text-color",
            "font-color",
            "style-color"
        ],
        "correct_option": "color"
    },
    {
        "question": "What is the purpose of the JavaScript 'typeof' operator?",
        "options": [
            "To check the type of a variable",
            "To create a new variable",
            "To perform a type conversion",
            "To define a new type"
        ],
        "correct_option": "To check the type of a variable"
    },
    {
        "question": "How do you add comments in HTML?",
        "options": [
            "",
            "<comment>comment</comment>",
            "/# comment",
            "* comment *"
        ],
        "correct_option": ""
    },
    {
        "question": "What is the correct HTML syntax to create an unordered list?",
        "options": [
            "<ul>",
            "<ol>",
            "<dl>",
            "<dt>"
        ],
        "correct_option": "<ul>"
    },
    {
        "question": "Which HTML tag is used to define a paragraph?",
        "options": [
            "<p>",
            "<div>",
            "<span>",
            "<section>"
        ],
        "correct_option": "<p>"
    },
    {
        "question": "What is the correct CSS syntax to change the font family of an element?",
        "options": [
            "font-family: Arial, sans-serif;",
            "family: Arial, sans-serif;",
            "font: Arial, sans-serif;",
            "text-family: Arial, sans-serif;"
        ],
        "correct_option": "font-family: Arial, sans-serif;"
    },
    {
        "question": "Which CSS property is used to set the margin of an element?",
        "options": [
            "margin: 10px;",
            "padding: 10px;",
            "border: 10px;",
            "outline: 10px;"
        ],
        "correct_option": "margin: 10px;"
    },
    {
        "question": "What is the correct JavaScript syntax to declare a function?",
        "options": [
            "function myFunction() {",
            "def myFunction() {",
            "var myFunction = function() {",
            "myFunction = function() {"
        ],
        "correct_option": "function myFunction() {"
    },
    {
        "question": "How do you pass arguments to a JavaScript function?",
        "options": [
            "function myFunction(argument1, argument2) {",
            "function myFunction(argument1, argument2) {",
            "function myFunction(argument1, argument2) {",
            "function myFunction(argument1, argument2) {"
        ],
        "correct_option": "function myFunction(argument1, argument2) {"
    },
    {
        "question": "What does HTML stand for?",
        "options": [
            "HyperText Markup Language",
            "High-level Text Markup Language",
            "Hyper Transfer Markup Language",
            "Hyperlink and Text Markup Language"
        ],
        "correct_option": "HyperText Markup Language"
    },
    {
        "question": "Which HTML tag is used to define the structure of an HTML document?",
        "options": [
            "<head>",
            "<body>",
            "<html>",
            "<DOCTYPE html>"
        ],
        "correct_option": "<html>"
    },
    {
        "question": "What does CSS stand for?",
        "options": [
            "Counter Style Sheet",
            "Computer Style Sheet",
            "Creative Style Sheet",
            "Cascading Style Sheet"
        ],
        "correct_option": "Cascading Style Sheet"
    },
    {
        "question": "Which CSS property is used to change the text color of an element?",
        "options": [
            "color",
            "text-color",
            "font-color",
            "style-color"
        ],
        "correct_option": "color"
    },
    {
        "question": "What is the purpose of the JavaScript 'typeof' operator?",
        "options": [
            "To check the type of a variable",
            "To create a new variable",
            "To perform a type conversion",
            "To define a new type"
        ],
        "correct_option": "To check the type of a variable"
    },
    {
        "question": "How do you add a comment in HTML?",
        "options": [
            "",
            "/* Comment */",
            "<-- Comment -->",
            "<comment>Comment</comment>"
        ],
        "correct_option": ""
    },
    {
        "question": "What is the correct HTML syntax to create an ordered list?",
        "options": [
            "<ol><li>Item 1</li><li>Item 2</li></ol>",
            "<li><ol><li>Item 1</li><li>Item 2</li></ol></li>",
            "<ul><li>Item 1</li><li>Item 2</li></ul>",
            "<li><ul><li>Item 1</li><li>Item 2</li></ul></li>"
        ],
        "correct_option": "<ol><li>Item 1</li><li>Item 2</li></ol>"
    },
    {
        "question": "What is the correct CSS syntax to set the width of an element?",
        "options": [
            "width: 100px;",
            "size: 100px;",
            "width: 100%;",
            "size: 100%;"
        ],
        "correct_option": "width: 100px;"
    },
    {
        "question": "What is the correct CSS syntax to set the border of an element?",
        "options": [
            "border: 1px solid black;",
            "border-color: black;",
            "border-width: 1px;",
            "border-style: solid;"
        ],
        "correct_option": "border: 1px solid black;"
    },
]

// ****************************** set questions in html **************************
let questionNumber = 0;
let questionDataNumber = 0;
let question = document.getElementById("question");
let answer = document.querySelectorAll(".answer");
function setQueAndAns() {
    question.innerHTML = `<span>0${questionNumber + 1}.</span> ${questionData[questionNumber].question}`
    answer[0].textContent = `${questionData[questionDataNumber].options[0]}`
    answer[1].textContent = `${questionData[questionDataNumber].options[1]}`
    answer[2].textContent = `${questionData[questionDataNumber].options[2]}`
    answer[3].textContent = `${questionData[questionDataNumber].options[3]}`
}
setQueAndAns();  // **************** run the function firsttime to set question value *************

// ******************************** if answer is right then color is green else red ****************


answer.forEach((element) => {
    element.onclick = function () {
        if (element.textContent == questionData[questionDataNumber].correct_option) {
            answer.forEach((el) => {
                if (el.textContent == questionData[questionDataNumber].correct_option) {
                    el.style.backgroundColor = "#04a56a"; // Green for correct answer
                } else {
                    el.style.backgroundColor = "rgb(255, 126, 121)"; // Red for incorrect answers
                }
            });
        } else {
            // Set background color to red for incorrect answers
            answer.forEach((el) => {
                if (el.textContent == questionData[questionDataNumber].correct_option) {
                    el.style.backgroundColor = "#04a56a";
                } else {
                    el.style.backgroundColor = "rgb(255, 126, 126)";
                }
            });
        }
        document.getElementById("next-que").style.pointerEvents = "all"


    };
});


// ********************************** Next Question button ***********************************
let netQue = document.getElementById("next-que");
netQue.onclick = function () {
    questionNumber++;
    questionDataNumber++;
    setQueAndAns();
    answer[0].style.backgroundColor = "";
    answer[1].style.backgroundColor = "";
    answer[2].style.backgroundColor = "";
    answer[3].style.backgroundColor = "";
    document.getElementById("next-que").style.pointerEvents = "none"
    gsapAnimationQue()

}
function gsapAnimationQue() {
    gsap.from('.answer', {
        delay: .5,
        duration: 0.5,
        stagger: 0.3,
        opacity: 0,
    });
}