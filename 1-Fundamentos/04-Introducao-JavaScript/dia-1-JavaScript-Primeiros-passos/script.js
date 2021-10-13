function q1 (operacao,a,b){

    switch (operacao){
        case 'adicao':
            operacao = a + b;
            return operacao;
        break;

        case 'subtracao':
            operacao = a - b;
            return operacao;
        break;

        case 'multiplicao':
            operacao = a * b;
            return operacao;
        break;

        case 'divisao':
            operacao = a / b;
            return operacao;
        break;

        case 'modulo':
            operacao = a % b;
            return operacao;
        break;

        default:
            return 'nenhuma operação válida digitada';
    }
}

function q2 (){

    const num1,num2;

    if (num1 > num2){

        return 'numero 1 é maior';
    }
    else if (num1 < num2){

        return 'numero 2 é maior';
    }

}

function q3 (){


    const num1, num2,num3;

    if (num1 > num2 && num1 > num3){
        return 'numero 1 é o maior';
    }
    else if (num2 > num1 && num2 > num3){

        return 'numero 2 é o maior';
    }
    else if (num3 > num1 && num3 > num2){

        return 'numero 3 é o maior';
    }

}

function q4 (){

    const num1;

    if (num1 > 0){
        return 'positive';
    }
    else if (num2 == 0){

        return 'zero';
    }
    else if (num3 < 0 ){

        return 'negative';
    }
}

function q5 (){

    const ang1,ang2,ang3;

    if ((ang1 > 0) && (ang2 > 0) && (ang3 > 0)){

        if (ang1 + ang2 + ang3 == 180){

            return true;
        }
        else {

            return false;
        }
    }
}

function q6 (peaceChess){

    
    switch (peaceChess.toLowerCase()){

        case 'tower':
            return 'only verticals';
        break;

        case 'horse':
            return 'walks in L';
        break;

        case 'bishop':
            return 'walks in diagonals';
        break;

        case 'queen':
            return 'walks in any direction except in L';
        break;

        case 'king':
            return 'walks in any direction except in L and limitation to one house';
        break;

        case 'peon':
            return 'walks to front';
        break;

        default:
            return 'choose invalid option';
    }
}

function q7 (){

    let porcentagem;

    if ( porcentagem >= 90){
        return 'A';
    }else if (porcentagem >=80 && porcentagem < 90){
        return 'B';
    }
    else if (porcentagem >= 70 && porcentagem < 80){
        return 'C';
    }else if (porcentagem >= 60 && porcentagem < 70){
        return 'D';
    }else if (porcentagem >= 50 && porcentagem < 60){
        return 'E';
    }else if (porcentagem < 50){
        return 'F';
    }else if ( porcentagem < 0 || porcentagem > 100){
        return 'error';
    }
}

function q8 (){

    const num1,num2,num3;

    if ( (num1 % 2 == 0)  || ( num2 % 2 == 0) || ( num3 % 2 == 0)){
        return true;
    }
    else{
        return false;
    }
}

function q9 (){

    const num1,num2,num3;

    if ((num1 % 2 != 0) || (num2 % 2 != 0) || (num3 % 2 != 0)){
        return true;
    }else {
        return false;
    }
}