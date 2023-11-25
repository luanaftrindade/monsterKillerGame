let chosenMaxLife = 100;
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 15;
const MONSTER_ATTACK_VALUE = 10;
const HEAL_VALUE = 14;

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;


function attackMonster(mode) {
    let maxDamage;
    if (mode === "ATTACK") {
        maxDamage = ATTACK_VALUE;
    } else if (mode === "STRONG_ATTACK_VALUE") {
        maxDamage = STRONG_ATTACK_VALUE;
    }

    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    endRound();
}


function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}


function endRound() {
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    
if(currentPlayerHealth <= 0 && hasBonusLife){

    hasBonusLife = false;
    removeBonusLife();
    reset();
    setPlayerHealth(initialPlayerHealth);
    alert("The bonus life save you.");
    
}

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("You won!");
     
    } else if (currentMonsterHealth > 0 && currentPlayerHealth <= 0) {
        alert("You lost!");
       
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert("It's a draw...");
      
    }

    if(currentMonsterHealth <= 0 || currentPlayerHealth <= 0){
        reset();
    }

}

function attackHandler() {
    attackMonster("ATTACK");

}

function strongAttackHandler() {
    attackMonster("STRONG_ATTACK_VALUE");

}

function healHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE){
        alert('You could not heal more than your max life!');
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    endRound();

}

function logHandler() {


}


attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healHandler);
logBtn.addEventListener('click', logHandler);