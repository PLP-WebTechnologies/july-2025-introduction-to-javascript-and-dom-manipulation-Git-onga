/**********************
 * PART 1: Basics
 * Variables, Conditionals
 **********************/

// Variable declarations
const userName = "Alice";
const userAge = 28;
const isStudent = true;

// Conditional example
document.getElementById('greetBtn').addEventListener('click', function() {
    let greeting;
    
    // Check time of day
    const hour = new Date().getHours();
    if (hour < 12) {
        greeting = `Good morning, ${userName}!`;
    } else if (hour < 18) {
        greeting = `Good afternoon, ${userName}!`;
    } else {
        greeting = `Good evening, ${userName}!`;
    }
    
    // Add age condition
    if (userAge >= 18) {
        greeting += " You're an adult.";
    } else {
        greeting += " You're a minor.";
    }
    
    // Output to DOM
    document.getElementById('greetingOutput').textContent = greeting;
});

/**********************
 * PART 2: Functions
 * Reusable logic
 **********************/

// Function to calculate sum
function calculateSum(a, b) {
    return a + b;
}

// Function to format output
function formatResult(num1, num2, result) {
    return `The sum of ${num1} and ${num2} is ${result}.`;
}

// Using the functions
document.getElementById('calculateBtn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    
    const sum = calculateSum(num1, num2);
    const output = formatResult(num1, num2, sum);
    
    document.getElementById('sumOutput').textContent = output;
});

/**********************
 * PART 3: Loops
 * Repetition tasks
 **********************/

// Countdown with while loop
document.getElementById('countdownBtn').addEventListener('click', function() {
    const output = document.getElementById('countdownOutput');
    output.innerHTML = '';
    
    let count = 5;
    while (count >= 0) {
        setTimeout(() => {
            output.innerHTML += `Countdown: ${count}<br>`;
            if (count === 0) {
                output.innerHTML += 'Liftoff! 🚀';
            }
        }, (5 - count) * 1000);
        count--;
    }
});

// Generate list with for loop
document.getElementById('generateListBtn').addEventListener('click', function() {
    const list = document.getElementById('numberList');
    list.innerHTML = '';
    
    for (let i = 1; i <= 10; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${i}`;
        list.appendChild(li);
    }
});

/**********************
 * PART 4: DOM Manipulation
 * Interactive elements
 **********************/

// Change background color
document.getElementById('colorChangeBtn').addEventListener('click', function() {
    const colors = ['#ffeaa7', '#a5dfd9', '#f5c7f7', '#c5e3f6'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// Add dynamic list items
document.getElementById('addItemBtn').addEventListener('click', function() {
    const list = document.getElementById('dynamicList');
    const itemCount = list.children.length + 1;
    const newItem = document.createElement('li');
    
    newItem.textContent = `Dynamic Item ${itemCount}`;
    newItem.addEventListener('click', function() {
        this.classList.toggle('highlight');
    });
    
    list.appendChild(newItem);
});

// Toggle visibility
document.getElementById('toggleBtn').addEventListener('click', function() {
    const textElement = document.getElementById('toggleText');
    textElement.classList.toggle('hidden');
});
