const billAmt = document.querySelector('#bill-amt');
const cashPaid = document.querySelector("#cash-given");
const checkBtn = document.querySelector(".check-btn");
const error_text = document.querySelector(".error-text");
const table_definition = document.querySelectorAll(".noofnotes")
const returnAmt = document.querySelector(".return-amt-table")
const return_table = document.querySelector(".element-group")
const next_btn = document.querySelector(".next-btn");
var billAmount = 0;
var cashGiven = 0;
error_text.style.display = "none";
return_table.style.display = "none";
next_btn.addEventListener("click", () => {

    billAmount = Number(billAmt.value);

    if (billAmount > 0) {
        next_btn.style.display = "none"
        return_table.style.display = "block";
        error_text.style.display = "none";
    }
    else {
        showError("Invalid bill amount");
    }

})
checkBtn.addEventListener("click", function validateAmounts() {
    error_text.style.display = "none";
    cashGiven = Number(cashPaid.value);
    if (billAmount < cashGiven) {
        error_text.style.display = "none";
        var changeAmount = cashGiven - billAmount;
        returnAmt.innerText = "Return Change - " + changeAmount;
        calculateNotes(changeAmount);
    }
    else {
        console.log(billAmount)
        console.log(cashGiven)
        showError("Not enough cash, we have some chores for you if you are interested.");
    }
})

function showError(message) {
    error_text.innerText = message;
    error_text.style.display = "block";
}
function calculateNotes(changeAmount) {

    var remainingNotes = 0;
    var noteCount = 0;
    var notes = [2000, 500, 100, 20, 5, 1];
    for (var i = 0; i < notes.length; i++) {
        noteCount = Math.trunc(changeAmount / notes[i]);
        changeAmount = changeAmount % notes[i];
        table_definition[i].innerText = noteCount;
    }

}