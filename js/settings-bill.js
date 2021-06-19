// get a reference to the sms or call radio buttons
var billItemTypeWithSettings1 = document.querySelector(".billItemTypeWithSettings")
var callCostSetting = document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");
// get refences to all the settings fields
var callTotalSettings = document.querySelector(".callTotalSettings");
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings");

//get a reference to the add button
var addRadioBtn = document.querySelector(".addRadioBtn");

//get a reference to the 'Update settings' button
var updateSettings1 = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var callCostSettingRef = 0;
var smsCostSettingRef = 0;
var warningLevelSettingRef = 0;
var criticalLevelSettingRef = 0;

// create a variables that will keep track of all three totals.
var callCost = 0;
var smsCost = 0;
var total1 = 0;

updateSettings1.addEventListener('click', function() {
    callCostSettingRef = Number(callCostSetting.value);
    smsCostSettingRef = Number(smsCostSetting.value);
    warningLevelSettingRef = warningLevelSetting.value;
    criticalLevelSettingRef = Number(criticalLevelSetting.value);

});
//fuction
function settingBill() {
    var radioReference = document.querySelector("input[name='billItemTypeWithSettings']:checked");

    if (radioReference) {
        if (total1 < criticalLevelSettingRef) {
            var billItem1 = radioReference.value

            if (billItem1 === "call") {
                callCost += callCostSettingRef;
                total1 += callCostSettingRef
            } else if (billItem1 === "sms") {
                smsCost += smsCostSettingRef;
                total1 += smsCostSettingRef;
            }
        }
    }

    total1 = callCost + smsCost;                                                                 

    callTotalSettings.innerHTML = callCost.toFixed(2);
    smsTotalSettings.innerHTML = smsCost.toFixed(2);
    totalSettings.innerHTML = total1.toFixed(2);
    color(total1);
    
}

addRadioBtn.addEventListener('click', settingBill);

function color() {
    if (total1 < warningLevelSettingRef) {
        totalSettings.classList.remove("danger")
        totalSettings.classList.remove("warning")
    } else if (total1 >= warningLevelSettingRef && total1 < criticalLevelSettingRef) {
        totalSettings.classList.remove("danger");
        totalSettings.classList.add("warning");
    } else if (total1 >= criticalLevelSettingRef) {
        totalSettings.classList.add("danger")
        totalSettings.classList.remove("warning")
    }
}


//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.