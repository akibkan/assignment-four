let currentTab = 'all';


const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectContainer = document.getElementById("rejected-container");
const emptyState = document.getElementById("empty-state");



function switchTab(tab){
    // console.log(tab);
    const tabs = ['all','interview','rejected'];
    currentTab = tab;
    for(const t of tabs){
        const tabName = document.getElementById('tab-'+ t);
        // console.log(tabName);
        if(t === tab){
            tabName.classList.add('btn-primary');
            // tabName.classList.remove('btn');
        }else{
            tabName.classList.remove('btn-primary');
            // tabName.classList.add('btn');
        }
    }

    const pages = [allContainer,interviewContainer, rejectContainer];

    for(const section of pages){
        section.classList.add('hidden');
    }

    emptyState.classList.add('hidden')

    if(tab === 'all'){
        allContainer.classList.remove('hidden');
        if(allContainer.children.length < 1){
            emptyState.classList.remove("hidden");
        }
    }
    else if(tab === 'interview'){
        interviewContainer.classList.remove('hidden')
                if(interviewContainer.children.length < 1){
            emptyState.classList.remove("hidden");
        }
    }
    else{
        rejectContainer.classList.remove('hidden');
                if(rejectContainer.children.length < 1){
            emptyState.classList.remove("hidden");
        }
    }
    updateState();

}

// state update 

const totalState = document.getElementById("state-total");
const interviewState = document.getElementById("state-interview");
const rejectedState = document.getElementById("state-rejected");
const availableState = document.getElementById("available");


switchTab(currentTab);

document.body.addEventListener('click',function(event){
    const clickedElement = event.target;
    const card = clickedElement.closest(".card");
    if(!card) return;
    const status = card.querySelector(".status");
    const parent = card.parentNode;

    if(clickedElement.classList.contains("intervieew")){

        status.innerText = 'Interview';
        interviewContainer.appendChild(card);
        // updateState()
    }
    if(clickedElement.classList.contains("rejected")){
        status.innerText = 'rejected';
        rejectContainer.appendChild(card);
        // updateState()
        
    }
    if(clickedElement.classList.contains("deleted")){
        parent.removeChild(card)
        // updateState()
    }
    updateState()

})


function updateState(){

const counts = {
    all: allContainer.children.length,
    interview: interviewContainer.children.length,
    rejected: rejectContainer.children.length,
}; 

totalState.innerText = counts.all;
interviewState.innerText = counts.interview;
rejectedState.innerText = counts.rejected;

availableState.innerText = counts[currentTab] ;

if(counts[currentTab] < 1){
    emptyState.classList.remove('hidden');
}
else{
    emptyState.classList.add('hidden');
}

}

updateState();