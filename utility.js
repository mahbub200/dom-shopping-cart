function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
  }
  function subTotal(){
      let currentCaseTotal = getTextElementValueById("case-price");
    let phoneCaseTotal = getTextElementValueById("phone-price");
    let currentSubTotal = currentCaseTotal + phoneCaseTotal;
    const subTotal = document.getElementById("sub-total");
    console.log(subTotal);
    subTotal.innerText = currentSubTotal;

      // calculate tax
      const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
      const taxAmount = parseFloat(taxAmountString);
      setTextElementValueById('tax', taxAmount);
  
      const finalAmount = currentSubTotal + taxAmount;
      setTextElementValueById('total', finalAmount);
  }
  function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}
  