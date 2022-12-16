

const charVal = document.getElementById('textarea');
const totalCount = document.getElementById('total-counter');
const remainingCount = document.getElementById('Remaining-counter');

// let char = 0;

const udpateCounter =() =>{
    userChar = charVal.value.length;

    // totalCount.innerHTML = userChar;
    totalCount.innerText = userChar;
    
    remainingCount.innerText = 150 - userChar;

};

charVal.addEventListener('keyup',() => udpateCounter());




























