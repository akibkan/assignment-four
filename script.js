function updateAvailableJobs(){
    const total = document.querySelectorAll("#all-cards .card").length;
    document.getElementById("job-count").innerText = total + " jobs";
}
function updateDashboardCounts(){
    const interviewCards = document.querySelectorAll("#interview-cards .card").length;
    const rejectedCards  = document.querySelectorAll("#rejected-cards .card").length;
    interviewCounter.innerText = interviewCards;
    rejectedCounter.innerText  = rejectedCards;
}
function deleteCard(card){
    card.classList.add("hidden");
    updateDashboardCounts();
    updateAvailableJobs();
}

// Buttons
const allBtn = document.getElementById("all-btn");
const interViewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");

// btn style
function toggleStyle(id){
    allBtn.classList.remove('btn-primary');
    interViewBtn.classList.remove('btn-primary');
    rejectedBtn.classList.remove('btn-primary');

    allBtn.classList.add('btn');
    interViewBtn.classList.add('btn');
    rejectedBtn.classList.add('btn');

    document.getElementById(id).classList.add('btn-primary');
}

// Show tab
function showOnly(id){
    const allCards = document.getElementById("all-cards");
    const interviewCards = document.getElementById("interview-cards");
    const rejectedCards = document.getElementById("rejected-cards");
    const emptyState = document.getElementById("empty-state");

    allCards.classList.add("hidden");
    interviewCards.classList.add("hidden");
    rejectedCards.classList.add("hidden");
    emptyState.classList.add("hidden");

    const selected = document.getElementById(id);
    selected.classList.remove("hidden");

    if(selected.children.length === 0 && id !== "all-cards"){
        emptyState.classList.remove("hidden");
    }
    updateJobsCount(id);
}

// Dashboard counts
const interviewCounter = document.getElementById('interview-count');
const rejectedCounter = document.getElementById('rejected-count');
let interviewCount = 0;
let rejectedCount = 0;

// Move card and status

function moveCard(card, status){
    const id = card.dataset.id;

    const interviewCards = document.getElementById("interview-cards");
    const rejectedCards  = document.getElementById("rejected-cards");

const applied = card.querySelector(".applied");

if(status === "interview"){
    applied.innerText = "Interview";
    applied.classList.remove("btn-error");
    applied.classList.add("btn-success");
}
if(status === "rejected"){
    applied.innerText = "Rejected";
    applied.classList.remove("btn-success");
    applied.classList.add("btn-error");
}

    const prevInInterview = interviewCards.querySelector(`.card[data-id="${id}"]`);
    const prevInRejected  = rejectedCards.querySelector(`.card[data-id="${id}"]`);

    if(prevInInterview){
        prevInInterview.remove();
        interviewCount--;
    }
    if(prevInRejected){
        prevInRejected.remove();
        rejectedCount--;
    }
    const clone = card.cloneNode(true);
    const cloneApplied = clone.querySelector(".applied");

    if(status === "interview"){
        cloneApplied.innerText = "Interview";
        cloneApplied.classList.remove("btn-error");
        cloneApplied.classList.add("btn-success");
        interviewCards.appendChild(clone);
        interviewCount++;
    }

    if(status === "rejected"){
        cloneApplied.innerText = "Rejected";
        cloneApplied.classList.remove("btn-success");
        cloneApplied.classList.add("btn-error");

        rejectedCards.appendChild(clone);
        rejectedCount++;
    }

    interviewCounter.innerText = interviewCount;
    rejectedCounter.innerText = rejectedCount;
}

// Event delegation card buttons
document.body.addEventListener("click", function(e){
    if(e.target.classList.contains("inter-btn")){
        const card = e.target.closest(".card");
        moveCard(card, "interview");
    }
    if(e.target.classList.contains("rej-btn")){
        const card = e.target.closest(".card");
        moveCard(card, "rejected");
    }
    if(e.target.classList.contains("del-btn")){
        const card = e.target.closest(".card");
        deleteCard(card);
    }
});
const jobsCountText = document.getElementById("job-count");
function updateJobsCount(tabId){
    let count = 0;
    if(tabId === "all-cards"){
        count = document.querySelectorAll("#all-cards .card").length;
    }
    else if(tabId === "interview-cards"){
        count = document.querySelectorAll("#interview-cards .card").length;
    }
    else if(tabId === "rejected-cards"){
        count = document.querySelectorAll("#rejected-cards .card").length;
    }
    jobsCountText.innerText = count + " job";
}


