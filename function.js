// document.querySelectorAll(".interview").addEventListener("click",function(){
//     //action
//    document.addEventListener("DOMContentLoaded", function() {
//     const interviewBtn = document.getElementById("interview");        // Job card INTERVIEW button
//     const mobileDiv = document.getElementById("mobile-fast");        // Job card div
//     const noJobDiv = document.getElementById("div-1");               // No Job Available div
//     const interviewTab = document.getElementById("interview-tab");   // Top tab

//     interviewBtn.addEventListener("click", function() {
//         // ১. Show mobile-fast
//         if(mobileDiv) mobileDiv.classList.remove("hidden");

//         // ২. Hide div-1
//         if(noJobDiv) noJobDiv.classList.add("hidden");

//         // ৩. Active interview-tab
//         if(interviewTab){
//             interviewTab.style.backgroundColor = "green";
//             interviewTab.style.color = "white";
//         }

//         console.log("INTERVIEW clicked → mobile-fast shown, div-1 hidden, interview-tab active");
//     });
// });
//     //job-1-badge
//     const job1Badge=document.getElementById("job-1-badge");
// let badgeOne=job1Badge.innerText;
// job1Badge.innerText="Interview";
// job1Badge.style.color = "white";        
//     job1Badge.style.backgroundColor = "green";
//     job1Badge.style.padding = "5px 10px";
//     job1Badge.style.borderRadius = "5px";
// //job-1 function
// const interviewNumber=document.getElementById("interview-value");
// let interviewValue=Number(interviewNumber.innerText);
//     console.log("Initial Interview Value:",interviewValue);
// for(let i=0;i<1;i++)
//     interviewValue++;
// console.log("Interview Value After Clicked:",interviewValue);
//    interviewNumber.innerText = interviewValue;
// interviewNumber.style.color="green";
// })

// //button actions

// document.addEventListener("DOMContentLoaded", function() {
//     const allBtn = document.getElementById("all-tab");
//     const interviewBtn = document.getElementById("interview-tab");
//     const rejectBtn = document.getElementById("rejected-tab"); // new button
//     const jobCards = document.getElementById("Job-Cards");
//     const noJobDiv = document.getElementById("div-1");

//     function resetButtons() {
//         allBtn.style.backgroundColor = "";
//         allBtn.style.color = "";
//         interviewBtn.style.backgroundColor = "";
//         interviewBtn.style.color = "";
//         rejectBtn.style.backgroundColor = "";
//         rejectBtn.style.color = "";
//     }

//     // All tab
//     allBtn.addEventListener("click", function() {
//         resetButtons();
//         this.style.backgroundColor = "green";
//         this.style.color = "white";

//         if(noJobDiv) noJobDiv.classList.add("hidden"); 
//         if(jobCards) jobCards.classList.remove("hidden");
//         console.log("All Tab Clicked");
//     });

//     // Interview tab
//     interviewBtn.addEventListener("click", function() {
//         resetButtons();
//         this.style.backgroundColor = "green";
//         this.style.color = "white";

//         if(noJobDiv) noJobDiv.classList.remove("hidden"); 
//         if(jobCards) jobCards.classList.add("hidden");
//         console.log("Interview Tab Clicked");
//     });



//     // Rejected tab
//     rejectBtn.addEventListener("click", function() {
//         resetButtons();
//         this.style.backgroundColor = "green";
//         this.style.color = "white";

