function handleDonation(buttonId, inputId, CollectionId, titleSec){
    document.getElementById(buttonId).addEventListener('click', function(event){
        event.preventDefault();


        const addMoney = getInputFieldValueById(inputId)
        const myBalance = getFieldValueById('account-balance')
        const donationValue = getSectionValueById(titleSec)




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
            
            document.getElementById('my_modal_4').showModal(); 
            const myNewBalance = myBalance - addMoney
            document.getElementById('account-balance').innerText = myNewBalance;

            // added an element to history section 
            const div = document.createElement('div')
            div.innerHTML = `
                    <div class="border border-gray-700 m-6 rounded-2xl p-6">
                    <h4 class="text-xl font-semibold">${addMoney} TK is Donated for ${donationValue}</h4>
                    ${new Date().toLocaleString("Gmt")}
                    </div>`; 


            document.getElementById('history-container').appendChild(div)


            const collection = parseFloat(document.getElementById(CollectionId).innerText);
            const total = collection + addMoney;

            document.getElementById(CollectionId).innerText = total;

            
        }
    })
}



handleDonation('noakhali-donation', 'noakhali-add-money', 'noakhali-collection','noakhali-sec');
handleDonation('feni-donation', 'feni-add-money', 'feni-collection','feni-sec');
handleDonation('quota-donation', 'donate-for-injured', 'injured-collection','quota-sec');




// blog button link
document.getElementById('blog-btn').addEventListener('click', function (){
    window.location.href = "menu.html"
})






