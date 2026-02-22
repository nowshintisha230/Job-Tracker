document.getElementById("interview").addEventListener("click",function(){
    //action
   document.addEventListener("DOMContentLoaded", function() {
    const interviewBtn = document.getElementById("interview");        // Job card INTERVIEW button
    const mobileDiv = document.getElementById("mobile-fast");        // Job card div
    const noJobDiv = document.getElementById("div-1");               // No Job Available div
    const interviewTab = document.getElementById("interview-tab");   // Top tab

    interviewBtn.addEventListener("click", function() {
        // ১. Show mobile-fast
        if(mobileDiv) mobileDiv.classList.remove("hidden");

        // ২. Hide div-1
        if(noJobDiv) noJobDiv.classList.add("hidden");

        // ৩. Active interview-tab
        if(interviewTab){
            interviewTab.style.backgroundColor = "green";
            interviewTab.style.color = "white";
        }

        console.log("INTERVIEW clicked → mobile-fast shown, div-1 hidden, interview-tab active");
    });
});
    //job-1-badge
    const job1Badge=document.getElementById("job-1-badge");
let badgeOne=job1Badge.innerText;
job1Badge.innerText="Interview";
job1Badge.style.color = "white";        
    job1Badge.style.backgroundColor = "green";
    job1Badge.style.padding = "5px 10px";
    job1Badge.style.borderRadius = "5px";
//job-1 function
const interviewNumber=document.getElementById("interview-value");
let interviewValue=Number(interviewNumber.innerText);
    console.log("Initial Interview Value:",interviewValue);
for(let i=0;i<1;i++)
    interviewValue++;
console.log("Interview Value After Clicked:",interviewValue);
   interviewNumber.innerText = interviewValue;
interviewNumber.style.color="green";
})



document.addEventListener("DOMContentLoaded", function() {
    const allBtn = document.getElementById("all-tab");
    const interviewBtn = document.getElementById("interview-tab");
    const rejectBtn = document.getElementById("rejected-tab"); // new button
    const jobCards = document.getElementById("Job-Cards");
    const noJobDiv = document.getElementById("div-1");

    function resetButtons() {
        allBtn.style.backgroundColor = "";
        allBtn.style.color = "";
        interviewBtn.style.backgroundColor = "";
        interviewBtn.style.color = "";
        rejectBtn.style.backgroundColor = "";
        rejectBtn.style.color = "";
    }

    // All tab
    allBtn.addEventListener("click", function() {
        resetButtons();
        this.style.backgroundColor = "green";
        this.style.color = "white";

        if(noJobDiv) noJobDiv.classList.add("hidden"); 
        if(jobCards) jobCards.classList.remove("hidden");
        console.log("All Tab Clicked");
    });

    // Interview tab
    interviewBtn.addEventListener("click", function() {
        resetButtons();
        this.style.backgroundColor = "green";
        this.style.color = "white";

        if(noJobDiv) noJobDiv.classList.remove("hidden"); 
        if(jobCards) jobCards.classList.add("hidden");
        console.log("Interview Tab Clicked");
    });



    // Rejected tab
    rejectBtn.addEventListener("click", function() {
        resetButtons();
        this.style.backgroundColor = "green";
        this.style.color = "white";

        if(noJobDiv) noJobDiv.classList.remove("hidden"); 
        if(jobCards) jobCards.classList.add("hidden");
        console.log("Rejected Tab Clicked");
    });
});


