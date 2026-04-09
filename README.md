# 📋 Job Tracker

## 📌 Project Overview
**Job Tracker** is a responsive web application built using **HTML, CSS, and JavaScript**.  
Users can add new jobs, delete unwanted jobs, view available jobs, and track statistics like total added jobs and total deleted jobs.  
This project demonstrates **vanilla JS frontend development**, interactive UI, and responsive design principles.

---

## 📸 Screenshot
<img width="1864" height="909" alt="Screenshot 2026-04-09 103323" src="https://github.com/user-attachments/assets/815c90ad-ccbf-43b9-a269-ff0331f84af2" />
-----
<img width="1836" height="913" alt="Screenshot 2026-04-09 103347" src="https://github.com/user-attachments/assets/fae78fb7-47e6-42d0-b438-0e172aa65ffc" />
----
<img width="1918" height="904" alt="Screenshot 2026-04-09 103401" src="https://github.com/user-attachments/assets/23cd92c9-1013-4443-a29a-d565476398bf" />
----


---

## 🛠️ Technologies Used
- HTML5  
- CSS3  
- JavaScript (ES6)  
- Font Awesome (for icons)  
- Local Storage (for saving jobs)  

---

## ✨ Main Features
- **Add / Delete Jobs:** Users can add new jobs and delete unnecessary ones.  
- **View Available Jobs:** Easily see all active jobs in a clean interface.  
- **Job Statistics:** Track total added and total deleted jobs.  
- **Responsive Design:** Works seamlessly across mobile, tablet, and desktop devices.  
- **Interactive UI:** Buttons, notifications, and dynamic DOM updates using JavaScript.  

---

## 📦 Dependencies
This project uses only vanilla JS and CSS. Optional dependencies:
- Font Awesome (for icons)  
- Google Fonts (for typography)

---

## 💻 How to Run Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/job-tracker.git
```

### 2️⃣ Navigate to the project folder
```bash
cd job-tracker
```

### 3️⃣ Open `index.html` in a browser
Simply double click `index.html` or use VS Code Live Server extension:

```bash
Right click index.html → Open with Live Server
```

---

## 🔗 Live Link & GitHub Repository
- 🌐 **Live Site:**https://nowshintisha230.github.io/Job-Tracker/ 
- 💻 **GitHub Repository:** https://github.com/nowshintisha230/job-tracker

---

## 👩‍💻 Author
**Nafisa Nowshin Tisha**  
Frontend Developer | CSE Student | JavaScript & Web Development Enthusiast

## Some Basic Q&A 

## ANS TO THE QUES NO :01
**The Differences Between getElementById, getElementsByClassName, and querySelector / querySelectorAll:**

### **getElementById**
1. Selects a single element using its unique id.
2. Returns only one element object.
3. It is the fastest selector because ID is always unique.
4. If the ID does not exist, it returns null.

### **getElementsByClassName**
1. Selects all elements that have the given class name.
2. Returns an HTMLCollection.
3. It is a live collection (automatically updates if DOM changes).
4. Have to use index number to access specific elements.

### **querySelector**
1. Returns the first matching element.
2. Uses any valid CSS selector (id, class, tag, attribute, etc.).
3. Returns null if no match is found.

### **querySelectorAll**
1. Returns all matching elements.
2. Returns a NodeList.
3. It is a static collection(does not update automatically).



## ANS TO THE QUES NO :02
 **The process of create and insert a new element into the DOM:**
1. First, create a new element using the document object.
2. Then, add content (text, attributes, or class) to the element.
3. Finally, insert or append the element into a selected parent element in the DOM.
 ### In short: Create → Customize → Insert into parent element.


 ## ANS TO THE QUES NO :03
 ### Event Building Definition and proccess of how it works
**Definition:** Event Bubbling is a process where an event starts from the target element and then moves upward through its parent elements in the DOM hierarchy.
**How it works:**
1. When an event (like click) happens on a child element, it is triggered first on that element.
2. Then the same event moves to its parent element.
3. It continues moving upward to ancestors (parent → grandparent → document).
So, the event flows from inside to outside (bottom to top).


## ANS TO THE QUES NO:04
### Definition of Event Delegation in javascript and its advantage
**Definition:** Event Delegation is a technique where you attach a single event listener to a parent element instead of adding event listeners to multiple child elements.
**Why it is useful:**
1. Improves performance (fewer event listeners).
2. Works for dynamically added elements.
3. Makes code more clean and manageable.
4. Reduces memory usage.


## ANS TO THE QUES NO:05
**Difference Between preventDefault() and stopPropagation()**

### preventDefault()
1. Stops the browser’s default behavior of an element.
2. **Example:** Prevents form submission or stops a link from navigating.
3. It does not stop event bubbling.

### stopPropagation()
1. Stops the event from bubbling (propagating) to parent elements.
2. Prevents parent event handlers from being executed.
3. It does not stop the default browser behavior.
