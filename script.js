let valueId;
let turn = 'x';
let arrHum = [], arrMac = [], validar = [];
let player, coincidentes = 0, ganador;
let victoriasH = 0, victoriasM = 0;

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
        ganador = 1;
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
        ganador = 0;
        validate();

    }

}

function validate() {
    
    for(let j = 0; j<possibleCombinations.length; j++){
        coincidentes = 0;
        for(let k = 0; k<validar.length;k++){
            if (validar[k] == possibleCombinations[j][0] || validar[k] == possibleCombinations[j][1] || validar[k] == possibleCombinations[j][2]) {
                coincidentes++;
                if (coincidentes>2) {
                    console.log(`Gano ${player}`);
                    if (ganador) {
                        victoriasH++;
                        document.getElementById(`marker-X`).innerHTML = victoriasH;
                    }else{
                        victoriasM++;
                        document.getElementById(`marker-O`).innerHTML = victoriasM;
                    }
                    arrHum = [];
                    arrMac = [];
                    


                    

                    
                }
            }
        }
    }
    
}

function reset() {
    for(let p = 1; p<10; p++){
        document.getElementById(`${p}`).innerHTML = "";
    }    
}


document.getElementById(`restart`).addEventListener("click", reset);
listening();