//         if(noJobDiv) noJobDiv.classList.remove("hidden"); 
//         if(jobCards) jobCards.classList.add("hidden");
//         console.log("Rejected Tab Clicked");
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {

//     // সব interview button select
//     const interviewButtons = document.querySelectorAll(".interview");

//     interviewButtons.forEach(function (button) {

//         button.addEventListener("click", function () {

//             // badge change (NOT APPLIED → Interview)
//             const badge = this.parentElement.querySelector("button");
//             badge.innerText = "Interview";
//             badge.style.color = "white";
//             badge.style.backgroundColor = "green";
//             badge.style.padding = "5px 10px";
//             badge.style.borderRadius = "5px";

//             // interview count increase
//             const interviewNumber = document.getElementById("interview-value");
//             let interviewValue = Number(interviewNumber.innerText);
//             interviewValue++;
//             interviewNumber.innerText = interviewValue;
//             interviewNumber.style.color = "green";

//         });

//     });


//     // -------------------------
//     // TAB BUTTON ACTION
//     // -------------------------

//     const allBtn = document.getElementById("all-tab");
//     const interviewTab = document.getElementById("interview-tab");
//     const rejectBtn = document.getElementById("rejected-tab");

//     const jobCards = document.getElementById("Job-Cards");
//     const noJobDiv = document.getElementById("div-1");

//     function resetButtons() {
//         allBtn.style.backgroundColor = "";
//         allBtn.style.color = "";
//         interviewTab.style.backgroundColor = "";
//         interviewTab.style.color = "";
//         rejectBtn.style.backgroundColor = "";
//         rejectBtn.style.color = "";
//     }

//     // All tab
//     allBtn.addEventListener("click", function () {
//         resetButtons();
//         this.style.backgroundColor = "green";
//         this.style.color = "white";

//         jobCards.classList.remove("hidden");
//         noJobDiv.classList.add("hidden");
//     });

//     // Interview tab
//     interviewTab.addEventListener("click", function () {
//         resetButtons();
//         this.style.backgroundColor = "green";
//         this.style.color = "white";

//         jobCards.classList.add("hidden");
//         noJobDiv.classList.remove("hidden");
//     });

//     // Rejected tab
//     rejectBtn.addEventListener("click", function () {
//         resetButtons();
//         this.style.backgroundColor = "green";
//         this.style.color = "white";

//         jobCards.classList.add("hidden");
//         noJobDiv.classList.remove("hidden");
//     });

// });
// 

// document.addEventListener("DOMContentLoaded", function () {

//     const interviewButtons = document.querySelectorAll(".interview");
//     const rejectedButtons = document.querySelectorAll(".rejected");

//     const interviewNumber = document.getElementById("interview-value");
//     const rejectedNumber = document.getElementById("rejected-value");

//     const allBtn = document.getElementById("all-tab");
//     const interviewTab = document.getElementById("interview-tab");
//     const rejectTab = document.getElementById("rejected-tab");

//     const jobCards = document.querySelectorAll(".job-card");
//     const noJobDiv = document.getElementById("div-1");

//     // ------------------
//     // INTERVIEW ACTION
//     // ------------------
//     interviewButtons.forEach(function (button) {

//         button.addEventListener("click", function () {

//             const parentCard = this.closest(".job-card");
//             parentCard.classList.add("interviewed");

//             const badge = parentCard.querySelector("button");
//             badge.innerText = "Interview";
//             badge.style.backgroundColor = "green";
//             badge.style.color = "white";

//             let interviewValue = Number(interviewNumber.innerText);
//             interviewValue++;
//             interviewNumber.innerText = interviewValue;
//             interviewNumber.style.color = "green";

//         });

//     });

//     // ------------------
//     // REJECTED ACTION
//     // ------------------
//     rejectedButtons.forEach(function (button) {

//         button.addEventListener("click", function () {

//             const parentCard = this.closest(".job-card");
//             parentCard.classList.add("rejected-card");

//             const badge = parentCard.querySelector("button");
//             badge.innerText = "Rejected";
//             badge.style.backgroundColor = "red";
//             badge.style.color = "white";

//             let rejectedValue = Number(rejectedNumber.innerText);
//             rejectedValue++;
//             rejectedNumber.innerText = rejectedValue;
//             rejectedNumber.style.color = "red";

//         });

//     });

//     // ------------------
//     // TAB RESET
//     // ------------------
//     function resetTabs() {
//         allBtn.style.backgroundColor = "";
//         allBtn.style.color = "";
//         interviewTab.style.backgroundColor = "";
//         interviewTab.style.color = "";
//         rejectTab.style.backgroundColor = "";
//         rejectTab.style.color = "";
//     }

//     // ------------------
//     // ALL TAB
//     // ------------------
//     allBtn.addEventListener("click", function () {

//         resetTabs();
//         this.style.backgroundColor = "green";
//         this.style.color = "white";

//         jobCards.forEach(card => card.classList.remove("hidden"));
//         noJobDiv.classList.add("hidden");

//     });

//     // ------------------
//     // INTERVIEW TAB
//     // ------------------
//     interviewTab.addEventListener("click", function () {

//         resetTabs();
//         this.style.backgroundColor = "green";
//         this.style.color = "white";

//         let found = false;

//         jobCards.forEach(function (card) {

//             if (card.classList.contains("interviewed")) {
//                 card.classList.remove("hidden");
//                 found = true;
//             } else {
//                 card.classList.add("hidden");
//             }

//         });

//         if (!found) {
//             noJobDiv.classList.remove("hidden");
//         } else {
//             noJobDiv.classList.add("hidden");
//         }

//     });

//     // ------------------
//     // REJECTED TAB
//     // ------------------
//     rejectTab.addEventListener("click", function () {

//         resetTabs();
//         this.style.backgroundColor = "green";
//         this.style.color = "white";

//         let found = false;

//         jobCards.forEach(function (card) {

//             if (card.classList.contains("rejected-card")) {
//                 card.classList.remove("hidden");
//                 found = true;
//             } else {
//                 card.classList.add("hidden");
//             }

//         });

//         if (!found) {
//             noJobDiv.classList.remove("hidden");
//         } else {
//             noJobDiv.classList.add("hidden");
//         }

//     });

// });

// document.addEventListener("DOMContentLoaded", function () {

//     const interviewButtons = document.querySelectorAll(".interview");
//     const rejectedButtons = document.querySelectorAll(".rejected");

//     const interviewNumber = document.getElementById("interview-value");
//     const rejectedNumber = document.getElementById("rejected-value");

//     const allBtn = document.getElementById("all-tab");
//     const interviewTab = document.getElementById("interview-tab");
//     const rejectTab = document.getElementById("rejected-tab");

//     const jobCards = document.querySelectorAll(".job-card");
//     const noJobDiv = document.getElementById("div-1");

//     // ------------------
//     // INTERVIEW ACTION
//     // ------------------
//     interviewButtons.forEach(function (button) {

//         button.addEventListener("click", function () {

//             const parentCard = this.closest(".job-card");
//             parentCard.classList.add("interviewed");
//             parentCard.classList.remove("rejected-card"); // prevent both states

//             const badge = parentCard.querySelector(".status-badge") || parentCard.querySelector("button");
//             badge.innerText = "Interview";
//             badge.style.backgroundColor = "green";
//             badge.style.color = "white";

//             let interviewValue = Number(interviewNumber.innerText);
//             interviewValue++;
//             interviewNumber.innerText = interviewValue;
//             interviewNumber.style.color = "green";

//         });

//     });

//     // ------------------
//     // REJECTED ACTION
//     // ------------------
//     rejectedButtons.forEach(function (button) {

//         button.addEventListener("click", function () {

//             const parentCard = this.closest(".job-card");
//             parentCard.classList.add("rejected-card");
//             parentCard.classList.remove("interviewed"); // prevent both states

//             const badge = parentCard.querySelector(".status-badge") || parentCard.querySelector("button");
//             badge.innerText = "Rejected";
//             badge.style.backgroundColor = "red";
//             badge.style.color = "white";

//             let rejectedValue = Number(rejectedNumber.innerText);
//             rejectedValue++;
//             rejectedNumber.innerText = rejectedValue;
//             rejectedNumber.style.color = "red";

//         });

//     });

//     // ------------------
//     // TAB RESET
//     // ------------------
//     function resetTabs() {
//         allBtn.style.backgroundColor = "";
//         allBtn.style.color = "";
//         interviewTab.style.backgroundColor = "";
//         interviewTab.style.color = "";
//         rejectTab.style.backgroundColor = "";
//         rejectTab.style.color = "";
//     }

//     // ------------------
//     // ALL TAB
//     // ------------------
//     allBtn.addEventListener("click", function () {

//         resetTabs();
//         this.style.backgroundColor = "green";
//         this.style.color = "white";

//         jobCards.forEach(card => card.classList.remove("hidden"));
//         noJobDiv.classList.add("hidden");

//     });

//     // ------------------
//     // INTERVIEW TAB
//     // ------------------
//     interviewTab.addEventListener("click", function () {

//         resetTabs();
//         this.style.backgroundColor = "green";
//         this.style.color = "white";

//         let found = false;

//         jobCards.forEach(function (card) {

//             if (card.classList.contains("interviewed")) {
//                 card.classList.remove("hidden");
//                 found = true;
//             } else {
//                 card.classList.add("hidden");
//             }

//         });

//         if (!found) {
//             noJobDiv.classList.remove("hidden");
//         } else {
//             noJobDiv.classList.add("hidden");
//         }

//     });

//     // ------------------
//     // REJECTED TAB
//     // ------------------
//     rejectTab.addEventListener("click", function () {

//         resetTabs();
//         this.style.backgroundColor = "green";
//         this.style.color = "white";

//         let found = false;

//         jobCards.forEach(function (card) {

//             if (card.classList.contains("rejected-card")) {
//                 card.classList.remove("hidden");
//                 found = true;
//             } else {
//                 card.classList.add("hidden");
//             }

//         });

//         if (!found) {
//             noJobDiv.classList.remove("hidden");
//         } else {
//             noJobDiv.classList.add("hidden");
//         }

//     });

// });


// document.addEventListener("DOMContentLoaded", function () {

//     const interviewButtons = document.querySelectorAll(".interview");
//     const rejectedButtons = document.querySelectorAll(".rejected");

//     const interviewNumber = document.getElementById("interview-value");
//     const rejectedNumber = document.getElementById("rejected-value");

//     const allBtn = document.getElementById("all-tab");
//     const interviewTab = document.getElementById("interview-tab");
//     const rejectTab = document.getElementById("rejected-tab");

//     const jobCards = document.querySelectorAll(".job-card");
//     const noJobDiv = document.getElementById("div-1");

//     const availableJobsDiv = document.getElementById("available-job-number");
//     const totalJobs = jobCards.length;

//     // ------------------
//     // FUNCTION TO UPDATE AVAILABLE JOB COUNT
//     // ------------------
//     function updateAvailableJobs() {
//         let visibleJobs = 0;
//         jobCards.forEach(card => {
//             if (!card.classList.contains("hidden")) visibleJobs++;
//         });
//          availableJobsDiv.innerText = `${visibleJobs} of ${totalJobs} jobs`;
//     }
    

//     // ------------------
//     // INTERVIEW ACTION
//     // ------------------
//     interviewButtons.forEach(button => {
//         button.addEventListener("click", function () {
//             const parentCard = this.closest(".job-card");
//             parentCard.classList.add("interviewed");
//             parentCard.classList.remove("rejected-card"); // remove rejected if any

//             const badge = parentCard.querySelector(".status-badge") || parentCard.querySelector("button");
//             badge.innerText = "Interview";
//             badge.style.backgroundColor = "green";
//             badge.style.color = "white";

//             interviewNumber.innerText = Number(interviewNumber.innerText) + 1;
//             interviewNumber.style.color = "green";

//             updateAvailableJobs();
//         });
//     });

//     // ------------------
//     // REJECTED ACTION
//     // ------------------
//     rejectedButtons.forEach(button => {
//         button.addEventListener("click", function () {
//             const parentCard = this.closest(".job-card");
//             parentCard.classList.add("rejected-card");
//             parentCard.classList.remove("interviewed"); // remove interview if any

//             const badge = parentCard.querySelector(".status-badge") || parentCard.querySelector("button");
//             badge.innerText = "Rejected";
//             badge.style.backgroundColor = "red";
//             badge.style.color = "white";

//             rejectedNumber.innerText = Number(rejectedNumber.innerText) + 1;
//             rejectedNumber.style.color = "red";

//             updateAvailableJobs();
//         });
//     });

//     // ------------------
//     // TAB RESET
//     // ------------------
//     function resetTabs() {
//         allBtn.style.backgroundColor = "";
//         allBtn.style.color = "";
//         interviewTab.style.backgroundColor = "";
//         interviewTab.style.color = "";
//         rejectTab.style.backgroundColor = "";
//         rejectTab.style.color = "";
//     }

//     // ------------------
//     // ALL TAB
//     // ------------------
//     allBtn.addEventListener("click", function () {
//         resetTabs();
//         this.style.backgroundColor = "green";
//         this.style.color = "white";

//         jobCards.forEach(card => card.classList.remove("hidden"));
//         noJobDiv.classList.add("hidden");

//         updateAvailableJobs();
//     });

//     // ------------------
//     // INTERVIEW TAB
//     // ------------------
//     interviewTab.addEventListener("click", function () {
//         resetTabs();
//         this.style.backgroundColor = "green";
//         this.style.color = "white";

//         let found = false;
//         jobCards.forEach(card => {
//             if (card.classList.contains("interviewed")) {
//                 card.classList.remove("hidden");
//                 found = true;
//             } else {
//                 card.classList.add("hidden");
//             }
//         });

//         if (!found) noJobDiv.classList.remove("hidden");
//         else noJobDiv.classList.add("hidden");

//         updateAvailableJobs();
//     });

//     // ------------------
//     // REJECTED TAB
//     // ------------------
//     rejectTab.addEventListener("click", function () {
//         resetTabs();
//         this.style.backgroundColor = "green";
//         this.style.color = "white";

//         let found = false;
//         jobCards.forEach(card => {
//             if (card.classList.contains("rejected-card")) {
//                 card.classList.remove("hidden");
//                 found = true;
//             } else {
//                 card.classList.add("hidden");
//             }
//         });

//         if (!found) noJobDiv.classList.remove("hidden");
//         else noJobDiv.classList.add("hidden");

//         updateAvailableJobs();
//     });

//     // ------------------
//     // INITIAL COUNT
//     // ------------------
//     updateAvailableJobs();

// });

document.addEventListener("DOMContentLoaded", function () {

    const interviewButtons = document.querySelectorAll(".interview");
    const rejectedButtons = document.querySelectorAll(".rejected");

    const interviewNumber = document.getElementById("interview-value");
    const rejectedNumber = document.getElementById("rejected-value");

    const allBtn = document.getElementById("all-tab");
    const interviewTab = document.getElementById("interview-tab");
    const rejectTab = document.getElementById("rejected-tab");

    const jobCards = document.querySelectorAll(".job-card");
    const noJobDiv = document.getElementById("div-1");

    const availableJobsDiv = document.getElementById("available-job-number");
    const totalJobs = jobCards.length;

    // ------------------
    // FUNCTION TO UPDATE VISIBLE JOBS (for filtered tabs only)
    // ------------------
    function updateAvailableJobs() {
        let visibleJobs = 0;
        jobCards.forEach(card => {
            if (!card.classList.contains("hidden")) visibleJobs++;
        });
        availableJobsDiv.innerText = `${visibleJobs} of ${totalJobs} jobs`;
    }

    // ------------------
    // INTERVIEW BUTTON CLICK
    // ------------------
    interviewButtons.forEach(button => {
        button.addEventListener("click", function () {
            const parentCard = this.closest(".job-card");
            parentCard.classList.add("interviewed");
            parentCard.classList.remove("rejected-card");

            const badge = parentCard.querySelector(".status-badge") || parentCard.querySelector("button");
            badge.innerText = "Interview";
            badge.style.backgroundColor = "green";
            badge.style.color = "white";

            interviewNumber.innerText = Number(interviewNumber.innerText) + 1;
            interviewNumber.style.color = "green";

            // If currently in a filtered tab, update count
            if (!allBtn.style.backgroundColor || interviewTab.style.backgroundColor) {
                updateAvailableJobs();
            }
        });
    });

    // ------------------
    // REJECTED BUTTON CLICK
    // ------------------
    rejectedButtons.forEach(button => {
        button.addEventListener("click", function () {
            const parentCard = this.closest(".job-card");
            parentCard.classList.add("rejected-card");
            parentCard.classList.remove("interviewed");

            const badge = parentCard.querySelector(".status-badge") || parentCard.querySelector("button");
            badge.innerText = "Rejected";
            badge.style.backgroundColor = "red";
            badge.style.color = "white";

            rejectedNumber.innerText = Number(rejectedNumber.innerText) + 1;
            rejectedNumber.style.color = "red";

            // If currently in a filtered tab, update count
            if (!allBtn.style.backgroundColor || rejectTab.style.backgroundColor) {
                updateAvailableJobs();
            }
        });
    });

    // ------------------
    // RESET TAB STYLES
    // ------------------
    function resetTabs() {
        allBtn.style.backgroundColor = "";
        allBtn.style.color = "";
        interviewTab.style.backgroundColor = "";
        interviewTab.style.color = "";
        rejectTab.style.backgroundColor = "";
        rejectTab.style.color = "";
    }

    // ------------------
    // ALL TAB CLICK
    // ------------------
    allBtn.addEventListener("click", function () {
        resetTabs();
        this.style.backgroundColor = "green";
        this.style.color = "white";

        jobCards.forEach(card => card.classList.remove("hidden"));
        noJobDiv.classList.add("hidden");

        // All tab → always show "8 jobs"
        availableJobsDiv.innerText = `${totalJobs} jobs`;
    });

    // ------------------
    // INTERVIEW TAB CLICK
    // ------------------
    interviewTab.addEventListener("click", function () {
        resetTabs();
        this.style.backgroundColor = "green";
        this.style.color = "white";

        let found = false;
        jobCards.forEach(card => {
            if (card.classList.contains("interviewed")) {
                card.classList.remove("hidden");
                found = true;
            } else {
                card.classList.add("hidden");
            }
        });

        if (!found) noJobDiv.classList.remove("hidden");
        else noJobDiv.classList.add("hidden");

        updateAvailableJobs();
    });

    // ------------------
    // REJECTED TAB CLICK
    // ------------------
    rejectTab.addEventListener("click", function () {
        resetTabs();
        this.style.backgroundColor = "green";
        this.style.color = "white";

        let found = false;
        jobCards.forEach(card => {
            if (card.classList.contains("rejected-card")) {
                card.classList.remove("hidden");
                found = true;
            } else {
                card.classList.add("hidden");
            }
        });

        if (!found) noJobDiv.classList.remove("hidden");
        else noJobDiv.classList.add("hidden");

        updateAvailableJobs();
    });

    // ------------------
    // INITIAL PAGE LOAD → show "8 jobs"
    // ------------------
    availableJobsDiv.innerText = `${totalJobs} jobs`;
});