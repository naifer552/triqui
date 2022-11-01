let valueId, indexEliminar;
let arrHum = [], arrMac = [], validar = [];
let player, coincidentes = 0;
arrOriginal = [1,2,3,4,5,6,7,8,9];

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
            if (arrOriginal.includes(valueId)) {
                humanPlayer();
            }else if(arrOriginal.length>0){
                alert('Ingrese por favor un valor valido');
            }else{
                alert('El juego a terminado');
            }
        });
    }
}

function humanPlayer() {
    document.getElementById(`${valueId}`).innerHTML = "X";
    arrHum.push(valueId);
    arrHum.sort();
    indexEliminar = arrOriginal.indexOf(valueId)
    arrOriginal.splice(indexEliminar, 1);
    console.log(arrHum);
    console.log(arrOriginal);
    if(arrHum.length>2){
        validar = arrHum;
        player = 'el humano';
        validate();
    }
    if (arrOriginal.length>0) {
        setTimeout(() => {
            machinePlayer();
        }, 250);
    }

}
function machinePlayer() {
    valueId = arrOriginal[Math.floor(Math.random() * arrOriginal.length)];
    document.getElementById(`${valueId}`).innerHTML = "O";
    arrMac.push(valueId);
    arrMac.sort();
    indexEliminar = arrOriginal.indexOf(valueId)
    arrOriginal.splice(indexEliminar, 1);
    console.log(arrMac);
    console.log(arrOriginal);
    if(arrMac.length>2){
        validar = arrMac;
        player = 'la maquina';
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
                    setTimeout(() => {
                        alert(`Gano ${player}`);

                    }, 350);
                    arrOriginal = [];
                    reset();
                }
                if (coincidentes<2 && arrOriginal ==[]) {
                    reset();
                    
                }
            }
        }
    } 
}

function reset() {
    console.log('juego terminado');
    
}

listening();










