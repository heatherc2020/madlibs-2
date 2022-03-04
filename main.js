let noun, verb, adjective;
let storyP;
let sections;

function genStory() {
    noun = document.querySelector("#noun").value;
    verb = document.querySelector("#verb").value;
    adjective = document.querySelector("#adjective").value;
    storyP = document.querySelector("#generatedStory");
    let story = "There once was a platypus named " + noun + ", and he was lonely. Very lonely. The " + adjective + " kind of lonely. At the very least he was good at " + verb + "."
    storyP.innerHTML = story;
}

function showSection(elemID) {
    for (let s of sections) {
        if (s.id !== elemID) {
            s.style.display = "none";
        }
        else {
            s.style.display = "block";
        }
    }
}

function init() {
    sections = Array.from(document.querySelectorAll(".section"));
    sections.forEach(function(elem, i, sec){
        if (elem.id !== "storyContainer" && elem.id !== "adjContainer"){
addNext(elem, sec[i + 1].id)
        } else if (elem.id == "adjContainer"){
            submit(elem, sec[i +1].id)
        }
    })

    showSection("start");
}

function addNext(elem, nextID) {
let btn = document.createElement("button");
btn.addEventListener("click", function(){
    showSection(nextID);
})
btn.innerHTML = "Next!";
elem.appendChild(btn);
}
function submit(elem, nextID) {
    let btn = document.createElement("button");
    btn.addEventListener("click", function(){
        genStory();
        showSection(nextID);
        return false;
    })
    btn.innerHTML = "Submit!";
    elem.appendChild(btn);
    }

//addNext.getElementByID("BLANKContainer");

function hideSections(){
    sections = Array.from(document.querySelectorAll(".section"));
    
    for (let s of sections){
        if (s.id !== "start"){
            s.style.display="none";
        }
    }
    }
hideSections();
init();
console.log("hello!");


// test