// get a reference to the sms or call radio buttons
var billItemTypeRadio = document.querySelector(".billItemTypeRadio");
//get a reference to the add button
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
var callTotalTwo = document.querySelector(".callTotalTwo");
var smsTotalTwo = document.querySelector(".smsTotalTwo");
var TotalTwo = document.querySelector(".totalTwo");
//add an event listener for when the add button is pressed
var callBillTotal = 0;
var smsBillTotal = 0;
var totalBillTotal = 0;
//in the event listener get the value from the billItemTypeRadio radio buttons
var templateSource = document.querySelector(".userTemplate").innerHTML;
// compile the template
var userTemplate = Handlebars.compile(templateSource);
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen



function radioBillTotal() {

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItemEntered = checkedRadioBtn.value
            // billItemType will be 'call' or 'sms'

        // get the value entered in the billType textfield
        // var billItemEntered = billItemTypeRadio.value;
        var bill = billItemEntered.trim();
        // update the correct total
        if (bill === "call") {
            callBillTotal += 2.75;
            totalBillTotal += 2.75;
            // console.log(callTwo)
        } else if (bill === "sms") {
            smsBillTotal += 0.75;
            totalBillTotal += 0.75;
            // console.log(smsTwo)

        }
        // //color the total based on the criteria
        if (totalBillTotal >= 30 && totalBillTotal < 50) {
            // adding the danger class will make the text red
            TotalTwo.classList.add("warning");

        } else if (totalBillTotal >= 50) {
            TotalTwo.classList.add("danger");
            //totalBillTotal.classList.remove("danger");
        }
    }


    callTotalTwo.innerHTML = userTemplate({
        callTotal: callBillTotal.toFixed(2)
    })

    smsTotalTwo.innerHTML = userTemplate({
        smsTotal: smsBillTotal.toFixed(2)
    });
    TotalTwo.innerHTML = userTemplate({
        total: totalBillTotal.toFixed(2)
    });


}

radioBillAddBtn.addEventListener('click', radioBillTotal);
document.addEventListener('DOMContentLoaded', radioBillTotal)