function handleDonation(buttonId, inputId, CollectionId){
    document.getElementById(buttonId).addEventListener('click', function(event){
        event.preventDefault();


        const addMoney = getInputFieldValueById(inputId)
        const myBalance = getFieldValueById('account-balance')


        


        if (isNaN(addMoney) || typeof addMoney !== 'number') {
            alert('Failed to add money');
            return;
        }
        if(addMoney < 0){
            alert('It is a negative number')
            return;
        }

        if(addMoney > myBalance){
            alert('you do not have enough balance')
        }
        
        else {
            const myNewBalance = myBalance - addMoney
            document.getElementById('account-balance').innerText = myNewBalance;


            const collection = parseFloat(document.getElementById(CollectionId).innerText);
            const total = collection + addMoney;

            document.getElementById(CollectionId).innerText = total;
        }
    })
}



handleDonation('noakhali-donation', 'noakhali-add-money', 'noakhali-collection');
handleDonation('feni-donation', 'feni-add-money', 'feni-collection');
handleDonation('quota-donation', 'donate-for-injured', 'injured-collection');