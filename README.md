### ANS TO THE QUES NO :1
**The Differences Between getElementById, getElementsByClassName, and querySelector / querySelectorAll**

## **getElementById**
1. Selects a single element using its unique id.
2. Returns only one element object.
3. It is the fastest selector because ID is always unique.
4. If the ID does not exist, it returns null.

## **getElementsByClassName**
1. Selects all elements that have the given class name.
2. Returns an HTMLCollection.
3. It is a live collection (automatically updates if DOM changes).
4. Have to use index number to access specific elements.

## **querySelector**
1. Returns the first matching element.
2. Uses any valid CSS selector (id, class, tag, attribute, etc.).
3. Returns null if no match is found.

## **querySelectorAll**
1. Returns all matching elements.
2. Returns a NodeList.
3. It is a static collection(does not update automatically).



### ANS TO THE QUES NO :2
 **The process of create and insert a new element into the DOM**
1. First, create a new element using the document object.
2. Then, add content (text, attributes, or class) to the element.
3. Finally, insert or append the element into a selected parent element in the DOM.
 **In short:**Create → Customize → Insert into parent element.


 ### ANS TO THE QUES NO :3
 **Event Building Definition and proccess of how it works**
**Definition:**Event Bubbling is a process where an event starts from the target element and then moves upward through its parent elements in the DOM hierarchy.
**How it works:**
1. When an event (like click) happens on a child element, it is triggered first on that element.
2. Then the same event moves to its parent element.
3. It continues moving upward to ancestors (parent → grandparent → document).
So, the event flows from inside to outside (bottom to top).


### ANS TO THE QUES NO:4
**Definition of Event Delegation in javascript and its advantage**
**Definition:**Event Delegation is a technique where you attach a single event listener to a parent element instead of adding event listeners to multiple child elements.
**Why it is useful:**
1. Improves performance (fewer event listeners).
2. Works for dynamically added elements.
3. Makes code more clean and manageable.
4. Reduces memory usage.


### ANS TO THE QUES NO:5
**Difference Between preventDefault() and stopPropagation()**

## preventDefault()
1. Stops the browser’s default behavior of an element.
2. **Example:** Prevents form submission or stops a link from navigating.
3. It does not stop event bubbling.

## stopPropagation()
1. Stops the event from bubbling (propagating) to parent elements.
2. Prevents parent event handlers from being executed.
3. It does not stop the default browser behavior.