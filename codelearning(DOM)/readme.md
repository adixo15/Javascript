1.HTML & DOM Structure Overview
HTML (HyperText Markup Language) is the standard structure of a webpage containing all visible elements.
The Document Object Model (DOM) represents the entire HTML page as a tree-like structure that JavaScript can access and manipulate.
The root of this structure is the document object, which represents the whole webpage.
Inside it, the first child is the <html> element, which branches into two main parts:
<head> → contains metadata, title, and links (not visible on the page).
<body> → contains all visible elements like text, images, and buttons.
Each element inside the body (like <div>, <h1>, <p>) is called a node.
Nodes can be of types such as element nodes (tags), attribute nodes (like class, id), and text nodes (actual text content).
JavaScript uses the DOM to select, modify, add, or remove elements dynamically — allowing pages to become interactive.

2.document.getElementsByClassName() → selects all elements with the given class name (returns HTMLCollection).
document.getElementById() → selects a single element using its unique id.
getAttribute('id') → returns the value of a specified attribute from an element.
setAttribute('attr', 'value') → updates or adds a new attribute and value to an element.
innerHTML → returns or changes the HTML content (includes tags).
innerText → shows only visible text of an element (ignores hidden ones).
textContent → shows all text, including hidden or styled-off text.
style.property → directly apply inline CSS styles (e.g., style.backgroundColor).
querySelector() → selects the first matching element (can use class, id, or tag).
querySelectorAll() → selects all matching elements (returns NodeList).
NodeList vs HTMLCollection → NodeList supports forEach, HTMLCollection doesn’t (use loop or convert to array).
Nested selection → e.g., querySelector('ul').querySelector('li') targets specific child elements.
Use querySelector/querySelectorAll when you want CSS-style flexibility in selecting elements.

3.querySelector('.parent') → selects the element with class parent.
parent.children → returns all direct child elements as an HTMLCollection (ignores text nodes).
parent.children[i].innerHTML → accesses the content of a specific child element.
for loop on children → used to iterate through all child elements of a parent.
style.property → applies CSS directly to specific child elements.
firstElementChild → gives the first child element inside the parent.
lastElementChild → gives the last child element inside the parent.
nextElementSibling → moves to the next element at the same level in the DOM tree.
childNodes → returns all child nodes including text, comment, and element nodes (not just elements).
Difference: children → only elements; childNodes → elements + text + whitespace.

4.document.createElement('div') → creates a new <div> element dynamically in memory.
className / id → assigns a class or id to the newly created element.
setAttribute('attr', 'value') → adds or modifies an attribute (like title).
style.property → applies inline CSS directly to the element.
innerText → adds text inside the element but replaces existing content.
document.createTextNode() → creates a text node safely without overwriting existing elements.
appendChild() → attaches a text node or element as a child to another element.
document.body.appendChild(div) → finally adds the created element into the webpage’s body.
Preferred approach: use createTextNode + appendChild for better control and cleaner DOM handling.

5.createElement('li') → Creates a new <li> element.
innerHTML = langName → Inserts text directly inside the element.
appendChild(li) → Adds the <li> to the .language list.
addLanguage() → Function that adds a language using innerHTML (less optimal).
createTextNode(langName) → Creates a text node (faster & safer than innerHTML).
addOptiLanguage() → Optimal function to add a language without re-parsing DOM.
querySelector('li:nth-child(2)') → Selects the second <li> element.
replaceWith(newli) → Replaces an existing element with another.
outerHTML = '<li>TypeScript</li>' → Replaces an element with full new HTML content.
querySelector('li:last-child') → Selects the last <li> element.
remove() → Deletes the selected element from the DOM.

6.onclick → Old method to handle click events (not preferred).
addEventListener('click', fn) → Modern way to attach event listeners.
Event Bubbling → Events move from child to parent (bottom → top).
e.stopPropagation() → Stops the event from bubbling further up the DOM.
e.preventDefault() → Prevents default browser behavior (e.g., link navigation).
e.target → Refers to the actual element clicked.
e.target.tagName → Returns the tag name (like IMG, LI, A) of the clicked element.
if (e.target.tagName === 'IMG') → Ensures the code runs only for image clicks.
e.target.parentNode.remove() → Removes the <li> element of the clicked image.
Event Delegation → Attaching one listener to a parent element to manage all child events efficiently.

7.setTimeout(sayAditya, 3000) → Executes the function sayAditya after 3 seconds (asynchronous execution).
✅ setTimeout(greet, 3000) → Runs the greet function after 3 seconds, which changes the <h1> text to “Welcome to my page”.
✅ clearTimeout(greet) (inside click event) → ❌ Incorrect — this should be clearTimeout(changegreet) to stop the scheduled timeout before it executes.
✅ document.getElementById('stop').addEventListener('click', …) → Adds a click event listener to the Stop button that cancels the timeout and logs “stopped”.