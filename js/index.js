const output_operation_element = document.querySelector('.operation .value');
const output_result_element = document.querySelector('.results .value');
const input_element = document.querySelector('.input');



const calculator_buttons = [
   
    {
        name : 'delete',
        symbol : 'DEL',
        formula : false,
        type : 'key'
    },

    {
        name: 'clear',
        symbol : 'C',
        formula : false,
        type : 'key'
    },

    {
        name : 'percentage',
        symbol :  '%',
        formula : '/100',
        type : 'number'
    },

    {
        name : 'divide',
        symbol :  '/',
        formula : '/',
        type : 'operator'
    },

    {
        name : 7,
        symbol :  7,
        formula : 7,
        type : 'number'
    },

    {
        name : 8,
        symbol :  8,
        formula : 8,
        type : 'number'
    },

    {
        name : 9,
        symbol :  9,
        formula : 9,
        type : 'number'
    },

    {
        name : 'multiply',
        symbol :  'x',
        formula : '*',
        type : 'operator'
    },

    {
        name : 4,
        symbol :  4,
        formula : 4,
        type : 'number'
    },


    {
        name : 5,
        symbol :  5,
        formula : 5,
        type : 'number'
    },


    {
        name : 6,
        symbol :  6,
        formula : 6,
        type : 'number'
    },

    {
        name : 'add',
        symbol :  '+',
        formula : '+',
        type : 'operator'
    },

    {
        name : 1,
        symbol :  1,
        formula : 1,
        type : 'number'
    },

    {
        name : 2,
        symbol :  2,
        formula : 2,
        type : 'number'
    },

    {
        name : 3,
        symbol :  3,
        formula : 3,
        type : 'number'
    },

    {
        name : 'subtract',
        symbol :  '-',
        formula : '-',
        type : 'operator'
    },

    {
        name : 0,
        symbol :  0,
        formula : 0,
        type : 'number'
    },

    {
        name : 'decimal',
        symbol :  '.',
        formula : '.',
        type : 'number'
    },

    {
        name : 'equal',
        symbol : '=',
        formula : '=',
        type : 'equal'
    }

];

let data = {
    operation : [],
    result : []
}


function createCalcBtn(){
    const btns_per_row = 4;
    let added_btns = 0;
        calculator_buttons.forEach((button,index) => {
            if(added_btns % btns_per_row == 0){
            input_element.innerHTML += `<div class="row"></div>`;
        };

        const row = document.querySelector('.row:last-child');
            row.innerHTML += `<button id='${button.name}'>
                        ${button.symbol}
                        </button>`;
                added_btns++;
        });


};

createCalcBtn();

input_element.addEventListener('click', (e) =>{
    //console.log(e.target);

    const target_btn = e.target;
    calculator_buttons.forEach(button =>{
        if(button.name == target_btn.id){
            calculator(button);
        };
    });

});

function calculator(button){
    if(button.type === 'number'){
        data.operation.push(button.symbol);
        data.result.push(button.formula);
        console.log(data);
    }else if(button.type === 'operator'){
        data.operation.push(button.symbol);
        data.result.push(button.formula);
        console.log(data);
    }else if (button.type === 'key'){
        if(button.name === 'clear'){
            data.operation = [];
            data.result = [];
        }else if (button.name === 'delete'){
            data.operation.pop();
            data.result.pop();
            console.log(data);
        }      
        console.log(data);
    }
}