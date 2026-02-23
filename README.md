//ANS TO THE QUES NO :1//
**The differences between getElementById, getElementsByClassName, and querySelector / querySelectorAll:**

➝**getElementById**
1.Selects a single element by its id.
2.Returns one element object.
3.Fastest among all selectors.
**Example:**
<!-- HTML -->
<p id="text">Hello World!</p>
<!-- JS -->
<script>
const element = document.getElementById("text");
console.log(element.textContent);
element.style.color = "green";
</script>


➝ **getElementsByClassName**
1.Selects all elements with a given class.
2.Returns an HTMLCollection(live collection).
**Example**
<!-- HTML -->
<p class="greet">Hi!</p>
<p class="greet">Hello!</p>
<!-- JS -->
<script>
const elements = document.getElementsByClassName("greet");
console.log(elements[0].textContent); 
elements[1].style.color = "blue";
</script>


 ➝**querySelector / querySelectorAll**
1.querySelector → returns first matching element (CSS selector).
2.querySelectorAll → returns all matching elements as a NodeList(static).
**Example**
<!-- HTML -->
<div class="box">Box 1</div>
<div class="box">Box 2</div>
<!-- JS -->
<script>
const firstBox = document.querySelector(".box"); 
console.log(firstBox.textContent); 
const allBoxes = document.querySelectorAll(".box");
allBoxes.forEach(el => el.style.color = "green"); // Makes both green
</script>

