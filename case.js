function updateCaseNumber(isIncrease) {
  let caseNumberField = document.getElementById("case-input");
  let caseNumberValue = caseNumberField.value;
  let previousCaseNumber = Number(caseNumberValue);
  let newCaseNumber;
  if (isIncrease) {
    newCaseNumber = previousCaseNumber + 1;
  } else {
    newCaseNumber = previousCaseNumber - 1;
  }
  caseNumberField.value = newCaseNumber;
  return newCaseNumber;
}

function totalCasePrice(newCaseNumber) {
  let totalCasePrice = newCaseNumber * 59;

  let casePrice = document.getElementById("case-price");
  casePrice.innerText = totalCasePrice;
}


document.getElementById("case-plus").addEventListener("click", function () {
  let newCaseNumber = updateCaseNumber(true);
  totalCasePrice(newCaseNumber);
  subTotal()
 
});

document.getElementById("case-minus").addEventListener("click", function () {
  let newCaseNumber = updateCaseNumber(false);
  totalCasePrice(newCaseNumber);
subTotal()
});
