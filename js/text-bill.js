var billTypeText = document.querySelector(".billTypeText");
// get a reference to the textbox where the bill type is to be entered
var addToBillBtn = document.querySelector(".addToBillBtn");
//get a reference to the add button
var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne");
var TotalElem = document.querySelector(".totalOne");
//create a variable that will keep track of the total bill
var templateSource = document.querySelector(".userTemplate").innerHTML;

// compile the template
var userTemplate = Handlebars.compile(templateSource);


var sms = 0;
var call = 0;
var total = 0;

//add an event listener     for when the add button is pressed
function textBillTotal() {
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value;
    var bill = billTypeEntered.trim();
    // update the correct totarl
    if (bill === "call") {
        call += 2.75;
        total += 2.75;
        //console.log(call)
    } else if (bill === "sms") {
        sms += 0.75;
        total += 0.75;
        //console.log(sms)

    }

    // //color the total based on the criteria
    if (total >= 50) {
        // adding the danger class will make the text red

        TotalElem.classList.remove("warning");
        TotalElem.classList.add("danger");
    } else if (total >= 30) {
        TotalElem.classList.add("warning");
        TotalElem.classList.remove("danger");
    }

    //console.log(call)

    //return call, sms, total
    //update the totals that is displayed on the screen.
    // callsTotalElem.innerHTML = call.toFixed(2);
    // smsTotalElem.innerHTML = sms.toFixed(2);
    // TotalElem.innerHTML = total.toFixed(2);

    callsTotalElem.innerHTML = userTemplate({
        callTotal: call.toFixed(2)
    })

    smsTotalElem.innerHTML = userTemplate({
        smsTotal: sms.toFixed(2)
    });
    TotalElem.innerHTML = userTemplate({
        total: total.toFixed(2)
    });

    // get a reference to tableBody where users is to be displayed

}
addToBillBtn.addEventListener('click', textBillTotal);
document.addEventListener('DOMContentLoaded', textBillTotal)



//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen