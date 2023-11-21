let chosenMaxLife = 100;
const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 10;

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

function attackHandler(){
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
        alert("You won!");
    } else if (currentMonsterHealth > 0 && currentPlayerHealth <= 0){
        alert("You lost!");
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0){
        alert("It's a draw...");
    }

}


attackBtn.addEventListener('click', attackHandler);