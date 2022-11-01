let valueId;
let turn = 'x';
let arrHum = [], arrMac = [], validar = [];
let player;

const possibleCombinations = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9], 
    [1, 4, 7], 
    [2, 5, 8], 
    [3, 6, 9], 
    [1, 5, 9], 
    [3, 5, 7]
    ];

let clickScreen = document.querySelectorAll('.cell');
function listening() {
    for(let i = 0; i<clickScreen.length; i++){
        clickScreen[i].addEventListener("click",function () {
            valueId = this.id;
            valueId = parseInt(valueId)
            if (turn === 'x') {
                humanPlayer();
            }else{
                machinePlayer();
            }

        });

    }
}

function humanPlayer() {
    turn = 'o';
    document.getElementById(`${valueId}`).innerHTML = "X";
    arrHum.push(valueId);
    arrHum.sort();
    console.log(arrHum)
    if(arrHum.length>2){
        validar = arrHum;
        player = 'el humano';
        validate();


    }
}
function machinePlayer() {
    turn = 'x';
    document.getElementById(`${valueId}`).innerHTML = "O";
    arrMac.push(valueId);
    arrMac.sort();
    console.log(arrMac)
    if(arrMac.length>2){
        validar = arrMac;
        player = 'la maquina';
        validate();

    }

}

function validate() {
    for(let j = 0; j<possibleCombinations.length; j++){
        if (validar[1] == possibleCombinations[j][1] && validar[2] == possibleCombinations[j][2] && validar[3] == possibleCombinations[j][3]) {
            console.log(`Gano ${player}`);        


            
        }
    }
    
}



listening();










