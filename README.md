**The differences between getElementById, getElementsByClassName, and querySelector / querySelectorAll:**

1.**getElementById**
Selects a single element by its id.
Returns one element object.
Fastest among all selectors.
**Example:**
<!-- HTML -->
<p id="para1">Hello World!</p>
<!-- JS -->
<script>
const element = document.getElementById("para1");
console.log(element.textContent);
element.style.color = "red";     
 // Changes text color to red
</script>

✅ Note: Only works with id, returns a single element.

2. getElementsByClassName

Selects all elements with a given class.

Returns an HTMLCollection (live collection).

Must use index [0] if you want a single element.

<!-- HTML -->
<p class="greet">Hi!</p>
<p class="greet">Hello!</p>

<!-- JS -->
<script>
const elements = document.getElementsByClassName("greet");
console.log(elements[0].textContent); // Output: Hi!
elements[1].style.color = "blue";     // Changes second paragraph color to blue
</script>

✅ Note: Live collection, so changes in DOM reflect automatically.

3. querySelector / querySelectorAll

querySelector → returns first matching element (CSS selector).

querySelectorAll → returns all matching elements as a NodeList (static).

Very flexible: you can use any CSS selector.

<!-- HTML -->
<div class="box">Box 1</div>
<div class="box">Box 2</div>

<!-- JS -->
<script>
const firstBox = document.querySelector(".box"); 
console.log(firstBox.textContent); // Output: Box 1

const allBoxes = document.querySelectorAll(".box");
allBoxes.forEach(el => el.style.color = "green"); // Makes both green
</script>

✅ Note: Supports class, id, attribute selectors, etc.