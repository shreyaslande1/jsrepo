let notes = JSON.parse(localStorage.getItem("notes")) || []

const notesContainer = document.getElementById("notesContainer")

function renderNotes() {
    notesContainer.innerHTML = ""

    notes.forEach((note, index) => {

        const noteDiv = document.createElement("div")
        noteDiv.classList.add("note")

        noteDiv.innerHTML = `
            <p>${note}</p>
            <div>
                <button onclick="editNote(${index})">Edit</button>
                <button onclick="deleteNote(${index})">Delete</button>
            </div>
        `

        notesContainer.appendChild(noteDiv)
    })

    localStorage.setItem("notes", JSON.stringify(notes))
}

function addNote() {
    const input = document.getElementById("noteInput")

    if (input.value.trim() === "") {
        alert("Please write something")
        return
    }

    notes.push(input.value)
    input.value = ""

    renderNotes()
}

function deleteNote(index) {
    notes.splice(index, 1)
    renderNotes()
}

function editNote(index) {
    const updatedNote = prompt("Edit your note:", notes[index])

    if (updatedNote !== null && updatedNote.trim() !== "") {
        notes[index] = updatedNote
        renderNotes()
    }
}

// Initial render
renderNotes()