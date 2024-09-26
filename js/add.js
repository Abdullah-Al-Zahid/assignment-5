function checkBalance() {
    
    const addMoney = getInputFieldValueById(inputId)
    const myBalance = getFieldValueById('account-balance')
    
    if (myBalance > addMoney) {
        document.getElementById("my_modal_4").showModal(); 
    } else {
        alert("Insufficient balance to donate."); 
    }
    
}