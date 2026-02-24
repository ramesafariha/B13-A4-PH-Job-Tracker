## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### 2. How do you create and insert a new element into the DOM?

### 3. What is Event Bubbling? And how does it work?

### 4. What is Event Delegation in JavaScript? Why is it useful?

### 5. What is the difference between preventDefault() and stopPropagation() methods?

---
#1 ans: getElementById() selects an element using specific id.other hand 
querySelector() selects the first element that matches a CSS selector.
So, if you want to select by id directly use getElementById().if you want to use a CSS selector use querySelector().

#2 ans: create a new element using document createElement().
Then use appendChild() to add that element inside a parent element so it appears on the webpage.

#3 ans: Event Bubbling is an event starts from the child element and moves up to parent elements step by step.

#4 ans: Event Delegation means adding an event listener to a parent element instead of adding it to each child element.

#5 ans: preventDefault() stops the browser’s default behavior. on other hand
stopPropagation() stops the event from moving up to parent elements. easily we can say,It prevents event bubbling.

