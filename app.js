const billAmt = document.querySelector('#bill-amt');
const cashPaid = document.querySelector("#cash-given");
const checkBtn = document.querySelector(".check-btn");
const output_text = document.querySelector(".output-text");
const table_definition = document.querySelectorAll(".noofnotes")
const returnAmt = document.querySelector(".return-amt-table")
const return_table = document.querySelector(".element-group")
const next_btn = document.querySelector(".next-btn");
var billAmount = 0;
var cashGiven = 0;
output_text.style.display = "none";
return_table.style.display = "none";
next_btn.addEventListener("click", () => {

    billAmount = Number(billAmt.value);

    if (billAmount > 0) {
        next_btn.style.display = "none"
        return_table.style.display = "block";
        output_text.style.display = "none";
    }
    else {
        showOutput("Bill amount cannot be zero or negative.","error");
    }

})
checkBtn.addEventListener("click", () => {
cashGiven = Number(cashPaid.value);
billAmount = Number(billAmt.value);
if(billAmount> 0 && cashGiven >0){

    if(billAmount<cashGiven){
        output_text.style.display = "none";
        var changeAmount = (cashGiven - billAmount);
        returnAmt.innerText = "Return Change - " + changeAmount;
        calculateNotes(changeAmount);
        

    }
    else if(billAmount == cashGiven){

        showOutput("Amount has been paid.","success");
        returnAmt.innerText = "Return Change - 0";
    }
    else{
        showOutput("Low on cash? We have some chores for you if you are interested.","error");
    }
}
else{

    showOutput("Bill amount and Cash amount cannot be zero or negative.","error");
}

})

function showOutput(message,status) {
    output_text.innerText = message;
    output_text.style.display = "block";
    if(status === "error"){

        
        output_text.style.color = "red"
       
    }
    else{
        output_text.style.color = "green"
        
       
        
    }
}

function calculateNotes(changeAmount) {

    var remainingNotes = 0;
    var noteCount = 0;
    var notes = [2000, 500, 100, 20, 10, 5, 1];
    for (var i = 0; i < notes.length; i++) {
        noteCount = Math.trunc(changeAmount / notes[i]);
        changeAmount = changeAmount % notes[i];
        table_definition[i].innerText = noteCount;
    }

}