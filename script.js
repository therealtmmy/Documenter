let mainLead = [ ]
const inputEl = document.getElementById("input-el")
const inputBTN = document.getElementById("input-btn")
const UlEl = document.getElementById("Ul-El")

inputBTN.addEventListener("click", function () {
    mainLead.push(inputEl.value)
    inputEl.value = " "
    render() 
})

 function render() {
    let listItems = " "
    for (let i = 0; i < mainLead.length; i++){
       listItems += "<li>" + mainLead[i] + "</li>"
       UlEl.innerHTML = listItems
    }
}

