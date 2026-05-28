let display = document.getElementById("display")
let historyBox = document.getElementById("history")

let history = JSON.parse(localStorage.getItem("calcHistory")) || []

function appendValue(value) {
    display.value += value
}

function clearDisplay() {
    display.value = ""
}

function deleteLast() {
    display.value = display.value.slice(0, -1)
}

function calculate() {
    try {
        let result = eval(display.value)

        let record = `${display.value} = ${result}`

        display.value = result

        history.push(record)

        localStorage.setItem("calcHistory", JSON.stringify(history))

        showHistory()

    } catch {
        alert("Invalid Expression")
    }
}

function showHistory() {
    historyBox.innerHTML = ""

    history.forEach(item => {
        let div = document.createElement("div")
        div.textContent = item
        historyBox.appendChild(div)
    })
}

// Keyboard support
document.addEventListener("keydown", function(event) {
    const key = event.key

    if (!isNaN(key) || "+-*/.".includes(key)) {
        appendValue(key)
    }

    if (key === "Enter") {
        calculate()
    }

    if (key === "Backspace") {
        deleteLast()
    }

    if (key === "Escape") {
        clearDisplay()
    }
})

showHistory()