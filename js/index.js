// Get all button element
const calcButton = document.querySelectorAll('div.calculatorContainer > button');

const btnPress = (e) => {
    //console.log(e.target);
    const btnInput = e.target;
    console.log(btnInput.innerText);
    let parentEl = document.querySelector('.displayNum');
    parentEl.html='';
    btnInput.forEach(element => {
        //console.log(element);
        parentEl.appendChild(element);
    });
};

//Loop thru button element to call for addEventListender
for (let i = 0; i < calcButton.length; i++){
    //console.log(i); //Ensuring we are capturing buttons
    let buttonItems = calcButton[i]; //Ensure we see the html and not the number
    //console.log(buttonItems);
    buttonItems.addEventListener('click',btnPress);
};

