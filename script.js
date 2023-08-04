function updateMobileNumber(isIncrease) {
  let mobileNumberField = document.getElementById("phone-input");
  let mobileNumberValue = mobileNumberField.value;
  let previousMobileNumber = Number(mobileNumberValue);
  let newMobileNumber;
  if(isIncrease){
    newMobileNumber=previousMobileNumber+1;
  }
  else{
    newMobileNumber=previousMobileNumber-1
  }
  mobileNumberField.value = newMobileNumber;
 return newMobileNumber;
}
function totalMobilePrice(newMobileNumber){
    let totalMobilePrice=newMobileNumber*2129;
  let mobilePrice=document.getElementById('phone-price');
  mobilePrice.innerText=totalMobilePrice;
}

document.getElementById("phone-plus").addEventListener("click", function () {
    let newMobileNumber =updateMobileNumber(true);
    totalMobilePrice(newMobileNumber)
    subTotal()
  
 
});

document.getElementById("phone-minus").addEventListener("click", function () {

  let newMobileNumber =updateMobileNumber(false);
  totalMobilePrice(newMobileNumber);
  subTotal()


  
});

