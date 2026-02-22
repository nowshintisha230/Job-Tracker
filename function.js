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
    let totalJobs = jobCards.length;

 const allTotal = document.getElementById("total-value");

    // FUNCTION TO UPDATE JOBS
  
    function updateAvailableJobs() {
        let visibleJobs = 0;
        jobCards.forEach(card => {
            if (!card.classList.contains("hidden")) visibleJobs++;
        });
        availableJobsDiv.innerText = `${visibleJobs} of ${totalJobs} jobs`;
    }

    // INTERVIEW BUTTON CLICK
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
    // REJECTED BUTTON CLICK
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
            if (!allBtn.style.backgroundColor || rejectTab.style.backgroundColor) {
                updateAvailableJobs();
            }
        });
    });

    function resetTabs() {
        allBtn.style.backgroundColor = "";
        allBtn.style.color = "";
        interviewTab.style.backgroundColor = "";
        interviewTab.style.color = "";
        rejectTab.style.backgroundColor = "";
        rejectTab.style.color = "";
    }

  
    // ALL TAB CLICK
    allBtn.addEventListener("click", function () {
        resetTabs();
        this.style.backgroundColor = "green";
        this.style.color = "white";

        jobCards.forEach(card => card.classList.remove("hidden"));
        noJobDiv.classList.add("hidden");
        availableJobsDiv.innerText = `${totalJobs} jobs`;
    });

    // INTERVIEW TAB CLICK
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
    // REJECTED TAB CLICK
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
    availableJobsDiv.innerText = `${totalJobs} jobs`;
// DELETE BUTTON CLICK 
document.querySelectorAll(".job-card button").forEach(button => {
    const icon = button.querySelector("i.fa-trash-can");
    if(icon){
        button.addEventListener("click", function () {
const parentCard = this.closest(".job-card");
if(!parentCard) return;
parentCard.remove();
totalJobs--;
allTotal.innerText = totalJobs;
 updateAvailableJobs();
        });
    }
});
});