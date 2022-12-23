console.log("welcome to notes app");
showNotes();

let AddButton = document.getElementById("AddButton");
AddButton.addEventListener("click", function (e) {
    let AddText = document.getElementById("AddText");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(AddText.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    AddText.value = "";
    console.log(notesObj);

    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-3 mx-3 card" style="width: 18rem;">

                <div class="card-body">
                    <h5 class="card-title">NOTE ${index + 1}</h5>
                    <p class="card-text"> ${element}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>          
        `
    }
    );
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show! Use "Add A note" section above to add note!!`;
    }
}

//function to delete a note
function deleteNote(index) {
    console.log("I am deleting", index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}


