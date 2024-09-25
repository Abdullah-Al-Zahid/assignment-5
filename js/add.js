// collection for noakhali 

document.getElementById('noakhali-donation').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('noakhali-add-money')
    


    if(isNaN(addMoney)){
        alert('Failed to add money')
        return;
    }
    else{
        // const noakhaliCollection = document.getTextFieldValueById('noakhali-collection')
        const noakhaliCollection = parseFloat(document.getElementById('noakhali-collection').innerText);

        const noakhaliTotal = noakhaliCollection + addMoney

        document.getElementById('noakhali-collection').innerText = noakhaliTotal


    }
})



// collection for feni  

document.getElementById('feni-donation').addEventListener('click', function(event){
    event.preventDefault();

    const addMoneyFeni = getInputFieldValueById('feni-add-money')
    


    if(isNaN(addMoneyFeni)){
        alert('Failed to add money')
        return;
    }
    else{
        const feniCollection = parseFloat(document.getElementById('feni-collection').innerText);

        const feniTotal = feniCollection + addMoneyFeni

        document.getElementById('feni-collection').innerText = feniTotal

        
    }
})



// collection for bangladeshi quota movement in injured people

document.getElementById('quota-donation').addEventListener('click', function(event){
    event.preventDefault();

    const donateInjured = getInputFieldValueById('donate-for-injured')
    


    if(isNaN(donateInjured)){
        alert('Failed to add money')
        return;
    }
    else{
        const injuredCollection = parseFloat(document.getElementById('injured-collection').innerText);

        const quotaTotal = injuredCollection + donateInjured

        document.getElementById('injured-collection').innerText = quotaTotal


    }
})