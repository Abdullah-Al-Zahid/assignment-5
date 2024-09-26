function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value
    const inputNumber = parseFloat(inputValue)
    
    return inputNumber

}

function getFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}


function getSectionValueById(id){
  const donationValue = document.getElementById(id).innerText
  return donationValue;
}

window.onscroll = function () {
    const navbar = document.querySelector('.navbar');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };




// button switch side design 
function showSectionById(id){
  document.getElementById('home-container').classList.add('hidden');
  document.getElementById('history-container').classList.add('hidden');

  // show the section  with the provide id as parameter 
  document.getElementById(id).classList.remove('hidden')
   


  // button switch color
  
  document.getElementById('show-donation-form').classList.toggle('bg-lime-400', id === 'home-container');
  document.getElementById('show-donation-form').classList.toggle('bg-gray-300', id !== 'home-container');

  document.getElementById('show-history-form').classList.toggle('bg-lime-400', id === 'history-container');
  document.getElementById('show-history-form').classList.toggle('bg-gray-300', id !== 'history-container');
}





