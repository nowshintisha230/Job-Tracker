//ANS TO THE QUES NO :1//
**The Differences Between getElementById, getElementsByClassName, and querySelector / querySelectorAll**

➝**getElementById**
1.Selects a single element using its unique id.
2.Returns only one element object.
3.It is the fastest selector because ID is always unique.
4.If the ID does not exist, it returns null.

➝ **getElementsByClassName**
1.Selects all elements that have the given class name.
2.Returns an HTMLCollection.
3.It is a live collection (automatically updates if DOM changes).
4.Have to use index number to access specific elements.

➝ **querySelector / querySelectorAll**
**querySelector**
1.Returns the first matching element.
2.Uses any valid CSS selector (id, class, tag, attribute, etc.).
3.Returns null if no match is found.

**querySelectorAll**
1.Returns all matching elements.
2.Returns a NodeList.
3.It is a static collection(does not update automatically).
